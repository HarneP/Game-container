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



export function Cards() {
    return (

        <div>
            
            <Container>
                <h4 className="text-center"><b>AVAILABLE GAMES</b></h4><br />
                
                <Row className="justify-content-md-center">
                    <Col lg={3}>
                        <Card style={{ width: '18rem', height:'35rem' }}>
                            <Card.Img  src={DiceG1} width="100" height="180"/>
                            <Card.Body>
                                <Card.Title>DICE GAME</Card.Title>
                                <Card.Text>
                                The basic premise of the game is this: you roll six dice. Some combinations of dice will score points, while others don't. You take out the dice that have scored points and then decide whether to keep that score, or re-roll the remaining dice to try to score more points.
                                </Card.Text>
                                <br></br>
                                <br></br>
                                <br></br>
                                <Link to="/dice">Dice Game</Link>
                               
                                <p> </p>
                                <Button variant="primary" class="mt-3 " href="./dice/Dice" >Dice Game</Button> 
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card style={{ width: '18rem', height:'35rem' }}>
                            <Card.Img src={magic1} width="100" height="180"/>
                            <Card.Body>
                                <Card.Title>MEMORY GAME</Card.Title>
                                <Card.Text>
                                If the two tiles have the same image, they remain face up. Otherwise, the tiles flip back over after a small period of time. The goal of the game is to get all the tiles flipped face up  in the least number of tries. That means that lower number of tries are better scores.
                                </Card.Text>
                                <Link to="/magic">Memory game</Link>
                                <p> </p>
                                <a role="button" tabindex="0" CardLink ="/magic" class="mt-3 btn btn-primary">Memory game</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card style={{ width: '18rem', height:'35rem' }}>
                        <Card.Img src={RPS1} width="100" height="220"/>
                            <Card.Body>
                                <Card.Title>ROCK PAPER SCISSORS</Card.Title>
                                <Card.Text>
                                The familiar game of Rock, Paper, Scissors is played like this: at the same time, two players display one of three symbols: a rock, paper, or scissors. A rock beats scissors, scissors beat paper by cutting it, and paper beats rock by covering it.
                                </Card.Text>
                                <br></br>
                                <br></br>
                                <br></br>
                                <Link to="/Rock">Rock Paper Scissors</Link>
                                <p> </p>
                                
                                <Button variant="primary" class="mt-3 " href="./RockPS/RockPS" >Rock Paper Scissors</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card style={{ width: '18rem', height:'35rem' }}>
                        <Card.Img src={tictac1} width="100" height="180"/>
                            <Card.Body>
                                <Card.Title>TIC TAC TOE</Card.Title>
                                <Card.Text>
                                The game is played on a grid that's 3 squares by 3 squares. You are X , your friend (or the computer in this case) is O . Players take turns putting their marks in empty squares. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.
                                </Card.Text>
                                <br></br>
                                
                                <Link to="/tic">TicTacToe</Link>
                                <p>  </p>
                                <Button variant="primary" class="mt-3 btn btn-primary" href="/TicTacToe" >TicTacToe</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>

    );

}