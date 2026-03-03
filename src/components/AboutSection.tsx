import { Shield, Clock, MapPin, Truck } from "lucide-react";

const features = [
    { icon: Clock, title: "24/7", desc: "Працюємо цілодобово без вихідних" },
    { icon: MapPin, title: "Львів та Україна", desc: "Доставка по всій країні та за кордон" },
    { icon: Shield, title: "Гарантія", desc: "Повна відповідальність за ваше авто" },
    { icon: Truck, title: "Від 1000 грн", desc: "Доступні ціни на перевезення" },
];

const AboutSection = () => {
    return (
        <section id="про нас" className="py-24 relative">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-4">
                        Чому ARS Racing?
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Ми — команда професіоналів з багаторічним досвідом перевезення автомобілів у Львові та по всій Україні.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map(({ icon: Icon, title, desc }, i) => (
                        <div
                            key={i}
                            className="glass-card rounded-2xl p-8 text-center hover-lift group cursor-default"
                        >
                            <div className="w-16 h-16 rounded-xl bg-foreground/5 flex items-center justify-center mx-auto mb-5 group-hover:bg-foreground/10 transition-colors duration-300">
                                <Icon className="w-8 h-8 text-foreground transition-transform duration-300 group-hover:scale-110" />
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{title}</h3>
                            <p className="text-muted-foreground text-sm">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
