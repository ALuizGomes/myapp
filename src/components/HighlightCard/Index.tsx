import { Amount, Container, Footer, Header, Icon, LastTransaction, Title } from "./styles";

export function HighlighCard() {
    return(
        <Container>
            <Header>
                <Title>Entradas</Title>
                <Icon name="arrow-up-circle" />
            </Header>
            <Footer>
                <Amount>R$17400,00</Amount>
                <LastTransaction>Ultima Entrada Dia 13 de Abril</LastTransaction>
            </Footer>
        </Container>
    )
}