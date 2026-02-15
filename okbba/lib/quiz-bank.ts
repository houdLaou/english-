import type { QuizData } from "@/components/quiz-form"

const quizBank: Record<string, Record<string, QuizData[]>> = {
  "machine learning": {
    easy: [
      {
        title: "Machine Learning Fundamentals",
        questions: [
          {
            id: 1,
            question: "What is Machine Learning?",
            options: [
              "A branch of AI that enables systems to learn from data",
              "A programming language for robots",
              "A type of computer hardware",
              "A database management system",
            ],
            correctAnswer: 0,
            explanation:
              "Machine Learning is a subset of Artificial Intelligence that allows systems to automatically learn and improve from experience without being explicitly programmed.",
          },
          {
            id: 2,
            question: "Which of the following is a type of Machine Learning?",
            options: [
              "Supervised Learning",
              "Parallel Learning",
              "Sequential Learning",
              "Manual Learning",
            ],
            correctAnswer: 0,
            explanation:
              "Supervised Learning is one of the three main types of ML, along with Unsupervised Learning and Reinforcement Learning. It uses labeled training data.",
          },
          {
            id: 3,
            question: "What is a 'dataset' in Machine Learning?",
            options: [
              "A collection of data used for training and testing models",
              "A type of neural network",
              "A programming framework",
              "A hardware component for AI",
            ],
            correctAnswer: 0,
            explanation:
              "A dataset is a structured collection of data that is used to train, validate, and test machine learning models.",
          },
          {
            id: 4,
            question:
              "Which company developed the popular ML framework TensorFlow?",
            options: ["Google", "Microsoft", "Amazon", "Facebook"],
            correctAnswer: 0,
            explanation:
              "TensorFlow was developed by Google Brain and released as open-source software in 2015. It is widely used for machine learning applications.",
          },
          {
            id: 5,
            question: "What does 'training' a model mean?",
            options: [
              "Teaching the model to recognize patterns in data",
              "Installing the model on a computer",
              "Writing the source code for the model",
              "Deleting old data from the model",
            ],
            correctAnswer: 0,
            explanation:
              "Training a model means feeding it data so it can learn patterns and relationships, adjusting its parameters to minimize prediction errors.",
          },
        ],
      },
    ],
    medium: [
      {
        title: "Machine Learning: Intermediate Concepts",
        questions: [
          {
            id: 1,
            question: "What is overfitting in machine learning?",
            options: [
              "When a model learns training data too well, including noise",
              "When a model is too simple to capture patterns",
              "When a model runs out of memory",
              "When a model trains too slowly",
            ],
            correctAnswer: 0,
            explanation:
              "Overfitting occurs when a model memorizes the training data rather than learning generalizable patterns, resulting in poor performance on unseen data.",
          },
          {
            id: 2,
            question:
              "Which algorithm is commonly used for classification tasks?",
            options: [
              "Random Forest",
              "K-Means Clustering",
              "Principal Component Analysis",
              "Apriori Algorithm",
            ],
            correctAnswer: 0,
            explanation:
              "Random Forest is an ensemble learning method commonly used for classification. K-Means is for clustering, PCA for dimensionality reduction, and Apriori for association rules.",
          },
          {
            id: 3,
            question: "What is the purpose of a validation set?",
            options: [
              "To tune hyperparameters and prevent overfitting",
              "To train the model on new data",
              "To store the final model weights",
              "To clean the training data",
            ],
            correctAnswer: 0,
            explanation:
              "A validation set is used to evaluate model performance during training, helping to tune hyperparameters and detect overfitting before testing on the test set.",
          },
          {
            id: 4,
            question: "What is gradient descent?",
            options: [
              "An optimization algorithm to minimize the loss function",
              "A method to increase model complexity",
              "A data preprocessing technique",
              "A type of neural network architecture",
            ],
            correctAnswer: 0,
            explanation:
              "Gradient descent is an iterative optimization algorithm used to find the minimum of the loss function by updating model parameters in the direction of steepest descent.",
          },
          {
            id: 5,
            question: "What is the bias-variance tradeoff?",
            options: [
              "The balance between model simplicity and complexity",
              "The choice between CPU and GPU processing",
              "The decision between supervised and unsupervised learning",
              "The tradeoff between training speed and accuracy",
            ],
            correctAnswer: 0,
            explanation:
              "The bias-variance tradeoff describes the tension between a model that is too simple (high bias, underfitting) and one that is too complex (high variance, overfitting).",
          },
        ],
      },
    ],
    hard: [
      {
        title: "Machine Learning: Advanced Topics",
        questions: [
          {
            id: 1,
            question:
              "In a Convolutional Neural Network (CNN), what does the pooling layer do?",
            options: [
              "Reduces spatial dimensions while retaining important features",
              "Adds more neurons to the network",
              "Normalizes the input data",
              "Connects all neurons in adjacent layers",
            ],
            correctAnswer: 0,
            explanation:
              "Pooling layers (e.g., max pooling) downsample feature maps, reducing spatial dimensions and computation while preserving the most important features.",
          },
          {
            id: 2,
            question: "What is the vanishing gradient problem?",
            options: [
              "Gradients become extremely small, preventing weight updates in deep networks",
              "The model produces gradients that are too large",
              "The loss function reaches zero too quickly",
              "The learning rate increases uncontrollably",
            ],
            correctAnswer: 0,
            explanation:
              "The vanishing gradient problem occurs in deep networks when gradients are multiplied through many layers, becoming exponentially small, which stalls learning in early layers.",
          },
          {
            id: 3,
            question:
              "What is the key innovation of the Transformer architecture?",
            options: [
              "Self-attention mechanism for parallel sequence processing",
              "Recurrent connections for sequential data",
              "Convolutional filters for feature extraction",
              "Decision trees for ensemble learning",
            ],
            correctAnswer: 0,
            explanation:
              "The Transformer (introduced in 'Attention Is All You Need', 2017) uses self-attention to process all positions in a sequence simultaneously, enabling massive parallelization.",
          },
          {
            id: 4,
            question: "What is the purpose of batch normalization?",
            options: [
              "Normalizes layer inputs to stabilize and accelerate training",
              "Splits data into batches for processing",
              "Removes outliers from the dataset",
              "Increases the batch size during training",
            ],
            correctAnswer: 0,
            explanation:
              "Batch normalization normalizes the inputs to each layer, reducing internal covariate shift, which allows higher learning rates and acts as a regularizer.",
          },
          {
            id: 5,
            question:
              "In Generative Adversarial Networks (GANs), what are the two competing networks?",
            options: [
              "Generator and Discriminator",
              "Encoder and Decoder",
              "Classifier and Regressor",
              "Trainer and Validator",
            ],
            correctAnswer: 0,
            explanation:
              "GANs consist of a Generator that creates synthetic data and a Discriminator that tries to distinguish real from fake data. They train adversarially, improving each other.",
          },
        ],
      },
    ],
  },
  "the solar system": {
    easy: [
      {
        title: "The Solar System: Basic Facts",
        questions: [
          {
            id: 1,
            question: "How many planets are in our solar system?",
            options: ["8", "9", "7", "10"],
            correctAnswer: 0,
            explanation:
              "There are 8 recognized planets in our solar system. Pluto was reclassified as a dwarf planet in 2006.",
          },
          {
            id: 2,
            question: "Which planet is closest to the Sun?",
            options: ["Mercury", "Venus", "Earth", "Mars"],
            correctAnswer: 0,
            explanation:
              "Mercury is the closest planet to the Sun, orbiting at an average distance of about 58 million kilometers.",
          },
          {
            id: 3,
            question: "What is the largest planet in our solar system?",
            options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
            correctAnswer: 0,
            explanation:
              "Jupiter is by far the largest planet, with a mass more than twice that of all other planets combined.",
          },
          {
            id: 4,
            question: "Which planet is known as the Red Planet?",
            options: ["Mars", "Jupiter", "Venus", "Mercury"],
            correctAnswer: 0,
            explanation:
              "Mars is called the Red Planet because iron oxide (rust) on its surface gives it a reddish appearance.",
          },
          {
            id: 5,
            question: "What star is at the center of our solar system?",
            options: ["The Sun", "Alpha Centauri", "Sirius", "Polaris"],
            correctAnswer: 0,
            explanation:
              "The Sun is the star at the center of our solar system. It contains 99.86% of the total mass of the entire solar system.",
          },
        ],
      },
    ],
    medium: [
      {
        title: "The Solar System: Deeper Exploration",
        questions: [
          {
            id: 1,
            question: "Which planet has the most known moons?",
            options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
            correctAnswer: 0,
            explanation:
              "Saturn holds the record with over 140 confirmed moons, surpassing Jupiter's approximately 95 known moons.",
          },
          {
            id: 2,
            question: "What is the asteroid belt located between?",
            options: [
              "Mars and Jupiter",
              "Earth and Mars",
              "Jupiter and Saturn",
              "Venus and Earth",
            ],
            correctAnswer: 0,
            explanation:
              "The asteroid belt is located between the orbits of Mars and Jupiter, containing millions of rocky objects.",
          },
          {
            id: 3,
            question: "Which planet rotates on its side?",
            options: ["Uranus", "Neptune", "Saturn", "Venus"],
            correctAnswer: 0,
            explanation:
              "Uranus has an axial tilt of about 98 degrees, meaning it essentially rotates on its side, likely due to a massive ancient collision.",
          },
          {
            id: 4,
            question:
              "What is the Great Red Spot on Jupiter?",
            options: [
              "A massive, persistent storm",
              "A volcanic region",
              "An impact crater",
              "A large mountain range",
            ],
            correctAnswer: 0,
            explanation:
              "The Great Red Spot is a giant anticyclonic storm on Jupiter that has been observed for over 350 years. It is larger than Earth.",
          },
          {
            id: 5,
            question: "Which planet has the longest year (orbital period)?",
            options: ["Neptune", "Uranus", "Saturn", "Jupiter"],
            correctAnswer: 0,
            explanation:
              "Neptune takes approximately 165 Earth years to complete one orbit around the Sun, making it the planet with the longest year.",
          },
        ],
      },
    ],
    hard: [
      {
        title: "The Solar System: Advanced Astronomy",
        questions: [
          {
            id: 1,
            question:
              "What is the Roche limit in the context of planetary science?",
            options: [
              "The minimum distance a moon can orbit before tidal forces break it apart",
              "The maximum distance a planet can be from its star",
              "The speed needed to escape a planet's gravity",
              "The boundary of a star's habitable zone",
            ],
            correctAnswer: 0,
            explanation:
              "The Roche limit is the distance within which a celestial body held together only by gravity will be torn apart by tidal forces from a larger body.",
          },
          {
            id: 2,
            question: "What causes Saturn's rings to exist?",
            options: [
              "Tidal forces prevent ring particles from coalescing into moons",
              "Magnetic fields hold ice particles in orbit",
              "Solar wind pushes debris into ring formation",
              "Saturn's rapid rotation flings material outward",
            ],
            correctAnswer: 0,
            explanation:
              "Saturn's rings exist within the Roche limit, where tidal forces from Saturn prevent the ice and rock particles from combining into larger moons.",
          },
          {
            id: 3,
            question:
              "What is the Kuiper Belt?",
            options: [
              "A region of icy bodies beyond Neptune's orbit",
              "The inner boundary of the solar system",
              "A collection of asteroids near Jupiter",
              "The magnetic field surrounding the Sun",
            ],
            correctAnswer: 0,
            explanation:
              "The Kuiper Belt extends from Neptune's orbit (30 AU) to approximately 50 AU from the Sun and contains dwarf planets like Pluto and Eris.",
          },
          {
            id: 4,
            question:
              "What evidence suggests that Europa (Jupiter's moon) may harbor life?",
            options: [
              "A subsurface ocean beneath its ice crust maintained by tidal heating",
              "Dense vegetation observed on its surface",
              "High oxygen levels in its atmosphere",
              "Fossil records found by space probes",
            ],
            correctAnswer: 0,
            explanation:
              "Europa is believed to have a liquid water ocean beneath its icy surface, kept warm by tidal heating from Jupiter's gravitational influence, making it a prime candidate for extraterrestrial life.",
          },
          {
            id: 5,
            question:
              "What is the heliosphere?",
            options: [
              "The region of space dominated by the solar wind and Sun's magnetic field",
              "The visible surface of the Sun",
              "The area where planets orbit",
              "The core of the Sun where fusion occurs",
            ],
            correctAnswer: 0,
            explanation:
              "The heliosphere is a vast bubble-like region surrounding the Sun where the solar wind and magnetic field dominate, extending well past Pluto to the heliopause.",
          },
        ],
      },
    ],
  },
  "world history": {
    easy: [
      {
        title: "World History: Key Events",
        questions: [
          {
            id: 1,
            question: "In which year did World War II end?",
            options: ["1945", "1939", "1918", "1950"],
            correctAnswer: 0,
            explanation:
              "World War II ended in 1945 with the surrender of Germany in May and Japan in September, following the atomic bombings of Hiroshima and Nagasaki.",
          },
          {
            id: 2,
            question:
              "Which ancient civilization built the pyramids of Giza?",
            options: [
              "Ancient Egypt",
              "Ancient Rome",
              "Ancient Greece",
              "The Aztec Empire",
            ],
            correctAnswer: 0,
            explanation:
              "The pyramids of Giza were built by the Ancient Egyptians around 2560 BCE as monumental tombs for their pharaohs.",
          },
          {
            id: 3,
            question: "Who was the first President of the United States?",
            options: [
              "George Washington",
              "Thomas Jefferson",
              "Abraham Lincoln",
              "John Adams",
            ],
            correctAnswer: 0,
            explanation:
              "George Washington served as the first President of the United States from 1789 to 1797 and is often called the 'Father of His Country.'",
          },
          {
            id: 4,
            question: "The Renaissance period originated in which country?",
            options: ["Italy", "France", "England", "Spain"],
            correctAnswer: 0,
            explanation:
              "The Renaissance began in Italy during the 14th century, starting in city-states like Florence, before spreading throughout Europe.",
          },
          {
            id: 5,
            question: "What year did the Berlin Wall fall?",
            options: ["1989", "1991", "1985", "1979"],
            correctAnswer: 0,
            explanation:
              "The Berlin Wall fell on November 9, 1989, symbolizing the end of the Cold War and leading to German reunification in 1990.",
          },
        ],
      },
    ],
    medium: [
      {
        title: "World History: Deeper Analysis",
        questions: [
          {
            id: 1,
            question:
              "What was the primary cause of World War I?",
            options: [
              "A complex web of alliances, imperialism, militarism, and nationalism",
              "The invasion of Poland by Germany",
              "The American Revolution",
              "The discovery of nuclear weapons",
            ],
            correctAnswer: 0,
            explanation:
              "WWI was triggered by the assassination of Archduke Franz Ferdinand, but its root causes were the alliance systems, imperial competition, arms races, and rising nationalism across Europe.",
          },
          {
            id: 2,
            question: "What was the Silk Road?",
            options: [
              "An ancient network of trade routes connecting East and West",
              "A Roman highway system",
              "A type of fabric manufacturing process",
              "A sea route around Africa",
            ],
            correctAnswer: 0,
            explanation:
              "The Silk Road was a network of trade routes connecting China and the Far East with the Middle East and Europe, facilitating the exchange of goods, ideas, and cultures for centuries.",
          },
          {
            id: 3,
            question:
              "Which event is considered the start of the French Revolution?",
            options: [
              "The storming of the Bastille in 1789",
              "The execution of Louis XVI in 1793",
              "Napoleon's rise to power in 1799",
              "The Declaration of the Rights of Man in 1789",
            ],
            correctAnswer: 0,
            explanation:
              "The storming of the Bastille on July 14, 1789 is widely considered the symbolic start of the French Revolution, representing the people's uprising against royal authority.",
          },
          {
            id: 4,
            question:
              "What was the significance of the Treaty of Westphalia (1648)?",
            options: [
              "It established the concept of state sovereignty in international relations",
              "It ended World War I",
              "It divided Africa among European powers",
              "It created the United Nations",
            ],
            correctAnswer: 0,
            explanation:
              "The Treaty of Westphalia ended the Thirty Years' War and established the principle of national sovereignty, forming the foundation of the modern international system.",
          },
          {
            id: 5,
            question:
              "What was the Industrial Revolution's most significant impact?",
            options: [
              "The shift from agrarian economies to mechanized manufacturing",
              "The discovery of the Americas",
              "The development of ancient writing systems",
              "The fall of the Roman Empire",
            ],
            correctAnswer: 0,
            explanation:
              "The Industrial Revolution (1760-1840) transformed economies from agricultural to industrial, introducing factory systems, urbanization, and massive technological advancement.",
          },
        ],
      },
    ],
    hard: [
      {
        title: "World History: Critical Analysis",
        questions: [
          {
            id: 1,
            question:
              "How did the printing press (c. 1440) fundamentally alter European society?",
            options: [
              "It democratized knowledge, enabling the Reformation and Scientific Revolution",
              "It only benefited the wealthy ruling class",
              "It had minimal impact for the first 200 years",
              "It was primarily used for government propaganda",
            ],
            correctAnswer: 0,
            explanation:
              "Gutenberg's printing press revolutionized information dissemination, making books affordable, fueling literacy, enabling Martin Luther's Reformation, and accelerating the Scientific Revolution.",
          },
          {
            id: 2,
            question:
              "What role did the Columbian Exchange play in shaping the modern world?",
            options: [
              "It transferred crops, animals, diseases, and ideas between hemispheres, transforming global populations",
              "It was solely a military conquest of the Americas",
              "It only involved the trade of gold and silver",
              "It had little lasting impact on world demographics",
            ],
            correctAnswer: 0,
            explanation:
              "The Columbian Exchange transferred plants (potatoes, maize), animals (horses), diseases (smallpox), and ideas between the Old and New Worlds, dramatically reshaping global demographics, agriculture, and economies.",
          },
          {
            id: 3,
            question:
              "Why is the Congress of Vienna (1814-1815) considered a pivotal moment in diplomatic history?",
            options: [
              "It established the Concert of Europe and a balance of power that maintained relative peace for decades",
              "It led directly to World War I",
              "It dissolved all European monarchies",
              "It created the first democratic governments in Europe",
            ],
            correctAnswer: 0,
            explanation:
              "The Congress of Vienna redrew European borders after Napoleon's defeat and established a balance-of-power system (the Concert of Europe) that prevented major continental wars for nearly a century.",
          },
          {
            id: 4,
            question:
              "How did the Meiji Restoration (1868) transform Japan?",
            options: [
              "It rapidly modernized Japan from feudal society to industrial power within decades",
              "It isolated Japan from Western influence",
              "It established a democratic republic",
              "It had minimal impact on Japanese society",
            ],
            correctAnswer: 0,
            explanation:
              "The Meiji Restoration ended the Tokugawa shogunate and rapidly modernized Japan through industrialization, Western-style military reform, and constitutional government, making it a world power by 1905.",
          },
          {
            id: 5,
            question:
              "What was the lasting significance of the Bretton Woods Conference (1944)?",
            options: [
              "It created the IMF and World Bank, establishing the post-war international financial order",
              "It ended World War II",
              "It divided Germany into East and West",
              "It established the European Union",
            ],
            correctAnswer: 0,
            explanation:
              "Bretton Woods established the international monetary system with fixed exchange rates, created the IMF and World Bank, and set the US dollar as the world's reserve currency, shaping global economics for decades.",
          },
        ],
      },
    ],
  },
  "data structures": {
    easy: [
      {
        title: "Data Structures: Fundamentals",
        questions: [
          {
            id: 1,
            question: "What is an array?",
            options: [
              "A collection of elements stored in contiguous memory locations",
              "A dynamic collection with no fixed size",
              "A hierarchical tree structure",
              "A random collection of unrelated data",
            ],
            correctAnswer: 0,
            explanation:
              "An array is a data structure that stores elements of the same type in contiguous (adjacent) memory locations, allowing direct access by index.",
          },
          {
            id: 2,
            question: "What does LIFO stand for?",
            options: [
              "Last In, First Out",
              "Last In, First Order",
              "Linked Input, First Output",
              "Linear In, Fixed Out",
            ],
            correctAnswer: 0,
            explanation:
              "LIFO (Last In, First Out) is the principle behind stacks, where the most recently added element is the first one to be removed.",
          },
          {
            id: 3,
            question: "Which data structure uses FIFO ordering?",
            options: ["Queue", "Stack", "Array", "Tree"],
            correctAnswer: 0,
            explanation:
              "A Queue follows FIFO (First In, First Out), meaning the first element added is the first one removed, like a real-world queue.",
          },
          {
            id: 4,
            question: "What is a linked list?",
            options: [
              "A sequence of nodes where each node points to the next",
              "An array with extra features",
              "A type of database table",
              "A sorted collection of numbers",
            ],
            correctAnswer: 0,
            explanation:
              "A linked list is a linear data structure where elements (nodes) are not stored in contiguous memory. Each node contains data and a reference (pointer) to the next node.",
          },
          {
            id: 5,
            question:
              "What is the time complexity of accessing an element in an array by index?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
            correctAnswer: 0,
            explanation:
              "Array access by index is O(1) (constant time) because elements are stored in contiguous memory, so the address can be calculated directly from the index.",
          },
        ],
      },
    ],
    medium: [
      {
        title: "Data Structures: Intermediate Concepts",
        questions: [
          {
            id: 1,
            question:
              "What is the worst-case time complexity of searching in a binary search tree (BST)?",
            options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
            correctAnswer: 0,
            explanation:
              "In the worst case (a degenerate/skewed tree), a BST degrades to a linked list, making search O(n). A balanced BST guarantees O(log n).",
          },
          {
            id: 2,
            question: "What is a hash collision?",
            options: [
              "When two different keys produce the same hash value",
              "When a hash table runs out of space",
              "When a hash function produces negative values",
              "When two hash tables merge",
            ],
            correctAnswer: 0,
            explanation:
              "A hash collision occurs when two different keys are mapped to the same index by the hash function. Common resolution methods include chaining and open addressing.",
          },
          {
            id: 3,
            question: "What is the main advantage of a heap data structure?",
            options: [
              "Efficient retrieval of the minimum or maximum element",
              "Fast random access like an array",
              "Maintaining sorted order of all elements",
              "Constant time insertion and deletion",
            ],
            correctAnswer: 0,
            explanation:
              "A heap provides O(1) access to the min (min-heap) or max (max-heap) element, with O(log n) insertion and deletion, making it ideal for priority queues.",
          },
          {
            id: 4,
            question: "What is the difference between a stack and a queue?",
            options: [
              "Stack is LIFO, Queue is FIFO",
              "Stack is FIFO, Queue is LIFO",
              "Both use the same ordering",
              "Stack is faster than Queue",
            ],
            correctAnswer: 0,
            explanation:
              "A Stack follows Last-In-First-Out (LIFO) ordering, while a Queue follows First-In-First-Out (FIFO) ordering. They serve different algorithmic purposes.",
          },
          {
            id: 5,
            question: "What is a graph in computer science?",
            options: [
              "A set of vertices connected by edges",
              "A visual chart like a bar graph",
              "A type of sorted array",
              "A linear data structure",
            ],
            correctAnswer: 0,
            explanation:
              "In CS, a graph is a non-linear data structure consisting of vertices (nodes) and edges (connections), used to model relationships like social networks, maps, and dependencies.",
          },
        ],
      },
    ],
    hard: [
      {
        title: "Data Structures: Advanced Topics",
        questions: [
          {
            id: 1,
            question: "What is the amortized time complexity of inserting into a dynamic array?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
            correctAnswer: 0,
            explanation:
              "While individual insertions may occasionally be O(n) due to resizing, the amortized cost over n insertions is O(1) because resizing happens infrequently when the array doubles.",
          },
          {
            id: 2,
            question: "What property makes a Red-Black tree balanced?",
            options: [
              "Color constraints and rotation rules ensure the longest path is at most twice the shortest",
              "Every node has exactly two children",
              "All leaf nodes are at the same depth",
              "Nodes are sorted alphabetically by color",
            ],
            correctAnswer: 0,
            explanation:
              "Red-Black trees maintain balance through 5 color properties (including: root is black, no consecutive red nodes, equal black-height). This guarantees O(log n) operations.",
          },
          {
            id: 3,
            question: "What is a trie (prefix tree) optimal for?",
            options: [
              "Fast string prefix matching and autocomplete functionality",
              "Sorting numerical data",
              "Graph traversal algorithms",
              "Binary search operations",
            ],
            correctAnswer: 0,
            explanation:
              "A trie stores strings character by character along paths. It enables O(m) prefix lookup (where m is the prefix length), making it ideal for autocomplete, spell-checking, and IP routing.",
          },
          {
            id: 4,
            question: "What problem does a Bloom filter solve?",
            options: [
              "Probabilistic set membership testing with no false negatives",
              "Exact duplicate detection in datasets",
              "Sorting large files on disk",
              "Finding the shortest path in a graph",
            ],
            correctAnswer: 0,
            explanation:
              "A Bloom filter is a space-efficient probabilistic data structure that tests whether an element is in a set. It may have false positives but never false negatives.",
          },
          {
            id: 5,
            question: "Why is a B-tree preferred for database indexing over a binary search tree?",
            options: [
              "B-trees minimize disk I/O by storing many keys per node, reducing tree height",
              "B-trees are simpler to implement",
              "B-trees use less memory than BSTs",
              "B-trees only work with string data",
            ],
            correctAnswer: 0,
            explanation:
              "B-trees have high branching factors, storing many keys per node. This keeps the tree short, minimizing the number of disk reads needed to find a key, which is critical for database performance.",
          },
        ],
      },
    ],
  },
  "climate change": {
    easy: [
      {
        title: "Climate Change: Essential Knowledge",
        questions: [
          {
            id: 1,
            question: "What is the greenhouse effect?",
            options: [
              "The trapping of heat in Earth's atmosphere by certain gases",
              "The cooling of Earth by clouds",
              "The process of growing plants in greenhouses",
              "The reflection of sunlight by ice caps",
            ],
            correctAnswer: 0,
            explanation:
              "The greenhouse effect is the process by which greenhouse gases (CO2, methane, etc.) trap heat in the atmosphere, warming Earth's surface above what it would be otherwise.",
          },
          {
            id: 2,
            question: "Which gas is the primary contributor to human-caused climate change?",
            options: [
              "Carbon dioxide (CO2)",
              "Oxygen (O2)",
              "Nitrogen (N2)",
              "Hydrogen (H2)",
            ],
            correctAnswer: 0,
            explanation:
              "Carbon dioxide is the primary greenhouse gas emitted through human activities, mainly from burning fossil fuels, deforestation, and industrial processes.",
          },
          {
            id: 3,
            question: "What is global warming?",
            options: [
              "The long-term increase in Earth's average surface temperature",
              "A temporary seasonal weather pattern",
              "The warming of oceans by underwater volcanoes",
              "The heat generated by urban areas",
            ],
            correctAnswer: 0,
            explanation:
              "Global warming refers to the long-term trend of increasing average temperatures on Earth, primarily driven by increased greenhouse gas emissions from human activities since the Industrial Revolution.",
          },
          {
            id: 4,
            question: "What is one major effect of melting ice caps?",
            options: [
              "Rising sea levels",
              "Increased snowfall worldwide",
              "Colder ocean temperatures",
              "More stable weather patterns",
            ],
            correctAnswer: 0,
            explanation:
              "As ice caps and glaciers melt, the water flows into the oceans, causing sea levels to rise, which threatens coastal communities and low-lying islands worldwide.",
          },
          {
            id: 5,
            question: "What are fossil fuels?",
            options: [
              "Coal, oil, and natural gas formed from ancient organisms",
              "Fuels made from recycled materials",
              "Modern synthetic energy sources",
              "Volcanic rock used for energy",
            ],
            correctAnswer: 0,
            explanation:
              "Fossil fuels (coal, petroleum, natural gas) are energy sources formed over millions of years from the remains of ancient plants and organisms. Burning them releases stored carbon as CO2.",
          },
        ],
      },
    ],
    medium: [
      {
        title: "Climate Change: Understanding the Science",
        questions: [
          {
            id: 1,
            question: "What is a carbon footprint?",
            options: [
              "The total greenhouse gas emissions caused by an individual, organization, or product",
              "The literal footprint left by carbon-based materials",
              "A measurement of soil carbon content",
              "The amount of CO2 a single tree absorbs",
            ],
            correctAnswer: 0,
            explanation:
              "A carbon footprint measures the total greenhouse gas emissions (expressed in CO2 equivalent) caused directly and indirectly by an activity, person, or entity.",
          },
          {
            id: 2,
            question: "What is the Paris Agreement?",
            options: [
              "An international treaty to limit global warming to 1.5-2 degrees Celsius above pre-industrial levels",
              "A trade agreement between European countries",
              "A scientific paper on climate change",
              "A plan to build nuclear power plants in France",
            ],
            correctAnswer: 0,
            explanation:
              "The Paris Agreement (2015) is a landmark international accord where 196 parties committed to limiting global temperature rise to well below 2 degrees C, preferably 1.5 degrees C, above pre-industrial levels.",
          },
          {
            id: 3,
            question: "What is ocean acidification?",
            options: [
              "The decrease in ocean pH caused by absorbing excess atmospheric CO2",
              "The increase in salt concentration of oceans",
              "The pollution of oceans by industrial acid",
              "The natural acidity cycle of ocean water",
            ],
            correctAnswer: 0,
            explanation:
              "When oceans absorb excess CO2, it reacts with seawater to form carbonic acid, lowering the pH. This threatens coral reefs and shellfish that need calcium carbonate to build their structures.",
          },
          {
            id: 4,
            question: "What are renewable energy sources?",
            options: [
              "Energy sources that replenish naturally, like solar, wind, and hydro",
              "Energy from recycled fossil fuels",
              "Nuclear energy only",
              "Energy from burning biomass only",
            ],
            correctAnswer: 0,
            explanation:
              "Renewable energy comes from naturally replenishing sources: solar, wind, hydroelectric, geothermal, and tidal power. They produce little to no greenhouse gas emissions during operation.",
          },
          {
            id: 5,
            question: "What is the role of the IPCC?",
            options: [
              "To assess scientific research on climate change and inform policy",
              "To enforce environmental laws globally",
              "To fund renewable energy projects",
              "To manage international carbon trading",
            ],
            correctAnswer: 0,
            explanation:
              "The Intergovernmental Panel on Climate Change (IPCC) is a UN body that assesses the science related to climate change, providing comprehensive reports that inform global policy decisions.",
          },
        ],
      },
    ],
    hard: [
      {
        title: "Climate Change: Advanced Analysis",
        questions: [
          {
            id: 1,
            question: "What are climate feedback loops?",
            options: [
              "Processes where climate change triggers effects that further amplify or dampen the original change",
              "Computer simulations of weather patterns",
              "Seasonal temperature variations",
              "The repetitive cycle of El Nino events",
            ],
            correctAnswer: 0,
            explanation:
              "Climate feedback loops are self-reinforcing (positive) or self-regulating (negative) cycles. For example, ice melting reduces reflectivity (albedo), absorbing more heat, which melts more ice (positive feedback).",
          },
          {
            id: 2,
            question: "What is the significance of the 'carbon budget' concept?",
            options: [
              "It quantifies the maximum CO2 emissions allowed to stay within a specific temperature target",
              "It calculates the cost of carbon capture technology",
              "It measures the total carbon in Earth's atmosphere",
              "It tracks carbon trading between countries",
            ],
            correctAnswer: 0,
            explanation:
              "The carbon budget estimates the maximum cumulative CO2 emissions permitted to have a given probability of limiting warming to a target (e.g., 1.5 degrees C). As of 2024, the remaining budget for 1.5 degrees C is critically small.",
          },
          {
            id: 3,
            question: "What are tipping points in the climate system?",
            options: [
              "Thresholds where small changes trigger large, potentially irreversible shifts in the climate system",
              "Points where temperature changes become linear",
              "Moments when climate policy takes effect",
              "Regular seasonal transitions",
            ],
            correctAnswer: 0,
            explanation:
              "Climate tipping points are critical thresholds (e.g., collapse of the Greenland ice sheet, Amazon dieback, permafrost thawing) where the climate system shifts abruptly and potentially irreversibly to a new state.",
          },
          {
            id: 4,
            question: "How does stratospheric aerosol injection (SAI) work as a proposed geoengineering solution?",
            options: [
              "By injecting reflective particles into the stratosphere to reflect sunlight and cool the planet",
              "By removing CO2 directly from the atmosphere",
              "By creating artificial clouds over the ocean",
              "By planting genetically modified crops that reflect more light",
            ],
            correctAnswer: 0,
            explanation:
              "SAI proposes mimicking volcanic eruptions by injecting sulfate aerosols into the stratosphere. While it could cool the planet, it carries risks including altered precipitation patterns, ozone depletion, and moral hazard.",
          },
          {
            id: 5,
            question: "Why is methane considered a more potent greenhouse gas than CO2 despite its shorter atmospheric lifetime?",
            options: [
              "Methane traps approximately 80 times more heat per molecule over 20 years",
              "Methane is more abundant than CO2",
              "Methane directly destroys the ozone layer",
              "Methane reflects more sunlight than CO2",
            ],
            correctAnswer: 0,
            explanation:
              "While methane (CH4) persists in the atmosphere for only ~12 years (vs CO2's centuries), it has ~80x the warming potential of CO2 over 20 years. Sources include agriculture, landfills, and fossil fuel extraction.",
          },
        ],
      },
    ],
  },
  "shakespeare": {
    easy: [
      {
        title: "Shakespeare: The Basics",
        questions: [
          {
            id: 1,
            question: "In which English town was Shakespeare born?",
            options: [
              "Stratford-upon-Avon",
              "London",
              "Oxford",
              "Cambridge",
            ],
            correctAnswer: 0,
            explanation:
              "William Shakespeare was born in Stratford-upon-Avon in 1564 and later moved to London to pursue his theatrical career.",
          },
          {
            id: 2,
            question: "Which of the following is a Shakespeare tragedy?",
            options: ["Hamlet", "The Tempest", "A Midsummer Night's Dream", "Twelfth Night"],
            correctAnswer: 0,
            explanation:
              "Hamlet is one of Shakespeare's great tragedies, along with Macbeth, Othello, and King Lear. The others listed are comedies or romances.",
          },
          {
            id: 3,
            question: "'Romeo and Juliet' is set in which Italian city?",
            options: ["Verona", "Venice", "Rome", "Florence"],
            correctAnswer: 0,
            explanation:
              "Romeo and Juliet is set in Verona, Italy, where two feuding families (Montagues and Capulets) create the backdrop for the famous love story.",
          },
          {
            id: 4,
            question: "What was the name of Shakespeare's famous theatre?",
            options: [
              "The Globe Theatre",
              "The Rose Theatre",
              "The Swan Theatre",
              "The Royal Theatre",
            ],
            correctAnswer: 0,
            explanation:
              "The Globe Theatre, built in 1599, was the primary venue for Shakespeare's plays. It was destroyed by fire in 1613 and rebuilt, and a modern reconstruction exists in London today.",
          },
          {
            id: 5,
            question: "Approximately how many plays did Shakespeare write?",
            options: ["37", "15", "50", "100"],
            correctAnswer: 0,
            explanation:
              "Shakespeare wrote approximately 37 plays (the exact number is debated), including tragedies, comedies, histories, and romances, between roughly 1590 and 1613.",
          },
        ],
      },
    ],
    medium: [
      {
        title: "Shakespeare: Deeper Study",
        questions: [
          {
            id: 1,
            question: "What is the central theme of 'Macbeth'?",
            options: [
              "The corrupting influence of unchecked ambition",
              "The power of romantic love",
              "The importance of family loyalty",
              "The benefits of democratic rule",
            ],
            correctAnswer: 0,
            explanation:
              "Macbeth explores how ambition, spurred by the witches' prophecy and Lady Macbeth's influence, corrupts Macbeth from a noble warrior into a tyrannical murderer.",
          },
          {
            id: 2,
            question: "What literary form is a Shakespearean sonnet?",
            options: [
              "14 lines with three quatrains and a couplet, in iambic pentameter",
              "12 lines with alternating rhyme scheme",
              "16 lines in free verse",
              "10 lines with a repeating chorus",
            ],
            correctAnswer: 0,
            explanation:
              "A Shakespearean (English) sonnet has 14 lines in iambic pentameter, organized as three quatrains (ABAB CDCD EFEF) and a final rhyming couplet (GG) that often provides a twist.",
          },
          {
            id: 3,
            question: "Which play features the famous 'To be, or not to be' soliloquy?",
            options: ["Hamlet", "Macbeth", "Othello", "King Lear"],
            correctAnswer: 0,
            explanation:
              "'To be, or not to be' appears in Act 3, Scene 1 of Hamlet, where Prince Hamlet contemplates existence, death, and the nature of suffering.",
          },
          {
            id: 4,
            question: "What is the 'play within a play' in Hamlet called?",
            options: [
              "The Mousetrap",
              "The Murder of Gonzago",
              "The King's Conscience",
              "Both A and B are correct",
            ],
            correctAnswer: 3,
            explanation:
              "Hamlet calls it 'The Mousetrap,' while the play itself is called 'The Murder of Gonzago.' Hamlet uses it to observe Claudius's reaction and confirm his guilt.",
          },
          {
            id: 5,
            question: "In 'The Merchant of Venice,' what must the borrower forfeit if the loan is not repaid?",
            options: [
              "A pound of flesh",
              "His house and lands",
              "His first-born child",
              "A chest of gold",
            ],
            correctAnswer: 0,
            explanation:
              "Shylock demands a pound of Antonio's flesh as collateral. This bond drives the central conflict and raises themes of justice, mercy, and prejudice.",
          },
        ],
      },
    ],
    hard: [
      {
        title: "Shakespeare: Critical Analysis",
        questions: [
          {
            id: 1,
            question: "How does Shakespeare use the motif of 'appearance vs. reality' in Othello?",
            options: [
              "Iago appears honest while manipulating everyone, and Othello misjudges appearances throughout",
              "All characters are exactly what they seem",
              "Only Desdemona hides her true nature",
              "The motif only appears in the final act",
            ],
            correctAnswer: 0,
            explanation:
              "The appearance vs. reality theme pervades Othello: Iago is called 'honest' while being duplicitous, Othello is deceived by manufactured evidence, and characters consistently misjudge what they see vs. what is true.",
          },
          {
            id: 2,
            question: "What is the significance of the 'storm' in King Lear?",
            options: [
              "It mirrors Lear's psychological turmoil and the social/political chaos in the kingdom",
              "It is simply a weather event with no symbolic meaning",
              "It represents divine punishment for Cordelia",
              "It symbolizes the power of nature over humans only",
            ],
            correctAnswer: 0,
            explanation:
              "The storm in Act 3 of King Lear is a pathetic fallacy: the violent weather mirrors Lear's descent into madness, the disorder in his kingdom, and the breakdown of natural bonds between parent and child.",
          },
          {
            id: 3,
            question: "Why is 'The Tempest' often considered Shakespeare's farewell to the stage?",
            options: [
              "Prospero's epilogue, renouncing his magic, is read as Shakespeare's farewell to his art of playwriting",
              "It was the last play ever performed at the Globe",
              "Shakespeare explicitly stated this in a letter",
              "The play's tragic ending mirrors Shakespeare's own life",
            ],
            correctAnswer: 0,
            explanation:
              "In The Tempest's epilogue, Prospero breaks his staff and drowns his books (renouncing magic). Scholars read this as Shakespeare's meta-theatrical farewell, equating Prospero's magic with the playwright's craft.",
          },
          {
            id: 4,
            question: "How does Shakespeare challenge gender norms in 'Twelfth Night'?",
            options: [
              "Through Viola's cross-dressing as Cesario, creating complex layers of gender performance and desire",
              "By having all roles played by women",
              "By avoiding any female characters",
              "Gender is not addressed in the play",
            ],
            correctAnswer: 0,
            explanation:
              "Viola disguises as Cesario, creating a layered gender performance (especially since boys played women's roles). This generates complex desire: Olivia loves Cesario/Viola, who loves Orsino, questioning fixed gender identity.",
          },
          {
            id: 5,
            question: "What does the concept of 'divine right of kings' mean in Shakespeare's history plays?",
            options: [
              "The belief that a monarch's authority comes directly from God, making rebellion a sin",
              "The idea that kings should be democratically elected",
              "A legal framework for royal succession",
              "The king's right to attend church services",
            ],
            correctAnswer: 0,
            explanation:
              "Shakespeare's history plays (Richard II, Henry IV, Henry V) explore the divine right doctrine: that God ordains kings. Deposing a rightful king disrupts cosmic order, leading to civil war and suffering (the Tudor myth).",
          },
        ],
      },
    ],
  },
}

// Generic fallback quiz for topics not in the bank
function generateGenericQuiz(
  topic: string,
  numQuestions: number,
  difficulty: string
): QuizData {
  const questions = [
    {
      id: 1,
      question: `What is the primary purpose of studying ${topic}?`,
      options: [
        "To gain deeper understanding and knowledge in the field",
        "There is no practical benefit",
        "It is only useful for entertainment",
        "It was required by ancient law",
      ],
      correctAnswer: 0,
      explanation: `Studying ${topic} provides valuable knowledge and understanding that can be applied across many areas of life and work.`,
    },
    {
      id: 2,
      question: `Which approach is most effective for learning about ${topic}?`,
      options: [
        "Combining theory with hands-on practice and critical thinking",
        "Only reading textbooks without application",
        "Avoiding all structured learning methods",
        "Relying solely on memorization",
      ],
      correctAnswer: 0,
      explanation:
        "Research shows that combining multiple learning approaches - theory, practice, and critical analysis - leads to the deepest understanding.",
    },
    {
      id: 3,
      question: `How has technology impacted the study of ${topic}?`,
      options: [
        "It has made information more accessible and enabled new methods of analysis",
        "Technology has had no impact whatsoever",
        "It has made studying more difficult",
        "Technology only benefits entertainment, not education",
      ],
      correctAnswer: 0,
      explanation:
        "Technology has revolutionized education across all fields by providing access to vast resources, enabling collaboration, and creating new analytical tools.",
    },
    {
      id: 4,
      question: `What role does critical thinking play in understanding ${topic}?`,
      options: [
        "It helps evaluate evidence, identify biases, and form well-reasoned conclusions",
        "Critical thinking is not relevant to this subject",
        "It only matters in philosophy",
        "It slows down the learning process",
      ],
      correctAnswer: 0,
      explanation:
        "Critical thinking is essential in every field of study. It enables learners to analyze information objectively, question assumptions, and develop informed perspectives.",
    },
    {
      id: 5,
      question: `Why is ${topic} considered important in modern education?`,
      options: [
        "It develops essential skills and knowledge applicable to real-world challenges",
        "It is not considered important by educators",
        "It is only studied in one country",
        "It has been removed from most curricula",
      ],
      correctAnswer: 0,
      explanation: `${topic} remains a vital area of study because it equips learners with knowledge and skills that address current and future challenges in our rapidly changing world.`,
    },
    {
      id: 6,
      question: `What is a common misconception about ${topic}?`,
      options: [
        "That it is too complex for beginners to understand",
        "That everyone already fully understands it",
        "That it was invented last year",
        "That only machines can study it",
      ],
      correctAnswer: 0,
      explanation: `Many people assume ${topic} is inaccessible to beginners, but with the right approach and resources, anyone can build a solid foundational understanding.`,
    },
    {
      id: 7,
      question: `How can AI tools support learning about ${topic}?`,
      options: [
        "By generating personalized practice questions and providing instant feedback",
        "AI cannot help with any educational topic",
        "By replacing teachers entirely",
        "By making students memorize more facts",
      ],
      correctAnswer: 0,
      explanation:
        "AI tools like this quiz generator can create customized learning experiences, adapt to individual needs, and provide immediate feedback to enhance understanding.",
    },
    {
      id: 8,
      question: `What skill is most valuable when researching ${topic}?`,
      options: [
        "The ability to evaluate sources and synthesize information",
        "Speed reading without comprehension",
        "Copying text without attribution",
        "Avoiding all digital resources",
      ],
      correctAnswer: 0,
      explanation:
        "Source evaluation and information synthesis are crucial research skills. They ensure the knowledge gained is accurate, well-rounded, and properly attributed.",
    },
    {
      id: 9,
      question: `What is the relationship between ${topic} and other fields of study?`,
      options: [
        "It is interconnected with many disciplines, enabling cross-disciplinary insights",
        "It exists in complete isolation from other fields",
        "It only relates to mathematics",
        "There are no connections to any other subject",
      ],
      correctAnswer: 0,
      explanation:
        "Modern knowledge is highly interconnected. Understanding the relationships between fields leads to richer insights and more innovative solutions to complex problems.",
    },
    {
      id: 10,
      question: `What is the best way to stay current with developments in ${topic}?`,
      options: [
        "Follow reputable journals, attend conferences, and engage with expert communities",
        "Ignore all new developments",
        "Only read social media posts",
        "Wait for textbooks to be updated every decade",
      ],
      correctAnswer: 0,
      explanation:
        "Staying current requires actively engaging with the latest research through journals, conferences, online communities, and expert discussions in the field.",
    },
  ]

  return {
    title: `Quiz: ${topic.charAt(0).toUpperCase() + topic.slice(1)}`,
    questions: questions.slice(0, numQuestions),
  }
}

export function getQuiz(
  topic: string,
  numQuestions: number,
  difficulty: string
): QuizData {
  const normalizedTopic = topic.toLowerCase().trim()

  // Check if we have a matching quiz in the bank
  const topicQuizzes = quizBank[normalizedTopic]
  if (topicQuizzes) {
    const difficultyQuizzes = topicQuizzes[difficulty]
    if (difficultyQuizzes && difficultyQuizzes.length > 0) {
      const quiz = difficultyQuizzes[0]
      return {
        ...quiz,
        questions: quiz.questions.slice(0, numQuestions),
      }
    }
    // Fallback to medium if specific difficulty not found
    const fallback = topicQuizzes["medium"]
    if (fallback && fallback.length > 0) {
      return {
        ...fallback[0],
        questions: fallback[0].questions.slice(0, numQuestions),
      }
    }
  }

  // Partial match - check if the search term is contained in any topic key
  for (const key of Object.keys(quizBank)) {
    if (
      key.includes(normalizedTopic) ||
      normalizedTopic.includes(key)
    ) {
      const match = quizBank[key][difficulty] || quizBank[key]["medium"]
      if (match && match.length > 0) {
        return {
          ...match[0],
          questions: match[0].questions.slice(0, numQuestions),
        }
      }
    }
  }

  // No match, return generic quiz
  return generateGenericQuiz(topic, numQuestions, difficulty)
}
