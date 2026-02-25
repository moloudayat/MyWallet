# Mock Backend

## Run

```bash
npm install
npm run mock:server
```

Server runs on `http://localhost:4000` (or `PORT` / `MOCK_SERVER_PORT`).

## Endpoints

### `POST /api/auth/login`

Mock auth endpoint that returns access + refresh tokens.

Request body:

```json
{
  "email": "user@example.com",
  "password": "123456"
}
```

Response shape:

```json
{
  "token": "jwt-access-token",
  "refreshToken": "jwt-refresh-token",
  "tokenType": "Bearer",
  "expiresIn": 3600,
  "user": {
    "id": "uuid",
    "fullName": "Random User",
    "email": "user@example.com"
  }
}
```

### `POST /api/register`

Receives signup info + image references, returns generated DID, auto-generated password, VC, and audit record.

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

Response includes:
- `did`
- `password`
- `vc`
- `audit`
- `uploadedImages`

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

### `POST /api/wallet/qrcode`

Generates a QR payload + QR image URL.

Request body:

```json
{
  "did": "did:example:123",
  "email": "user@example.com",
  "fullName": "Ali Rezaei"
}
```

Or send a direct payload:

```json
{
  "data": "custom-payload-string"
}
```

Validation:
- returns `400` if both `did` and `data` are missing.

Response shape:

```json
{
  "id": "uuid",
  "qrValue": "string",
  "qrImageUrl": "https://api.qrserver.com/...",
  "createdAt": "2026-02-25T12:00:00.000Z",
  "expiresAt": "2026-03-04T12:00:00.000Z"
}
```

### `POST /wallet/qrcode`

Alias of `/api/wallet/qrcode` (same behavior).

### `GET /api/health`

Simple health check.
