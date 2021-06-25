import PATHS from "../config/webPath";
import Home from "../containers/Home/Home";
import UserAuthLogin from "../containers/UserAuth/UserAuthLogin";
import UserAuthSignup from "../containers/UserAuth/UserAuthSignup";
import MechanicAuthSignup from '../containers/MechanicAuth/MechanicAuthSignup';
import MechanicAuthLogin from "../containers/MechanicAuth/MechanicAuthLogin";


const routes = [
    {exact: true, path: PATHS.HOME, component: Home},
    {exact: true, path: PATHS.USER_LOGIN, component: UserAuthLogin},
    {exact: true, path: PATHS.USER_SIGNUP, component: UserAuthSignup},
    {exact: true, path: PATHS.MECHANIC_LOGIN, component: MechanicAuthLogin},
    {exact: true, path: PATHS.MECHANIC_SIGNUP, component: MechanicAuthSignup},
]


export default routes;