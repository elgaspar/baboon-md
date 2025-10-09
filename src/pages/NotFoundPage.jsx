import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 text-center px-6">
            <div className="text-6xl font-bold mb-2">404</div>
            <div className="text-xl text-gray-700 mb-4 font-medium">
                Lost in the jungle?
            </div>
            <div className="text-gray-500 mb-8 italic">
                No PDFs grow here — just curious baboons chuckling in the trees 🐒
            </div>
            <Link
                to="/"
                className="bg-accent hover:opacity-90 text-white font-semibold px-6 py-3 rounded-md transition"
            >
                Back to Home
            </Link>
        </div>
    );
}
