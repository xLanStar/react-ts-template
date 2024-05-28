import { ThemeConfig, theme } from "antd";
import { ColorPrimary } from "./color";

const Theme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: ColorPrimary,
  },
};

export default Theme;
