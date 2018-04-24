import React from 'react';
import Stars from '../components/Stars';
import Button from '../components/Button';
import Answer from '../components/Answer';

class Game extends React.Component {
    render() {
        return ( 
            <div className="jumbotron">
                <div style={{marginLeft:"10px"}}>
                    <h1 >Play Stars</h1>
                    <p>This is a simple game to improve your addition skills in mathemetics.</p>
                </div>
                <hr/>
                <div className="container-fluid">
                    <div className="row">
                        <Stars />
                        <Button />
                        <Answer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;