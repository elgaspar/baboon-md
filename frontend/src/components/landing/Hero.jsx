import {Link} from "react-router-dom";
import ButtonLink from "@components/common/ButtonLink.jsx";

export default function Hero() {
    return (
        <section className="flex flex-col items-center text-center max-w-3xl px-4">
            <h1 className="text-3xl font-bold mb-4 font-heading">
                Turn your Markdown into clean, minimal PDF
            </h1>
            <p className="text-gray-600 mb-8">
                No clutter. No nonsense. Instant export.
            </p>

            <div className="flex space-x-4">
                <ButtonLink to="/editor" text="Try it now"/>
            </div>
        </section>
    );
}