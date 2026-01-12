import { motion } from 'framer-motion';
import { comparisonData } from '../data';
import TiltCard from './TiltCard';

export default function Comparison() {
    return (
        <section className="section-padding py-32 relative overflow-hidden">
            {/* Subtle Background Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-[500px] bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

            <div className="text-center mb-20 relative z-10">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-secondary font-mono tracking-[0.2em] text-xs uppercase mb-3 block font-bold"
                >
                    Perspectiva
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                >
                    Antes vs. Ahora
                </motion.h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                    La Ley de Moore en acción: una evolución exponencial que desafía la imaginación.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 relative z-10">
                {comparisonData.map((item, index) => (
                    <ComparisonCard key={index} item={item} index={index} />
                ))}
            </div>
        </section>
    );
}

function ComparisonCard({ item, index }: { item: (typeof comparisonData)[0], index: number }) {
    // Only Tilt on desktop (simple check for hover capability implies desktop-ish)
    const isDesktop = window.matchMedia('(hover: hover)').matches;

    const content = (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-surface backdrop-blur-xl border border-white/5 p-8 rounded-3xl h-full flex flex-col relative overflow-hidden group hover:border-white/10 transition-colors shadow-xl"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Icon Header */}
            <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl shadow-lg group-hover:scale-105 transition-transform duration-300 text-slate-200">
                    {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-100">{item.category}</h3>
            </div>

            {/* Comparison Body */}
            <div className="flex-1 space-y-8 relative z-10">
                {/* BEFORE */}
                <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-extrabold tracking-widest text-red-400/80 uppercase">
                        <span>Antes</span>
                    </div>
                    <div className="p-4 bg-red-950/20 border border-red-500/10 rounded-xl relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500/50"></div>
                        <p className="text-slate-300 font-medium text-sm leading-relaxed relative z-10">{item.before}</p>
                    </div>
                </div>

                {/* VS Divider */}
                <div className="flex items-center gap-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <div className="h-px bg-slate-200 flex-1" />
                    <span className="text-[10px] font-mono">VS</span>
                    <div className="h-px bg-slate-200 flex-1" />
                </div>

                {/* AFTER */}
                <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-extrabold tracking-widest text-primary/80 uppercase">
                        <span>Actualidad</span>
                    </div>
                    <div className="p-4 bg-cyan-950/20 border border-primary/20 rounded-xl group-hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-shadow relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                        <div className="absolute right-0 top-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                        <p className="text-white font-bold text-lg relative z-10">{item.after}</p>
                    </div>
                    {/* Visual bar only for After to show scale/growth */}
                    <div className="h-1 w-full bg-surface rounded-full overflow-hidden mt-4">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1.5, delay: 0.5 + (index * 0.1), ease: "circOut" }}
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 w-full rounded-full shadow-[0_0_8px_#06b6d4]"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );

    return isDesktop ? <TiltCard className="h-full">{content}</TiltCard> : <div className="h-full">{content}</div>;
}
