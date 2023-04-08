import React from "react";
import { render } from "storyblok-rich-text-react-renderer";

const RichText = ({ document }) => {
    // document is the rich text object you receive from Storyblok,
    // in the form { type: "doc", content: [ ... ] }
    return <div className="storyblok-rich-text">{render(document)}</div>;
};

export default RichText;
