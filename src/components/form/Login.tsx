//Modules
import * as yup from "yup"
import styled from "styled-components"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"

//Components
import { Form } from "."
import { Text } from "../typography/Text"
import { Input } from "../input"
import { Heading } from "../typography/Heading"
import { ActionButton } from "../button/ActionButton"
import { HiEnvelope, HiLockClosed } from "react-icons/hi2"

const Container = styled.div`
    form{
        display:flex;
        flex-direction:column;
        gap:.5em;
    }
`;

type FormDataProps = {
    email: string;
    password: string;
}

const yupSchema = yup.object({
    email: yup.string().email('O campo deve conter um e-mail válido.').required('O e-mail é obrigatório.'),
    password: yup.string().required('A senha é obrigatória')
})

export const Login = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormDataProps>({
        resolver: yupResolver(yupSchema)
    });

    const handleFormSubmit = (data: FormDataProps) => {
        console.log(data);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit(handleFormSubmit)}>
                <Heading size="lg">Já tem cadastro?</Heading>
                <Text>Faça seu login e make the change._</Text>
                <Input
                    placeholder="E-mail"
                    icon={<HiEnvelope />}
                    {...register("email")}
                    error={errors.email?.message}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={<HiLockClosed />}
                    {...register("password")}
                    error={errors.password?.message}
                />
                <ActionButton disabled={!isValid}>
                    <Heading size="md">Entrar</Heading>
                </ActionButton>
            </Form>
        </Container>
    )
}