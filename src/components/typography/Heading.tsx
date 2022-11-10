//Modules
import styled, { css } from "styled-components";

type TSize = "sm" | "md" | "lg";
interface IHeading {
    size?: TSize;
    color?: string
};

export const Heading = styled.h2<IHeading>`
    margin:6px 0;
    ${({ size }) => {
        if (size == "sm") return css`font-size:16px;`;
        if (size == "md") return css`font-size:24px;`;
        if (size == "lg") return css`font-size:32px;`;
    }}
    ${({ color }) => css`color:${color}`}
`;