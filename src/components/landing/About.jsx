export default function About() {
    return (
        <section className="max-w-2xl px-6 text-center">
            <h2 className="text-2xl font-semibold mb-6">About</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
                BaboonMD was born out of frustration. I wanted a Markdown-to-PDF tool
                that just <em>worked</em> — fast, minimal, and private. No bloated
                editors. No cloud nonsense. Just Markdown rendered beautifully.
            </p>
            <p className="text-gray-700">
                Handcrafted by{" "}
                <a
                    href="https://github.com/elgaspar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-80"
                >
                    Elias Gasparis
                </a>{" "}
                — a slightly over-caffeinated engineer ☕
            </p>
        </section>
    );
}