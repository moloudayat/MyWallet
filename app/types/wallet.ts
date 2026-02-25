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
