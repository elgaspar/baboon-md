import React, {useState} from "react";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import Button from "./Button.jsx";
import saveAsPdf from "@utils/export.jsx";
import {toast, Toaster} from "react-hot-toast";

export default function EditorAndPreview({className}) {
    const DEFAULT_MARKDOWN = "# Hello Jungle!\n\nThis is **BaboonMD**.";
    const [markdown, setMarkdown] = useState(DEFAULT_MARKDOWN);
    const [isLoading, setIsLoading] = useState(false);

    const handlePrint = () => {
        window.print();
    };

    const handleExportPDF = async () => {
        setIsLoading(true);
        toast.dismiss();

        try {
            await toast.promise(
                saveAsPdf(markdown),
                {
                    loading: 'The baboons are working on it!',
                    success: 'PDF ready! Delivered straight from the jungle.',
                    error: 'Oops! The baboons made a mess. Try again later.'
                },
                {
                    style: {
                        maxWidth: "none",
                    },
                    success: {
                        duration: 3000,
                    },
                }
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={className}>
            <Toaster />
            <div className="flex-1 w-full max-w mx-auto flex overflow-hidden">
                <div className="w-1/2 flex flex-col">
                    <div
                        className="flex justify-between items-center px-4 py-2 border-b border-gray-300 bg-gray-100 h-12">
                        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide font-heading">
                            Markdown
                        </h2>
                    </div>
                </div>

                <div className="w-1/2 flex flex-col border-l border-gray-300">
                    <div
                        className="flex justify-between items-center px-4 py-2 border-b border-gray-300 bg-gray-50 h-12">
                        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide font-heading">
                            Preview
                        </h2>
                        <div className="space-x-2">
                            <Button onClick={handlePrint} text="Print"/>
                            <Button onClick={handleExportPDF} text="Export PDF" disabled={isLoading} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[calc(100vh-15rem)] md:h-[calc(100vh-13.2rem)] overflow-hidden" data-color-mode="light">
                <MDEditor
                    value={markdown}
                    onChange={setMarkdown}
                    height="100%"
                    visibleDragbar={false}
                    extraCommands={[]}
                />
            </div>
        </div>
    );
}
