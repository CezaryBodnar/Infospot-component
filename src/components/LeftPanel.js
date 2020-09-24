import React from 'react'

const LeftPanel = ({ setShowText, addInfo, addImage, addVideo }) => {
    return (
        <div className="left-buttons-panel">
            <span onClick={() => {
                setShowText(true);
            }
            }
            ><i className="fas fa-heading"></i></span>
            <span onClick={addImage}><i className="far fa-image"></i></span>
            <span onClick={addInfo}><i className="fas fa-align-left"></i></span>
            <span onClick={addVideo}><i className="far fa-file-video"></i></span>
        </div>
    )
}
export default LeftPanel