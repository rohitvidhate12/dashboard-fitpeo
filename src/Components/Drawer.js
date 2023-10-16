import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Card, Grid } from "@mui/material";
import ChartBar from "./BarChart";
import PieChart from "./PieChart";
import TableData from "./TableData";

const drawerWidth = 240;

const CardData = [
  {
    name: "Earning",
    amount: "199",
    growth: "37.8",
    logo: "fa-solid fa-sack-dollar",
    inc: "fa-solid fa-arrow-up",
    iconColor: "green",
  },
  {
    name: "Orders",
    amount: "2.4",
    growth: "2",
    logo: "fa-solid fa-sheet-plastic",
    inc: "fa-solid fa-arrow-down",
    iconColor: "purple",
  },
  {
    name: "Balance",
    amount: "2.4",
    growth: "2",
    logo: "fa-solid fa-wallet",
    inc: "fa-solid fa-arrow-down",
    iconColor: "blue",
  },
  {
    name: "Total Sale",
    amount: "89",
    growth: "11",
    logo: "fa-solid fa-bag-shopping",
    inc: "fa-solid fa-arrow-up",
    iconColor: "red",
  },
];

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <h2>Dashboard</h2>
      <List>
        {[
          "Dashboard",
          "Product",
          "Customers ",
          "Income",
          "Promote",
          "Help",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: { sm: "none" } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          backgroundColor: "#eeece7",
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box
          sx={{
            marginTop: { sm: "-80px" },
          }}
        >
          <h2 style={{ textAlign: "left" }}>
            Hello Shahrukh <i class="fa-solid fa-hand-peace"></i>
          </h2>
          <Grid
            container
            style={{ display: "flex", justifyContent: "space-between" }}
            spacing={2}
          >
            {CardData.map(
              ({ name, amount, growth, logo, inc, iconColor }, i) => (
                <Grid item xs={12} md={3} mb={2}>
                  <Card sx={{ padding: 2 }}>
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          height: "80px",
                          width: "80px",
                          backgroundColor: "#c4e2cd",
                          borderRadius: "40px",
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <i
                            style={{ fontSize: "40px", color: iconColor }}
                            class={logo}
                          ></i>
                        </div>
                      </div>
                      <div style={{ padding: "10px" }}>
                        <p className="card">{name}</p>
                        <h3 className="card"> $ {amount}K</h3>
                        <p className="card">
                          <i class={inc}></i>
                          <span></span> {growth} % this month
                        </p>
                      </div>
                    </div>
                  </Card>
                </Grid>
              )
            )}
          </Grid>
          <Grid
            container
            sx={{ mt: 5, display: "flex", justifyContent: "space-between" }}
          >
            <Grid item xs={12} md={7} mb={2}>
              <ChartBar />
            </Grid>

            <Grid item xs={12} md={4} mb={2}>
              <PieChart />
            </Grid>
          </Grid>
          <Grid container my={2}>
            <Grid item xs={12}>
              <TableData />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
