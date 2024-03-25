import React from "react";

function Pin(props){
    console.log('Pin component props:', styles);
    return (
        <div style={{
            ...styles.pin,
            ...styles[props.size]
        }}>

        </div>
    )
}

const styles = {
    pin: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '16px',
        backgroundColor: 'red'
    },
    small: {
        gridRowEnd: 'span 26'
    },
    medium: {
        gridRowEnd: 'span 33'
    },
    large: {
        gridRowEnd: 'span 45'
    }

}

export default Pin;