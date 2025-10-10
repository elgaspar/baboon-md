import Navbar from "@components/common/Navbar.jsx";
import Footer from "@components/common/Footer.jsx";
import EditorAndPreview from "@components/editor/EditorAndPreview.jsx";
import HeaderBar from "@components/editor/HeaderBar.jsx";

export default function EditorPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-gray-900 overflow-hidden">
            <Navbar/>

            <main className="flex-1 flex flex-col m-11 mb-0 border border-gray-300 rounded-lg shadow-sm overflow-hidden">
                <HeaderBar />
                <EditorAndPreview/>
            </main>

            <Footer/>
        </div>
    );
}


