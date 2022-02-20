import { createContext, useState } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Menu from './mainMenu';
import WhoLivesWhere from './whoLivesWhere';
import { Autor, Title } from './whoLivesWhere/styled';

export const GameContext = createContext();

const defaultContextValue = {
  currentGameId: 0
}

function App() {

  const [context, setContext] = useState(defaultContextValue);
  console.log(context)
  return (
    <GameContext.Provider value={[context, setContext]}>
      <div style={{width:'100%', height:'100%', backgroundImage: 'url(../photos/grass1.jpg)', backgroundSize: '100% 100%' }}>
        <CardBody>
          <Col xl='12'>
            {context.currentGameId === 0 ? <Menu /> : null}
            {context.currentGameId === 1 ? <Menu /> : null}
            {context.currentGameId === 2 ? <WhoLivesWhere /> : null}
            {context.currentGameId === 3 ? <Menu /> : null}
            {context.currentGameId === 4 ? <Menu /> : null}
            {context.currentGameId === 5 ? <Menu /> : null}
          </Col>
        </CardBody>
        <Autor>
          Автор игры: учитель-логопед Ковязина С. Е.
        </Autor>
      </div>
    </GameContext.Provider>
  );
}

export default App;
