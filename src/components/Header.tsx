import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-card animate-fade-in">
            <div className="container flex items-center justify-between py-4">
                <a
                    href="#"
                    className="font-heading text-2xl font-bold tracking-wider text-foreground uppercase hover-scale inline-block"
                >
                    ARS Racing
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    {["Послуги", "Про нас", "Контакти"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors line-reveal"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    {/* Desktop call button */}
                    <a
                        href="tel:+380680081338"
                        className="hidden sm:flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-lg font-medium text-sm hover-scale"
                    >
                        <Phone className="w-4 h-4" />
                        +38 068 008 1338
                    </a>

                    {/* Mobile call button */}
                    <a
                        href="tel:+380680081338"
                        className="flex md:hidden items-center justify-center p-2 text-foreground hover-scale"
                        aria-label="Call us"
                    >
                        <Phone className="w-6 h-6" />
                    </a>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-foreground hover-scale"
                    >
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden border-t border-border glass-card animate-fade-in">
                    <nav className="container flex flex-col gap-4 py-6">
                        {["Послуги", "Про нас", "Контакти"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setMenuOpen(false)}
                                className="text-foreground font-medium hover:text-muted-foreground transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="tel:+380680081338"
                            className="flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-lg font-medium justify-center"
                        >
                            <Phone className="w-4 h-4" />
                            +38 068 008 1338
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
