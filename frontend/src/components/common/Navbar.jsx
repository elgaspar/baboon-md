import { Link } from "react-router-dom";
import logo from "@assets/react.svg";

export default function Navbar() {
    return (
        <header className="w-full flex justify-between items-center px-8 py-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
                <Link to="/" className="flex items-center space-x-2">
                    <img src={logo} alt="BaboonMD Logo" className="w-6 h-6" />
                    <span className="font-semibold text-lg">BaboonMD</span>
                </Link>
            </div>

            <nav className="flex items-center space-x-6">
                <a
                    href="https://github.com/elgaspar/baboonmd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80"
                >
                    GitHub
                </a>
            </nav>
        </header>
    );
}
