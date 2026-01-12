import { Github } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="border-t border-white/10 bg-black/40 pt-16 pb-8">
            <div className="section-padding flex flex-col items-center text-center">
                <div className="flex gap-6 mb-12">
                    <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                        <Github className="w-5 h-5 text-slate-400" />
                    </a>
                </div>

                <div className="w-full h-px bg-white/5 mb-8"></div>

                <div className="flex flex-col md:flex-row justify-between w-full items-center gap-4 text-sm text-slate-600">
                    <p>© {new Date().getFullYear()} <a href="https://gr8coolmind.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">gr8coolmind.com</a>. Creado por Julio Montilla.</p>
                    <button onClick={scrollToTop} className="hover:text-primary transition-colors">
                        Volver arriba ↑
                    </button>
                </div>
            </div>
        </footer>
    );
}
