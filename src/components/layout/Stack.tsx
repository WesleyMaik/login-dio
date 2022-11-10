//Modules
import styled, { css, CSSObject } from "styled-components";

interface IStackProps {
    flexDirection?: CSSObject['flexDirection'];
    justifyContent?: CSSObject['justifyContent'];
    alignItems?: CSSObject['alignItems']
    gap?: CSSObject['gap'];
    margin?: CSSObject['margin'];
    padding?: CSSObject['padding']
};

export const Stack = styled.div<IStackProps>`
    display:flex;
    ${({ flexDirection, justifyContent, alignItems, gap, margin, padding }) => css`
        flex-direction:${flexDirection};
        justify-content:${justifyContent};
        align-items:${alignItems};
        gap:${gap};
        margin:${margin};
        padding:${padding};
    `}
`;