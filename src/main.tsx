import { App as AntdApp, ConfigProvider } from "antd";
import zhTW from "antd/locale/zh_TW";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import Theme from "./data/theme.ts";
import store from "./store.ts";

import "dayjs/locale/zh-tw";

import "antd/dist/reset.css";
import { BrowserRouter } from "react-router-dom";
import "./assets/scss/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider locale={zhTW} theme={Theme}>
    <AntdApp>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </AntdApp>
  </ConfigProvider>
);
