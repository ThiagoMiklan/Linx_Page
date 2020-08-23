import React from 'react';


const Footer = (props) => {
    return <div className="container_footer">
        <div className="text_footer">
            {props.text}
        </div >
    </div>
}

export default Footer;