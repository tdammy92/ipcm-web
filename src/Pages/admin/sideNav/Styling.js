import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { drawerWidth, logoHeight, drawerHeight } from "../../../constants";

const UseStyles = makeStyles((theme) => {
  let primaryColor = theme?.palette?.primary?.main;
  let deviceHeight = window?.screen?.height;


  console.log("device height",deviceHeight)
  console.log("1/3",deviceHeight*0.6)

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
      // [theme.breakpoints.up("sm")]: {
      //   width: `calc(100% - ${drawerWidth}px)`,
      //   marginLeft: drawerWidth,
      //   // backgroundColor: "red",
      // },
      // backgroundColor: "yellow",
      // backgroundColor: "transparent",
      boxShadow: "none",
      height: "3rem",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        // backgroundColor: "pink",
      },

      backgroundColor:'pink',
    },
    drawerPaper: {
      // marginTop:`${60}px`,
      // height:`calc(100% - ${60}px)`,
      // borderTop:`${1}px`,
      width: drawerWidth,
      //   borderColor:'red'

      // backgroundColor:'red',
    },
    listItem: {
      padding: 0,
      height: "3.4rem",
      paddingLeft: 15,
    },
    listItemTitle: {
      color: primaryColor,
      fontSize: "1rem",
      //   textAlign: "left",
      paddingLeft: 4,
      textDecoration: "none",
    },

    username: {
      color: primaryColor,
      fontSize: "0.8rem",
      paddingLeft: 4,
      textDecoration: "none",
    },
    ItemIcon: {
      //   minWidth: "fit-content",
      alignItems: "center",
      justifyContent: "center",
    },
    listItemIcon: {
      //   minWidth: "fit-content",
      color: primaryColor,
    },
    listItemCount: {
      justifySelf: "end",
      marginLeft: 20,
    },
    listItemContainer: {
      //   width: "fit-content",
      marginTop: 10,
      marginBottom: 10,
      padding: 0,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      // backgroundColor:'blue'
    },
    logo: {
      height: logoHeight,
    },
    menuIcon: {
      color: primaryColor,
    },

    navBarItems: {

      [theme.breakpoints.down("sm")]: {
        // width: drawerWidth,
        // backgroundColor: "pink",
        // height: `calc(65% - ${logoHeight}px)`,
        // maxHeight: deviceHeight*0.5,
        height: deviceHeight*0.50,
        overflow: 'auto',
        // backgroundColor:'yellow'
      },
      marginTop:35,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      // backgroundColor:'pink'
    },
    actionWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems:'center',
      gap:10,
      marginTop:10
    },
    navBarFooter: {
      //   height: `calc(90% - ${logoHeight}px)`,
      [theme.breakpoints.down("sm")]: {
        // width: drawerWidth,
        // backgroundColor: "pink",
        // height: `calc(65% - ${logoHeight}px)`,
 
        bottom: 20,
      },
      position: "absolute",
      bottom: 50,
      right: 0,
      left: 0,
      textAlign: "center",
    },
  });
});

export default UseStyles;
