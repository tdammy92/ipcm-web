import React from "react";
import { Provider } from "react-redux";
import store from "./Store/Store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/partials/Loader";
import Root from "./Root";

const defualtTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#01996D",
      // main: "#f44336",
    },
    secondary: {
      main: "#fff",
      light: "#Eeefff",
    },
    error: {
      main: "#f44336",
      // light: "#e57373",
      // dark: "#d32f2f",
    },
  },
});

let persist = persistStore(store);
const queryClient = new QueryClient()



function App() {
  AOS.init();




  return (

  <Provider store={store}>
  <QueryClientProvider client={queryClient}>
    <PersistGate loading={null} persistor={persist}>
    <ThemeProvider theme={defualtTheme}>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* <Loader /> */}
      <Root />
    </ThemeProvider>
    </PersistGate>
  </QueryClientProvider>
</Provider>
  );
}

export default App;
