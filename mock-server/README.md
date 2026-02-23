# Mock Backend

## Run

```bash
npm install
npm run mock:server
```

Server runs on `http://localhost:4000` (or `PORT` / `MOCK_SERVER_PORT`).

## Endpoints

### `POST /api/auth/login`

Mock auth endpoint that returns JWT.

Request body:

```json
{
  "email": "user@example.com",
  "password": "123456"
}
```

### `POST /api/register`

Receives signup info + image references, returns generated DID + VC.

Request body:

```json
{
  "fullName": "Moloud Ayat",
  "email": "moloud.ayat@gmail.com",
  "passportImage": {
    "fileName": "passport.jpg",
    "uri": "file:///path/passport.jpg"
  },
  "selfieImage": {
    "fileName": "selfie.jpg",
    "uri": "file:///path/selfie.jpg"
  }
}
```

`passportImage` / `selfieImage` can also be simple strings (file name or URI).

### `POST /api/audit/hash`

Generates SHA-256 hash for an issuance operation (or any operation).

Request body:

```json
{
  "operation": "ISSUE_CREDENTIAL",
  "payload": {
    "did": "did:example:123",
    "vcId": "urn:uuid:abc"
  }
}
```

### `GET /api/audit/logs`

Returns in-memory hashed audit records.

### `GET /api/health`

Simple health check.
