import getUsersPortal from './getUsersPortal';

export const employeeKeys = {
    all: ['employees'] as const,
    details: () => [...employeeKeys.all, 'detail'] as const,
    detail: (id?: string) => [...employeeKeys.details(), id] as const,
    lists: () => [...employeeKeys.all, 'list'] as const,
    list: (params: any) =>
        [...employeeKeys.lists(), { params }] as const,
}

export const employeesApi = {
    getUsersPortal
};