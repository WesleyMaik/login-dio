import styled, { css } from "styled-components";

interface ILinkProps {
    color?: string
}

export const Link = styled.a<ILinkProps>`
    ${({ color }) => css`
        color:${color};
    `}
`;