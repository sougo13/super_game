import React, { useContext } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import { GameContext } from '../App';
import { CardBlock, MashaMain, StyledButton, Title } from '../whoLivesWhere/styled'

const Menu = () => {

  const [context, setContext] = useContext(GameContext);

  return (
      <CardBlock style={{minHeight: '100vh'}}>
        <Title style={{ marginRight: '75px' }} className='align-self-center'>
          В лесу с Машей
        </Title>
        <Card style={{ padding: '5%', margin: 'auto', right: '70px', background: '#fac5f1d5', width: 'fit-content' }}>
          <CardBody >
            <Col xs='12'>
              <Row className='justify-content-center'>
                <StyledButton onClick={() => setContext({ ...context, currentGameId: 1 })}>Природу я люблю, природу берегу!</StyledButton>
              </Row>
              <Row className='justify-content-center'>
                <StyledButton onClick={() => setContext({ ...context, currentGameId: 2 })}>Кто, где живет?</StyledButton>
              </Row>
              <Row className='justify-content-center'>
                <StyledButton onClick={() => setContext({ ...context, currentGameId: 3 })}>Чьи следы?</StyledButton>
              </Row>
              <Row className='justify-content-center'>
                <StyledButton onClick={() => setContext({ ...context, currentGameId: 4 })}>Посчитай животных</StyledButton>
              </Row>
              <Row className='justify-content-center'>
                <StyledButton onClick={() => setContext({ ...context, currentGameId: 5 })}>Детеныши диких животных</StyledButton>
              </Row>
            </Col>
          </CardBody>
        </Card>
        <MashaMain src='../photos/mainMasha.png' />
      </CardBlock>
  )
}

export default Menu