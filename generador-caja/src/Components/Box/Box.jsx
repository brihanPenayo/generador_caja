import React from 'react'

const Box = ({ box }) => {
    return (
        <div className="box-area">
            {box.map((item, idx) => {
                return (
                    <div style={{
                        background: `${item.color}`,
                        width: `${item.width}px`,
                        height: `${item.height}px`
                    }} key={idx}></div>
                );
            })}
        </div >
    );
}

export default Box