//Modules
import { forwardRef, HTMLAttributes, HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components';

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
    icon?: JSX.Element
    type?: HTMLInputTypeAttribute
    error?: string
}

const Container = styled.label`
    display:flex;
    align-items:center;
    gap:.5em;
    padding:.125em;
    margin:.25em 0;
    border-bottom:1px solid var(--secundary-color);
    transition:all ease .2s;

    &:has(input:focus){
        background-color:#00000010;
        border-color:var(--primary-color);
    }

    .field-icon{
        color:var(--primary-color);
    }
`;

const Field = styled.input`
    width:100%;
    min-height:2em;
    border:none;
    outline:none;
    background-color:transparent;
`;

export const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
    const Icon = ({ icon }: { icon?: JSX.Element }) => {
        return (
            <span className="field-icon">{icon ? icon : null}</span>
        )
    };

    const Error = ({ error }: { error?: string }) => {
        return (
            <span>{
                error ?
                    <div style={{
                        color: "#f05"
                    }}>{error}</div>
                    : null
            }</span>
        )
    }

    return (
        <>
            <Container>
                <Icon icon={props.icon} />
                <Field {...props} ref={ref} />
            </Container>
            <Error error={props.error} />
        </>
    )
});

Input.displayName = "Input";