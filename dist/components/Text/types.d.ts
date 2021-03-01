import { SpaceProps, TypographyProps } from "styled-system";
export declare const positions: {
    readonly TP: "top";
    readonly BTM: "bottom";
};
export declare type Positions = typeof positions[keyof typeof positions];
export interface TextProps extends SpaceProps, TypographyProps {
    color?: string;
    fontSize?: string;
    bold?: boolean;
    small?: boolean;
    textTransform?: "uppercase" | "lowercase" | "capitalize";
    pos?: Positions;
}
