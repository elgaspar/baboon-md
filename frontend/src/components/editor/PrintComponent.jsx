import { useRef, useImperativeHandle, forwardRef } from "react";

const PrintComponent = forwardRef(({ markdown }, ref) => {
    const iframeRef = useRef(null);

    const handlePrint = () => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        iframe.onload = () => {
            iframe.contentWindow.__MARKDOWN__ = markdown;
            iframe.contentWindow.dispatchEvent(new Event("markdownUpdate"));

            const handleReady = () => {
                iframe.contentWindow.removeEventListener("previewReady", handleReady);
                iframe.contentWindow.focus();
                iframe.contentWindow.print();
            };

            iframe.contentWindow.addEventListener("previewReady", handleReady);
        };

        iframe.src = "/preview";
    };

    useImperativeHandle(ref, () => ({
        print: handlePrint
    }));

    return (
        <iframe
            ref={iframeRef}
            style={{ display: "none" }}
        />
    );
});

export default PrintComponent;
