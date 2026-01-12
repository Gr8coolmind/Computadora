import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Info, X, Zap } from 'lucide-react';

export default function Hero({ onStart }: { onStart: () => void }) {
    const [showSummary, setShowSummary] = useState(false);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background Animated Blobs with lower speed in CSS */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
                <div className="absolute top-[40%] left-[60%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
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
                        className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-semibold tracking-widest uppercase mb-8 backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#22d3ee]"></span>
                        Timeline Interactivo 2026
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight leading-[1.1]">
                        Evolución de la <br />
                        <span className="text-gradient drop-shadow-2xl">Computadora</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                        De los engranajes victorianos a la supremacía cuántica. <br className="hidden md:block" />
                        Una experiencia visual sobre la historia de la tecnología.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={onStart}
                            className="group px-8 py-4 bg-primary text-slate-950 font-bold text-lg rounded-full shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.6)] hover:bg-cyan-300 transition-all flex items-center gap-3 relative overflow-hidden"
                            aria-label="Iniciar experiencia"
                        >
                            <span className="relative z-10">Ver línea de tiempo</span>
                            <ArrowDown className="w-5 h-5 relative z-10 group-hover:translate-y-1 transition-transform" />
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setShowSummary(true)}
                            className="px-8 py-4 bg-transparent border border-white/20 text-slate-200 font-medium text-lg rounded-full hover:border-white/40 transition-all flex items-center gap-3"
                            aria-label="Ver resumen rápido"
                        >
                            Resumen rápido
                            <Info className="w-5 h-5 text-slate-400" />
                        </motion.button>
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
                <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center p-1.5 opacity-60">
                    <div className="w-1 h-2 bg-slate-400 rounded-full"></div>
                </div>
            </motion.div>

            {/* Summary Modal */}
            <AnimatePresence>
                {showSummary && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl"
                        onClick={() => setShowSummary(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 10 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-slate-900/90 border border-white/10 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl relative"
                        >
                            {/* Decorative header gradient */}
                            <div className="h-2 w-full bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500"></div>

                            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                                <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-white">
                                    <Zap className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                                    Resumen Histórico
                                </h2>
                                <button
                                    onClick={() => setShowSummary(false)}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white"
                                    aria-label="Cerrar modal"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="p-8 max-h-[60vh] overflow-y-auto space-y-8 custom-scrollbar">
                                <TimelineStep
                                    color="bg-slate-500"
                                    title="Orígenes (Pre-1940)"
                                    desc="Cálculo mecánico, engranajes y tarjetas perforadas."
                                    sub="Ábacos y Máquinas Analíticas."
                                />
                                <TimelineStep
                                    color="bg-orange-500"
                                    title="1ª & 2ª Gen (1940-1963)"
                                    desc="De válvulas gigantes a transistores eficientes."
                                    sub="ENIAC, UNIVAC."
                                />
                                <TimelineStep
                                    color="bg-cyan-500"
                                    title="3ª & 4ª Gen (1964-Presente)"
                                    desc="Circuitos Integrados y el nacimiento del Microprocesador."
                                    sub="PC, Apple, Internet."
                                />
                                <TimelineStep
                                    color="bg-fuchsia-500"
                                    title="5ª Gen & Futuro"
                                    desc="IA, Nube, Quantum y Conectividad total."
                                    sub="La era digital definitiva."
                                    isLast
                                />
                            </div>

                            <div className="p-6 border-t border-white/5 bg-white/[0.02] text-center">
                                <button
                                    onClick={onStart}
                                    className="text-primary hover:text-cyan-300 font-semibold text-sm tracking-wide uppercase transition-colors"
                                >
                                    Explorar la línea de tiempo completa &rarr;
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

function TimelineStep({ color, title, desc, sub, isLast = false }: { color: string, title: string, desc: string, sub: string, isLast?: boolean }) {
    return (
        <div className="flex gap-6 group">
            <div className="flex flex-col items-center">
                <div className={`w-4 h-4 rounded-full ${color} mb-1 ring-4 ring-white/5 group-hover:ring-white/10 transition-all`}></div>
                {!isLast && <div className="w-0.5 h-full bg-slate-800 group-hover:bg-slate-700 transition-colors my-1"></div>}
            </div>
            <div className="pb-2">
                <h3 className="text-xl font-bold text-slate-200 mb-1">{title}</h3>
                <p className="text-slate-400 leading-relaxed">{desc} <span className="text-slate-500 block mt-1 font-medium text-sm">{sub}</span></p>
            </div>
        </div>
    );
}
