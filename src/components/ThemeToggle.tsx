import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Init theme
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);

        if (newIsDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="fixed top-6 right-6 z-50 p-3 rounded-full bg-surface border border-[var(--border-color)] shadow-lg backdrop-blur-md hover:bg-white/10 transition-colors group"
            aria-label="Toggle Theme"
        >
            <div className="relative w-6 h-6 text-primary">
                <motion.div
                    initial={false}
                    animate={{ scale: isDark ? 1 : 0, rotate: isDark ? 0 : 90, opacity: isDark ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                >
                    <Moon className="w-6 h-6" />
                </motion.div>

                <motion.div
                    initial={false}
                    animate={{ scale: isDark ? 0 : 1, rotate: isDark ? -90 : 0, opacity: isDark ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                >
                    <Sun className="w-6 h-6" />
                </motion.div>
            </div>
        </motion.button>
    );
}
