import React from 'react'


const TextModal = ({ showText, setShowRightStylePanel, setShowText }) => {
    const closeTextModal = () => {
        setShowText(false);
        setShowRightStylePanel(false);
    }

    return (
        <div style={{ display: showText ? 'block' : 'none', pointerEvents: showText ? 'auto' : 'none' }} className="text-modal">Make title<i className="fas fa-times closemodal" onClick={closeTextModal}></i>
            <textarea className="text-input" onClick={() => setShowRightStylePanel(true)}></textarea>
        </div>
    )
}
export default TextModal