import { Layout as AntdLayout, theme } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = AntdLayout;

const Layout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <AntdLayout
      style={{
        height: "100vh",
      }}
    >
      <Header style={{ display: "flex", alignItems: "center" }}>Header</Header>
      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Footer</Footer>
    </AntdLayout>
  );
};

export default Layout;
