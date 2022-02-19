import React, { useEffect, useState } from 'react';
import { Card, CardBody, Col, Container, Label, Row } from 'reactstrap';
import { animals1, animals2, places1, places2 } from '../data';
import './style.css';
import { AnswerImg, CardBlock, EndMessage, MashaImg, MiniMashaImg, StyledImg, Text } from './styled';

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

const WhoLivesWhere = () => {

  const [allAnimals, setAllAnimals] = useState(animals1);
  const [allPlaces, setAllPlaces] = useState(places1);
  const [correctAnimals, setCorrectAnimals] = useState([]);
  const [correctPlaces, setCorrectPlaces] = useState([]);
  const [currentAnimal, setCurrentAnimal] = useState(0);
  const [currentPlace, setCurrentPlace] = useState(0);
  const [stage, setStage] = useState(1);
  const [masha, setMasha] = useState(false);
  const [answerType, setAnswerType] = useState(0);

  useEffect(() => {
    if (stage === 1 && allAnimals.length === 0) {
      setStage(2);
    }
    if (stage === 2 && allAnimals.length === 0) {
      setStage(3);
    }
  }, [allAnimals])

  useEffect(() => {
    if (stage === 2) {
      let newAnimals = [...animals2];
      newAnimals = shuffle(newAnimals);
      setAllAnimals(newAnimals);
      let newPlaces = [...places2];
      newPlaces = shuffle(newPlaces);
      setAllPlaces(newPlaces);
      setCorrectAnimals([]);
      setCorrectPlaces([]);
      setCurrentAnimal(0);
      setCurrentPlace(0);
    }
    if (stage === 1) {
      let newAnimals = [...allAnimals];
      newAnimals = shuffle(newAnimals);
      setAllAnimals(newAnimals);
      let newPlaces = [...allPlaces];
      newPlaces = shuffle(newPlaces);
      setAllPlaces(newPlaces);
    }
  }, [stage])

  useEffect(() => {
    if (currentAnimal !== 0 && currentAnimal === currentPlace) {
      hanldeCorrect(currentAnimal);
    }
    if (currentAnimal !== 0 && currentPlace !== 0 && currentAnimal !== currentPlace) {
      hanldeWrong()
    }
  }, [currentAnimal, currentPlace])

  const hanldeCorrect = (id) => {
    const newAnimals = allAnimals.filter(animal => animal.id !== id);
    const newPlaces = allPlaces.filter(place => place.id !== id);
    const newCorrectAnimals = allAnimals.filter(animal => animal.id === id);
    const newCorrectPlaces = allPlaces.filter(place => place.id === id);
    setCorrectAnimals([...correctAnimals, ...newCorrectAnimals]);
    setCorrectPlaces([...correctPlaces, ...newCorrectPlaces]);
    setAllAnimals(newAnimals);
    setAllPlaces(newPlaces);
    setAnswerType(1);
    drawMasha();
    setCurrentPlace(0);
  }

  const hanldeWrong = () => {
    setAnswerType(0);
    drawMasha();
    setCurrentPlace(0);
  }

  const drawMasha = () => {
    setMasha(true);
    setTimeout(() => {
      setMasha(false);
    }, 5000)
  }

  return (
    <Container fluid>
      <Card style={{ background: '#e0bcda83' }}>
        <CardBody >
          {stage === 3
            ? <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
              <img src='../photos/orig.gif' width='50%' />
            </div>
            : <Col xl='12'>
              <Row>
                <Col xl='6'>
                  {allAnimals.map(animal => {
                    return (
                      <Row key={'animal' + animal.id} className='mb-3'>
                        <CardBlock>
                          <Text>{animal.name}</Text>
                          <StyledImg
                            selected={animal.id === currentAnimal}
                            onClick={() => { setCurrentAnimal(animal.id) }}
                            src={animal.src} />
                        </CardBlock>
                      </Row>
                    )
                  }
                  )}
                  {correctAnimals.map(animal => {
                    return (
                      <Row key={'animal' + animal.id} className='mb-3'>
                        <CardBlock>
                          <Text>{animal.name}</Text>
                          <StyledImg
                            disabled
                            src={animal.src} />
                        </CardBlock>
                      </Row>
                    )
                  }
                  )}
                </Col>
                <Col xl='6'>
                  {allPlaces.map(place => {
                    return (
                      <Row key={'place' + place.id} className='mb-3'>
                        <CardBlock>
                          <Text>{place.name}</Text>
                          <StyledImg
                            selected={place.id === currentPlace}
                            onClick={() => { setCurrentPlace(place.id) }}
                            src={place.src} />
                        </CardBlock>
                      </Row>
                    )
                  }
                  )}
                  {correctPlaces.map(place => {
                    return (
                      <Row key={'place' + place.id} className='mb-3'>
                        <CardBlock>
                          <Text>{place.name}</Text>
                          <StyledImg
                            disabled
                            src={place.src} />
                        </CardBlock>
                      </Row>
                    )
                  }
                  )}
                </Col>
              </Row>
            </Col>
          }
        </CardBody>
      </Card>
      {masha
        ? <MashaImg src='../photos/masha.png' />
        : <MiniMashaImg src='../photos/miniMasha.png' />}
      {
        masha
          ? answerType
            ? <AnswerImg src='../photos/ok.png' />
            : <AnswerImg src='../photos/wrong.png' />
          : null
      }
      {stage === 3 &&
        <EndMessage>
          Молодец!!!
        </EndMessage>}
    </Container>
  )
}

export default WhoLivesWhere