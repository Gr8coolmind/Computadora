import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero({ onStart }: { onStart: () => void }) {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background Animated Blobs with lower speed in CSS */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
                <div className="absolute top-[40%] left-[60%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
            </div>

            <div className="z-10 text-center px-6 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // Elegant easing
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-text-main/5 border border-[var(--border-color)] text-primary text-xs font-semibold tracking-widest uppercase mb-8 backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"></span>
                        Timeline Interactivo 2026
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight leading-[1.1] text-text-main">
                        Evolución de la <br />
                        <span className="text-gradient drop-shadow-sm">Computadora</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed font-light text-balance">
                        De los engranajes victorianos a la supremacía cuántica. <br className="hidden md:block" />
                        Una experiencia visual sobre la historia de la tecnología.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={onStart}
                            className="group px-8 py-4 bg-primary text-white font-bold text-lg rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:bg-primary/90 transition-all flex items-center gap-3 relative overflow-hidden"
                            aria-label="Iniciar experiencia"
                        >
                            <span className="relative z-10">Ver línea de tiempo</span>
                            <ArrowDown className="w-5 h-5 relative z-10 group-hover:translate-y-1 transition-transform" />
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </motion.button>

                        {/* Summary button removed as requested ("menos el formulario") */}
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 8, 0] }}
                transition={{ delay: 1.5, duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-6 h-10 border-2 border-text-muted/30 rounded-full flex justify-center p-1.5 opacity-60">
                    <div className="w-1 h-2 bg-text-muted rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
}
