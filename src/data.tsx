import {
    Settings, Zap, Radio, Cpu, Smartphone, Globe, Rocket,
    Ruler, Activity, HardDrive, MousePointer2, Network
} from 'lucide-react';

export const timelineData = [
    {
        id: 'origins',
        year: 'Antes de 1940',
        title: 'Orígenes',
        subtitle: 'La Era Mecánica',
        tech: 'Mecánica / Electromecánica',
        features: [
            'Uso de tarjetas perforadas',
            'Cálculo puramente mecánico',
            'Automatización inicial de telares y sumadoras',
            'Sin memoria electrónica'
        ],
        examples: ['Ábaco', 'Pascalina', 'Máquina Analítica (Babbage)', 'Telar de Jacquard'],
        icon: <Settings className="w-full h-full" />,
        image: '/images/origins.png',
        color: 'from-amber-700 to-orange-900'
    },
    {
        id: 'gen1',
        year: '1940 – 1956',
        title: 'Primera Generación',
        subtitle: 'Tubos de Vacío',
        tech: 'Válvulas de vacío',
        features: [
            'Tamaño masivo (habitaciones enteras)',
            'Generaban mucho calor',
            'Alto consumo eléctrico',
            'Programación en lenguaje máquina'
        ],
        examples: ['ENIAC', 'UNIVAC I', 'IBM 701'],
        icon: <Zap className="w-full h-full" />,
        image: '/images/gen1.png',
        color: 'from-orange-600 to-red-900'
    },
    {
        id: 'gen2',
        year: '1956 – 1963',
        title: 'Segunda Generación',
        subtitle: 'Transistores',
        tech: 'Transistores',
        features: [
            'Menor tamaño y mayor fiabilidad',
            'Menos disipación de calor',
            'Introducción de lenguajes de alto nivel (COBOL, FORTRAN)',
            'Memoria de núcleos magnéticos'
        ],
        examples: ['IBM 1401', 'IBM 7090', 'PDP-1'],
        icon: <Radio className="w-full h-full" />,
        image: '/images/gen2.png',
        color: 'from-blue-600 to-slate-800'
    },
    {
        id: 'gen3',
        year: '1964 – 1971',
        title: 'Tercera Generación',
        subtitle: 'Circuitos Integrados',
        tech: 'Chips de silicio (IC)',
        features: [
            'Miniaturización drástica',
            'Surgimiento de Sistemas Operativos',
            'Multiprogramación',
            'Entrada/Salida mediante terminales'
        ],
        examples: ['IBM System/360', 'PDP-8'],
        icon: <Cpu className="w-full h-full" />,
        image: '/images/gen3.png',
        color: 'from-cyan-600 to-blue-900'
    },
    {
        id: 'gen4',
        year: '1971 – Presente',
        title: 'Cuarta Generación',
        subtitle: 'Microprocesadores',
        tech: 'Microprocesador (CPU en un chip)',
        features: [
            'Computadoras personales (PC)',
            'Interfaces gráficas de usuario (GUI)',
            'Redes y conectividad global',
            'Portabilidad (Laptops)'
        ],
        examples: ['Intel 4004', 'Apple II', 'IBM PC'],
        icon: <Smartphone className="w-full h-full" />,
        image: '/images/gen4.png',
        color: 'from-violet-600 to-indigo-900'
    },
    {
        id: 'gen5',
        year: '1980s – Actualidad',
        title: 'Quinta Generación',
        subtitle: 'IA y Conectividad',
        tech: 'Inteligencia Artificial / Internet',
        features: [
            'Internet y la Web (WWW)',
            'Computación en la nube',
            'Dispositivos móviles (Smartphones)',
            'Procesamiento paralelo y Big Data'
        ],
        examples: ['Smartphones', 'Asistentes Virtuales', 'Cloud Computing'],
        icon: <Globe className="w-full h-full" />,
        image: '/images/gen5.png',
        color: 'from-fuchsia-600 to-purple-900'
    },
    {
        id: 'future',
        year: 'Futuro Cercano',
        title: 'Actualidad y Futuro',
        subtitle: 'La Nueva Era',
        tech: 'Cuántica / Edge / Bioinformática',
        features: [
            'Computación Cuántica (Qubits)',
            'Internet de las Cosas (IoT)',
            'Aceleradores de IA neuronales (NPU)',
            'Ciberseguridad avanzada'
        ],
        examples: ['Computadoras Cuánticas', 'Edge AI', 'Smart Cities'],
        icon: <Rocket className="w-full h-full" />,
        image: '/images/future.png',
        color: 'from-emerald-600 to-teal-900'
    }
];

export const comparisonData = [
    {
        category: 'Tamaño',
        before: 'Habitaciones enteras (30 toneladas)',
        after: 'Microscópico / Bolsillo (gramos)',
        icon: <Ruler className="w-full h-full" />
    },
    {
        category: 'Velocidad',
        before: 'Miles de instrucciones/seg (KIPS)',
        after: 'Billones de instrucciones/seg (TFLOPS)',
        icon: <Activity className="w-full h-full" />
    },
    {
        category: 'Almacenamiento',
        before: 'Tarjetas perforadas / Cintas (KB)',
        after: 'SSD / Nube (TB/PB)',
        icon: <HardDrive className="w-full h-full" />
    },
    {
        category: 'Interacción',
        before: 'Cables manuales / Papel',
        after: 'Táctil / Voz / Gestos / Mental',
        icon: <MousePointer2 className="w-full h-full" />
    },
    {
        category: 'Conectividad',
        before: 'Aislada (Standalone)',
        after: 'Hiperconectada (5G/Fibra/Satélite)',
        icon: <Network className="w-full h-full" />
    }
];

export const conceptsData = [
    {
        term: 'Tubo de Vacío',
        definition: 'Componente electrónico grande y frágil usado para amplificar o conmutar señales eléctricas en las primeras computadoras.'
    },
    {
        term: 'Transistor',
        definition: 'Dispositivo semiconductor que reemplazó a los tubos de vacío. Más pequeño, rápido, fiable y eficiente.'
    },
    {
        term: 'Circuito Integrado',
        definition: 'Conjunto de circuitos electrónicos en una pequeña pieza plana de semiconductor (chip de silicio).'
    },
    {
        term: 'Microprocesador',
        definition: 'Procesador que incorpora las funciones de la CPU en un único circuito integrado.'
    },
    {
        term: 'Nube (Cloud)',
        definition: 'Suministro de servicios informáticos (servidores, almacenamiento, soft) a través de Internet.'
    },
    {
        term: 'Inteligencia Artificial',
        definition: 'Sistemas que imitan la inteligencia humana para realizar tareas como reconocimiento de voz o toma de decisiones.'
    }
];

export const quizQuestions = [
    {
        question: '¿Cuál fue la tecnología base de la Primera Generación?',
        options: ['Transistores', 'Tubos de Vacío', 'Microprocesadores', 'Engranajes'],
        answer: 1 // Index
    },
    {
        question: '¿Qué invento marcó el inicio de la Segunda Generación?',
        options: ['El Transistor', 'Internet', 'El iPhone', 'La tarjeta perforada'],
        answer: 0
    },
    {
        question: 'La miniaturización drástica llegó con...',
        options: ['La máquina de vapor', 'Los Circuitos Integrados', 'Los Tubos de vacío', 'El Ábaco'],
        answer: 1
    },
    {
        question: '¿Qué caracteriza a la Cuarta Generación?',
        options: ['El uso de vapor', 'El Microprocesador', 'La ausencia de monitores', 'Las tarjetas perforadas'],
        answer: 1
    },
    {
        question: '¿Qué tecnología define mejor la actualidad/futuro?',
        options: ['Máquinas de escribir', 'IA y Computación Cuántica', 'Disquetes', 'Telégrafo'],
        answer: 1
    },
    {
        question: '¿Cómo era el almacenamiento en los orígenes?',
        options: ['Discos duros SSD', 'Nube', 'Tarjetas perforadas / Mecánico', 'USB'],
        answer: 2
    }
];
