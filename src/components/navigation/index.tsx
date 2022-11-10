//Modules
import styled from "styled-components"

//Components
import { Link } from "../layout/Link";
import { Stack } from "../layout/Stack";
import { DioLogo } from "../icon/Dio";
import { Brasil, Eua, Spain } from "../icon/Language";

const Container = styled.nav`
    width:100%;
    display:flex;
    align-items:center;
    gap:.5em;
    background-color:#151515;
    padding:.75em 1em;

    a{
        color:#fff;
        text-decoration:none;
    }

    .routes{
        margin-left:auto;

        .fill{
            min-width:8em;
            padding:.25em;
            border-radius:1em;
            text-align:center;
            text-transform:uppercase;
            background-color:var(--secundary-color);
        }

        .language{
            transition:all ease .5s;
            &:not(.current){
                filter:grayscale(100%);
            }
            svg{
                --size:2em;
                width:var(--size);
                height:var(--size);
            }

            &:hover{
                filter:none;
            }
        }
    }
`;

export const Navigation = () => {
    return (
        <Container>
            <DioLogo />
            <Stack className="routes" alignItems="center" gap="1em">
                <Link href="#">Home</Link>
                <Link href="#">Catálogo</Link>
                <Link href="#">Planos</Link>
                <Link href="#">Para Empresas</Link>
                <Link href="#" className="fill">Entrar</Link>
                <Link href="#" className="fill">Cadastrar</Link>
                <Link href="#" className="language current">
                    <Brasil />
                </Link>
                <Link href="#" className="language">
                    <Eua />
                </Link>
                <Link href="#" className="language">
                    <Spain />
                </Link>
            </Stack>
        </Container>
    )
}