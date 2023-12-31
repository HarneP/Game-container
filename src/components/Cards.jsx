import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DiceG1 from './imag1/DiceG1.png'
import magic1 from './imag1/magic1.png'
import RPS1 from './imag1/RPS1.png'
import tictac1 from './imag1/tictac1.png'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { CardLink } from 'react-bootstrap';


export function Cards() {
    return (

        <div>
            
            <Container>
                <h4 className="text-center">AVAILABLE GAMES</h4><br />
                
                <Row className="justify-content-md-center">
                    <Col lg={3}>
                        <Card style={{ width: '18rem', height:'30rem' }}>
                            <Card.Img  src={DiceG1} width="100" height="180"/>
                            <Card.Body>
                                <Card.Title>DICE GAME</Card.Title>
                                
                                <Card.Text>
                                    
                                </Card.Text>
                                <Link to="/dice">Dice Game</Link>
                               
                                <p> </p>
                                <a role="button" tabindex="0" href="" class="mt-3 btn btn-primary">Dice game</a> 
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card style={{ width: '18rem', height:'30rem' }}>
                            <Card.Img src={magic1} width="100" height="180"/>
                            <Card.Body>
                                <Card.Title>MEMORY GAME</Card.Title>
                                <Card.Text>
                                    
                                </Card.Text>
                                <Link to="/magic">Magic</Link>
                                <p> </p>
                                <a role="button" tabindex="0" CardLink ="/magic" class="mt-3 btn btn-primary">Magic</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card style={{ width: '18rem', height:'30rem' }}>
                        <Card.Img src={RPS1} width="100" height="180"/>
                            <Card.Body>
                                <Card.Title>ROCK PAPER SCISSORS</Card.Title>
                                <Card.Text>
                                    
                                </Card.Text>
                                <Link to="/Rock">Rock Paper Scissors</Link>
                                <p> </p>
                                <a role="button" tabindex="0" href="" class="mt-3 btn btn-primary">Rock Paper Scissors</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card style={{ width: '18rem', height:'30rem' }}>
                        <Card.Img src={tictac1} width="100" height="180"/>
                            <Card.Body>
                                <Card.Title>TIC TAC TOE</Card.Title>
                                <Card.Text>
                                    Explore the plethora of Questions in Learner License
                                </Card.Text>
                                <Link to="/tic">TicTacToe</Link>

                                <br></br>
                                <p>  </p>
                                <a role="button" tabindex="0" href="" class="mt-3 btn btn-primary">TicTacToe</a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>

    );

}