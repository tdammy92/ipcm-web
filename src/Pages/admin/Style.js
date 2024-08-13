import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { drawerWidth, logoHeight, drawerHeight } from "../../constants";

const UseStyles = makeStyles((theme) => {
  let primaryColor = theme?.palette?.primary?.main;
  return createStyles({
    hide: {
      display: "none",
    },
    show: {
      display: "block",
    },
    root: {
      display: "flex",
    },
    appBar: {
      boxShadow: "none",
      height:"3rem",
      justifyContent:'center'
    },
    pageContainer: {
marginTop:"5.5rem"
    },
    menuIcon: {
      color: "#fff",
      height:16,
      width:16
    },

  });
});

export default UseStyles;
