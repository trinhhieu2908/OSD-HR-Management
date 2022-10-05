export type LoginRequestPayload = {
    username: string;
    password: string;
};

export interface User {
    userId: string;
    fullName: string;
    avatar?: string;
    role: string;
    isActive: boolean;
    jobTitle: string;
    email: string;
    phoneNumber?: string;
    skype?: string;
}