import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import store from "./Store/Store";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import Root from "./Navigation";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import 'react-loading-skeleton/dist/skeleton.css'
import { isDev } from "./utils";


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
const queryClient = new QueryClient({
  defaultOptions: {queries: {retry: 3, retryDelay: 500}},
});

function App() {

  AOS.init();

  return (
    <Provider store={store}>
  <QueryClientProvider client={queryClient}>
    <PersistGate loading={null} persistor={persist}>
    <ThemeProvider theme={defualtTheme}>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover

      />
      <Root />
    </ThemeProvider>
    </PersistGate>
    <ReactQueryDevtools initialIsOpen={isDev} />
  </QueryClientProvider>
</Provider>
  );
}

export default App;
