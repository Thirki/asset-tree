/* eslint-disable @typescript-eslint/no-unused-vars */
import type { CSSProp } from "styled-components";
import { defaultTheme } from "../styles/themes";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

declare module "react" {
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}
