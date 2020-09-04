  
import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export const Bio= () => (
  // return (
    <div>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require('../../assets/profilepic.jpg')}/>
  <Card.Body>
    <Card.Title>Hey!</Card.Title>
    <Card.Text>
      Im Jared Schau. I am a former Geek Squad Agent turned coder. Ive leared the full MERN stack with a passion for front end. 
    </Card.Text>
    <Button variant="primary" href="https://www.linkedin.com/in/jared-schau-a2a56361/" target="_blank">Go Linkedin</Button>
  </Card.Body>
</Card>

    </div>

    )
    export default Bio