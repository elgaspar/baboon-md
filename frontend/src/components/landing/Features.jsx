export default function Features() {
    return (
        <section className=" w-full max-w-4xl px-6 text-center">
            <h2 className="text-2xl font-semibold mb-10 font-heading">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
                <div>
                    <p className="text-accent text-xl mb-2 font-heading">⚡ Instant Preview</p>
                    <p className="text-gray-600">
                        See your PDF evolve as you type — no delays, no refreshes.
                    </p>
                </div>
                <div>
                    <p className="text-accent text-xl mb-2 font-heading">🪶 Selectable PDFs</p>
                    <p className="text-gray-600">
                        Text remains crisp and copyable — no image-based exports.
                    </p>
                </div>
                <div>
                    <p className="text-accent text-xl mb-2 font-heading">🔒 Clean & Private</p>
                    <p className="text-gray-600">
                        Everything runs locally in your browser — your data stays yours.
                    </p>
                </div>
            </div>
        </section>
    );
}