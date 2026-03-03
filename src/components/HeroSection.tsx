import {CheckCircle, Phone} from "lucide-react";
import truckCutout from "../assets/video.mp4";
import { InstagramLogoIcon, ChatBubbleIcon, PaperPlaneIcon } from "@radix-ui/react-icons";

const services = [
    "Перевезення від 1000 грн",
    "Евакуатор Львів, Львівська область та Україна",
    "Міжнародні перевезення вашого авто",
    "Забір авто з митниці/логістичний центрів імпортера під ключ",
    "Евакуація автомобіля після ДТП",
    "Працюємо 24/7 без вихідних",
];

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="послуги">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{backgroundImage: `url('/images/hero-bg.jpg')`}}
            />
            <div
                className="absolute inset-0"
                style={{background: "var(--hero-overlay)"}}
            />

            <div className="container relative z-10 py-16">
                <div className="max-w-3xl mb-10 opacity-0 animate-fade-in-up">
                    <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tight mb-4 text-foreground">
                        Евакуатор 24/7
                    </h1>
                    <p className="font-heading text-2xl md:text-3xl font-semibold uppercase tracking-wide text-muted-foreground">
                        ARS Racing — Львів
                    </p>
                </div>

                <div
                    className="glass-card rounded-2xl p-6 md:p-10 flex flex-col lg:flex-row items-center gap-8 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: "0.3s" }}
                >
                    {/* Image: left on mobile, right on desktop */}
                    <div
                        className="flex-1 flex max-w-lg justify-center opacity-0 animate-slide-in-right order-1 lg:order-2"
                        style={{ animationDelay: "0.6s" }}
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            src={truckCutout}
                            className="w-full max-w-lg object-contain"
                        />
                        {/*<img*/}
                        {/*    src={truckCutout}*/}
                        {/*    alt="Евакуатор ARS Racing — Львів"*/}
                        {/*    className="w-full max-w-lg object-contain animate-float"*/}
                        {/*/>*/}
                    </div>

                    {/* Text: right on mobile, left on desktop */}
                    <div className="flex-1 order-2 lg:order-1">
                        <ul className="space-y-4">
                            {services.map((service, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-3 opacity-0 animate-stagger-in"
                                    style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                                >
                                    <CheckCircle className="w-6 h-6 text-foreground flex-shrink-0" />
                                    <span className="text-foreground font-medium">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CTA Buttons */}

                <div
                    className="mt-8 w-full flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: "0.8s" }}
                >
                    <a
                        href="https://www.instagram.com/lviv.evakuator"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-3 bg-secondary text-foreground py-5 px-8 rounded-xl font-heading text-lg font-semibold uppercase tracking-wide border border-border transition-all transform hover:scale-105 hover:bg-accent/80"
                    >
                        <InstagramLogoIcon className="w-6 h-6" />
                        Instagram
                    </a>
                    <a
                        href="viber://chat?number=%2B380680081338"
                        className="flex-1 flex items-center justify-center gap-3 bg-secondary text-foreground py-5 px-8 rounded-xl font-heading text-lg font-semibold uppercase tracking-wide border border-border transition-all transform hover:scale-105 hover:bg-accent/80"
                    >
                        <Phone className="w-6 h-6" />
                        Viber
                    </a>

                    <a
                        href="https://wa.me/380680081338"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-3 bg-secondary text-foreground py-5 px-8 rounded-xl font-heading text-lg font-semibold uppercase tracking-wide border border-border transition-all transform hover:scale-105 hover:bg-accent/80"
                    >
                        <ChatBubbleIcon className="w-6 h-6" />
                        WhatsApp
                    </a>

                    <a
                        href="https://t.me/+380680081338"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-3 bg-secondary text-foreground py-5 px-8 rounded-xl font-heading text-lg font-semibold uppercase tracking-wide border border-border transition-all transform hover:scale-105 hover:bg-accent/80"
                    >
                        <PaperPlaneIcon className="w-6 h-6" />
                        Telegram
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
