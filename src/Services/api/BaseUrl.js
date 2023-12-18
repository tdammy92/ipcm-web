// export const BaseUrl = process.env.REACT_APP_BASE_URL_LIVE;

export const BaseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_BASE_URL_DEMO
    : process.env.REACT_APP_BASE_URL_LIVE;
