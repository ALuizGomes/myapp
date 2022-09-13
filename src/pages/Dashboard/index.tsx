import { Container, Header, UserInfo, Photo, User, UserName, UserGreetings, UserWrapper, Icon } from "./styles";

import { HighlighCard } from "../../components/HighlightCard/Index";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
        <Photo source={{uri: 'https://avatars.githubusercontent.com/u/90867219?v=4' }}/>
          <UserInfo>
            <User>
              <UserGreetings>Ola, </UserGreetings>
              <UserName>Andre Luiz Gomes!</UserName>
            </User>
          </UserInfo>
          <Icon name="power"/>        
        </UserWrapper>
      </Header>
      <HighlighCard />
    </Container>
  )
}
