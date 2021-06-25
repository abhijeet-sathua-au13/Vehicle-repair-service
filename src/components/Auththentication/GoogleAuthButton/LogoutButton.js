// import Menu from "@material-ui/core/Menu";
// import  MenuItem  from "@material-ui/core/MenuItem";
// import { GoogleLogout } from "react-google-login";
// import googleConfig from "../../../config/google.json";


// const LogoutButton = (props) => {

//     const { anchorEl, handleMenuClose, menuId, isMenuOpen } = props

//     const onProfileClick = () => {

//     }

//     const onLogout = () => {

//     }

//     return(
//         <Menu
//             anchorEl={anchorEl}
//             anchorOrigin={{ vertical: "top", horizontal: "right" }}
//             id={menuId}
//             keepMounted
//             transformOrigin={{ vertical: "top", horizontal: "right" }}
//             open={isMenuOpen}
//             onClose={handleMenuClose}
//         >
//             <MenuItem onClick={onProfileClick}>Profile</MenuItem>
//             <GoogleLogout
//                 clientId={googleConfig.clientId}
//                 buttonText="Logout"
//                 onLogoutSuccess={onLogout}
//                 render={(renderProps) => (
//                 <MenuItem  
//                     onClick={renderProps.onClick}
//                     disabled={renderProps.disabled}
//                 >Logout</MenuItem>
//             )}
//           />
//         </Menu>
//     )
// }

// export default LogoutButton;