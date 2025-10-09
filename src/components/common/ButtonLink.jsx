import { Link } from "react-router-dom";

export default function ButtonLink({ to, text }) {
    return (
        <Link
            to={to}
            className="bg-accent hover:opacity-90 text-white rounded-md transition cursor-pointer px-6 py-3"
        >
            {text}
        </Link>
    );
}
