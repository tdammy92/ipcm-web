import React from "react";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { FaRegUserCircle } from "react-icons/fa";
import List from "@material-ui/core/List";
import UseStyles from "./Styling";
import { useRouteMatch } from "react-router-dom";
import {
  Container,
  Box,
  IconButton,
  Hidden,
  Toolbar,
  Typography,
  Link,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import NavBarData from "./NavData";
import ImgeUrl from "../../../assets/images/IGPCM_NewLogo.png";
import { useSelector } from "react-redux";

const SideNav = () => {
  let { path, url } = useRouteMatch();
  const classes = UseStyles();
  const data = NavBarData();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const defaultState = -1;
  const [itemId, setActiveItemId] = React.useState(defaultState);
  const user = useSelector((state) => state.users);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const DrawerData = (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Box component="div" className={classes.logo}>
        <Container className={classes.listItemContainer}>
          <IconButton classes={{ root: classes.listItemIcon }}>
            <div className="Logo">
              <img src={ImgeUrl} alt="ipcm logo" />
            </div>
          </IconButton>
        </Container>
      </Box>
      <Box component="div" className={classes.navBarItems}>
        <List>
          {data.menuItems.map((listItem, index) => {
            const IconTag = data.components[listItem.icon];
            return (
        
                <ListItem
                  button
                  to={`${url}${listItem.link}`} key={listItem.title}
                  component={Link}
                  classes={{ root: classes.listItem }}
                  onMouseOver={() => setActiveItemId(index)}
                  onMouseOut={() => setActiveItemId(defaultState)}
                >
                  <Container className={classes.listItemContainer}>
                    <ListItemIcon
                      className={itemId === index ? classes.hide : classes.show}
                      classes={{ root: classes.listItemIcon }}
                    >
                      {<IconTag size={35} />}
                    </ListItemIcon>
                    <Typography
                      className={`${classes.listItemTitle} ${
                        itemId === index ? classes.show : classes.hide
                      }`}
                    >
                      {listItem.title}
                    </Typography>
                  </Container>
                </ListItem>
       
            );
          })}
        </List>
      </Box>
      <Box component="div" className={classes.navBarFooter}>
        <IconButton classes={{ root: classes.listItemIcon }}>
          <FaRegUserCircle />
        </IconButton>
        <Typography className={`${classes.listItemTitle}`}>
          {user?.details?.username?.toUpperCase()}
        </Typography>
      </Box>
    </Drawer>
  );

  return (
    <div>
      <Hidden smUp implementation="css">
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Hidden>

      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {DrawerData}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {DrawerData}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default SideNav;
