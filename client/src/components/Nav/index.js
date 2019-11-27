
// Import React
// =========================================================
    import {BrowserRouter as Router, Link,
} from 'react-router-dom';
    import React from 'react'; 
// Import Material UI Styles
// =========================================================
    import { fade, makeStyles } from '@material-ui/core/styles';
// Import Material UI components
// =========================================================
    import {AppBar, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Menu } from '@material-ui/core';
// Import Material UI Icons
// =========================================================
    // import SearchIcon from '@material-ui/icons/Search';
    import Dashboard from '@material-ui/icons/Dashboard';
    // import AccountCircle from '@material-ui/icons/AccountCircle';
    import NotificationsIcon from '@material-ui/icons/Notifications';
    import MoreIcon from '@material-ui/icons/MoreVert';
// Components
// =========================================================
  import Modal from "../Modals";
  import AboutTheShields from "../AboutTheShields";
import API from '../../utils/API';

// Custom Styles
// =========================================================
  const useStyles = makeStyles(theme => ({
      nav: {
      background: "#56585D"
      },
      grow: {
          flexGrow: 1,
      },
      menuButton: {
          marginRight: theme.spacing(2),
      },
      title: {
          display: 'none',
          [theme.breakpoints.up('sm')]: {
          display: 'block',
          color:'#fff'
          },
      },
      search: {
          position: 'relative',
          borderRadius: theme.shape.borderRadius,
          backgroundColor: fade(theme.palette.common.white, 0.15),
          '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
          },
          marginRight: theme.spacing(2),
          marginLeft: 0,
          width: '100%',
          [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
          },
      },
      searchIcon: {
          width: theme.spacing(7),
          height: '100%',
          position: 'absolute',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
      },
      inputRoot: {
          color: 'inherit',
      },
      inputInput: {
          padding: theme.spacing(2, 1, 1, 7),
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
          //   width: 200,
          },
      },
      sectionDesktop: {
          display: 'none',
          [theme.breakpoints.up('md')]: {
          display: 'flex',
          },
      },
      sectionMobile: {
          display: 'flex',
          [theme.breakpoints.up('md')]: {
          display: 'none',
          },
      },
      alert: {
      //    borderRadius
      }, 
  }));

export default function Nav() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleSignOut = () => {
    API.signOut()
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
     <MenuItem onClick={handleMenuClose} style={{ borderBottom: "1px solid grey", paddingBottom: "10px", marginLeft: "10px", marginRight: "10px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      <h3>Jane Doe</h3> 
      <div style={{ backgroundColor: "grey", height: 36, width: 36, borderRadius: "50%" }}/>
     </MenuItem>
     <MenuItem onClick={handleMenuClose}>
      <Link to="/ProfilePage" style={{ textDecoration: 'none' }}>
        Profile
      </Link>
     </MenuItem>
     <MenuItem onClick={handleMenuClose}>
        <Badge className={classes.alert} badgeContent={17} color="secondary">
            Alerts
        </Badge>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Modal
            modalTitle="What are the Shields?"
            openModal="About The Shields"
            modalBody={<AboutTheShields/>}
            modalButton1="Close"
        />
      </MenuItem>
      <MenuItem onClick={handleSignOut}> 
        Sign Out
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
       <MenuItem onClick={handleMenuClose} style={{ borderBottom: "1px solid grey", paddingBottom: "10px", marginLeft: "10px", marginRight: "10px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      <h3>Jane Doe</h3> 
      <div style={{ backgroundColor: "grey", height: 36, width: 36, borderRadius: "50%" }}/>
     </MenuItem>
     <MenuItem onClick={handleMenuClose}>
      Profile
     </MenuItem>
     <MenuItem onClick={handleMenuClose}>
        <Badge className={classes.alert} badgeContent={17} color="secondary">
            Alerts
        </Badge>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Modal
          modalTitle="What are the Shields?"
          openModal="About The Shields"
          modalBody={<AboutTheShields/>}
          modalButton1="Close"
        />
      </MenuItem>
      <MenuItem onClick={handleSignOut}> 
        Sign Out
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.nav} position="static">
        <Toolbar>
          
          <Typography className={classes.title} variant="h6" noWrap>            
            <Link className={classes.title} style={{ textDecoration: 'none' }} to='/Homepage' >
              AppBeware
              </Link>
          </Typography>

   

          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase style={{ paddingLeft: "50px" }}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Dashboard  />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
