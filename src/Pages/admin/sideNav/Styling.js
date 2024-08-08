import { makeStyles, Theme, createStyles } from "@material-ui/core";

const drawerWidth = 95;
const drawerHeight = '90%';
  const primaryColor = '#01996d'


const logoHeight = 30;


const UseStyles = makeStyles((theme) =>
  createStyles({
    hide: {
      display: "none"
    },
    show: {
      display: "block"
    },
    root: {
      display: "flex"
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        backgroundColor: "red",
      },
      backgroundColor: "yellow",
    //   backgroundColor: "transparent",
      boxShadow: "none"
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        backgroundColor:'pink',
        
    },
    
    // backgroundColor:'pink',

},
drawerPaper: {
        // marginTop:`${60}px`,
        // height:`calc(100% - ${60}px)`,
        // borderTop:`${1}px`,
      width: drawerWidth,
    //   borderColor:'red'

    },
    listItem: {
      padding: 0,
      height: "5rem"
    },
    listItemTitle: {
      color: primaryColor,
      fontSize: "0.8rem",
      textAlign: "center",
      textDecoration:'none',

    },
    listItemIcon: {
      minWidth: "fit-content",
      color: primaryColor
    },
    listItemContainer: {
      width: "fit-content",
      marginTop: 10,
      marginBottom: 10,
      padding: 0
    },
    logo: {
      height: logoHeight
    },
    menuIcon: {
      color: primaryColor
    },
    
    navBarItems: {
      height: `calc(65% - ${logoHeight}px)`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },
    navBarFooter: {
    //   height: `calc(90% - ${logoHeight}px)`,
    // position:'absolute',
    // bottom:20,
    textAlign:'center',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  })
);

export default UseStyles;