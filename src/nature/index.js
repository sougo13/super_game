import React, { useState } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { natural, } from '../data';
import { CardBlock, MashaGame, Title } from '../styled';
import Image from './image';
import { initialData } from './initData';

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const Nature = () => {

  const [state, setState] = useState(initialData);

  return (
    <CardBlock style={{ minHeight: '100vh' }}>
      <Title style={{ width: 'fit-content', marginRight: 'auto', marginLeft: 'auto' }}>
        Природу я люблю, природу берегу!
      </Title>
      <Card style={{ width: '100%', height: '85vh', background: '#fac5f1d5' }}>
        <CardBody>
          <Col xs='12' style={{ height: '100%' }}>
            <Row style={{ height: '100%' }}>

              <Col xs='3' >
                <Row style={{ height: '100%' }} className='justify-content-center align-items-end'>
                  <MashaGame src='../photos/mashaOk.png'></MashaGame>
                </Row>
              </Col>

              <Col xs='6' >
                <Row
                  style={{ height: '100%' }}
                  className='justify-content-center align-items-end'>

                  {shuffle(natural).map((item, index) => {
                    return (
                      <Image src={item.src} />
                    )
                  })}
                </Row>
              </Col>

              <Col xs='3'>
                <Row style={{ height: '100%' }} className='justify-content-center align-items-end'>
                  <MashaGame src='../photos/mashaWrong.png'></MashaGame>
                </Row>
              </Col>

            </Row>
          </Col>
        </CardBody>
      </Card>
    </CardBlock>
  )
}

export default Nature