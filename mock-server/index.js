const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { faker } = require('@faker-js/faker');

const app = express();
const port = Number(process.env.MOCK_SERVER_PORT || process.env.PORT || 4000);
const jwtSecret = process.env.JWT_SECRET || 'mock-wallet-secret';

app.use(cors());
app.use(express.json({ limit: '10mb' }));

const auditLogs = [];

function normalizePayload(payload) {
  if (Array.isArray(payload)) {
    return payload.map(normalizePayload);
  }

  if (payload && typeof payload === 'object') {
    return Object.keys(payload)
      .sort()
      .reduce((acc, key) => {
        acc[key] = normalizePayload(payload[key]);
        return acc;
      }, {});
  }

  return payload;
}

function hashSha256(payload) {
  const normalized = normalizePayload(payload);
  return crypto
    .createHash('sha256')
    .update(JSON.stringify(normalized))
    .digest('hex');
}

function mapImageInput(imageInput) {
  if (!imageInput) {
    return null;
  }

  if (typeof imageInput === 'string') {
    return {
      fileName: imageInput,
      uri: imageInput,
    };
  }

  return {
    fileName:
      imageInput.fileName || imageInput.name || `upload-${faker.string.alphanumeric(8)}.jpg`,
    uri: imageInput.uri || imageInput.path || imageInput.fileName || imageInput.name,
  };
}

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'mywallet-mock-backend',
    now: new Date().toISOString(),
  });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({
      message: 'email and password are required',
    });
  }

  const user = {
    id: faker.string.uuid(),
    fullName: faker.person.fullName(),
    email,
  };

  const token = jwt.sign(
    {
      sub: user.id,
      email: user.email,
      role: 'holder',
    },
    jwtSecret,
    { expiresIn: '1h' },
  );

  return res.json({
    token,
    tokenType: 'Bearer',
    expiresIn: 3600,
    user,
  });
});

app.post('/api/register', (req, res) => {
  const { fullName, name, email, passportImage, selfieImage } = req.body || {};
  const resolvedName = fullName || name;

  if (!resolvedName || !email) {
    return res.status(400).json({
      message: 'fullName (or name) and email are required',
    });
  }

  const passport = mapImageInput(passportImage);
  const selfie = mapImageInput(selfieImage);

  if (!passport || !selfie) {
    return res.status(400).json({
      message: 'passportImage and selfieImage are required',
    });
  }

  const did = `did:example:${faker.string.uuid()}`;
  const vcId = `urn:uuid:${faker.string.uuid()}`;

  const vc = {
    '@context': ['https://www.w3.org/2018/credentials/v1'],
    id: vcId,
    type: ['VerifiableCredential', 'KYCIdentityCredential'],
    issuer: `did:example:${faker.string.uuid()}`,
    issuanceDate: new Date().toISOString(),
    expirationDate: faker.date.soon({ days: 365 }).toISOString(),
    credentialSubject: {
      id: did,
      fullName: resolvedName,
      email,
      passportNumber: faker.string.alphanumeric({ length: 9, casing: 'upper' }),
      countryCode: faker.location.countryCode('alpha-2'),
      verificationStatus: 'verified',
    },
    evidence: {
      passportFile: passport.fileName,
      selfieFile: selfie.fileName,
      reviewedAt: new Date().toISOString(),
    },
    proof: {
      type: 'Ed25519Signature2020',
      created: new Date().toISOString(),
      proofPurpose: 'assertionMethod',
      verificationMethod: `did:example:${faker.string.uuid()}#key-1`,
      jws: faker.string.alphanumeric(96),
    },
  };

  const issuancePayload = {
    operation: 'ISSUE_CREDENTIAL',
    did,
    vcId,
    issuedAt: vc.issuanceDate,
  };

  const issuanceHash = hashSha256(issuancePayload);
  const auditRecord = {
    id: faker.string.uuid(),
    hash: issuanceHash,
    operation: issuancePayload.operation,
    timestamp: new Date().toISOString(),
    payload: issuancePayload,
  };

  auditLogs.unshift(auditRecord);

  return res.status(201).json({
    did,
    vc,
    audit: auditRecord,
    uploadedImages: {
      passport: passport,
      selfie,
    },
  });
});

app.post('/api/audit/hash', (req, res) => {
  const { operation = 'ISSUE_CREDENTIAL', payload = {} } = req.body || {};

  const basePayload = {
    operation,
    ...payload,
    requestedAt: new Date().toISOString(),
  };

  const hash = hashSha256(basePayload);
  const record = {
    id: faker.string.uuid(),
    hash,
    operation,
    timestamp: new Date().toISOString(),
    payload: basePayload,
  };

  auditLogs.unshift(record);

  return res.status(201).json(record);
});

app.get('/api/audit/logs', (req, res) => {
  return res.json({
    count: auditLogs.length,
    logs: auditLogs,
  });
});

app.listen(port, () => {
  console.log(`Mock backend running on http://localhost:${port}`);
});
