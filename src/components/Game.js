import React from 'react';
import Stars from '../components/Stars';
import Button from '../components/Button';
import Answer from '../components/Answer';
import Numbers from '../components/Numbers';
import DoneFrame from '../components/DoneFrame';

class Game extends React.Component {
    static generateRandom = () => 1 + Math.floor(Math.random() * 9);
    static initialState = () => ({
        selectedNumbers: [],
        randomNumber: Game.generateRandom(),
        usedNumbers: [],
        correctAnswer: null,
        redraws: 5,
        doneStatus: null
    });

    constructor() {
        super();
        this.state = Game.initialState();
    }

    selectNumber = (clickedNumber) => {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0 || this.state.usedNumbers.indexOf(clickedNumber) >= 0) { return; }
        this.setState(prevState => ({
            correctAnswer: null,
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    };

    deSelectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            correctAnswer: null,
            selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
        }));
    };

    checkAnswer = () => {
        this.setState(prevState => ({
            correctAnswer: prevState.randomNumber === prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
        }));
    };

    acceptAnswer = () => {
        this.setState(prevState => ({
            usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers: [],
            correctAnswer: null,
            randomNumber: Game.generateRandom()
        }), this.updateDoneStatus);
    };

    redraw = () => {
        if (this.state.redraws === 0) { return; }
        this.setState(prevState => ({
            selectedNumbers: [],
            correctAnswer: null,
            randomNumber: Game.generateRandom(),
            redraws: prevState.redraws - 1
        }), this.updateDoneStatus);
    };

    possibleCombinationSum =  (arr, n) => {
        if (arr.indexOf(n) >= 0) { return true; }
        if (arr[0] > n) { return false; }
        if (arr[arr.length - 1] > n) {
            arr.pop();
            return this.possibleCombinationSum(arr, n);
        }
        var listSize = arr.length, combinationsCount = (1 << listSize)
        for (var i = 1; i < combinationsCount; i++) {
            var combinationSum = 0;
            for (var j = 0; j < listSize; j++) {
                if (i & (1 << j)) { combinationSum += arr[j]; }
            }
            if (n === combinationSum) { return true; }
        }
        return false;
    };

    possibleSolutions = ({ randomNumber, usedNumbers }) => {
        const possibleNumbers = _.range(1, 10).filter(number =>
            usedNumbers.indexOf(number) === -1
        );

        return this.possibleCombinationSum(possibleNumbers, randomNumber);
    };

    updateDoneStatus = () => {
        this.setState(prevState => {
            if (prevState.usedNumbers.length === 9) {
                return { doneStatus: "You Win!", randomNumber: 0 };
            }
            if (prevState.redraws === 0 && !this.possibleSolutions(prevState)) {
                return { doneStatus: "Game Over!", randomNumber: 0 };
            }
        });
    };

    resetGame = () => this.setState(Game.initialState());

    render() {
        const { selectedNumbers, randomNumber, correctAnswer, usedNumbers, redraws, doneStatus } = this.state;
        return (
            <div className="jumbotron">
                <div style={{ marginLeft: "10px" }}>
                    <h1 >Play Stars</h1>
                    <p>Try to use all the numbers. Have fun!!!</p>
                </div>
                <hr />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <Stars numberOfStars={randomNumber} />
                        <Button selectedNumbers={selectedNumbers}
                            checkAnswer={this.checkAnswer}
                            acceptAnswer={this.acceptAnswer}
                            redraw={this.redraw}
                            redraws={redraws}
                            correctAnswer={correctAnswer} />
                        <Answer selectedNumbers={selectedNumbers}
                            deSelectNumber={this.deSelectNumber} />
                        <div className="col-md-2"></div>
                    </div>
                    <br />
                    <div className="row">
                        {doneStatus ?
                            <DoneFrame doneStatus={doneStatus}
                                    resetGame={this.resetGame} /> :
                            <Numbers selectedNumbers={selectedNumbers}
                                usedNumbers={usedNumbers}
                                selectNumber={this.selectNumber} />
                        }
                    </div>
                </div>
                <hr />
                <div className="card" style={{ marginLeft: "10px" }}>
                        <h4>How to play the game?</h4>
                        <ul>
                            <li>Try to match the number of starts displaying with the numbers in the number panel.</li>
                            <li>You can select any number of integers from the number panel and when you are done click on the match button <button className="btn-primary">=</button>.</li>
                            <li>If your number combination is correct, you must press on <button className="btn-success"><i className="fa fa-check"></i></button> again to get new stars.</li>
                            <li>If you got the combination wrong you can deselect the numbers by clicking on them in the right hand side panel and try again.</li>
                            <li>If you manage to use all the numbers in the number panel you win.</li> 
                        </ul>
                    </div>
            </div>
        );
    }
}

export default Game;