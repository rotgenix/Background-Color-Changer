import React from 'react'

const Button = ({ backColor, colorSetting }) => {
    
    return (
        <>
            <button
                style={{
                    backgroundColor: backColor
                }}
                onClick={() => {
                    colorSetting(backColor);
                }}
            >
                {backColor}
            </button>
        </>
    )
}

export default Button
