import { useQuery, UseQueryResult } from "react-query";
import { useDispatch } from "react-redux";
import { User } from "../../../models/user";
import { authenticationApi } from "../api";
import { actions as authActions } from "../redux/slice";

export const useDecodeToken = (jwtToken: string): UseQueryResult<User> => {
    const dispatch = useDispatch();
    return useQuery(
        ['decodeToken', jwtToken],
        async () => {
            const response = await authenticationApi.decodeToken(jwtToken);
            dispatch(authActions.setAuthenticated(true));
            return response.data
        },
        {
            onError: () => {
                dispatch(authActions.setAuthenticated(false))
            }
        }
    )
}