import MDEditor from "@uiw/react-md-editor";
import React, {useEffect, useState} from "react";
import { useLocation } from 'react-router-dom';

export default function PreviewPage() {
    const location = useLocation();
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        const updateMarkdown = () => {
            if (window.__MARKDOWN__) {
                setMarkdown(window.__MARKDOWN__);
            }
        };

        if (location.state?.markdown) {
            setMarkdown(location.state.markdown);
        } else if (window.__MARKDOWN__) {
            setMarkdown(window.__MARKDOWN__);
        }

        window.addEventListener("markdownUpdate", updateMarkdown);
        return () => window.removeEventListener("markdownUpdate", updateMarkdown);
    }, [location.state]);

    useEffect(() => {
        if (!markdown) return;

        const ensureImagesLoaded = () => {
            const images = Array.from(document.querySelectorAll("img"));
            if (images.length === 0) {
                window.dispatchEvent(new Event("previewReady"));
                return;
            }

            let loaded = 0;
            images.forEach((img) => {
                if (img.complete) {
                    loaded++;
                    if (loaded === images.length) {
                        window.dispatchEvent(new Event("previewReady"));
                    }
                } else {
                    img.addEventListener("load", () => {
                        loaded++;
                        if (loaded === images.length) {
                            window.dispatchEvent(new Event("previewReady"));
                        }
                    });
                    img.addEventListener("error", () => {
                        loaded++;
                        if (loaded === images.length) {
                            window.dispatchEvent(new Event("previewReady"));
                        }
                    });
                }
            });
        };

        requestAnimationFrame(ensureImagesLoaded);
    }, [markdown]);


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
