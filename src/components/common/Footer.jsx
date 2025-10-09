export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className=" mb-3 text-gray-500 text-sm text-center px-4">
            © {year} BaboonMD ·{" "}
            <a
                href="https://github.com/elgaspar"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80"
            >
                Elias Gasparis
            </a>
        </footer>
    );
}
