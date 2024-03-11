import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useSelector } from "react-redux";

const pages = [
{id:1,name:"Log In",link:"sign_in"},
{id:2,name:"Sign Up",link:"sign_up"}
];


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '25ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));



const Navbar = (props) => {
  // for buttons inside navbar
  const [navlinks, setNavLinks] = React.useState(pages);
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  // check is user role 
   const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated)
   const isAdmin = useSelector((state)=>state.auth.isAdmin)


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>

              {/* -------------------- Shooping logo and name - START ----------------------*/}

    <AppBar position="static" style={{ zIndex: 100 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters style={{zIndex:100}}>
            <ShoppingCartIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              upGrad Eshop
            </Typography>

          {/* -------------------- Shooping logo and name - ENDS ----------------------*/}
              



           {/* -------------------- Search feild in navbar - STARTS --------------------- */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "flex-start" },
              }}
            >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
            </Search>
            </Box>
             {/* -------------------- Search feild in navbar - ENDS --------------------- */}



            {/* ------------------ Responsive Navbar - START -------------------  */}

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

             {/*------------------ Content inside toggle button - START ----------- */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
            </Search>
                
                 {isAuthenticated && (
                  <>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Home</Typography>
                    </MenuItem>
                    {isAdmin && (
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">Add Products</Typography>
                      </MenuItem>
                    )}
                  </>
                )}

                {pages.map((page) => (
                  <MenuItem key={page.id} onClick={handleCloseNavMenu} href={page.link}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}

              </Menu>
              {/*------------------ Content inside toggle button - ENDS ----------- */}
            </Box>
             {/* ------------------ Responsive Navbar - ENDS -------------------  */}




             {/* ------------------- Medium and large screen navbar - START ---------------- */}

            <ShoppingCartIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              upGrad Eshop
            </Typography>
            
            {/* ------------ Conditional redering of buttons for ADMIN and USER - START --------- */}

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "flex-end" },
              }}
            >
              {isAuthenticated ? (
                <>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      mx: 1,
                      color: "white",
                      display: "block",
                    }}
                    variant="text"
                  >
                    Home
                  </Button>

                  {isAdmin && (
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        mx: 1,
                        color: "white",
                        display: "block",
                        border: "1px solid white",
                      }}
                      variant="outlined"
                    >
                      Add Products
                    </Button>
                  )}
                 
                  <Button
                    onClick={handleCloseNavMenu}
                    href="/Sign_out"
                    sx={{
                      my: 2,
                      mx: 1,
                      color: "white",
                      display: "block",
                      border: "1px solid white",
                    }}
                    variant="outlined"
                  >
                    Log Out
                  </Button>
                  
                </>
              ) : (
                navlinks.map((page) => (
               
                     <Button
                     href={page.link}
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      mx: 1,
                      color: "white",
                      display: "block",
                      border: "1px solid white",
                    }}
                    variant="outlined"
                  >
                    {page.name}
                  </Button>
                 
    
                ))
              )}
              {/* ------------ Conditional redering of buttons for ADMIN and USER - ENDS --------- */}
            </Box>
            {/* ------------------- Medium and large screen navbar - ENDS ---------------- */}
          </Toolbar>
        </Container>
      </AppBar>
      
    </>
  );
};

export default Navbar;
