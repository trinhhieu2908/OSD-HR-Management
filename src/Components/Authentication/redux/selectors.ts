import { RootState } from "../../../Configs/configureStore";
import { User } from "../../../models/user";


const isUserAuthenticated = (state: RootState): boolean => state?.authentication?.isAuthenticated;

const getCurrentUser = (state: RootState): User => state.authentication?.user;

export const authenticationSelectors = { isUserAuthenticated, getCurrentUser };