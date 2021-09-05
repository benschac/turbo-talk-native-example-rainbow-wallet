import { Layout } from "./Layout.component";
import { styled, Size, css } from "../theme";

export type CircleProps = { circleSize: number };

export const baseCircleStyle = css<CircleProps>`
  border-radius: ${({ circleSize }) => circleSize / 2}px;
  width: ${({ circleSize }) => circleSize}px;
  height: ${({ circleSize }) => circleSize}px;
  overflow: hidden;
`;

export const Circle = styled(Layout.Column)<CircleProps>`
  ${baseCircleStyle}
`;
