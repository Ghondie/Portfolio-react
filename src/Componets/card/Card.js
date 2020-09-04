import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
 import image from "../../assets/moodmusic.png"

const card1 = (props) => {
  return (
    <div>
     
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require('../../assets/moodmusic.png')}/>
  <Card.Body>
    <Card.Title>Mood Music</Card.Title>
    <Card.Text>
    A colabration project using 3 different API and bulma for styling. Search for some
              music and lyrics are generated
    </Card.Text>
    <Button variant="primary" href="https://mi544.github.io/mood-music/" target="_blank">Go somewhere</Button>
  </Card.Body>
</Card>


<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require('../../assets/day.png')}/>
  <Card.Body>
    <Card.Title>Work Day Planner</Card.Title>
    <Card.Text>
    A simple work planner using moment.js for current time updates.
    </Card.Text>
    <Button variant="primary" href=" https://ghondie.github.io/Day-planner/" target="_blank"> Go somewhere </Button>
  </Card.Body>
</Card>


<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require('../../assets/password.png')}/>
  <Card.Body>
    <Card.Title>Password Generato</Card.Title>
    <Card.Text>
    A simple password generator with prompts and alerts to make a complex password.
    </Card.Text>
    <Button variant="primary" href="https://ghondie.github.io/Password-Gen/" target="_blank">Go somewhere</Button>
  </Card.Body>
</Card>

    </div>
    
  );
};

export default card1 ;