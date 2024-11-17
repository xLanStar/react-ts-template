import "@/assets/scss/index.scss";
// import "dayjs/locale/zh-tw";

import { App as AntdApp, ConfigProvider } from "antd";
import zhTW from "antd/locale/zh_TW";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Theme from "./data/theme.ts";
import store from "./store.ts";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
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
}
