import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
//  import image from "../../assets/moodmusic.png"

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
    <Button variant="primary" href="https://mi544.github.io/mood-music/" target="_blank">Go to Site</Button>
  </Card.Body>
</Card>


<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require('../../assets/day.png')}/>
  <Card.Body>
    <Card.Title>Work Day Planner</Card.Title>
    <Card.Text>
    A simple work planner using moment.js for current time updates.
    </Card.Text>
    <Button variant="primary" href=" https://ghondie.github.io/Day-planner/" target="_blank"> Go to Site </Button>
  </Card.Body>
</Card>


<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require('../../assets/password.png')}/>
  <Card.Body>
    <Card.Title>Password Generator</Card.Title>
    <Card.Text>
    A simple password generator with prompts and alerts to make a complex password.
    </Card.Text>
    <Button variant="primary" href="https://ghondie.github.io/Password-Gen/" target="_blank">Go to Site</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require('../../assets/employeetracker.png')}/>
  <Card.Body>
    <Card.Title>Employee Tracker</Card.Title>
    <Card.Text>
    A simple employee tracker using sql and terminal
    </Card.Text>
    <Button variant="primary" href="https://ghondie.github.io/Password-Gen/" target="_blank">Go to Site</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require('../../assets/project2.png')}/>
  <Card.Body>
    <Card.Title>Project 2 - Blog template</Card.Title>
    <Card.Text>
    Group project 2. For this project we used sql, handlebars, and sequlize for the
                backend and sass, flickity and css for the front end
    </Card.Text>
    <Button variant="primary" href="https://blogger-template-maker.herokuapp.com/" target="_blank">Go to Site</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require('../../assets/readmegen.png')}/>
  <Card.Body>
    <Card.Title>Readme Generator</Card.Title>
    <Card.Text>
    A super usefull tool to make a reademefile
    </Card.Text>
    <Button variant="primary" href="https://github.com/Ghondie/Readme-generator" target="_blank">Go to Site</Button>
  </Card.Body>
</Card>

    </div>
    
  );
};

export default card1 ;