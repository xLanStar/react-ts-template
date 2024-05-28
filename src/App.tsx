import { Flex, Spin, theme } from "antd";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./data/router";

const App: React.FunctionComponent = () => {
  const { token } = theme.useToken();

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      style={{
        backgroundColor: token.colorBgBase,
      }}
    >
      {isReady ? (
        <RouterProvider router={router} />
      ) : (
        <Flex align="center" justify="center" style={{ minHeight: "100vh" }}>
          <Spin />
        </Flex>
      )}
    </div>
  );
};

export default App;
