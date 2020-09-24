import React from 'react'
import { useDropzone } from 'react-dropzone'

function DropzoneVideos({ showVideo, closeVideoModal, setShowRightPanel }) {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({ accept: 'video/*' });

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bitów
        </li>
    ));

    return (
        <div style={{ display: showVideo ? 'block' : 'none', pointerEvents: showVideo ? 'auto' : 'none' }} className="text-modal">Add video<i className="fas fa-times closemodal" onClick={closeVideoModal}></i>
            <input {...getInputProps()} />
            <div {...getRootProps()}>
                <p className="drop-image">Drop video here or upload from pc.</p>
                <div className="video-input" onClick={() => setShowRightPanel(true)}>
                    {files}
                </div>
            </div>

        </div>
    );
}
export default DropzoneVideos