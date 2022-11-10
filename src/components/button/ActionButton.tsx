import styled from "styled-components"

export const ActionButton = styled.button`
    --size:3em;
    cursor:pointer;
    min-height:var(--size);
    position:relative;
    text-align:center;
    text-transform:uppercase;
    padding:.5em;
    margin:.5em;
    border:none;
    outline:none;
    border-radius:var(--size);
    color:#fff;
    background-color:var(--secundary-color);
    transition:all ease .2s;

    &:after{
        content: "";
        position: absolute;
        left: calc(-.25rem - 1px);
        top: calc(-.25rem - 1px);
        width: calc(100% + .5rem);
        height: calc(100% + .5rem);
        border: 1px solid rgb(86, 86, 86);
        border-radius:var(--size);
    }

    &:not(:disabled):hover{
        background-color:var(--primary-color);
        box-shadow:0 0 64px var(--primary-color);
            &:after{
                    border-color:var(--primary-color);
            }
    }
`;