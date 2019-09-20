import { AuthUser } from './AuthUser';

export class AuthResponse {

    successful: string;
    message: string;
    user: AuthUser;
    userToken: string;

}