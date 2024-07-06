import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';


function ResponsiveAppBar() {
  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const userData = localStorage.getItem("userData");
    console.log("kaif", userData);

    if (userData === null) {
      alert("fill all the below fields before move to second page")
      navigate("/");
      return;
    }

    navigate("/json");
  }
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
            <NavLink to="/json" onClick={handleClick}>
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