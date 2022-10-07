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

export type UserCreateRequestPayload = {
    username: string;
    password: string;
    role: string;
    email: string;
    fullName: string;
}

export enum UserRole {
    EMPLOYEE = 'Employee',
    TEAM_LEAD = 'Team Lead',
    ADMIN_HR = 'Admin HR',
    ACCOUNTANT = 'Accountant',
    ADMIN_SYSTEM = 'Admin System'
}