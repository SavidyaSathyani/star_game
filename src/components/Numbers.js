import React from 'react';
import _ from 'lodash';

const Numbers = (props) => {
    const numberClass = (number) => {
        if(props.usedNumbers.indexOf(number) >= 0){
            return 'used';
        }
        if(props.selectedNumbers.indexOf(number) >= 0){
            return 'selected';
        }
    }
    return(
        <div className="card text-center">
            {Numbers.list.map((number, i) => 
                <span key={i} className={numberClass(number)} onClick={() => props.selectNumber(number)}>
                    {number}
                </span>)}
        </div>
    );
};

Numbers.list = _.range(1,10);

export default Numbers;