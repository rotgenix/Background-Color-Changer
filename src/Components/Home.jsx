import React, { useState } from 'react'
import Button from './Button';

const Home = () => {
    const [color, setColor] = useState('Lavender');

    const colorArray = ["SkyBlue", "AntiqueWhite", "Aquamarine", "Azure", "Cornsilk"];

    return (
        <>
            <div className="home"
                style={{
                    backgroundColor: color
                }}
            >
                <div className='color-navigation'
                >
                    <div className="btns">
                        {
                            colorArray.map((value, index) => {
                                return (<Button key={index} backColor={value} colorSetting={setColor} />);
                            })
                        }
                    </div>
                </div>
                <div className="text">
                    <h1>
                        Theme Color is : {color}
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Home