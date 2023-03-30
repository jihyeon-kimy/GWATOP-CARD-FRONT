import { css } from "styled-components";

interface flexBoxProps {
  direction?: "row" | "column";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItem?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
}

export const flexBox = (obj: flexBoxProps) => css`
  display: flex;
  flex-direction: ${obj?.direction ?? "row"};
  justify-content: ${obj?.justify ?? "center"};
  align-items: ${obj?.alignItem ?? "center"};
`;

export const posCenterX = (type: string = "absolute") => css`
  position: ${type};
  left: 50%;
  transform: translateX(-50%);
`;

export const posCenterY = (type: string = "absolute") => css`
  position: ${type};
  top: 50%;
  transform: translateY(-50%);
`;

export const posCenterCenter = (type: string = "absolute") => css`
  position: ${type};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
