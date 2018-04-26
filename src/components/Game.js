import React from 'react';
import Stars from '../components/Stars';
import Button from '../components/Button';
import Answer from '../components/Answer';
import Numbers from '../components/Numbers';

class Game extends React.Component {
    render() {
        this.state = {
            selectedNumbers: []
        };

        this.selectNumber = (clickedNumber) => {
            console.log(clickedNumber);
            this.setState(prevState => ({
                selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
                //selectedNumbers: [prevState.selectedNumbers,clickedNumber]
            }));
            console.log(this.state.selectedNumbers);
        };

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
                        <Answer selectedNumbers={this.state.selectedNumbers}/>
                    </div>
                    <br/>
                    <Numbers selectedNumbers={this.state.selectedNumbers} selectNumber={this.selectNumber}/>
                </div>
            </div>
        );
    }
}

export default Game;