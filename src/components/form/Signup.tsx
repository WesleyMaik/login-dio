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
import { HiEnvelope, HiLockClosed, HiUser } from "react-icons/hi2"
import brasilFlag from "../../assets/brazil.png"

const Container = styled.div`
    form{
        display:flex;
        flex-direction:column;
        gap:.5em;
    }
`;

type FormDataProps = {
    name: string;
    email: string;
    phone: string
    password: string;
}

const yupSchema = yup.object({
    name: yup.string().required('O nome é obrigatório.'),
    email: yup.string().email('O campo deve conter um e-mail válido.').required('O e-mail é obrigatório.'),
    phone: yup.string().min(8, 'Digite um número de telefone válido.').required('O número de telefone é obrigatório.'),
    password: yup.string().required('A senha é obrigatória')
});

export const Signup = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormDataProps>({
        resolver: yupResolver(yupSchema)
    });

    const handleFormSubmit = (data: FormDataProps) => {
        console.log(data);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit(handleFormSubmit)}>
                <Heading size="lg">Comece agora grátis</Heading>
                <Text>Crie sua conta e make the change._</Text>
                <Input
                    {...register("name")}
                    placeholder="Nome completo"
                    icon={<HiUser />}
                    error={errors.name?.message}
                />
                <Input
                    {...register("email")}
                    placeholder="E-mail"
                    type="email"
                    icon={<HiEnvelope />}
                    error={errors.email?.message}
                />
                <Input
                    {...register("phone")}
                    placeholder="Celular ex: (11) 96123-4567"
                    type="tel"
                    icon={<img src={brasilFlag} width={16} />}
                    error={errors.phone?.message}
                />
                <Input
                    {...register("password")}
                    placeholder="Senha"
                    type="password"
                    icon={<HiLockClosed />}
                    error={errors.password?.message}
                />
                <ActionButton disabled={!isValid}>
                    <Heading size="md">Criar minha conta grátis</Heading>
                </ActionButton>
                <Text>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Text>

            </Form>
        </Container>
    )
}