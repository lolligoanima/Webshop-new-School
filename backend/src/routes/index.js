import { signInRoute } from "./signInRoute";
import { signUpRoute } from "./signUpRoute";
import { testAuthRoute } from "../protectedRoutes/testAuthRoute";

export const routes = [signUpRoute, signInRoute, testAuthRoute];
