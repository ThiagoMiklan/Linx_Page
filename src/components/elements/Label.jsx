import React from 'react';

const Label = (props) => {
    return <div className={props.class}>
                {props.children}
            </div>
}


export default Label;