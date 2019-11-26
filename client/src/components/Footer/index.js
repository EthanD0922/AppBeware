// Import React
// =========================================================
   import React from 'react';
// Import Material UI Styles
// =========================================================
   import { makeStyles } from '@material-ui/core/styles';
// Import Material UI Components
// =========================================================
   import { CssBaseline, Typography, Container, Link} from '@material-ui/core/';

// Styles
// =========================================================
    const useStyles = makeStyles(theme => ({
      root: {
        display: 'flex',
        flexDirection: 'column',
      },
      main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
      },
      footer: {
        color: "#f7f7f7",
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor: "#56585D",
      },
    }));

    function Copyright() {
      return (
        <Typography variant="body2">
          {' © '}
          <Link color="inherit" href="http://appbeware.com/">
            AppBeware
          </Link>{' 2019 | '}
          
          <Link color="inherit" href="../TermsConditions">
              Disclaimer
          </Link>
          {' | Sign Out'}
        </Typography>
      );
    }

// Export StickyFooter
// =========================================================
  export default function StickyFooter() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <CssBaseline />
          <footer className={classes.footer}>
          <Container align="center" maxWidth="sm">
          
            <Copyright />
          </Container>
        </footer>
      </div>
    );
  }
