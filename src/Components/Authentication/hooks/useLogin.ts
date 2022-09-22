import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { LoginRequestPayload } from "../../../models/user";
import { setAccessToken } from "../../../Utils/token-config";
import { errorMessage, successMessage } from "../../Commons/Toast/Toast";
import { authenticateApi } from "../api";
import { actions as authActions } from "../redux/slice";

export const useLogin = () => {
    const dispatch = useDispatch();
    return useMutation(
        (user: LoginRequestPayload) => {
            return authenticateApi.login(user);
        },
        {
            onSuccess: (response) => {
                console.log(response);
                dispatch(authActions.setAuthenticated(true));
                setAccessToken(response.data.token);
                successMessage({ successMessage: "Login successful!" });
            },
            onError: (err: Error) => {
                errorMessage({ errorMessage: "Login Fail" });
            }
        }
    )
}