import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Menu from "@mui/icons-material/Menu";
import { ChevronLeft, Circle } from "@mui/icons-material";
import { Notifications } from "@mui/icons-material";
import MainListItems from "./SideBar";
import PieCharts, { LineCharts } from "./Chart";
import SystemUsers, { Programs, Channel } from "./Deposits";
import Headers from "./Header";
import { Card, TextField } from "@mui/material";
import ChannelList from "./Channels";
import ProgramList from "./Program";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const defaultTheme = createTheme();

export default function Dashboard(props) {
  const [open, setOpen] = React.useState(true);
  const [renderedComponent, setRenderedComponent] = React.useState("dashboard");
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="absolute"
          open={open}
          sx={{ backgroundColor: "#000222" }}
        >
          <Toolbar
            sx={{
              pr: "24px",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              T-Movie <Menu />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge color="secondary">
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge color="secondary">
                <Circle />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <Box
              component="img"
              src="logo.webp"
              alt="Your Image"
              sx={{
                maxWidth: "30%",
                height: "auto",
              }}
            />
            <b style={{ fontWeight: "bold", fontSize: 25 }}>T-Movie</b>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeft />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <MainListItems
              renderedComponent={renderedComponent}
              setRenderedComponent={setRenderedComponent}
            />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <br></br>
          <Container sx={{ display: "flex", p: 0 }}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: "auto",
              }}
              elevation={5}
            >
              <Headers />
              <br></br>
              {renderedComponent && renderedComponent === "dashboard" && (
                <React.Fragment>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4} lg={4}>
                      <Paper
                        sx={{
                          p: 2,
                          display: "flex",
                          flexDirection: "column",
                          height: 180,
                          right: 10,
                        }}
                        elevation={5}
                      >
                        <SystemUsers />
                      </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                      <Paper
                        sx={{
                          p: 2,
                          display: "flex",
                          flexDirection: "column",
                          height: 180,
                        }}
                        elevation={5}
                      >
                        <Programs />
                      </Paper>
                    </Grid>
                    <Grid item xs={12} md={3} lg={4}>
                      <Paper
                        sx={{
                          p: 2,
                          display: "flex",
                          flexDirection: "column",
                          height: 180,
                        }}
                        elevation={5}
                      >
                        <Channel />
                      </Paper>
                    </Grid>
                  </Grid>
                  <br></br>
                  <Grid container spacing={2}>
                    <Grid item xs={8} md={4} lg={9}>
                      <Card
                        sx={{
                          p: 2,
                          display: "flex",
                          flexDirection: "column",
                          height: 48,
                          width: 220,
                          backgroundColor: "#000222",
                          color: "white",
                        }}
                      >
                        <text>Program On Category</text>
                      </Card>
                      <Paper
                        sx={{
                          p: 2,
                          display: "flex",
                          flexDirection: "column",
                          height: 240,
                        }}
                        elevation={5}
                      >
                        <PieCharts />
                      </Paper>
                    </Grid>
                  </Grid>
                  <br></br>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4} lg={12}>
                      <Card
                        sx={{
                          p: 2,
                          display: "flex",
                          flexDirection: "column",
                          height: 48,
                          width: 220,
                          backgroundColor: "#000222",
                          color: "white",
                        }}
                      >
                        <text>Program With Type</text>
                      </Card>
                      <Paper
                        sx={{
                          p: 2,
                          display: "flex",
                          flexDirection: "column",
                          height: 240,
                        }}
                        elevation={5}
                      >
                        <LineCharts />
                      </Paper>
                    </Grid>
                  </Grid>
                </React.Fragment>
              )}
              {renderedComponent && renderedComponent === "channel" && (
                <React.Fragment>
                  <ChannelList />
                </React.Fragment>
              )}

              {renderedComponent && renderedComponent === "program" && (
                <React.Fragment>
                  <ProgramList />
                </React.Fragment>
              )}
            </Paper>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
