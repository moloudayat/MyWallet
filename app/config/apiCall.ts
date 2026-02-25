import { API_BASE_URL } from '@env';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface ApiCallOptions<TBody = unknown> {
  url: string;
  method?: HttpMethod;
  body?: TBody;
  headers?: Record<string, string>;
}

interface ErrorPayload {
  message?: string;
}

function safeParseJson(body: string) {
  if (!body) {
    return null;
  }

  try {
    return JSON.parse(body);
  } catch {
    return null;
  }
}

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

function buildRequestUrl(baseUrl: string, path: string) {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedBase = baseUrl.replace(/\/+$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // Prevent accidental "/api/api/..." when base URL already ends with "/api".
  if (normalizedBase.endsWith('/api') && normalizedPath.startsWith('/api/')) {
    return `${normalizedBase}${normalizedPath.slice(4)}`;
  }

  return `${normalizedBase}${normalizedPath}`;
}

export async function call<TResponse = unknown, TBody = unknown>({
  url,
  method = 'GET',
  body,
  headers,
}: ApiCallOptions<TBody>): Promise<TResponse> {
  const requestHeaders: Record<string, string> = {
    ...(headers ?? {}),
  };

  const config: RequestInit = {
    method,
    headers: requestHeaders,
  };

  if (body !== undefined) {
    requestHeaders['Content-Type'] = requestHeaders['Content-Type'] ?? 'application/json';
    config.body = JSON.stringify(body);
  }

  const response = await fetch(buildRequestUrl(API_BASE_URL, url), config);
  const responseText = await response.text();
  const parsedData = safeParseJson(responseText) as TResponse | ErrorPayload | null;

  if (!response.ok) {
    throw new ApiError(
      (parsedData as ErrorPayload | null)?.message ??
        `Request failed (${response.status})`,
      response.status,
    );
  }

  return parsedData as TResponse;
}
