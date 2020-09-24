import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'


const imageInput = {
    width: "100%",
    height: "100%",
    borderRadius: "2px",
    borderTop: '1px solid white'
}

function DropzoneImages({ showImage, closeImageModal, setShowRightPanel }) {

    const [files, setFiles] = useState([]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file),

            })))
        }
    });

    const images = files.map((file, id) => {
        return file ? <img key={file.name} src={file.preview} style={imageInput} alt="preview" /> : null;
    }
    )

    return (
        <div style={{ display: showImage ? 'block' : 'none', pointerEvents: showImage ? 'auto' : 'none' }} className="text-modal">Add image<i className="fas fa-times closemodal" onClick={closeImageModal}></i>
            <input {...getInputProps()} />
            <div {...getRootProps()}>
                <p className="drop-image">Drop image here or upload from pc.</p>
                <div className="image-input" onClick={() => setShowRightPanel(true)}>
                    {images}
                </div>
            </div>

        </div>
    )
}

export default DropzoneImages
