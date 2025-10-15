export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="m-3 text-gray-500 text-sm text-center px-4">
            Crafted with ❤️ & ☕ by{' '}
            <a
                href="https://github.com/elgaspar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:opacity-80"
            >
                Elias Gasparis
            </a>
            <span className="mx-2 hidden md:inline">·</span>
            <span className="block mt-2 md:inline md:m-0">© {year} BaboonMD</span>
        </footer>
    );
}
