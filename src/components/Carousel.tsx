import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import evak1 from "../assets/evak/evak_1.webp";
import evak2 from "../assets/evak/evak_2.webp";
import evak3 from "../assets/evak/evak_3.webp";
import evak4 from "../assets/evak/evak_4.webp";
import evak5 from "../assets/evak/evak_5.webp";
import evak6 from "../assets/evak/evak_6.webp";
import evak7 from "../assets/evak/evak_7.webp";
import evak8 from "../assets/evak/evak_8.webp";

const images = [evak1, evak2, evak3, evak4, evak5, evak6, evak7, evak8];

const OurWorksSection = () => {
    const [current, setCurrent] = useState(0);

    const prev = () => {
        setCurrent((p) => (p === 0 ? images.length - 1 : p - 1));
    };

    const next = () => {
        setCurrent((p) => (p === images.length - 1 ? 0 : p + 1));
    };

    useEffect(() => {
        const interval = setInterval(next, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full" id="про нас">
            {/* TITLE */}
            <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
                    Наші роботи
                </h2>
                <p className="text-muted-foreground mt-3">
                    Евакуації авто у Львові, області та по Україні
                </p>
            </div>

            {/* CONTENT */}
            <div className="container mx-auto flex flex-col lg:flex-row gap-10 items-center">

                {/* CAROUSEL */}
                <div className="relative w-full lg:w-1/2">
                    <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden">
                        {images.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                                    i === current ? "opacity-100" : "opacity-0"
                                }`}
                            />
                        ))}
                    </div>

                    {/* controls */}
                    <button
                        onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
                    >
                        <ChevronLeft />
                    </button>

                    <button
                        onClick={next}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
                    >
                        <ChevronRight />
                    </button>

                    {/* dots */}
                    <div className="flex justify-center gap-2 mt-4">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-2.5 h-2.5 rounded-full transition ${
                                    i === current ? "bg-black scale-125" : "bg-black/30"
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* DESCRIPTION */}
                <div className="w-full lg:w-1/2 space-y-5">
                    <h3 className="text-2xl md:text-3xl font-bold">
                        Кожен виїзд — це реальна робота
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                        Тут зібрані реальні евакуації авто,
                        які ми виконували у Львові та по Україні.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                        Кожен кейс — це різні умови: ДТП, складні підйоми, низькі авто та термінові виклики вночі.
                        Ми працюємо швидко, акуратно і без ризику для авто.
                    </p>

                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✔ Реальні виїзди 24/7</li>
                        <li>✔ Безпечне завантаження авто</li>
                        <li>✔ Робота з будь-якими типами транспорту</li>
                        <li>✔ Швидкий час реагування</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default OurWorksSection;
