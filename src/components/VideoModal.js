import React from 'react'
import DropzoneVideos from './DropzoneVideos'

const VideoModal = ({ showVideo, setShowRightPanel, setShowVideo, item }) => {
    const closeVideoModal = () => {
        setShowVideo(showVideo.filter(el => el.id !== item.id))
        setShowRightPanel(false);
    }
    return (
        <DropzoneVideos showVideo={showVideo} closeVideoModal={closeVideoModal} setShowRightPanel={setShowRightPanel} />
    )
}
export default VideoModal