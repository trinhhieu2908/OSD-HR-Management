import { RootState } from "../../../Configs/configureStore";
import { Employee } from "../../../models/authenticate";


const isUserAuthenticated = (state: RootState): boolean => state?.authentication?.isAuthenticated;

const getCurrentUser = (state: RootState): Employee => state.authentication?.user;

export const authenticationSelectors = { isUserAuthenticated, getCurrentUser };