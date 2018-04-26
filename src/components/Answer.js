import React from 'react';

const Answer = (props) => {
    return(
        <div className="col-md-3">
            {props.selectedNumbers.map((number, i) => <span key={i} onClick={() => props.deSelectNumber(number)}>{number}</span>)}
        </div>
    );
};

export default Answer;