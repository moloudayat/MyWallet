import { call } from '../apiCall';
// Types
import type {
  LoginRequest,
  LoginResponse,
  RegisterAndLoginResponse,
  RegisterParams,
  RegisterRequest,
  RegisterResponse,
} from 'app/types/user';

export function mapRegisterParamsToRequest(
  payload: RegisterParams,
): RegisterRequest {
  return {
    fullName: payload.fullName,
    email: payload.email,
    passportImage: {
      fileName: 'passport.jpg',
      uri: payload.passportPhoto,
    },
    selfieImage: {
      fileName: 'selfie.jpg',
      uri: payload.selfiePhoto,
    },
  };
}

/**
 * signUp - Register a new user and receive their DID, password, and VC.
 *
 * @param RegisterRequest body
 * @returns RegisterResponse
 * @throws ApiError
 * @async
 * @version 1.0.0
 */
export async function signUp(body: RegisterRequest) {
  return call<RegisterResponse, RegisterRequest>({
    url: '/api/register',
    method: 'POST',
    body,
  });
}

/**
 * login - Authenticate a user with their email and password to receive JWT tokens.
 *
 * @param LoginRequest body
 * @returns LoginResponse
 * @throws ApiError
 * @async
 * @version 1.0.0
 */
export async function login(body: LoginRequest) {
  return call<LoginResponse, LoginRequest>({
    url: '/api/auth/login',
    method: 'POST',
    body,
  });
}

/**
 * signUpAndLogin - Combines the registration and login processes. Registers a new user and then logs them in to retrieve their tokens.
 *
 * @param RegisterParams payload
 * @returns RegisterAndLoginResponse
 * @throws ApiError
 * @async
 * @version 1.0.0
 */
export async function signUpAndLogin(
  payload: RegisterParams,
): Promise<RegisterAndLoginResponse> {
  const registerData = await signUp(mapRegisterParamsToRequest(payload));
  const loginData = await login({
    email: registerData.vc?.credentialSubject?.email ?? payload.email,
    password: registerData.password,
  });

  return {
    ...registerData,
    token: loginData.token,
    refreshToken: loginData.refreshToken,
  };
}
