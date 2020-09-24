import React from 'react'
import DropzoneImages from './DropzoneImages';

const ImageModal = ({ showImage, setShowRightPanel, setShowImage, item }) => {
    const closeImageModal = () => {
        setShowImage(showImage.filter(el => el.id !== item.id));
        setShowRightPanel(false);
    }

    return (
        <DropzoneImages showImage={showImage} closeImageModal={closeImageModal} setShowRightPanel={setShowRightPanel} />
    )
}
export default ImageModal