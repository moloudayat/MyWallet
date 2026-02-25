export interface GenerateSHARequest {
  operation?: string;
  payload?: Record<string, unknown>;
}

export interface GenerateSHAResponse {
  id: string;
  hash: string;
  operation: string;
  timestamp: string;
  payload: Record<string, unknown>;
}

export interface AuditLog {
  id: string;
  hash: string;
  operation: string;
  timestamp: string;
  payload?: Record<string, unknown>;
}

export interface AuditLogsResponse {
  count: number;
  logs: AuditLog[];
}

export interface GenerateQRCodeRequest {
  did?: string;
  email?: string;
  fullName?: string;
  data?: string;
}

export interface GenerateQRCodeResponse {
  id: string;
  qrValue: string;
  qrImageUrl: string;
  createdAt: string;
  expiresAt: string;
}
