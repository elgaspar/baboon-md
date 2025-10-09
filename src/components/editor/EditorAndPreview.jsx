import React from "react";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";


export default function EditorAndPreview() {
    const mkdStr = `## Hello, Jungle!

This is **BaboonMD**.
`;

    const [value, setValue] = React.useState(mkdStr);

    return (
        <div className="h-[calc(100vh-12.5rem)] overflow-hidden">
            <MDEditor
                value={value}
                onChange={setValue}
                height="100%"
                visibleDragbar={false}
                extraCommands={[]}
            />
        </div>
    );
}
