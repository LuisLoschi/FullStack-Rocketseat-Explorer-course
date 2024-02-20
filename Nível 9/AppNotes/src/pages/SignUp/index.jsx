import { Container, Form, BackgroundImage } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiLock, FiMail, FiUser } from "react-icons/fi";

import { Link } from "react-router-dom";

export function SignUp() {

    return (
        <Container>
            <BackgroundImage />

            <Form >
                
                <h1>MyNotes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2> 

                <Input 
                    placeholder="Nome"  
                    type="password" 
                    icon={FiUser}
                />

                <Input 
                    placeholder="E-mail" 
                    type="email" 
                    icon={FiMail}
                />

                <Input 
                    placeholder="Senha"  
                    type="password" 
                    icon={FiLock}
                />

                <Button title="Entrar" />
                
                <Link to="/">
                    Voltar para o login
                </Link>

            </Form>

        </Container>

    )
}