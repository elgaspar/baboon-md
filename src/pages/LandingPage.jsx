import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center">
            <div className="text-3xl font-bold mb-4">Hello Jungle! 🐒</div>
            <div className="text-gray-300 mb-6">TODO: Landing page</div>

            <Link
                to="/editor"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition"
            >
                Go to Editor
            </Link>
        </div>
    );
}
