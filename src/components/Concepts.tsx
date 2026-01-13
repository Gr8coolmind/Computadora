import { motion } from 'framer-motion';
import { conceptsData } from '../data.tsx';
import { Lightbulb, ArrowRight } from 'lucide-react';

export default function Concepts() {
    return (
        <section className="relative section-padding py-32 mb-12 overflow-hidden">
             {/* Ambient Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full opacity-20 pointer-events-none" />

            <div className="relative z-10 text-center mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block"
                >
                     <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide mb-4 inline-block backdrop-blur-sm">
                        FUNDAMENTOS
                    </span>
                </motion.div>
                
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400"
                >
                    Conceptos Clave
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed"
                >
                    Definiciones esenciales para entender la revolución tecnológica que está transformando nuestro mundo.
                </motion.p>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
                {conceptsData.map((concept, index) => (
                    <ConceptCard key={index} concept={concept} index={index} />
                ))}
            </div>
        </section>
    );
}

function ConceptCard({ concept, index }: { concept: (typeof conceptsData)[0], index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-[340px] perspective-1000"
        >
            <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front Side */}
                <div className="absolute inset-0 h-full w-full rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-md p-8 shadow-xl [backface-visibility:hidden] flex flex-col items-center justify-center text-center overflow-hidden">
                    
                    {/* Abstract Decorative Elements */}
                    <div className="absolute top-0 right-0 p-3 opacity-20">
                        <div className="w-16 h-16 rounded-full border border-white/20 border-dashed animate-spin-slow" />
                    </div>
                     <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Icon Container */}
                    <div className="relative mb-6">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />
                        <div className="relative w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl flex items-center justify-center shadow-inner ring-1 ring-white/20">
                            <Lightbulb className="w-9 h-9 text-primary drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]" />
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                        {concept.term}
                    </h3>
                    
                    <div className="mt-8 flex items-center gap-2 text-xs font-medium text-slate-400 uppercase tracking-widest bg-white/5 py-2 px-4 rounded-full border border-white/5">
                        Ver Definición <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 h-full w-full rounded-3xl border border-primary/20 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl p-8 shadow-2xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center">
                    
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
                    
                    <h3 className="text-xl font-bold text-primary mb-6 relative">
                        {concept.term}
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary/50 rounded-full"></span>
                    </h3>
                    
                    <p className="text-slate-200 text-center leading-relaxed font-medium relative z-10">
                        {concept.definition}
                    </p>

                    <div className="absolute bottom-6 right-6 opacity-10">
                         <Lightbulb className="w-24 h-24 rotate-12" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
