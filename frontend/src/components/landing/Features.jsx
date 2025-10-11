import { FileText } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Lock } from 'lucide-react';


export default function Features() {

    const features = [
        {
            icon: FileText,
            title: "Selectable PDFs",
            description: "Exports real text — sharp, searchable, and selectable."
        },
        {
            icon: Zap,
            title: "Instant Preview",
            description: "Watch your PDF update as you type — instantly."
        },
        {
            icon: Lock,
            title: "Secure & Private",
            description: "We convert, you download — no sign-ups, no data collection."
        }
    ];


    return (
        <section className="w-full max-w-4xl px-6 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                {features.map(({ icon: Icon, title, description }) => (
                    <div className="p-4 rounded-xl transition hover:bg-gray-50 mx-auto md:mx-0" key={title}>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-2 mb-3 text-accent">
                            <div className="bg-accent/10 p-2 rounded-full">
                                <Icon className="w-5 h-5 text-accent" />
                            </div>
                            <p className="text-xl font-heading">{title}</p>
                        </div>
                        <p className="text-gray-600 text-center md:text-left">{description}</p>
                    </div>
                ))}
            </div>
        </section>

    );
}