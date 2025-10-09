export default function HeaderBar() {
    const handlePrint = () => {
        window.print();
    };

    const handleExportPDF = () => {
        alert('Not implemented yet 🐒'); // TODO
    };

    return (
        <div className="flex-1 w-full max-w mx-auto flex overflow-hidden">
            <div className="w-1/2 flex flex-col">
                <div
                    className="flex justify-between items-center px-4 py-2 border-b border-gray-300 bg-gray-100 h-12">
                    <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                        Markdown
                    </h2>
                </div>
            </div>

            <div className="w-1/2 flex flex-col border-l border-gray-300">
                <div
                    className="flex justify-between items-center px-4 py-2 border-b border-gray-300 bg-gray-50 h-12">
                    <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                        Preview
                    </h2>
                    <div className="space-x-2">
                        <button
                            onClick={handlePrint}
                            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-1.5 rounded-md transition cursor-pointer"
                        >
                            Print
                        </button>

                        <button
                            onClick={handleExportPDF}
                            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-1.5 rounded-md transition cursor-pointer"
                        >
                            Export PDF
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}