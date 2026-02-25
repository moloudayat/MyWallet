export interface RegisterParams {
  fullName: string;
  email: string;
  passportPhoto: string;
  selfiePhoto: string;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  passportImage: {
    fileName: string;
    uri: string;
  };
  selfieImage: {
    fileName: string;
    uri: string;
  };
}

export interface RegisterResponse {
  did: string;
  password: string;
  vc: {
    credentialSubject?: {
      fullName?: string;
      email?: string;
      verificationStatus?: string;
    };
  };
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
}

export interface RegisterAndLoginResponse extends RegisterResponse {
  token: string;
  refreshToken: string;
}
