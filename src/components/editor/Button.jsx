export default function Button({ onClick, text }) {
    return (
        <button
            onClick={onClick}
            className="bg-accent hover:opacity-90 text-white rounded-md transition cursor-pointer px-3 py-1.5 text-sm"
        >
            {text}
        </button>
    );
}
