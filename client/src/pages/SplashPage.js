// Import React 
// =========================================================
  import React from "react";
// Components
// =========================================================
   import Wrapper from "../components/Wrapper"
   import SignIn from "../components/SignIn"
//    import SignUp from "../components/SignUp"
// Import Material UI components 
// =========================================================
   import { makeStyles } from '@material-ui/core/styles';
   import { Paper, Grid, Button, Popover, Typography } from '@material-ui/core';
// Assets
// =========================================================
    import GoogleImage from "../assets/images/btn_google_signin_light_normal_web@2x.png"

// Custom Styles 
// =========================================================
const useStyles = makeStyles(theme => ({
      paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: "white",
        height: "70vh", 
        background: "grey",
        margin: 8
      },
      title: {
          borderBottom: "2px solid white", 
          paddingBottom: 10,
      },
    sButtons: {
        width: 250, 
        height: 50, 
        backgroundColor: "#F7F7F7", 
        margin: 10
    },
    typography: {
        padding: theme.spacing(2),
      },
}));

function SplashPage() {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const signIn = open ? 'simple-popover' : undefined;
    const id = open ? 'simple-popover' : undefined;

  

return (
    <Wrapper style={{ minHeight: "100vh", maxWidth: "1200px", display: "flex"}}>
    <Grid container spacing={8}>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
        <h1 className={classes.title}>AppBeware</h1>
        <h3 className={classes.about}>Welcome to AppBeware!</h3>
        <Grid item md={12}>
            <Button 
            className={classes.sButtons}
            aria-describedby={signIn} 
            variant="contained" 
            onClick={handleClick}
            >
                Sign In
            </Button>
            <Popover
                id={signIn}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
                }}
            >
                <SignIn className={classes.typography}/>
            </Popover>
        </Grid>
        {/* <Grid item md={12}>
            <Button 
                className={classes.sButtons}
                aria-describedby={id} 
                variant="contained" 
                onClick={handleClick}
                >
                    Sign Up
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                >
                    <SignUp className={classes.typography}/>
                </Popover>
            </Grid> */}
        <h3 className={classes.or}>OR</h3>
        <a><img className={classes.sButtons} style={{ backgroundColor: "transparent", height: 60}} alt="Google Sign In Button" src={ GoogleImage }/></a>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>Right Side</Paper>
      </Grid>
    </Grid>
  </Wrapper>
)

}

export default SplashPage
// className={classes.gridColumns}