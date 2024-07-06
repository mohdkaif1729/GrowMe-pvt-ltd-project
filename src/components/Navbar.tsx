import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';


function ResponsiveAppBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
          <NavLink to="/">
            <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              > 
                Home
              </Button>
            </NavLink>
            <NavLink to="/json">
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >  
                Json
              </Button>
            </NavLink>
            <NavLink to="/third">
              <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Third
              </Button>
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;


// const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };












// import React from 'react'
// import { NavLink, useNavigate } from 'react-router-dom'

// const Navbar: React.FC = () => {
//   const navigate = useNavigate();
//   const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
//     e.preventDefault();
//     const userData = localStorage.getItem("userData");
//     console.log("kaif", userData);
    
//     if (userData === null) {
//       alert("fill all fields before move to second page")
//       navigate("/");
//       return;
//     }

//     navigate("/json");
//   }
//   return (
//     <div>
//       <ul>
//         <li>
//           <NavLink to="/">
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/json" onClick={handleClick}>
//             Json
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/third">
//             Third
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   )
// }

// export default Navbar