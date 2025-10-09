import {Link} from "react-router-dom";

export default function Hero() {
    return (
        <section className="flex flex-col items-center text-center max-w-3xl px-4">
            <h1 className="text-4xl font-bold mb-4">
                From Markdown to PDF — with attitude.
            </h1>
            <p className="text-gray-600 mb-8">
                Markdown in. PDF out. Nothing in between.
            </p>

            <div className="flex space-x-4">
                <Link
                    to="/editor"
                    className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition "
                >
                    Try It Now
                </Link>
            </div>
        </section>
    );
}