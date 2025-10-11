import {Link} from "react-router-dom";
import ButtonLink from "@components/common/ButtonLink.jsx";
import demoImage from "@assets/demo.png";

export default function Hero() {
    return (
        <section className="flex flex-col items-center text-center max-w-4xl px-6">
            <h1 className="text-4xl font-bold mb-4 font-heading">
                Turn your Markdown into clean, minimal PDF
            </h1>
            <p className="text-gray-600 mb-8">
                No clutter. No nonsense. Instant export.
            </p>

            <div className="flex space-x-4">
                <ButtonLink to="/editor" text="Try it now"/>
            </div>

            <img
                src={demoImage}
                alt="BaboonMD editor and live PDF preview"
                className="w-8/12 h-auto mt-10 border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            />
        </section>
    );
}