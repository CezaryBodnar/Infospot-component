import React from 'react'

export const Functions = () => {


    function getNewFontColor() {
        var symbols, color;
        symbols = "0123456789ABCDEF";

        color = "#";
        for (var i = 0; i < 6; i++) {
            color = color + symbols[Math.floor(Math.random() * 16)];
        }
        document.querySelector(".text-input").style.color = color;
    }

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

    const removePreview = e => {
        e.preventDefault();

    };

    const textBold = e => {
        e.preventDefault();
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
        <div>

        </div>
    )
}

