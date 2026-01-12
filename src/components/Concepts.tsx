import { motion } from 'framer-motion';
import { conceptsData } from '../data';
import { Lightbulb } from 'lucide-react';

export default function Concepts() {
    return (
        <section className="section-padding py-32 mb-12">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Conceptos Clave</h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
                    Definiciones esenciales para entender la revolución tecnológica.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            transition={{ delay: index * 0.05 }}
            className="group relative h-60 overflow-hidden rounded-2xl border border-white/5 bg-surface backdrop-blur-xl shadow-lg hover:border-primary/30 transition-colors cursor-default"
        >
            {/* Background Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-[80px] -translate-y-10 translate-x-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>

            {/* Default State (Center) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-500 group-hover:-translate-y-4 group-hover:opacity-10 opacity-100 z-10">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-4 text-primary shadow-lg group-hover:scale-90 transition-transform">
                    <Lightbulb className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-center text-slate-100">
                    {concept.term}
                </h3>
            </div>

            {/* Hover State (Reveal) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-black/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <h3 className="text-lg font-bold text-primary mb-3 text-center">
                    {concept.term}
                </h3>
                <p className="text-slate-200 text-center leading-relaxed text-sm font-medium">
                    {concept.definition}
                </p>
            </div>
        </motion.div>
    );
}
