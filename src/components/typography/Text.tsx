//Modules
import styled, { css } from "styled-components";

export const Text = styled.p<{ color?: string }>`
    margin:4px 0;
    ${({ color }) => css`color:${color}`}
`;