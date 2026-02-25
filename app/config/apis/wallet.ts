import { call } from '../apiCall';
// Types
import type {
  AuditLogsResponse,
  GenerateQRCodeRequest,
  GenerateQRCodeResponse,
  GenerateSHARequest,
  GenerateSHAResponse,
} from 'app/types/wallet';

/**
 * generateSHA - Generate a SHA hash for audit purposes.
 *
 * @param GenerateSHARequest body
 * @returns GenerateSHAResponse
 * @throws ApiError
 * @async
 * @version 1.0.0
 */
export async function generateSHA(body: GenerateSHARequest) {
  return call<GenerateSHAResponse, GenerateSHARequest>({
    url: '/api/audit/hash',
    method: 'POST',
    body,
  });
}

/**
 * getAuditLogs - Retrieve audit logs.
 *
 * @returns AuditLogsResponse
 * @throws ApiError
 * @async
 * @version 1.0.0
 */
export async function getAuditLogs() {
  return call<AuditLogsResponse>({
    url: '/api/audit/logs',
  });
}

/**
 * generateQRCode - Generate a QR code for wallet information.
 *
 * @param GenerateQRCodeRequest body
 * @returns GenerateQRCodeResponse
 * @throws ApiError
 * @async
 * @version 1.0.0
 */
export async function generateQRCode(body: GenerateQRCodeRequest) {
  return call<GenerateQRCodeResponse, GenerateQRCodeRequest>({
    url: '/api/wallet/qrcode',
    method: 'POST',
    body,
  });
}
