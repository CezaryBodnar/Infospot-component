import React from 'react'

const InfoModal = ({ showInfo, setShowRightStylePanel, item, setShowInfo }) => {
    const closeInfoModal = () => {
        setShowInfo(showInfo.filter(el => el.id !== item.id))
        setShowRightStylePanel(false);
    }
    return (
        <div style={{ display: showInfo ? 'block' : 'none', pointerEvents: showInfo ? 'auto' : 'none' }} className="text-modal">View information<i className="fas fa-times closemodal" onClick={closeInfoModal}></i>
            <textarea className="information-input" onClick={() => setShowRightStylePanel(true)}></textarea>
        </div>
    )
}
export default InfoModal