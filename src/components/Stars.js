import React from 'react';

const Stars = (props) => {
    const numberOfStars = 1 + Math.floor(Math.random()*9);
    return(
        <div className="col-md-5">
                {_.range(numberOfStars).map(i => <i key={i} className = "fa fa-star fa-3x"></i>)}
        </div>
    );
};

export default Stars;