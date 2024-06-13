import { theme } from "antd";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

const App: React.FunctionComponent = () => {
  const { token } = theme.useToken();

  return (
    <div
      style={{
        backgroundColor: token.colorBgLayout,
        height: "100vh",
      }}
    >
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<>Main</>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
