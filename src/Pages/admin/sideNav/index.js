import React, { useMemo } from "react";
import Drawer from "@material-ui/core/Drawer";
import Badge from "@material-ui/core/Badge";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { FaRegUserCircle } from "react-icons/fa";
import List from "@material-ui/core/List";
import UseStyles from "./Styling";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useRouteMatch, useHistory, Link } from "react-router-dom";
import {
  Container,
  Box,
  IconButton,
  Hidden,
  Toolbar,
  Typography,
  ButtonBase,
  Button,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import NavBarData from "./NavData";
import ImgeUrl from "../../../assets/images/IGPCM_NewLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { useCounts } from "../../../Services/queries/user-query";
import { LogOutUser } from "../../../Store/feature";
import { ROLES } from "../../../constants";

const SideNav = () => {
  let { url } = useRouteMatch();
  let history = useHistory();
  const { data: Counts } = useCounts();
  const classes = UseStyles();
  const data = NavBarData();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const defaultState = -1;
  const [itemId, setActiveItemId] = React.useState(defaultState);
  const user = useSelector((state) => state.users);
  const role = user?.details?.role;

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(LogOutUser());
    history.replace("/");
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const accessNav = useMemo(() => {
    let newNav;

    if (role === ROLES.SUPER_ADMIN) {
      newNav = data?.menuItems;
    } else if (role === ROLES.ADMIN) {
      newNav = data?.menuItems?.filter((nav) =>{
        return nav.title !=='Exams' && nav?.title !== 'Exam Upload' && nav?.title !== 'Students Result'
      });
    }else{
      newNav = []
    }

    return newNav;
  }, [user?.details?.role]);

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
          <IconButton classes={{ root: classes.ItemIcon }}>
            <div className="Logo">
              <img src={ImgeUrl} alt="ipcm logo" />
            </div>
          </IconButton>
        </Container>
      </Box>
      <Box component="div" className={classes.navBarItems}>
        <List>
          {accessNav?.map((listItem, index) => {
            const IconTag = data.components[listItem.icon];
            return (
              <ListItem
                button
                to={`${url}${listItem.link}`}
                key={listItem.title}
                component={Link}
                classes={{ root: classes.listItem }}
                onMouseOver={() => setActiveItemId(index)}
                onMouseOut={() => setActiveItemId(defaultState)}
              >
                {<IconTag size={25} color="#01996d" />}

                <Typography className={`${classes.listItemTitle}`}>
                  {listItem.title}
                </Typography>
                <Box className={`${classes.listItemCount}`}>
                  <Badge
                    badgeContent={Counts?.[listItem.title]}
                    size=""
                    color="primary"
                    max={3000}
                  >
                    <Box />
                  </Badge>
                </Box>
              </ListItem>
            );
          })}
        </List>
      </Box>
      <Box component="div" className={classes.navBarFooter}>
        <IconButton classes={{ root: classes.listItemIcon }}>
          <FaRegUserCircle />
        </IconButton>
        <Typography className={`${classes.username}`} cursor-pointer>
          {user?.details?.username?.toUpperCase()}
        </Typography>
        <Typography className={`${classes.username}`} cursor-pointer>
          {user?.details?.role}
        </Typography>


        <Button  size="small" variant="contained" color="primary"  onClick={handleLogout} startIcon={<ExitToAppIcon />}>
          LogOut
        </Button>
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
