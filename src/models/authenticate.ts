export interface Employee {
    userId: string;
    fullName: string;
    jobTitle: string;
    email: string;
    phoneNumber?: string;
    skype?: string;
    avatar?: string;
    role: string;
    isActive: boolean;
}

export interface AuthenticationState {
    isLoading: boolean;
    user?: Employee;
    isAuthenticated: boolean;
}