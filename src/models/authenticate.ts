import { User } from "./user";

export interface AuthenticationState {
    isLoading: boolean;
    user?: User;
    isAuthenticated: boolean;
}