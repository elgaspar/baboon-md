import Navbar from "@components/common/Navbar.jsx";
import Footer from "@components/common/Footer.jsx";
import {useState} from "react";

export default function EditorPage() {
    const [markdown, setMarkdown] = useState(`## Hello, Jungle!
This is **BaboonMD**.`);

    const handleExportPDF = () => {
        window.print(); // TODO
    };

    return (
        <div className="flex flex-col min-h-screen bg-white text-gray-900 overflow-hidden">
            <Navbar/>

            <main className="flex-1 flex flex-col px-6 py-4">
                <div className="flex-1 w-full max-w-6xl mx-auto flex border border-gray-200 rounded-lg overflow-hidden">
                    <div className="w-1/2 flex flex-col border-r border-gray-200">
                        <div
                            className="flex justify-between items-center px-4 py-2 border-b border-gray-200 bg-gray-100 h-12">
                            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                Markdown
                            </h2>
                        </div>

                        <textarea
                            value={markdown}
                            onChange={(e) => setMarkdown(e.target.value)}
                            className="flex-1 p-4 font-mono text-sm overflow-auto hide-scrollbar bg-gray-50 resize-none focus:outline-none"
                            spellCheck="false"
                        />
                    </div>

                    <div className="w-1/2 flex flex-col">
                        <div
                            className="flex justify-between items-center px-4 py-2 border-b border-gray-200 bg-gray-50 h-12">
                            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                Preview
                            </h2>
                            <button
                                onClick={handleExportPDF}
                                className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-1.5 rounded-md transition cursor-pointer"
                            >
                                Export PDF
                            </button>
                        </div>

                        <div className="flex-1 p-4 overflow-auto hide-scrollbar bg-white">
                            <p className="font-semibold text-lg">Hello, Jungle!</p>
                            <p className="text-gray-600">
                                This is <strong>BaboonMD</strong>.
                                <br />
                                <br />
                                {markdown}
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    );
}
