import { Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
    return (
        <section id="контакти" className="py-24">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-4">
                        Зв'яжіться з нами
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                        Потрібен евакуатор? Зателефонуйте — і ми приїдемо якнайшвидше!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {[
                        { icon: Phone, label: "Телефон", value: "+38 068 008 1338", href: "tel:+380680081338" },
                        { icon: MapPin, label: "Локація", value: "Львів, Львівська область та вся Україна" },
                        { icon: Clock, label: "Графік", value: "Цілодобово, 24/7" },
                    ].map(({ icon: Icon, label, value, href }, i) => (
                        <a
                            key={i}
                            href={href || "#"}
                            className="glass-card rounded-2xl p-8 text-center hover-lift block"
                        >
                            <div className="w-14 h-14 rounded-xl bg-foreground/5 flex items-center justify-center mx-auto mb-4">
                                <Icon className="w-7 h-7 text-foreground" />
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">{label}</p>
                            <p className="text-foreground font-semibold">{value}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
