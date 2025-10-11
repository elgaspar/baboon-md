export default function Button({onClick, text, disabled = false}) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`bg-accent text-white rounded-md transition px-3 py-1.5 text-sm ${disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90 cursor-pointer"}`}
        >
            {text}
        </button>
    );
}
