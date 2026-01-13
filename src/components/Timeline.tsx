import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { timelineData } from '../data.tsx';
import { ChevronRight, X, Cpu, Sparkles } from 'lucide-react';
import clsx from 'clsx';

export default function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedItem, setSelectedItem] = useState<(typeof timelineData)[0] | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const scrollToId = (id: string) => {
        const el = document.getElementById(`timeline-item-${id}`);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <section id="timeline" ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
            <div className="section-padding relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-primary font-mono tracking-[0.2em] text-xs uppercase mb-3 block font-bold"
                    >
                        Cronología
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-text-main"
                    >
                        Hitos Históricos
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-text-muted max-w-xl mx-auto mb-12 text-lg font-light leading-relaxed text-balance"
                    >
                        Explora los momentos que definieron nuestra era digital through a journey of innovation.
                    </motion.p>

                    {/* Timeline Navigator - Glass & Premium */}
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto mb-24 sticky top-6 z-40 p-2.5 rounded-full glass border border-[var(--border-color)]"
                    >
                        {timelineData.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToId(item.id)}
                                className="px-4 py-1.5 text-xs md:text-sm rounded-full bg-transparent hover:bg-text-main/5 text-text-muted hover:text-text-main transition-all border border-transparent hover:border-[var(--border-color)]"
                                aria-label={`Ir a ${item.year}`}
                            >
                                {item.year.split(' ')[0]}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Central Line (Desktop) - The "Beam" */}
                <div className="absolute left-4 md:left-1/2 top-96 bottom-20 w-px bg-text-main/10 transform md:-translate-x-1/2 z-0 hidden md:block">
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="w-full h-full bg-gradient-to-b from-primary via-secondary to-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.8)]"
                    />
                </div>

                <div className="space-y-16 md:space-y-32 relative z-10">
                    {timelineData.map((item, index) => (
                        <TimelineItem
                            key={item.id}
                            item={item}
                            index={index}
                            onClick={() => setSelectedItem(item)}
                        />
                    ))}
                </div>
            </div>

            {/* Details Modal/Drawer */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl"
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-surface border border-[var(--border-color)] rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col md:flex-row group"
                        >
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 rounded-full transition-colors z-[60] text-white backdrop-blur-md border border-white/10"
                                aria-label="Cerrar"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Image Side */}
                            <div className="w-full md:w-5/12 h-64 md:h-auto relative overflow-hidden">
                                <motion.img
                                    initial={{ scale: 1.1 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    src={selectedItem.image}
                                    alt={selectedItem.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r ${selectedItem.color} opacity-60 mix-blend-multiply`}></div>
                                {/* Gradient for text readability on image */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-black/60"></div>

                                <div className="absolute bottom-6 left-6 z-10 md:hidden">
                                    <span className="text-xs font-bold text-white/90 uppercase tracking-wider mb-2 block">{selectedItem.year}</span>
                                    <h3 className="text-3xl font-bold text-white shadow-black drop-shadow-md">{selectedItem.title}</h3>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-7/12 p-8 md:p-12 relative overflow-y-auto custom-scrollbar bg-surface text-text-main">
                                <div className="hidden md:block mb-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 rounded-xl bg-text-main/5 border border-[var(--border-color)] text-2xl text-text-main">
                                            {selectedItem.icon}
                                        </div>
                                        <span className="text-sm font-bold text-primary uppercase tracking-[0.15em]">{selectedItem.year}</span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-bold text-text-main leading-tight">{selectedItem.title}</h3>
                                </div>

                                <div className="space-y-8">
                                    <div className={`p-6 rounded-2xl bg-gradient-to-br ${selectedItem.color} bg-opacity-5 border border-[var(--border-color)] relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-text-main/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <h4 className="flex items-center gap-2 text-sm font-bold mb-3 text-text-main uppercase tracking-wider relative z-10">
                                            <Cpu className="w-4 h-4" /> Tecnología Base
                                        </h4>
                                        <p className="text-xl font-medium text-text-main/90 leading-relaxed relative z-10">{selectedItem.tech}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-bold mb-4 flex items-center gap-2 text-text-muted uppercase tracking-wider"><Sparkles className="w-4 h-4 text-yellow-500" /> Características Clave</h4>
                                        <ul className="grid sm:grid-cols-2 gap-3">
                                            {selectedItem.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 p-3 rounded-lg bg-surface border border-[var(--border-color)] hover:border-primary/30 transition-colors text-sm text-text-main/80 shadow-sm">
                                                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0`} />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-bold mb-3 text-text-muted uppercase tracking-wider">Ejemplos Representativos</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedItem.examples.map((ex, i) => (
                                                <span key={i} className="px-3 py-1 bg-text-main/5 border border-[var(--border-color)] rounded-full text-xs font-medium text-text-muted hover:text-primary hover:bg-primary/5 transition-colors cursor-default">
                                                    {ex}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

function TimelineItem({ item, index, onClick }: { item: (typeof timelineData)[0], index: number, onClick: () => void }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            id={`timeline-item-${item.id}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={clsx(
                "flex flex-col md:flex-row items-center gap-10 md:gap-0 relative scroll-mt-48",
                isEven ? "md:flex-row-reverse" : ""
            )}
        >
            {/* Timeline Node (The Ring) */}
            <div className="absolute left-4 md:left-1/2 top-8 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center z-20 hidden md:flex">
                <div className="w-16 h-16 rounded-full bg-surface border-4 border-background z-10 group-hover:border-primary transition-colors duration-500 flex items-center justify-center p-3 text-text-muted group-hover:text-primary shadow-lg">
                    {item.icon}
                    <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                </div>
            </div>

            {/* Mobile Line Node */}
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-text-main/10">
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background shadow-md"></div>
            </div>

            {/* Content Side */}
            <div className={clsx("w-full md:w-1/2 pl-12 md:pl-0", isEven ? "md:pl-16 md:text-left" : "md:pr-16 md:text-right")}>
                <div
                    onClick={onClick}
                    className={clsx(
                        "group cursor-pointer relative",
                        "transition-all duration-300"
                    )}
                >
                    {/* Floating Card Design */}
                    <div className="glass-card p-6 md:p-8 relative overflow-hidden group-hover:-translate-y-3 transition-transform duration-500 will-change-transform">
                        {/* Glow Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                        <span className="inline-flex items-center gap-2 text-primary font-mono text-xs font-bold tracking-widest uppercase mb-4">
                            <span className="w-8 h-px bg-primary/50"></span>
                            {item.year}
                        </span>

                        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-text-main group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-text-muted text-base md:text-lg font-light leading-relaxed mb-6">{item.subtitle}</p>

                        <div className={clsx("flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-widest group-hover:gap-3 transition-all", isEven ? "" : "md:justify-end")}>
                            Explorar Detalle <ChevronRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Empty Side */}
            <div className="w-full md:w-1/2"></div>
        </motion.div>
    );
}
