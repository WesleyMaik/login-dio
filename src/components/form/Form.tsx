//Modules
import styled from "styled-components";
import { forwardRef, HTMLAttributes, useImperativeHandle, useState } from "react";
import { Link } from "../layout/Link";
import { Stack } from "../layout/Stack";
import { Text } from "../typography/Text"
import { Login } from "./Login";
import { Signup } from "./Signup";

const Container = styled.section`
    width:100%;
`;

interface IFormProps extends HTMLAttributes<HTMLDivElement> { };
export interface IFormRef {
    isLogin: boolean,
    handleSetSignup: () => void;
    handleSetLogin: () => void;
}

export const Form = forwardRef<IFormRef, IFormProps>((props, ref) => {
    const [isLogin, setIsLogin] = useState(true),
        handleSetSignup = () => setIsLogin(false),
        handleSetLogin = () => setIsLogin(true);

    useImperativeHandle(ref, () => ({
        isLogin,
        handleSetSignup,
        handleSetLogin
    }));

    return (
        <Container {...props}>
            {
                isLogin ?
                    <>
                        <Login />
                        <Stack
                            gap="1em"
                            margin="1em 0"
                            padding=".5em"
                            justifyContent="space-between"
                        >
                            <Link href="#" color="#e5e044">Esqueci minha senha.</Link>
                            <Link
                                href="#"
                                color="#23dd7a"
                                onClick={handleSetSignup}
                            >Criar conta.</Link>
                        </Stack>
                    </> :
                    <>
                        <Signup />
                        <Stack
                            alignItems="center"
                        >
                            <Text>Já tenho conta.&nbsp;</Text>
                            <Link
                                href="#"
                                color="#23dd7a"
                                onClick={handleSetLogin}
                            >Fazer login.</Link>
                        </Stack>
                    </>
            }
        </Container>
    )
});

Form.displayName = "Form";