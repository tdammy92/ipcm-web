import React, { useMemo } from "react";
import Drawer from "@material-ui/core/Drawer";
import Badge from "@material-ui/core/Badge";
import ListItem from "@material-ui/core/ListItem";
import { FaRegUserCircle } from "react-icons/fa";
import List from "@material-ui/core/List";
import UseStyles from "./Styling";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from '@material-ui/icons/Home';
import { useRouteMatch, useHistory, Link } from "react-router-dom";
import {
  Container,
  Box,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import NavBarData from "./NavData";
import ImgeUrl from "../../../assets/images/IGPCM_NewLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { useCounts } from "../../../Services/queries/user-query";
import { LogOutUser } from "../../../Store/feature";
import { ROLES } from "../../../constants";

const SideNav = ({ mobileOpen, handleDrawerToggle }) => {
  let { url } = useRouteMatch();
  let history = useHistory();
  const { data: Counts } = useCounts();
  const classes = UseStyles();
  const data = NavBarData();

  const defaultState = -1;
  const [itemId, setActiveItemId] = React.useState(defaultState);
  const user = useSelector((state) => state.users);
  const role = user?.details?.role;

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(LogOutUser());
    history.replace("/");
  };
  const handleGotoHome = () => {
    history.replace("/");
  };

  const accessNav = useMemo(() => {
    let newNav;

    if (role === ROLES.SUPER_ADMIN) {
      newNav = data?.menuItems;
    } else if (role === ROLES.ADMIN) {
      newNav = data?.menuItems?.filter((nav) => {
        return (
          nav.title !== "Exams" &&
          nav?.title !== "Exam Upload" &&
          nav?.title !== "Students Result"
        );
      });
    } else {
      newNav = [];
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
                onClick={handleDrawerToggle}
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

        <Box className={`${classes.actionWrapper}`}>
          <Button
            size="small"
          variant="outlined"
            color="primary"
            onClick={handleGotoHome}
            startIcon={<HomeIcon />}
          >
          Go to home
          </Button>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={handleLogout}
            startIcon={<ExitToAppIcon />}
          >
            LogOut
          </Button>
        </Box>
      </Box>
    </Drawer>
  );

  return (
    <div>
      <nav className={classes.drawer}>
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
      </nav>
    </div>
  );
};

export default SideNav;
