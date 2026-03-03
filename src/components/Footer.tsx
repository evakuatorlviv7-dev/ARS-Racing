const Footer = () => {
    return (
        <footer className="border-t border-border py-8">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                <p className="font-heading text-lg font-bold text-foreground tracking-wider">
                    ARS <span className="text-primary">RACING</span>
                </p>
                <p>© {new Date().getFullYear()} ARS Racing. Всі права захищені.</p>
            </div>
        </footer>
    );
};

export default Footer;
