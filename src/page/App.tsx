//Modules
import styled from "styled-components";

//Components
import { Form } from "../components/form/Form";
import { Detail } from "../components/layout/Details";
import { Stack } from "../components/layout/Stack";
import { Navigation } from "../components/navigation";
import { Heading } from "../components/typography/Heading";

const Main = styled.main`
  height:100vh;
  color:#fff;
  background-color:#1e192c;

  input{
    color:#fff;
  }

  .main-stack{
    padding:2em;
    .view{
      width:100%;
      max-width:640px;
      margin:5% 0;
    }
  }
`;

const App = () => {
  return (
    <Main>
      <Navigation />
      <Stack
        className="main-stack"
        justifyContent="center"
        gap="3em"
      >
        <Stack
          className="view main-text"
          flexDirection="column"
          gap="1em"
        >
          <Detail />
          <Heading size="lg">A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Heading>
        </Stack>
        <Stack
          className="view"
          flexDirection="column"
          gap="1em"
        >
          <Detail />
          <Form />
        </Stack>
      </Stack>
    </Main>
  )
}

export default App;