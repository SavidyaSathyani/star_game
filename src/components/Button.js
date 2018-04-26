import React from 'react';

const Button = (props) => {
    let button;
    switch (props.correctAnswer) {
        case true:
            button = <button className="btn btn-success"  
                        title="Click here to confirm the answer"
                        onClick={props.acceptAnswer}>
                <i className="fa fa-check"></i>
            </button>
            break;
        case false:
            button = <button className="btn btn-danger">
                <i className="fa fa-times"></i>
            </button>
            break;
        default:
            button = <button className="btn btn-primary"
                        title="Click here to check the answer" 
                        onClick={props.checkAnswer}
                        disabled={props.selectedNumbers.length === 0}>
                        =
                    </button>
            break;

    }
    return (
        <div className="col-md-2">
            {button}
            <br />
            <br />
            <button className="btn btn-warning" 
                onClick={props.redraw}
                disabled={props.redraws === 0}>
                <i className="fa fa-refresh"></i>
                {props.redraws}
            </button>
        </div>
    );
};

export default Button;