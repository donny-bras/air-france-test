import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography, styled } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Favorites',
    to: '/favorites',
  },
];

const StyledLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  wordWrap: 'nowrap',
});

const StyledLogo = styled(Typography)(({theme}) => ({
  marginRight: theme.spacing(3),
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'white',
  textDecoration: 'none'
}));

const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

  return (
    <AppBar position="static" component="nav">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
            <Menu
              id="menu-appbar"
              keepMounted
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {navLinks.map(({ label, to }) => (
                <MenuItem key={label} onClick={handleCloseNavMenu}>
                  <StyledLink to={to}>
                    <Typography textAlign="center" color="black">
                      {label}
                    </Typography>
                  </StyledLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <StyledLink
            to="/"
            sx={{ flexGrow: { xs: '1', md: '0' } }}
          >
            <AdbIcon
              sx={{
                mr: 1,
                color: 'white',
              }}
            />
            <StyledLogo variant="h5">LOGO</StyledLogo>
          </StyledLink>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navLinks.map(({ label, to }) => (
              <StyledLink key={label} to={to}>
                <Typography p={1} color="white" variant="h6">
                  {label}
                </Typography>
              </StyledLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
 
export default Header;