import { SpaceProps, TypographyProps } from "styled-system";


export const positions = {
  TP: "top",
  BTM: "bottom"
} as const;


export declare type Positions = typeof positions[keyof typeof positions];

export interface TextProps extends SpaceProps, TypographyProps {
  color?: string;
  fontSize?: string;
  bold?: boolean;
  small?: boolean;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  pos?: Positions;
}
