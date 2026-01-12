import React, { useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function TiltCard({ children, className = '' }: { children: React.ReactNode, className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useSpring(0, { stiffness: 150, damping: 20 });
    const y = useSpring(0, { stiffness: 150, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Calculate rotation (-15 to 15 degrees)
        const rotateY = ((mouseX - width / 2) / width) * 20;
        const rotateX = ((mouseY - height / 2) / height) * -20;

        x.set(rotateX);
        y.set(rotateY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: x,
                rotateY: y,
                transformStyle: "preserve-3d"
            }}
            className={`perspective-1000 ${className}`}
        >
            {children}
        </motion.div>
    );
}
