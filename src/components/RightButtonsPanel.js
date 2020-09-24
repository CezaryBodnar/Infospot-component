import React from 'react'

const RightButtonsPanel = ({ showRightPanel, addLink, removePreview, deleteHandler }) => {
    return (
        <div className="right-buttons-panel" style={{ display: showRightPanel ? 'block' : 'none', pointerEvents: showRightPanel ? 'auto' : 'none' }}>
            <span ><i className="fas fa-link" onClick={addLink}></i></span>
            <span><i className="fas fa-trash-alt" onClick={deleteHandler}></i></span>
        </div>
    )
}
export default RightButtonsPanel