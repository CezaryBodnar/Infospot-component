import React from 'react'

const RightStylePanel = ({ showRightStylePanel, textBold, textItalic, textUnderline, textStrike, textTint, resetStyle }) => {
    return (
        <div className="right-style-panel" style={{ display: showRightStylePanel ? 'block' : 'none', pointerEvents: showRightStylePanel ? 'auto' : 'none' }}>
            <span><i className="fas fa-bold" onClick={textBold}></i></span>
            <span><i className="fas fa-italic" onClick={textItalic}></i></span>
            <span><i className="fas fa-underline" onClick={textUnderline}></i></span>
            <span><i className="fas fa-strikethrough" onClick={textStrike}></i></span>
            <span><i className="fas fa-tint" onClick={textTint}></i></span>
            <span><i className="fas fa-undo-alt" onClick={resetStyle}></i></span>

        </div>
    )
}
export default RightStylePanel