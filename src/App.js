import React, { useState } from 'react';
import './App.css';
import LeftPanel from './components/LeftPanel';
import RightButtonsPanel from './components/RightButtonsPanel';
import RightStylePanel from './components/RightStylePanel';
import TextModal from './components/TextModal';
import ImageModal from './components/ImageModal';
import InfoModal from './components/InfoModal';
import VideoModal from './components/VideoModal';

function getNewFontColor() {
  var symbols, color;
  symbols = "0123456789ABCDEF";

  color = "#";
  for (var i = 0; i < 6; i++) {
    color = color + symbols[Math.floor(Math.random() * 16)];
  }
  document.querySelector(".text-input").style.color = color;
}

function App() {
  const [showText, setShowText] = useState(false);
  const [showImage, setShowImage] = useState([]);
  const [showInfo, setShowInfo] = useState([]);
  const [showVideo, setShowVideo] = useState([]);
  const [showRightPanel, setShowRightPanel] = useState(false);
  const [showRightStylePanel, setShowRightStylePanel] = useState(false);

  const [openInfospot, setOpenInfospot] = useState(false);

  // const closeRightPanel = () => setShowRightPanel(false);
  const closeRightStylePanel = () => setShowRightStylePanel(false);

  const addImage = e => {
    e.preventDefault();
    setShowImage([...showImage, { id: showImage.length }]);
  };

  const addInfo = e => {
    e.preventDefault();
    setShowInfo([...showInfo, { id: showInfo.length }]);
  };

  const addVideo = e => {
    e.preventDefault();
    setShowVideo([...showVideo, { id: showVideo.length }]);
  };

  const addLink = e => {
    e.preventDefault();

  };

  const textBold = e => {
    e.preventDefault();
    if (document.querySelector(".text-input") !== document.querySelector(".text-input:focus"))
      document.querySelector(".text-input").style.fontWeight = "bold";

  };

  const textItalic = e => {
    e.preventDefault();
    document.querySelector(".text-input").style.fontStyle = "italic";
  };

  const textUnderline = e => {
    e.preventDefault();
    document.querySelector(".text-input").style.textDecoration = "underline";
  };

  const textStrike = e => {
    e.preventDefault();
    document.querySelector(".text-input").style.textDecoration = "line-through";
  };

  const textTint = e => {
    e.preventDefault();
    getNewFontColor();
  };

  const resetStyle = e => {
    e.preventDefault();
    document.querySelector(".text-input").style.fontWeight = "";
    document.querySelector(".text-input").style.fontStyle = "";
    document.querySelector(".text-input").style.textDecoration = "";
    document.querySelector(".text-input").style.color = "black";
  };

  const autoExpand = function (field) {

    // Reset field height
    field.style.height = 'inherit';

    // Get the computed styles for the element
    let computed = window.getComputedStyle(field);

    // Calculate the height
    let height = parseInt(computed.getPropertyValue('border-top-width'), 10)
      + parseInt(computed.getPropertyValue('padding-top'), 10)
      + field.scrollHeight
      + parseInt(computed.getPropertyValue('padding-bottom'), 10)
      + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

    field.style.height = height + 'px';

  };

  document.addEventListener('input', function (event) {
    if (event.target.tagName.toLowerCase() !== 'textarea') return;
    autoExpand(event.target);
  }, false);

  return (
    <div className="container">
      <div className="starter-buttons" style={{ opacity: openInfospot ? '1' : '0', pointerEvents: openInfospot ? 'auto' : 'none' }}>
        <i className="fas fa-info-circle" style={{ cursor: 'pointer' }} onClick={() => setOpenInfospot(false)}></i>
      </div>
      {/* <div className="circle" style={{ opacity: openInfospot ? '0' : '1', opacity: openFinalInfospot ? '1' : '0', pointerEvents: openInfospot ? 'auto' : 'none' }} onHover={this}></div> */}
      { showRightStylePanel ? <div onClick={closeRightStylePanel} className="back-drop"></div> : null}
      <div className="main-box" style={{ opacity: openInfospot ? '0' : '1' }}>
        <LeftPanel addImage={addImage} addInfo={addInfo} addVideo={addVideo} setShowText={setShowText} setShowImage={setShowImage} setShowInfo={setShowInfo} setShowVideo={setShowVideo} />
        <div className="content">
          <TextModal showText={showText} setShowText={setShowText} setShowRightStylePanel={setShowRightStylePanel} />
          {showImage.slice(0, 3).map(item => (
            <ImageModal item={item} key={item.id} setShowImage={setShowImage} showImage={showImage} setShowRightPanel={setShowRightPanel} />
          ))}
          {showInfo.slice(0, 3).map(item => (
            <InfoModal item={item} key={item.id} showInfo={showInfo} setShowInfo={setShowInfo} setShowRightStylePanel={setShowRightStylePanel} />
          ))}
          {showVideo.slice(0, 3).map(item => (
            <VideoModal item={item} key={item.id} showVideo={showVideo} setShowVideo={setShowVideo} setShowRightPanel={setShowRightPanel} />
          ))}
          <div className="buttons">
            <div className="accept"><i className="fas fa-check" onClick={() => setOpenInfospot(true)} ></i ></div>
            <div className="close"><i className="fas fa-times" onClick={() => setOpenInfospot(true)}></i></div>
          </div>
        </div>
        <RightButtonsPanel showRightPanel={showRightPanel} addLink={addLink} />
        <RightStylePanel showRightStylePanel={showRightStylePanel} resetStyle={resetStyle} textBold={textBold} textItalic={textItalic} textUnderline={textUnderline} textStrike={textStrike} textTint={textTint} />
      </div>
    </div >
  );
}

export default App;
