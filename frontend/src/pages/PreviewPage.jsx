import MDEditor from "@uiw/react-md-editor";
import React, {useEffect, useState} from "react";
import { useLocation } from 'react-router-dom';

export default function PreviewPage() {
    const { state } = useLocation();
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        if (window.__MARKDOWN__) {
            setMarkdown(window.__MARKDOWN__);
        }
        const handleUpdate = () => {
            if (window.__MARKDOWN__) {
                setMarkdown(window.__MARKDOWN__);
            }
        };
        window.addEventListener("markdownUpdate", handleUpdate);
        return () => window.removeEventListener("markdownUpdate", handleUpdate);
    }, [state]);

    return (
        <div className="h-screen" data-color-mode="light">
            <MDEditor
                value={markdown}
                hideToolbar={true}
                height={null}
                minHeight={null}
                maxHeight={null}
                preview="preview"
                visibleDragbar={false}
                enableScroll={false}
            />
        </div>
    );
}
