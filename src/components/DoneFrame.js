import React from 'react';

const DoneFrame = (props) => {
    const doneClass = (status) => {
        if(status === "Game Over!"){
            return "loose";
        }
        if(status === "You Won!"){
            return "win";
        }
    }
    return(
        <div className="text-center">
            <h2 className={doneClass(props.doneStatus)}>{props.doneStatus}</h2>
            <button className="btn-primary" onClick={props.resetGame}>Try Again!</button>
        </div>
    );
};

export default DoneFrame;