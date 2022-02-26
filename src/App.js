import { createContext, useState } from 'react';
import { CardBody, Col } from 'reactstrap';
import Menu from './mainMenu';
import WhoLivesWhere from './whoLivesWhere';
import { Autor, MainMenuButton } from './styled';
import WhoseFootprints from './whoseFootprints';
import Nature from './nature';

export const GameContext = createContext();

const defaultContextValue = {
  currentGameId: 0
}

function App() {

  const [context, setContext] = useState(defaultContextValue);
  console.log(context)
  return (
    <GameContext.Provider value={[context, setContext]}>
      <div style={{ width: '100%', height: '100%', backgroundImage: 'url(../photos/grass1.jpg)', backgroundSize: '100% 100%' }}>
        <MainMenuButton
          src='./photos/mainMenu.png'
          onClick={() => setContext({
            currentGameId: 0
          })} />
        <CardBody>
          <Col xl='12'>
            {context.currentGameId === 0 ? <Menu /> : null}
            {context.currentGameId === 1 ? <Nature /> : null}
            {context.currentGameId === 2 ? <WhoLivesWhere /> : null}
            {context.currentGameId === 3 ? <WhoseFootprints /> : null}
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

export function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export default App;
