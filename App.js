import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";

import { store } from "./redux/store/store";
import AppRouter from "./routers/AppRouter";

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default function App() {
  return jsx;
}
