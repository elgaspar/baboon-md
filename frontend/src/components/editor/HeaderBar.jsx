import Button from "@components/editor/Button.jsx";

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
                        <Button onClick={handlePrint} text="Print" />
                        <Button onClick={handleExportPDF} text="Save as PDF" />
                    </div>
                </div>
            </div>
        </div>
    );
}