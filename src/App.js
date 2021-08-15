import { AppBar, Container, IconButton, Toolbar, Typography, Box, Paper, Grid, Card, CardMedia, CardContent, CardActions, BottomNavigation, BottomNavigationAction } from "@material-ui/core";

import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MenuIcon from "@material-ui/icons/Menu";
import LayerIcon from "@material-ui/icons/Layers";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import Button from "@material-ui/core/Button";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  mainFeaturesPost: {
    position: "reletive",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  mainFeaturesPostContent: {
    position: "reletive",
    padding: theme.spacing(6),
    marginTop: theme.spacing(8),
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexContent: 1,
  },
  cardGrid: {
    marginTop: theme.spacing(4),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <AppBar position="fixed">
        <Container>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              React site M-UI
            </Typography>
            <Box mr={3}>
              <Button color="inherit" variant="outlined">
                {" "}
                Log in
              </Button>
            </Box>
            <Button color="secondary" variant="contained">
              {" "}
              Sing in
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Paper className={classes.mainFeaturesPost} style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}>
          <Container fixed>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Web Developer
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, reprehenderit aliquid ipsam eum optio quam illum cumque, facere autem consequatur dolor assumenda iusto quas in!
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              React site title
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, reprehenderit aliquid ipsam eum optio quam illum cumque.Lorem ipsum, dolor sit amet consectetur.
            </Typography>
            <div className={classes.mainButtons}>
              <Grid container spacing={5} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Start Now
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Learn more
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="Image title" />
                  <CardContent className={classes.CardContent}>
                    <Typography variant="h5" gutterBottom>
                      Blog post
                    </Typography>
                    <Typography> Lorem ipsum, dolor sit amet consectetur.</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>

                    <LayerIcon />
                    <PlayCircleFilledIcon />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
          <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
        <Typography variant="subtitle1" align="center" component="p" color="textSecondary">
          React js Material UI site
        </Typography>
      </footer>
    </>
  );
}

export default App;
