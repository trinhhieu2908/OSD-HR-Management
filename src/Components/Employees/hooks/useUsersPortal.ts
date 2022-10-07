import { useQuery, UseQueryResult } from "react-query";
import { useDispatch } from "react-redux";
import { User } from "../../../models/user";
import { employeeKeys, employeesApi } from "../api";

export const useUsersPortal = (params: any): UseQueryResult<{ data: User[] }> => {
    const dispatch = useDispatch();
    return useQuery(
        employeeKeys.list(params),
        async () => {
            const response = await employeesApi.getUsersPortal();
            console.log(response)
            // dispatch action here
            return response.data
        }
    )
}