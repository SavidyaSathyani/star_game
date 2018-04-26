import React from 'react';

const Stars = (props) => {
    return(
        <div className="col-md-4" style={{ borderRight: "1px" }}>
                {_.range(props.numberOfStars).map(i => <i key={i} className = "fa fa-star fa-3x"></i>)}
        </div>
    );
};

export default Stars;