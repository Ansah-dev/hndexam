const ESSAY_TOPIC_RULES = [
  { name: 'Digital Literacy', keywords: ['digital literacy'] },
  { name: 'Digital Electronics', keywords: ['digital electronics'] },
  { name: 'Algorithms', keywords: ['algorithm', 'ds & alg', 'data structure'] },
  { name: 'Procedural Programming', keywords: ['procedural programming', 'structural programming', 'c prog', 'c programming'] },
  { name: 'OOP', keywords: ['object oriented programming', 'oop', 'object oriented'] },
  { name: 'Object Modeling / UML', keywords: ['object modeling', 'uml', 'object model'] },
  { name: 'Database', keywords: ['database'] },
  { name: 'Web Design', keywords: ['web design', 'web programming', 'web knowledge'] },
  { name: 'Networking', keywords: ['networking', 'network'] },
  { name: 'Event Programming', keywords: ['event programming', 'vb.net'] },
  { name: 'Mobile', keywords: ['mobile programming', 'mobile operating', 'mobile device'] },
  { name: 'System Architecture', keywords: ['system architecture'] },
  { name: 'Operating Systems', keywords: ['operating system'] },
  { name: 'Project Management', keywords: ['project management'] },
  { name: 'General Knowledge', keywords: ['general computer', 'digital society'] },
  { name: 'Computer Fundamentals', keywords: ['computer fundamental', 'computer technology', 'computer knowledge', 'number system', 'logic gate', 'boolean', 'ms office', 'microsoft word', 'excel', 'powerpoint'] },
  { name: 'English', keywords: ['english language', 'reading comprehension', 'grammar', 'spoken english', 'writing', 'composition'] },
  { name: 'French', keywords: ['french language', 'compréhension', 'comprehension', 'expression libre', 'langue', 'rédaction', 'ecrite', 'qcm'] },
  { name: 'Mathematics', keywords: ['mathematics', 'discrete mathematics', 'mathématique', 'further mathematics'] },
  { name: 'Entrepreneurship', keywords: ['entrepreneurship'] },
  { name: 'Economics', keywords: ['general economics', 'economics'] },
  { name: 'Law & Civics', keywords: ['company law', 'labour law', 'fundamental rights', 'civics', 'business law', 'law and citizenship', 'law and fundamental'] },
];

const MCQ_TOPIC_RULES = [
  { name: 'Digital Literacy', keywords: ['digital literacy'] },
  { name: 'Digital Electronics', keywords: ['digital electronics'] },
  { name: 'Database', keywords: [
    'database', 'sql', 'query', 'select ', 'insert', 'table',
    'entity', 'attribute', 'relation', 'foreign key', 'primary key',
    'normalization', 'dbms', 'referential', 'tuple', 'order by',
    'where clause', 'create table', 'join', 'unique identifies a row'
  ]},
  { name: 'Networking', keywords: [
    'router', 'switch', 'hub', 'osi', 'tcp/ip', 'ip address', 'subnet',
    'mac address', 'network topology', 'gateway', 'dns', 'dhcp', 'ethernet',
    'lan', 'wan', 'protocol', 'firewall', 'routing', 'bridge', 'repeater',
    'modem', '10base', 'network layer', 'transport layer', 'network administrator'
  ]},
  { name: 'Procedural Programming', keywords: [
    'compiler', 'interpreter', 'array', 'loop',
    'printf', 'scanf', 'c program', 'arithmetic instruction',
    'return statement', 'recursion', 'pointer', 'structure', 'union',
    'factorial', 'function procedure'
  ]},
  { name: 'OOP', keywords: [
    'object', 'inheritance', 'polymorphism', 'encapsulation',
    'abstraction', 'constructor', 'method overriding', 'method overloading',
    'interface', 'object oriented'
  ]},
  { name: 'Web Design', keywords: [
    'html', 'css', 'element', 'tag', 'attribute', 'body',
    'div', 'web page', 'markup', 'font', 'style',
    'javascript', 'script', 'root tag', '<head>', '<form>'
  ]},
  { name: 'Operating Systems', keywords: [
    'process', 'thread', 'scheduling', 'cpu', 'memory', 'deadlock',
    'semaphore', 'mutex', 'kernel ', 'fifo', 'sjf', 'round robin',
    'throughput', 'turnaround', 'response time', 'pcb',
    'process control block', 'multithreading', 'cpu burst'
  ]},
  { name: 'Algorithms', keywords: [
    'algorithm', 'complexity', 'big o', 'sorting', 'searching',
    'tree', 'traversal', 'stack', 'queue', 'data structure', 'linked list',
    'vertex', 'edge', 'directed graph', 'undirected', 'depth first',
    'breadth first', 'graph data', 'graph of '
  ]},
  { name: 'Computer Fundamentals', keywords: [
    'binary', 'number system', 'logic gate', 'boolean', 'truth table',
    'bit', 'byte', 'hardware', 'software', 'motherboard', 'arithmetic logic unit',
    'control unit', 'register', 'memory unit', 'input device',
    'output device', 'storage', 'cpu'
  ]},
  { name: 'French', keywords: [
    'ponctuation', 'conjugaison', 'verbe', 'phrase', 'temps', 'passé composé',
    'imparfait', 'conditionnel', 'futur', 'présent', 'accord', 'orthographe',
    'grammaire', 'vocabulaire', 'préposition', 'adjectif', 'adverbe',
    'complément', 'subjonctif', 'participe', 'infinitif', 'groupe nominal',
    'déterminant', 'pronom', 'conjonction', 'préfixe', 'suffixe',
    'compréhension', 'expression', 'rédaction', 'lire', 'écrire',
    'synonyme', 'antonyme', 'lettre', 'ponctuer',
    'traduire', 'traduction', 'français', 'francaise'
  ]},
  { name: 'English', keywords: [
    'grammar', 'vocabulary', 'sentence', 'verb', 'noun', 'adjective', 'adverb',
    'preposition', 'conjunction', 'tense', 'plural', 'singular',
    'comprehension', 'passage', 'paragraph', 'essay', 'letter',
    'spoken', 'conversation', 'phrase', 'clause', 'punctuation', 'reading',
    'composition', 'write', 'fill in the blank', 'choose the correct',
    'reading comprehension', 'spoken english'
  ]},
  { name: 'Law & Civics', keywords: [
    'law', 'legal', 'rights', 'constitution', 'court', 'contract', 'company',
    'tort', 'crime', 'offence', 'citizen', 'ethics', 'moral', 'citizenship',
    'labour', 'employment', 'business law', 'fundamental rights',
    'civic', 'government', 'parliament', 'legislation', 'statute'
  ]},
  { name: 'Entrepreneurship', keywords: [
    'entrepreneur', 'entrepreneurship', 'business', 'enterprise', 'startup',
    'innovation', 'market', 'venture', 'capital', 'investment', 'profit',
    'revenue', 'business plan', 'small business', 'incubator'
  ]},
  { name: 'Economics', keywords: [
    'economics', 'economy', 'demand', 'supply', 'market', 'price', 'cost',
    'revenue', 'profit', 'inflation', 'gdp', 'unemployment', 'trade',
    'consumer', 'producer', 'scarcity', 'opportunity cost', 'equilibrium',
    'monopoly', 'competition', 'tax', 'subsidy', 'tariff', 'export', 'import'
  ]},
  { name: 'Statistics', keywords: [
    'variance', 'standard deviation', 'distribution', 'correlation coefficient',
    'mean ', 'median', 'quartile', 'percentile', 'frequency', 'cumulative',
    'regression', 'sample ', 'class interval', 'class limit', 'range of',
    'decimal', 'coefficient'
  ]},
  { name: 'Probability', keywords: [
    'probability', 'probability mass', 'poisson', 'binomial', 'random variable',
    'expectation', 'expected value', 'bayes', 'conditional', 'independent',
    'p(a', 'p(b', 'p(x', 'e(x)', 'defective'
  ]},
  { name: 'Differentiation', keywords: [
    'derivative', 'differential', 'gradient', 'dy/dx', 'f\'(x)'
  ]},
  { name: 'Integration', keywords: [
    'integral', 'integration', '∫', 'dx '
  ]},
  { name: 'Matrices & Vectors', keywords: [
    'matrix', 'matrices', 'determinant', 'eigenvalue', 'vector', 'adjoint'
  ]},
  { name: 'Sets & Logic', keywords: [
    'set', 'union', 'intersection', 'subset', 'truth table', 'logic'
  ]},
  { name: 'Sequences & Series', keywords: [
    'series', 'arithmetic progression', 'geometric progression', 'maclaurin',
    'taylor series', 'binomial expansion', 'convergence', 'divergence',
    'fibonacci', 'fourier'
  ]},
  { name: 'Trigonometry', keywords: [
    'trigonometric', 'sin ', 'cos ', 'tan ', 'cosec', 'sinh', 'cosh', 'tanh',
    'hyperbolic'
  ]},
  { name: 'Limits & Continuity', keywords: [
    'limit', 'asymptote', 'lim ', 'lim(', 'limit as', 'limit x'
  ]},
  { name: 'Functions & Graphs', keywords: [
    'function', 'domain of', 'parity', 'periodic function', 'odd function',
    'even function', 'f(x)', 'absolute value', 'sqrt'
  ]},
  { name: 'Mathematics', keywords: [
    'laplace transform', 'differential equation', 'equation',
    'log(', 'ln(', 'factor', 'simplif', 'solves', 'solution of',
    'matrices', 'linear algebra', 'calculus', 'theorem',
    'stochastic', 'interpolation', 'extrapolation',
    'is a factor', 'factoring', 'factorise', 'factorization',
    'skewness', 'kurtosis', 'moment', 'period', 'dice',
    'linear regression', 'grad f', 'linearly',
    'lim x', 'tan(', 'e(x)='
  ]}
];

const SUB_TOPIC_RULES = {
  'Algorithms': [
    { name: 'Algorithm Fundamentals', keywords: ['what is an algorithm', 'characteristics of algorithm', 'pseudocode', 'flowchart', 'algorithm design', 'algorithm execution time', 'worst case', 'average case', 'best case', 'complexity of', 'big-oh', 'big o'] },
    { name: 'Sorting & Searching', keywords: ['sorting', 'searching', 'bubble', 'selection sort', 'insertion sort', 'merge sort', 'quick sort', 'binary search', 'linear search'] },
    { name: 'Data Structures', keywords: ['stack', 'queue', 'linked list', 'tree', 'binary tree', 'graph', 'array data', 'fifo', 'lifo', 'primary data', 'secondary data'] },
    { name: 'Control Structures', keywords: ['control structure', 'sequence', 'selection', 'iteration', 'conditional'] }
  ],
  'Procedural Programming': [
    { name: 'Variables & Data Types', keywords: ['variable', 'data type', 'constant', 'declare', 'int ', 'float', 'char ', 'string'] },
    { name: 'Operators & Expressions', keywords: ['operator', 'expression', 'precedence', 'operand', 'arithmetic instruction'] },
    { name: 'Control Structures (C)', keywords: ['if statement', 'switch', 'while loop', 'do-while', 'for loop', 'conditional', 'iteration', 'selection'] },
    { name: 'Functions', keywords: ['function', 'parameter', 'return', 'call by value', 'call by reference', 'recursive', 'recursion', 'function declaration', 'function definition', 'pass by'] },
    { name: 'Arrays & Strings', keywords: ['array', 'string', 'index', 'element of array'] },
    { name: 'Structures & File I/O', keywords: ['structure', 'struct', 'file', 'fopen', 'fclose', 'fread', 'fwrite', 'union'] },
    { name: 'Pointers', keywords: ['pointer', 'address', 'reference', 'dereference', 'malloc', 'calloc', 'free'] }
  ],
  'OOP': [
    { name: 'Classes & Objects', keywords: ['class', 'object', 'constructor', 'destructor', 'method', 'member', 'instance', 'instantiate'] },
    { name: 'Inheritance', keywords: ['inheritance', 'base class', 'derived class', 'parent class', 'child class', 'superclass', 'subclass', 'multiple inheritance', 'reuse'] },
    { name: 'Polymorphism', keywords: ['polymorphism', 'overloading', 'overriding', 'virtual', 'dynamic binding'] },
    { name: 'Encapsulation & Abstraction', keywords: ['encapsulation', 'abstraction', 'private', 'public', 'protected', 'access modifier', 'information hiding'] },
    { name: 'Composition & Aggregation', keywords: ['composition', 'aggregation', 'has-a', 'part-of', 'whole-part'] }
  ],
  'Object Modeling / UML': [
    { name: 'UML Diagrams', keywords: ['uml', 'class diagram', 'use case', 'sequence diagram', 'activity diagram', 'state diagram'] },
    { name: 'Object Modeling Concepts', keywords: ['object model', 'object modeling', 'association', 'multiplicity', 'generalization', 'specialization'] }
  ],
  'Database': [
    { name: 'SQL Queries', keywords: ['select', 'where', 'join', 'order by', 'group by', 'having', 'insert', 'update', 'delete', 'like ', 'between'] },
    { name: 'Database Design & Normalization', keywords: ['normalization', 'normal form', '1nf', '2nf', '3nf', 'bcnf', 'anomaly', 'functional dependency', 'decomposition'] },
    { name: 'ER Modeling', keywords: ['entity', 'relationship', 'er model', 'entity-relationship', 'e/r', 'attribute', 'primary key', 'foreign key', 'cardinality'] },
    { name: 'CREATE TABLE & Schema', keywords: ['create table', 'alter table', 'schema', 'data definition', 'ddl'] },
    { name: 'Data Integrity', keywords: ['integrity', 'constraint', 'referential', 'cascade', 'trigger', 'index'] }
  ],
  'Web Design': [
    { name: 'HTML Basics', keywords: ['html', 'tag', 'element', 'form', 'input', 'label', 'button', 'table', 'div', 'attribute'] },
    { name: 'CSS', keywords: ['css', 'style sheet', 'inline style', 'internal style', 'external style', 'selector', 'class selector', 'id selector', 'flexbox', 'grid'] },
    { name: 'JavaScript & DOM', keywords: ['javascript', 'dom', 'document', 'window', 'event', 'function', 'alert', 'prompt', 'canvas'] },
    { name: 'PHP & Server-Side', keywords: ['php', 'server-side', 'session', 'cookie', '\$_post', '\$_get', '\$_session'] },
    { name: 'Web Concepts', keywords: ['url', 'http', 'static website', 'dynamic website', 'client-server', 'web application', 'browser'] }
  ],
  'Networking': [
    { name: 'OSI & TCP/IP Models', keywords: ['osi model', 'tcp/ip', 'layer', 'physical layer', 'data link', 'network layer', 'transport layer', 'application layer', 'encapsulation'] },
    { name: 'IP Addressing & Subnetting', keywords: ['ip address', 'subnet', 'subnet mask', 'cidr', 'gateway', 'broadcast', 'dns', 'dhcp', 'ipv4', 'ipv6'] },
    { name: 'Network Topologies', keywords: ['topology', 'star', 'ring', 'bus', 'mesh', 'hybrid', 'tree'] },
    { name: 'Network Devices', keywords: ['router', 'switch', 'hub', 'bridge', 'repeater', 'modem', 'firewall', 'access point', 'utp cable', 'crimp'] },
    { name: 'Protocols & Transmission', keywords: ['protocol', 'tcp', 'udp', 'http', 'ftp', 'smtp', 'packet-switched', 'circuit-switched', 'mac address', 'ethernet'] }
  ],
  'Event Programming': [
    { name: 'VB.NET Basics', keywords: ['vb.net', 'visual basic', 'event-driven', 'event programming'] }
  ],
  'Mobile': [
    { name: 'Android Architecture', keywords: ['android architecture', 'android application', 'android sdk', 'emulator'] },
    { name: 'Activity Lifecycle', keywords: ['activity', 'lifecycle', 'state of an activity', 'oncreate', 'onpause', 'onresume', 'onstop'] },
    { name: 'Mobile Development', keywords: ['mobile application', 'native', 'cross-platform', 'java android', 'kotlin', 'flutter'] }
  ],
  'System Architecture': [
    { name: 'Client-Server', keywords: ['client-server', 'client server', 'two-tier', 'three-tier', 'n-tier', 'object server'] },
    { name: 'Middleware', keywords: ['middleware'] },
    { name: 'Cloud Computing', keywords: ['cloud', 'iaas', 'paas', 'saas', 'public cloud', 'private cloud', 'deployment model'] },
    { name: 'Distributed Systems', keywords: ['distributed', 'network architecture'] }
  ],
  'Operating Systems': [
    { name: 'OS Fundamentals', keywords: ['purpose of an operating system', 'function of operating system', 'operating system', 'kernel', 'user mode', 'kernel mode'] },
    { name: 'Process Management', keywords: ['process', 'scheduling', 'multiprogramming', 'multiprocessor', 'cpu scheduling', 'pcb', 'context switch'] },
    { name: 'Multithreading', keywords: ['thread', 'multithread', 'multithreading'] },
    { name: 'Deadlocks & Concurrency', keywords: ['deadlock', 'starvation', 'semaphore', 'mutex', 'concurrency', 'critical section'] },
    { name: 'Memory & File Systems', keywords: ['memory management', 'paging', 'segmentation', 'virtual memory', 'file system', 'file ', 'directory'] }
  ],
  'Project Management': [
    { name: 'Project Planning & Lifecycle', keywords: ['project plan', 'project life cycle', 'project manager', 'project portfolio', 'project charter', 'phase', 'milestone'] },
    { name: 'Cost Estimation', keywords: ['cost estimation', 'project methodology', 'agile', 'waterfall', 'software cost', 'estimation'] },
    { name: 'Risk Management', keywords: ['risk', 'resource management', 'quality'] },
    { name: 'Documentation', keywords: ['documentation', 'project document', 'report'] }
  ],
  'Computer Fundamentals': [
    { name: 'Hardware Components', keywords: ['hardware', 'cpu', 'motherboard', 'processor', 'graphics card', 'bus', 'peripheral', 'system unit'] },
    { name: 'Memory (RAM, ROM, Cache)', keywords: ['memory', 'ram', 'rom', 'cache', 'volatile', 'non-volatile', 'prom', 'eprom', 'flash', 'memory hierarchy', 'storage'] },
    { name: 'Computer Generations', keywords: ['generation of computer', 'first generation', 'second generation', 'third generation', 'fourth generation', 'fifth generation', 'vacuum tube', 'transistor', 'integrated circuit'] },
    { name: 'Input / Output Devices', keywords: ['input device', 'output device', 'peripheral', 'keyboard', 'mouse', 'monitor', 'printer', 'scanner'] },
    { name: 'Software Concepts', keywords: ['software', 'operating system software', 'application software', 'system software', 'bios', 'utility', 'programming language'] }
  ],
  'Digital Literacy': [
    { name: 'Computer Basics', keywords: ['information system', 'hardware and software', 'computer system'] },
    { name: 'MS Office', keywords: ['ms office', 'microsoft word', 'excel', 'powerpoint', 'word processing', 'spreadsheet', 'presentation', 'formula', 'function sum', 'cell', 'slide'] },
    { name: 'Internet & Web', keywords: ['internet', 'browser', 'search engine', 'intranet', 'extranet', 'web', 'url', 'download', 'upload'] },
    { name: 'Digital Society & Ethics', keywords: ['digital society', 'e-commerce', 'e-business', 'phishing', 'scamming', 'fake news', 'cyber', 'social media', 'password'] },
    { name: 'Green Computing', keywords: ['green computing', 'environment'] }
  ],
  'Digital Electronics': [
    { name: 'Number Systems', keywords: ['binary', 'decimal', 'hexadecimal', 'octal', 'number system', 'base ', 'conversion', 'bcd'] },
    { name: 'Binary Arithmetic', keywords: ['binary addition', 'binary subtraction', 'binary multiplication', 'binary division'] },
    { name: 'Logic Gates', keywords: ['logic gate', 'and gate', 'or gate', 'not gate', 'nand', 'nor', 'xor', 'universal gate', 'truth table', 'boolean expression', 'de morgan', 'simplify'] },
    { name: 'Combinational Logic', keywords: ['half adder', 'full adder', 'multiplexer', 'demultiplexer', 'decoder', 'encoder', 'seven segment'] },
    { name: 'Codes', keywords: ['excess-3', 'gray code', '1\'s complement', '2\'s complement', 'complement'] }
  ],
  'English': [
    { name: 'Reading Comprehension', keywords: ['reading comprehension', 'passage', 'summary', 'suitable title', 'explain the'] },
    { name: 'Grammar', keywords: ['grammar', 'tense', 'verb', 'noun', 'adjective', 'adverb', 'preposition', 'conjunction', 'sentence', 'plural', 'singular', 'fill in', 'correct the', 'correctly'] },
    { name: 'Spoken English', keywords: ['spoken english', 'pronunciation', 'stress', 'phonetic', 'transcribe', 'syllable', 'intonation'] },
    { name: 'Vocabulary', keywords: ['vocabulary', 'synonym', 'antonym', 'meaning', 'word', 'phrase', 'match'] },
    { name: 'Writing', keywords: ['writing', 'composition', 'essay', 'letter', 'speech', 'report', 'paragraph', 'write an', 'write a'] }
  ],
  'French': [
    { name: 'Grammaire', keywords: ['grammaire', 'conjugaison', 'verbe', 'temps', 'mode', 'indicatif', 'subjonctif', 'conditionnel', 'imparfait', 'passé composé', 'futur', 'présent', 'accord', 'orthographe', 'adjectif', 'adverbe', 'préposition', 'pronom', 'déterminant', 'phrase'] },
    { name: 'Vocabulaire', keywords: ['vocabulaire', 'sens du mot', 'synonyme', 'antonyme', 'définition', 'signification'] },
    { name: 'Compréhension', keywords: ['compréhension', 'comprehension', 'texte', 'lire', 'expliquez', 'de quoi'] },
    { name: 'Traduction', keywords: ['traduire', 'traduction', 'translate', 'en français', 'en anglais'] },
    { name: 'Rédaction / Expression', keywords: ['rédaction', 'redaction', 'expression libre', 'écrire', 'texte de', 'que pensez'] }
  ],
  'Entrepreneurship': [
    { name: 'Entrepreneurial Concepts', keywords: ['entrepreneur', 'entrepreneurship', 'franchise', 'business idea', 'risk', 'enterprise', 'startup'] },
    { name: 'Business Planning', keywords: ['business plan', 'business plan', 'components of', 'loan', 'investment', 'capital', 'profit'] },
    { name: 'Challenges & Opportunities', keywords: ['challenge', 'opportunity', 'overcome'] },
    { name: 'Enterprise Types', keywords: ['type of enterprise', 'small business', 'medium', 'size'] }
  ],
  'Economics': [
    { name: 'Economic Systems', keywords: ['economic system', 'market economy', 'planned economy', 'mixed economy'] },
    { name: 'Demand, Supply & Elasticity', keywords: ['demand', 'supply', 'elasticity', 'price elasticity'] },
    { name: 'Banking & Finance', keywords: ['bank', 'commercial bank', 'central bank', 'money', 'function of money', 'financial'] },
    { name: 'Enterprise Economics', keywords: ['enterprise', 'business', 'economic'] }
  ],
  'Law & Civics': [
    { name: 'Sources & Classification of Law', keywords: ['source of law', 'classification of law', 'common law', 'civil law', 'bijural', 'criminal offence', 'legal system'] },
    { name: 'Company Law (OHADA)', keywords: ['company law', 'ohada', 'corporate personality', 'limited liability', 'company type', 'business entity', 'sole proprietorship', 'partnership'] },
    { name: 'Labour Law', keywords: ['labour law', 'contract of employment', 'cdd', 'cdi', 'trial contract', 'probationary', 'termination', 'notice period', 'employer', 'worker', 'salary'] },
    { name: 'Fundamental Rights & Citizenship', keywords: ['fundamental right', 'citizenship', 'citizen', 'human right', 'obligation', 'governance', 'democracy', 'constitution'] },
    { name: 'Business Law & Contracts', keywords: ['business law', 'contract', 'negotiable instrument', 'tort', 'copyright', 'intellectual property', 'consumer'] }
  ],
  'General Knowledge': [
    { name: 'Computer Ethics & Cybercrime', keywords: ['cyber', 'ethics', 'piracy', 'bullying', 'scamming', 'hacking', 'juvenile'] },
    { name: 'Current Affairs', keywords: ['cameroun', 'independance', 'président', 'gouverneur', 'capitale'] },
    { name: 'E-Commerce & Digital', keywords: ['e-commerce', 'e-banking', 'online', 'digital'] },
    { name: 'Health & Social', keywords: ['disease', 'mosquito', 'malaria', 'health', 'santé'] },
    { name: 'Environment', keywords: ['environment', 'climate change', 'green'] }
  ],
  'Mathematics': [
    { name: 'Statistics', keywords: ['statistics', 'statistique', 'mean', 'variance', 'standard deviation', 'cumulative frequency', 'frequency distribution', 'quartile', 'percentile', 'regression', 'correlation coefficient', 'sample', 'confidence interval', 'hypothesis test', 'z-score', 'normal distribution', 'poisson distribution', 'binomial distribution', 'class interval', 'class limit', 'frequency table', 'ogive', 'histogram'] },
    { name: 'Probability', keywords: ['probability', 'probabilité', 'bayes', 'bayes\' theorem', 'conditional probability', 'random variable', 'expectation', 'expected value', 'probability density', 'tree diagram', 'independent event', 'mutually exclusive', 'geometric distribution', 'poisson', 'binomial', 'markov bound', 'chebyshev bound'] },
    { name: 'Differentiation', keywords: ['differentiate', 'derivative', 'differential calculus', 'gradient', 'stationary point', 'tangent', 'chain rule', 'product rule', 'quotient rule', 'dy/dx', 'f\'(x)', 'partial derivative', 'curl', 'grad f'] },
    { name: 'Integration', keywords: ['integrate', 'integration', 'integral', 'definite integral', 'indefinite integral', 'area under', 'integration by', '∫', 'laplace transform'] },
    { name: 'Matrices & Vectors', keywords: ['matrix', 'matrices', 'determinant', 'inverse matrix', 'adjoint', 'eigenvalue', 'eigenvector', 'vector', 'scalar', 'cross product', 'dot product', 'linearly independent', 'symmetric matrix'] },
    { name: 'Sets & Logic', keywords: ['set', 'union', 'intersection', 'subset', 'venn diagram', 'complement', 'truth table', 'proposition', 'logical', 'boolean algebra', 'predicate'] },
    { name: 'Sequences & Series', keywords: ['sequence', 'series', 'arithmetic progression', 'geometric progression', 'convergence', 'divergence', 'maclaurin', 'taylor series', 'binomial expansion', 'ratio test', 'fibonacci', 'fourier series', 'fourier coefficient'] },
    { name: 'Trigonometry', keywords: ['trigonometric', 'trigonometry', 'sin ', 'cos ', 'tan ', 'sec ', 'cosec', 'cot ', 'sinh', 'cosh', 'tanh', 'angle', 'hyperbolic', 'trig', 'sinusoidal'] },
    { name: 'Limits & Continuity', keywords: ['limit', 'asymptote', 'continuity', 'continuous function', 'convergent', 'divergent', 'l\'hôpital', 'l\'hopital', 'lim '] },
    { name: 'Functions & Graphs', keywords: ['function', 'domain of definition', 'range of', 'parity', 'periodic function', 'odd function', 'even function', 'bijection', 'inverse function', 'composite function', 'f(x)', 'real valued function'] },
    { name: 'Analysis (Calculus, ODEs)', keywords: ['ordinary differential equation', 'ode', 'differential equations', 'laplace transform', 'fourier series', 'fourier coefficient', 'calculus'] }
  ]
};

const TOPIC_CATEGORIES = {
  'SWE Core': [
    'Algorithms', 'Procedural Programming', 'OOP', 'Object Modeling / UML',
    'Database', 'Web Design', 'Networking', 'Event Programming',
    'Mobile', 'System Architecture', 'Operating Systems', 'Project Management'
  ],
  'General': [
    'General Knowledge', 'Digital Literacy', 'Digital Electronics', 'Computer Fundamentals', 'English', 'French',
    'Entrepreneurship', 'Economics', 'Law & Civics'
  ],
  'Mathematics': ['Mathematics']
};

// Flatten all sub-topics into TOPIC_CATEGORIES
(function buildTopicCategories() {
  for (const [parent, subs] of Object.entries(SUB_TOPIC_RULES)) {
    const topics = subs.map(s => s.name);
    const cat = Object.keys(TOPIC_CATEGORIES).find(c => TOPIC_CATEGORIES[c].indexOf(parent) !== -1);
    if (cat) {
      TOPIC_CATEGORIES[cat] = TOPIC_CATEGORIES[cat].concat(topics);
    } else {
      if (!TOPIC_CATEGORIES['Other']) TOPIC_CATEGORIES['Other'] = [];
      TOPIC_CATEGORIES['Other'] = TOPIC_CATEGORIES['Other'].concat(topics);
    }
  }
  // Also keep the parent topics so questions not matched to sub-topics still have a home
  for (const parent of Object.keys(SUB_TOPIC_RULES)) {
    const cat = Object.keys(TOPIC_CATEGORIES).find(c => TOPIC_CATEGORIES[c].indexOf(parent) !== -1);
    if (!cat) {
      if (!TOPIC_CATEGORIES['Other']) TOPIC_CATEGORIES['Other'] = [];
      if (TOPIC_CATEGORIES['Other'].indexOf(parent) === -1) TOPIC_CATEGORIES['Other'].push(parent);
    }
  }
})();

let studyIndex = null;
let selectedYearFilter = {};

function isMCQSection(title) {
  const t = title.toLowerCase();
  return t.includes('multiple choice') || t.includes('mcq') ||
         t.includes('qcm') || t.includes('choix multiples');
}

function classifyMCQ(text) {
  const lower = text.toLowerCase();
  let bestTopic = 'General Knowledge';
  let bestScore = 0;
  for (const rule of MCQ_TOPIC_RULES) {
    let score = 0;
    for (const kw of rule.keywords) {
      if (lower.includes(kw)) score++;
    }
    if (score > bestScore) {
      bestScore = score;
      bestTopic = rule.name;
    }
  }
  return bestTopic;
}

function buildStudyIndex() {
  const index = {};
  const allTopicNames = [...new Set([
    ...ESSAY_TOPIC_RULES.map(r => r.name),
    ...MCQ_TOPIC_RULES.map(r => r.name),
    'General Knowledge'
  ])];
  allTopicNames.forEach(t => { index[t] = { essays: [], mcqs: [] }; });
  for (const [year, data] of Object.entries(examData)) {
    data.papers.forEach((paper, pi) => {
      paper.sections.forEach((sec, si) => {
        const st = sec.title.toLowerCase();
        if (isMCQSection(st)) {
          const pt = paper.title.toLowerCase();
          let paperTopic = null;
          for (const rule of ESSAY_TOPIC_RULES) {
            if (rule.keywords.some(kw => pt.includes(kw))) {
              paperTopic = rule.name;
              break;
            }
          }
          if (paperTopic !== 'Digital Literacy' && paperTopic !== 'Digital Electronics') {
            paperTopic = null;
          }
          sec.questions.forEach((q, qi) => {
            const topic = paperTopic || classifyMCQ(q.text + ' ' + (q.subtext || ''));
            if (!index[topic]) index[topic] = { essays: [], mcqs: [] };
            index[topic].mcqs.push({
              year, paperIdx: pi, paperTitle: paper.title,
              sectionTitle: sec.title, si, qi,
              question: q,
              source: year + ' \u00b7 ' + paper.title + ' \u00b7 ' + sec.title
            });
          });
        } else {
          let essayTopic = null;
          const pt = paper.title.toLowerCase();
          for (const rule of ESSAY_TOPIC_RULES) {
            if (rule.keywords.some(kw => pt.includes(kw))) {
              essayTopic = rule.name;
              break;
            }
          }
          if (!essayTopic) {
            for (const rule of ESSAY_TOPIC_RULES) {
              if (rule.keywords.some(kw => st.includes(kw))) {
                essayTopic = rule.name;
                break;
              }
            }
          }
          if (essayTopic) {
            sec.questions.forEach((q, qi) => {
              let finalTopic = essayTopic;
              const qt = (q.text + ' ' + (q.subtext || '')).toLowerCase();
              const subRules = SUB_TOPIC_RULES[essayTopic];
              if (subRules) {
                for (const sub of subRules) {
                  if (sub.keywords.some(kw => qt.includes(kw))) {
                    finalTopic = sub.name;
                    break;
                  }
                }
              }
              if (!index[finalTopic]) index[finalTopic] = { essays: [], mcqs: [] };
              index[finalTopic].essays.push({
                year, paperIdx: pi, paperTitle: paper.title,
                sectionTitle: sec.title, si, qi,
                question: q,
                source: year + ' \u00b7 ' + paper.title + ' \u00b7 ' + sec.title
              });
            });
          }
        }
      });
    });
  }
  return index;
}

function getStudyIndex() {
  if (!studyIndex) studyIndex = buildStudyIndex();
  return studyIndex;
}
