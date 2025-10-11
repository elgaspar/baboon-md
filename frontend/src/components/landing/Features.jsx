export default function Features() {
    return (
        <section className=" w-full max-w-4xl px-6 text-center">
            <h2 className="text-2xl font-semibold mb-10 font-heading">What It Does</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
                <div>
                    <p className="text-accent text-xl mb-2 font-heading">🪶 Selectable PDFs</p>
                    <p className="text-gray-600">
                        Exports real text — sharp, searchable, and selectable.
                    </p>
                </div>
                <div>
                    <p className="text-accent text-xl mb-2 font-heading">⚡ Instant Preview</p>
                    <p className="text-gray-600">
                        Watch your PDF update as you type — instantly.
                    </p>
                </div>
                <div>
                    <p className="text-accent text-xl mb-2 font-heading">🔒 Secure & Private</p>
                    <p className="text-gray-600">
                        We convert, you download — no sign-ups, no data collection.
                    </p>
                </div>
            </div>
        </section>
    );
}