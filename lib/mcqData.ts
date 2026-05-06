import { MCQ } from "@/types";

export const mcqData: MCQ[] =[
  {
    id: "q1",
    question: "What is the primary goal of Artificial Intelligence?",
    options:[
      "To replace human hardware",
      "To create machines capable of performing tasks requiring human intelligence",
      "To store large amounts of databases",
      "To build stronger networks"
    ],
    answer: "To create machines capable of performing tasks requiring human intelligence",
    explanation: "The primary goal of AI is to design systems and machines capable of performing tasks that typically require human intelligence."
  },
  {
    id: "q2",
    question: "Which subset of AI uses artificial neural networks with many layers?",
    options:[
      "Expert Systems",
      "Natural Language Processing",
      "Deep Learning",
      "Robotics"
    ],
    answer: "Deep Learning",
    explanation: "Deep Learning is a subset of machine learning that utilizes artificial neural networks with multiple (deep) hidden layers."
  },
  {
    id: "q3",
    question: "The ability of an AI system to understand, interpret, and generate human language is called:",
    options:[
      "Computer Vision",
      "Natural Language Processing (NLP)",
      "Robotics",
      "Deep Learning"
    ],
    answer: "Natural Language Processing (NLP)",
    explanation: "NLP bridges the gap between human communication and computer understanding."
  },
  {
    id: "q4",
    question: "Which technology enables machines to see, identify, and process images or videos?",
    options:[
      "Natural Language Processing",
      "Computer Vision",
      "Expert Systems",
      "Reinforcement Learning"
    ],
    answer: "Computer Vision",
    explanation: "Computer Vision allows AI to derive meaningful information from digital images, videos, and other visual inputs."
  },
  {
    id: "q5",
    question: "AI programs that mimic human experts' decision-making using if-then rules are known as:",
    options:[
      "Neural Networks",
      "Expert Systems",
      "Generative AI",
      "Reactive Machines"
    ],
    answer: "Expert Systems",
    explanation: "Expert systems rely on a knowledge base and a set of predefined 'if-then' rules to emulate human decision-making."
  },
  {
    id: "q6",
    question: "Which type of AI is designed to perform specific, narrowly defined tasks (e.g., Siri, AlphaGo)?",
    options:[
      "Artificial General Intelligence (AGI)",
      "Artificial Superintelligence (ASI)",
      "Narrow AI (Weak AI)",
      "Theory of Mind AI"
    ],
    answer: "Narrow AI (Weak AI)",
    explanation: "Narrow AI is trained to perform a single or narrow set of tasks, lacking generalized human intelligence."
  },
  {
    id: "q7",
    question: "A theoretical stage where machines possess human-like intelligence capable of any intellectual task is:",
    options:[
      "Narrow AI",
      "Strong AI (AGI)",
      "Weak AI",
      "Reactive Machine"
    ],
    answer: "Strong AI (AGI)",
    explanation: "Artificial General Intelligence (AGI) represents machines that can understand, learn, and apply intelligence across any domain."
  },
  {
    id: "q8",
    question: "Which functional type of AI has no memory and acts purely in the present (e.g., IBM's Deep Blue)?",
    options:[
      "Limited Memory AI",
      "Theory of Mind AI",
      "Reactive Machines",
      "Self-Aware AI"
    ],
    answer: "Reactive Machines",
    explanation: "Reactive machines process current inputs and produce outputs without relying on past memories or experiences."
  },
  {
    id: "q9",
    question: "Chatbots and virtual assistants like ChatGPT fall under which functional category of AI?",
    options:[
      "Reactive Machines",
      "Limited Memory AI",
      "Theory of Mind AI",
      "Self-Aware AI"
    ],
    answer: "Limited Memory AI",
    explanation: "Limited Memory AI can store past experiences or data for a short period to make better decisions in the present."
  },
  {
    id: "q10",
    question: "Which theoretical type of AI can understand beliefs, emotions, and the needs of others?",
    options:[
      "Reactive Machines",
      "Limited Memory AI",
      "Theory of Mind AI",
      "Self-Aware AI"
    ],
    answer: "Theory of Mind AI",
    explanation: "Theory of Mind AI is a theoretical concept where machines can understand and interact with human emotions and thoughts."
  },
  {
    id: "q11",
    question: "What is the most complex, currently hypothetical type of AI that possesses true consciousness?",
    options:[
      "Self-Aware AI",
      "Narrow AI",
      "Reactive Machine",
      "Limited Memory AI"
    ],
    answer: "Self-Aware AI",
    explanation: "Self-Aware AI goes beyond understanding others to having its own consciousness, self-awareness, and sentiments."
  },
  {
    id: "q12",
    question: "In agriculture, AI is primarily used for:",
    options:[
      "Chatbots",
      "Precision farming and crop health monitoring",
      "Content generation",
      "Fraud detection"
    ],
    answer: "Precision farming and crop health monitoring",
    explanation: "AI optimizes farming by predicting yields, monitoring soil health, and automating crop management."
  },
  {
    id: "q13",
    question: "In cybersecurity, what is the role of AI?",
    options:[
      "To create physical locks",
      "To scan networks and identify/protect against threats",
      "To manage supply chain logistics",
      "To generate medical images"
    ],
    answer: "To scan networks and identify/protect against threats",
    explanation: "AI acts proactively to detect anomalies, malware signatures, and network intrusions much faster than traditional methods."
  },
  {
    id: "q14",
    question: "Which AI application optimizes routes, forecasts demand, and manages logistics?",
    options:[
      "Healthcare",
      "Supply Chain",
      "Education",
      "Content Creation"
    ],
    answer: "Supply Chain",
    explanation: "AI algorithms predict supply/demand patterns and optimize delivery routes, dramatically reducing operational costs."
  },
  {
    id: "q15",
    question: "Machine Learning is defined as:",
    options:[
      "Programming every single rule explicitly",
      "A system learning from data to identify patterns without explicit programming",
      "Storing vast amounts of data in a cloud",
      "Translating language word-by-word"
    ],
    answer: "A system learning from data to identify patterns without explicit programming",
    explanation: "Arthur Samuel defined ML as giving computers the ability to learn without being explicitly programmed."
  },
  {
    id: "q16",
    question: "Which of the following is NOT a characteristic of Machine Learning?",
    options:[
      "Learning from Data",
      "Pattern Recognition",
      "Explicit Programming for every step",
      "Self-Improvement"
    ],
    answer: "Explicit Programming for every step",
    explanation: "Machine learning creates its own rules and logic by analyzing data, rather than relying on human-written explicit code."
  },
  {
    id: "q17",
    question: "Training a model on a labeled dataset (where inputs have known outputs) is called:",
    options:[
      "Unsupervised Learning",
      "Semi-Supervised Learning",
      "Reinforcement Learning",
      "Supervised Learning"
    ],
    answer: "Supervised Learning",
    explanation: "In Supervised Learning, the algorithm learns from paired training data consisting of inputs and correct output labels."
  },
  {
    id: "q18",
    question: "Predicting house prices based on historical data is an example of:",
    options:[
      "Supervised Learning (Regression)",
      "Unsupervised Learning (Clustering)",
      "Reinforcement Learning",
      "Deep Learning"
    ],
    answer: "Supervised Learning (Regression)",
    explanation: "Regression predicts a continuous numerical output based on historical labeled data features."
  },
  {
    id: "q19",
    question: "Finding hidden patterns or customer segments in unlabeled data is known as:",
    options:[
      "Supervised Learning",
      "Unsupervised Learning",
      "Reinforcement Learning",
      "Transfer Learning"
    ],
    answer: "Unsupervised Learning",
    explanation: "Unsupervised learning clusters or categorizes data without having any pre-labeled examples."
  },
  {
    id: "q20",
    question: "An AI agent learning to play a game by receiving rewards and penalties uses:",
    options:[
      "Unsupervised Learning",
      "Supervised Learning",
      "Reinforcement Learning",
      "Semi-Supervised Learning"
    ],
    answer: "Reinforcement Learning",
    explanation: "Reinforcement learning is based on taking actions in an environment to maximize cumulative rewards."
  },
  {
    id: "q21",
    question: "Which ML approach combines a small amount of labeled data with a large amount of unlabeled data?",
    options:[
      "Supervised Learning",
      "Semi-Supervised Learning",
      "Reinforcement Learning",
      "Unsupervised Learning"
    ],
    answer: "Semi-Supervised Learning",
    explanation: "Semi-supervised learning is cost-effective as it leverages abundant unlabeled data while requiring minimal manual labeling."
  },
  {
    id: "q22",
    question: "Email spam filtering is primarily an application of:",
    options:[
      "Natural Language Processing and Supervised ML",
      "Reinforcement Learning",
      "Computer Vision",
      "Unsupervised Learning"
    ],
    answer: "Natural Language Processing and Supervised ML",
    explanation: "Spam filters use NLP to read the text and Supervised ML (trained on known spam/ham emails) to classify new messages."
  },
  {
    id: "q23",
    question: "In automotive industries, ML is fundamental for:",
    options:[
      "Generating emails",
      "Autonomous vehicles (object recognition, sensor fusion)",
      "Writing code",
      "Creating music"
    ],
    answer: "Autonomous vehicles (object recognition, sensor fusion)",
    explanation: "Machine learning allows autonomous cars to detect pedestrians, read signs, and make real-time driving decisions."
  },
  {
    id: "q24",
    question: "Which technology uses ML to suggest movies on Netflix or products on Amazon?",
    options:[
      "Expert Systems",
      "Recommendation Systems",
      "Robotics",
      "Theory of Mind"
    ],
    answer: "Recommendation Systems",
    explanation: "Recommendation engines analyze user history and peer behavior to suggest highly relevant content."
  },
  {
    id: "q25",
    question: "Deep learning algorithms are inspired by the structure and function of the:",
    options:[
      "Solar system",
      "Human brain (Neural Networks)",
      "Genetic algorithms",
      "Blockchain"
    ],
    answer: "Human brain (Neural Networks)",
    explanation: "Deep learning relies on Artificial Neural Networks which are biologically inspired by human brain neurons."
  },
  {
    id: "q26",
    question: "Deep learning models automatically extract features from raw data without the need for:",
    options:[
      "Large datasets",
      "Manual feature engineering",
      "Computational power",
      "Activation functions"
    ],
    answer: "Manual feature engineering",
    explanation: "Unlike traditional ML where humans select features, deep networks learn the most important features directly from raw data."
  },
  {
    id: "q27",
    question: "In a neural network, which layer receives the raw data?",
    options:[
      "Hidden Layer",
      "Output Layer",
      "Input Layer",
      "Dense Layer"
    ],
    answer: "Input Layer",
    explanation: "The Input Layer takes in the initial raw data (like image pixels) and passes it forward into the network."
  },
  {
    id: "q28",
    question: "The term 'deep' in Deep Learning refers to:",
    options:[
      "The depth of the data",
      "Networks with many hidden layers",
      "The complexity of the programming language",
      "The physical location of the servers"
    ],
    answer: "Networks with many hidden layers",
    explanation: "A neural network is considered 'deep' if it contains multiple hidden layers between the input and output layers."
  },
  {
    id: "q29",
    question: "During neural network learning, the process of sending error values back to update weights is called:",
    options:[
      "Forward Propagation",
      "Backpropagation",
      "Data Processing",
      "Feature Extraction"
    ],
    answer: "Backpropagation",
    explanation: "Backpropagation calculates the gradient of the loss function and updates the weights to minimize prediction errors."
  },
  {
    id: "q30",
    question: "Which algorithm is commonly used to minimize the error during backpropagation?",
    options:[
      "Decision Tree",
      "Gradient Descent",
      "K-Means",
      "Apriori"
    ],
    answer: "Gradient Descent",
    explanation: "Gradient descent is an optimization algorithm used to iteratively minimize the loss function by adjusting weights."
  },
  {
    id: "q31",
    question: "Compared to ML, Deep Learning requires:",
    options:[
      "Less computational power",
      "High computational power (often GPUs) and large amounts of data",
      "Structured data only",
      "Manual feature extraction"
    ],
    answer: "High computational power (often GPUs) and large amounts of data",
    explanation: "Deep Learning models have millions of parameters, requiring massive datasets and specialized hardware like GPUs to train."
  },
  {
    id: "q32",
    question: "Facial recognition and object detection are prime applications of DL in:",
    options:[
      "Natural Language Processing",
      "Computer Vision",
      "Speech Processing",
      "Finance"
    ],
    answer: "Computer Vision",
    explanation: "Convolutional Neural Networks (CNNs), a type of Deep Learning, excel at processing and identifying objects in images."
  },
  {
    id: "q33",
    question: "Which of the following handles massive, unstructured data best?",
    options:[
      "Traditional AI",
      "Standard Machine Learning",
      "Deep Learning",
      "Expert Systems"
    ],
    answer: "Deep Learning",
    explanation: "Deep learning thrives on unstructured data like audio, text, and raw images, scaling better than traditional ML."
  },
  {
    id: "q34",
    question: "Which mathematical operation is applied by a neuron in a hidden layer?",
    options:[
      "Division of outputs",
      "Weighted sum of inputs + bias + activation function",
      "Subtraction of labels",
      "Hashing"
    ],
    answer: "Weighted sum of inputs + bias + activation function",
    explanation: "Each neuron computes the dot product of inputs and weights, adds a bias, and passes it through an activation function."
  },
  {
    id: "q35",
    question: "Generative AI focuses on:",
    options:[
      "Categorizing old data",
      "Creating new content (text, images, music) that resembles human-made output",
      "Only predicting stock market prices",
      "Finding the shortest path in a network"
    ],
    answer: "Creating new content (text, images, music) that resembles human-made output",
    explanation: "Unlike discriminative AI that classifies data, Generative AI models learn data distributions to generate entirely new outputs."
  },
  {
    id: "q36",
    question: "Which technology is primarily used for generating realistic images and videos by pitting two networks against each other?",
    options:[
      "Transformers",
      "VAEs",
      "GANs (Generative Adversarial Networks)",
      "RNNs"
    ],
    answer: "GANs (Generative Adversarial Networks)",
    explanation: "A GAN consists of a generator creating images and a discriminator evaluating them, resulting in highly realistic synthetic images."
  },
  {
    id: "q37",
    question: "Which model architecture, introduced in 2017, forms the foundation of modern Large Language Models like ChatGPT?",
    options:[
      "Convolutional Neural Networks (CNNs)",
      "Decision Trees",
      "Transformers",
      "Random Forests"
    ],
    answer: "Transformers",
    explanation: "The Transformer architecture, introduced by Google in the 'Attention Is All You Need' paper, revolutionized NLP."
  },
  {
    id: "q38",
    question: "The core mechanism in a Transformer that weighs the importance of different words in a sequence is called:",
    options:[
      "Backpropagation",
      "Self-Attention Mechanism",
      "Gradient Descent",
      "Max Pooling"
    ],
    answer: "Self-Attention Mechanism",
    explanation: "Self-attention enables the model to look at the entire sequence and determine which words are most relevant to each other contextually."
  },
  {
    id: "q39",
    question: "Because self-attention doesn't consider word order, what is added to the embedding to provide sequence info?",
    options:[
      "Layer Normalization",
      "Multi-Head Attention",
      "Positional Encoding",
      "Feed-Forward Network"
    ],
    answer: "Positional Encoding",
    explanation: "Positional encodings inject information about the relative or absolute position of words into the input embeddings."
  },
  {
    id: "q40",
    question: "Generative AI models like DALL-E and Midjourney fall under:",
    options:[
      "Text Generation",
      "Image Generation",
      "Code Generation",
      "3D Model Generation"
    ],
    answer: "Image Generation",
    explanation: "DALL-E and Midjourney use text-to-image diffusion models to generate high-quality visual art."
  },
  {
    id: "q41",
    question: "Using an LLM to accelerate drug discovery by creating new protein sequences is an application of GenAI in:",
    options:[
      "Customer Support",
      "Marketing",
      "Healthcare & Life Sciences",
      "Entertainment"
    ],
    answer: "Healthcare & Life Sciences",
    explanation: "Generative models can design novel molecular structures, rapidly accelerating research in pharmaceuticals."
  },
  {
    id: "q42",
    question: "'Vibe Coding' refers to:",
    options:[
      "Writing assembly language code",
      "An AI-powered practice where a human guides an LLM to generate code via conversation",
      "Coding while listening to music",
      "Writing code strictly without AI"
    ],
    answer: "An AI-powered practice where a human guides an LLM to generate code via conversation",
    explanation: "Vibe coding shifts the developer's role from typing syntax to directing high-level logic alongside an AI co-pilot."
  },
  {
    id: "q43",
    question: "In Vibe Coding, what is the role of the human developer?",
    options:[
      "Writing code line-by-line",
      "Fixing compiler errors manually",
      "Focusing on high-level goals, iterative feedback, and overall vision",
      "Managing the hardware servers"
    ],
    answer: "Focusing on high-level goals, iterative feedback, and overall vision",
    explanation: "The developer acts more like an architect or director, steering the AI's output through natural language prompts."
  },
  {
    id: "q44",
    question: "Which of the following is an AI-first code editor popular for vibe coding?",
    options:[
      "MS Paint",
      "Cursor",
      "Photoshop",
      "AutoCAD"
    ],
    answer: "Cursor",
    explanation: "Cursor is a widely popular, AI-integrated IDE designed specifically to accelerate development via LLMs."
  },
  {
    id: "q45",
    question: "What distinguishes Agentic AI from traditional Generative AI?",
    options:[
      "Agentic AI requires constant human oversight",
      "Agentic AI cannot use external tools",
      "Agentic AI is proactive, goal-oriented, and can execute multi-step plans autonomously",
      "Agentic AI only works with images"
    ],
    answer: "Agentic AI is proactive, goal-oriented, and can execute multi-step plans autonomously",
    explanation: "Agentic AI exhibits 'agency', meaning it can sequence tasks, browse the web, and execute actions to reach a final goal on its own."
  },
  {
    id: "q46",
    question: "An AI program that can schedule meetings, draft responses, and plan travel autonomously is called an:",
    options:[
      "Executive Assistant Agent",
      "AI Recruiter",
      "Debugging Assistant",
      "Simulation Coordinator"
    ],
    answer: "Executive Assistant Agent",
    explanation: "These specific agents mimic administrative assistants by interfacing with calendars and emails autonomously."
  },
  {
    id: "q47",
    question: "Multi-Agent ecosystems refer to:",
    options:[
      "A single AI doing multiple tasks",
      "Entire 'companies' or teams of AI agents collaborating to achieve complex goals",
      "Human agents using AI tools",
      "AI blocking other AI"
    ],
    answer: "Entire 'companies' or teams of AI agents collaborating to achieve complex goals",
    explanation: "In multi-agent systems, agents with different roles (e.g., coder, tester, manager) communicate to solve complex workflows."
  },
  {
    id: "q48",
    question: "What does LLM stand for?",
    options:[
      "Local Logic Machine",
      "Large Language Model",
      "Linear Learning Model",
      "Limited Language Memory"
    ],
    answer: "Large Language Model",
    explanation: "Large Language Models are massive deep learning networks trained on vast amounts of text data."
  },
  {
    id: "q49",
    question: "LLMs work fundamentally by:",
    options:[
      "Searching Google for answers",
      "Copy-pasting from Wikipedia",
      "Analyzing patterns to predict the most probable next word in a sequence",
      "Translating text into binary code"
    ],
    answer: "Analyzing patterns to predict the most probable next word in a sequence",
    explanation: "At their core, autoregressive LLMs like GPT generate text by calculating the probabilistic next token based on context."
  },
  {
    id: "q50",
    question: "The ability of LLMs to perform tasks they weren't explicitly trained for (like writing code) is known as:",
    options:[
      "Hallucination",
      "Emergent Abilities",
      "Underfitting",
      "Contextual Dropout"
    ],
    answer: "Emergent Abilities",
    explanation: "As parameters scale, LLMs suddenly exhibit 'emergent abilities' like logic and coding that were never explicitly programmed."
  },
  {
    id: "q51",
    question: "Which of the following is an Open-Source LLM?",
    options:[
      "GPT-4",
      "Gemini 1.5",
      "Claude 3",
      "LLaMA 2 (Meta)"
    ],
    answer: "LLaMA 2 (Meta)",
    explanation: "Meta's LLaMA 2 is an open-weights model, allowing developers worldwide to download and fine-tune it locally."
  },
  {
    id: "q52",
    question: "What is a key advantage of a Small Language Model (SLM) over an LLM?",
    options:[
      "It has more parameters than an LLM",
      "It requires a supercomputer to run",
      "It can run on-device and offline, protecting user privacy",
      "It cannot handle domain-specific tasks"
    ],
    answer: "It can run on-device and offline, protecting user privacy",
    explanation: "SLMs have fewer parameters, making them highly efficient, cost-effective, and capable of running locally on smartphones."
  },
  {
    id: "q53",
    question: "Microsoft's Phi-2 and Google's Gemma-2B are examples of:",
    options:[
      "LLMs",
      "SLMs (Small Language Models)",
      "GANs",
      "VCA Actuators"
    ],
    answer: "SLMs (Small Language Models)",
    explanation: "Phi-2 and Gemma are specifically engineered to provide high performance despite having fewer parameters, classifying them as SLMs."
  },
  {
    id: "q54",
    question: "AI Reasoning Models differ from traditional LLMs because they:",
    options:[
      "Provide immediate, predictive answers without thinking",
      "Use a 'chain of thought' to deliberate and break down complex problems step-by-step",
      "Are much smaller and run offline",
      "Cannot do math or coding"
    ],
    answer: "Use a 'chain of thought' to deliberate and break down complex problems step-by-step",
    explanation: "Reasoning models spend compute time 'thinking' before answering, leading to superior performance in logic and mathematics."
  },
  {
    id: "q55",
    question: "OpenAI's o1 and DeepSeek-R1 are examples of:",
    options:[
      "Small Language Models",
      "AI Reasoning Models",
      "Image Generation Models",
      "Traditional Databases"
    ],
    answer: "AI Reasoning Models",
    explanation: "o1 and DeepSeek-R1 utilize reinforcement learning to exhibit deep chain-of-thought reasoning."
  },
  {
    id: "q56",
    question: "Which type of attack involves an attacker making invisible changes to input data (like adding noise to an image) to fool the AI model?",
    options:[
      "Poisoning Attack",
      "Evasion Attack (Adversarial Attack)",
      "Privacy Attack",
      "Model Tampering"
    ],
    answer: "Evasion Attack (Adversarial Attack)",
    explanation: "Evasion attacks happen during the inference phase, using mathematically crafted noise to trick the AI classifier."
  },
  {
    id: "q57",
    question: "If an attacker injects corrupted or misleading data into the dataset during the AI's training phase, it is called a:",
    options:[
      "Poisoning Attack",
      "Evasion Attack",
      "Phishing Attack",
      "Ransomware"
    ],
    answer: "Poisoning Attack",
    explanation: "Data poisoning targets the training phase, deliberately compromising the dataset so the model learns incorrect behaviors."
  },
  {
    id: "q58",
    question: "Direct modification of the internal structure or parameters of a pre-trained AI model is known as:",
    options:[
      "Deepfake",
      "Poisoning Attack",
      "Model Tampering",
      "Evasion Attack"
    ],
    answer: "Model Tampering",
    explanation: "Model tampering occurs when unauthorized parties gain access to and modify the weights/biases of an already trained neural network."
  },
  {
    id: "q59",
    question: "Extracting sensitive information about the AI's training data by repeatedly querying the model is called a:",
    options:[
      "Poisoning Attack",
      "Privacy Attack",
      "Evasion Attack",
      "DDoS Attack"
    ],
    answer: "Privacy Attack",
    explanation: "Privacy (or Inference) attacks attempt to reverse-engineer queries to extract confidential data that the model memorized."
  },
  {
    id: "q60",
    question: "Generating realistic but fake audio/video to impersonate someone is called:",
    options:[
      "Steganography",
      "Deepfakes",
      "Hashing",
      "Malware"
    ],
    answer: "Deepfakes",
    explanation: "Deepfakes utilize deep learning (specifically GANs) to synthesize highly convincing fake media."
  },
  {
    id: "q61",
    question: "AI can enhance traditional cybersecurity threats by:",
    options:[
      "Making passwords shorter",
      "Crafting highly personalized and convincing phishing emails",
      "Updating firewall rules",
      "Backing up data automatically"
    ],
    answer: "Crafting highly personalized and convincing phishing emails",
    explanation: "LLMs enable attackers to instantly write flawless, context-aware spear-phishing emails at scale."
  },
  {
    id: "q62",
    question: "What is a critical defense mechanism against AI-powered brute-force and credential-stuffing attacks?",
    options:[
      "Using a simple password",
      "Multi-Factor Authentication (MFA)",
      "Turning off the firewall",
      "Using public Wi-Fi"
    ],
    answer: "Multi-Factor Authentication (MFA)",
    explanation: "MFA blocks access even if the AI successfully guesses or cracks a password, relying on a secondary device."
  },
  {
    id: "q63",
    question: "Which layer in an AI neural network produces the final prediction or classification?",
    options:[
      "Input Layer",
      "Hidden Layer",
      "Output Layer",
      "Dense Layer"
    ],
    answer: "Output Layer",
    explanation: "The output layer aggregates the processed data from the hidden layers to yield the final deterministic prediction."
  },
  {
    id: "q64",
    question: "Which of the following models is specifically tuned for medical knowledge?",
    options:[
      "Codex",
      "FinGPT",
      "Med-PaLM",
      "Mixtral"
    ],
    answer: "Med-PaLM",
    explanation: "Med-PaLM is Google's Large Language Model specifically fine-tuned for the medical domain to answer clinical queries."
  },
  {
    id: "q65",
    question: "Which of the following is NOT an application of Natural Language Processing (NLP)?",
    options:[
      "Sentiment Analysis",
      "Machine Translation",
      "Text Summarization",
      "Object Detection"
    ],
    answer: "Object Detection",
    explanation: "Object Detection is an application of Computer Vision, not Natural Language Processing."
  },
  {
    id: "q66",
    question: "A machine learning model that predicts continuous values, like temperature or stock prices, is performing:",
    options:[
      "Classification",
      "Clustering",
      "Regression",
      "Dimensionality Reduction"
    ],
    answer: "Regression",
    explanation: "Regression algorithms predict a continuous numerical value based on historical labeled data."
  },
  {
    id: "q67",
    question: "Self-driving cars heavily rely on which type of machine learning to navigate dynamically changing environments?",
    options:[
      "Unsupervised Learning",
      "Supervised Learning",
      "Reinforcement Learning",
      "Linear Regression"
    ],
    answer: "Reinforcement Learning",
    explanation: "Self-driving cars use reinforcement learning to learn optimal driving policies via constant trial and error inside a simulated environment."
  },
  {
    id: "q68",
    question: "Which AI feature ensures that gradients flow more effectively and stabilizes the network in a Transformer architecture?",
    options:[
      "Multi-Head Attention",
      "Layer Normalization",
      "Positional Encoding",
      "Encoder-Decoder"
    ],
    answer: "Layer Normalization",
    explanation: "Layer Normalization standardizes inputs within each layer, drastically stabilizing and speeding up the training of deep networks."
  },
  {
    id: "q69",
    question: "In Generative AI, what are VAEs primarily used for?",
    options:[
      "Generating text",
      "Structured data and reconstruction tasks",
      "Solving math problems",
      "Writing code"
    ],
    answer: "Structured data and reconstruction tasks",
    explanation: "Variational Autoencoders (VAEs) learn latent representations of data, useful for generating structurally similar images or cleaning up noise."
  },
  {
    id: "q70",
    question: "Which of the following best describes 'Self-Correcting Behavior' in AI Reasoning Models?",
    options:[
      "The model deletes user inputs.",
      "The model reflects on its intermediate steps and fixes mistakes before delivering a final answer.",
      "The model upgrades its own hardware.",
      "The model connects to the internet to verify Wi-Fi speed."
    ],
    answer: "The model reflects on its intermediate steps and fixes mistakes before delivering a final answer.",
    explanation: "During chain-of-thought processing, reasoning models can recognize flawed logic mid-thought and correct course before concluding."
  },
  {
    id: "q71",
    question: "When using Agentic AI in software development, a 'Multi-Agent Code Collaborator' (like MetaGPT) does what?",
    options:[
      "Generates a single line of code",
      "Acts as a team of role-based agents (architect, coder, tester) to deploy applications",
      "Shuts down the compiler",
      "Converts images to text"
    ],
    answer: "Acts as a team of role-based agents (architect, coder, tester) to deploy applications",
    explanation: "In collaborative AI environments, separate agents act out specific job roles, interacting with each other to build a complete product."
  },
  {
    id: "q72",
    question: "In Business Process Automation, an AI agent handling tickets, escalating issues, and updating records is functioning as a:",
    options:[
      "Content Creation Agent",
      "Research Assistant",
      "Customer Support Agent",
      "Market Analysis Bot"
    ],
    answer: "Customer Support Agent",
    explanation: "Customer Support Agents leverage tool-calling to resolve tickets end-to-end, acting identically to human service reps."
  },
  {
    id: "q73",
    question: "The '5 V's' are associated with Big Data, but in ML, data speed is primarily related to:",
    options:[
      "Volume",
      "Velocity",
      "Variety",
      "Veracity"
    ],
    answer: "Velocity",
    explanation: "Velocity refers to the immense speed at which data is generated and must be processed by ML models in real-time."
  },
  {
    id: "q74",
    question: "Which of the following accurately describes 'Strong AI'?",
    options:[
      "It exists today in smart speakers.",
      "It is a theoretical machine with human-level intelligence.",
      "It is limited to playing chess.",
      "It can only identify images."
    ],
    answer: "It is a theoretical machine with human-level intelligence.",
    explanation: "Strong AI (AGI) equates to an intellect indistinguishable from a human, which currently remains strictly theoretical."
  },
  {
    id: "q75",
    question: "What is the fundamental difference between Deep Learning and Machine Learning regarding 'Feature Extraction'?",
    options:[
      "ML extracts features automatically; DL requires manual extraction.",
      "DL network learns and extracts features automatically; ML often requires manual feature engineering.",
      "Both require manual extraction.",
      "Neither uses feature extraction."
    ],
    answer: "DL network learns and extracts features automatically; ML often requires manual feature engineering.",
    explanation: "Deep Learning bypasses the labor-intensive step of human feature selection by extracting relevant patterns inherently across deep layers."
  },
  {
    id: "q76",
    question: "In an AI evasion attack, why does the attacker add 'imperceptible noise' to an image?",
    options:[
      "To make the image look better to humans",
      "To reduce file size",
      "To cause the AI model to misclassify the image without humans noticing",
      "To train the model faster"
    ],
    answer: "To cause the AI model to misclassify the image without humans noticing",
    explanation: "The subtle noise shifts the neural network's activation mathematically, tricking it into seeing an entirely different object."
  },
  {
    id: "q77",
    question: "'Zero-Trust Strategy' in network security means:",
    options:[
      "Trusting all internal users",
      "Assuming no device or user is trustworthy by default and requiring strict verification",
      "Using weak passwords",
      "Disabling MFA"
    ],
    answer: "Assuming no device or user is trustworthy by default and requiring strict verification",
    explanation: "Zero-Trust dictates 'never trust, always verify', ensuring robust security across both internal and external boundaries."
  },
  {
    id: "q78",
    question: "A system that can play AlphaGo by training through rewards and penalties is using:",
    options:[
      "Supervised learning",
      "Unsupervised learning",
      "Reinforcement learning",
      "Rule-based Expert System"
    ],
    answer: "Reinforcement learning",
    explanation: "AlphaGo was built using advanced reinforcement learning, receiving positive rewards for winning moves during self-play."
  },
  {
    id: "q79",
    question: "Which Generative AI technology powers DALL-E and Stable Diffusion for high-quality image generation?",
    options:[
      "Transformers",
      "GANs",
      "Diffusion Models",
      "VAEs"
    ],
    answer: "Diffusion Models",
    explanation: "Diffusion models start with pure static noise and iteratively denoise it to generate a highly detailed target image."
  },
  {
    id: "q80",
    question: "What is 'Contextual Understanding' in Large Language Models?",
    options:[
      "The ability to translate code into binary",
      "The ability to grasp the meaning of a query based on surrounding words to provide coherent responses",
      "Generating images from text",
      "Predicting stock market trends"
    ],
    answer: "The ability to grasp the meaning of a query based on surrounding words to provide coherent responses",
    explanation: "Attention mechanisms allow LLMs to analyze entire sentences contextually rather than viewing isolated words."
  },
  {
    id: "q81",
    question: "Which Open-Source LLM is developed by BigScience and supports 46 languages?",
    options:[
      "LLaMA 2",
      "Falcon 40B",
      "BLOOM",
      "OPT"
    ],
    answer: "BLOOM",
    explanation: "BLOOM is an open-access multilingual model built collaboratively to democratize AI across 46 human languages and 13 coding languages."
  },
  {
    id: "q82",
    question: "Specialized LLM 'Codex' developed by OpenAI is the power behind:",
    options:[
      "Google Assistant",
      "GitHub Copilot",
      "Siri",
      "DALL-E"
    ],
    answer: "GitHub Copilot",
    explanation: "Codex was specifically trained on billions of lines of public code, forming the brain of the famous GitHub Copilot."
  },
  {
    id: "q83",
    question: "Which of the following is a limitation of SLMs compared to LLMs?",
    options:[
      "Slower inference speed",
      "Higher training cost",
      "Lower accuracy on general, broad knowledge tasks",
      "Inability to run offline"
    ],
    answer: "Lower accuracy on general, broad knowledge tasks",
    explanation: "Because SLMs have fewer parameters, they lack the vast generalized encyclopedic knowledge base stored inside massive LLMs."
  },
  {
    id: "q84",
    question: "The 'Chain of Thought' process is a hallmark of:",
    options:[
      "Narrow AI",
      "SLMs",
      "AI Reasoning Models",
      "Expert Systems"
    ],
    answer: "AI Reasoning Models",
    explanation: "Chain-of-thought forces the AI to output its step-by-step internal reasoning process, drastically boosting logical accuracy."
  },
  {
    id: "q85",
    question: "Using AI to analyze security logs and detect fraudulent activity is an application of AI in:",
    options:[
      "Entertainment",
      "Cybersecurity",
      "Agriculture",
      "Legal"
    ],
    answer: "Cybersecurity",
    explanation: "AI excels at identifying micro-anomalies across millions of server logs that would be impossible for human security teams to spot."
  },
  {
    id: "q86",
    question: "Which tool helps secure your network by patching vulnerabilities and improving performance?",
    options:[
      "Strong Passwords",
      "Software Updates ('Update Everything')",
      "MFA",
      "Deepfakes"
    ],
    answer: "Software Updates ('Update Everything')",
    explanation: "Routine software updates apply essential security patches that defend against known vulnerabilities and zero-day exploits."
  },
  {
    id: "q87",
    question: "Which component of the Transformer architecture retains word order?",
    options:[
      "Positional Encodings",
      "Self-attention",
      "Residual connections",
      "Input embeddings"
    ],
    answer: "Positional Encodings",
    explanation: "Since Transformers process all words simultaneously in parallel, positional encoding tags are necessary to remember the sentence's sequence."
  },
  {
    id: "q88",
    question: "Customer segmentation (grouping similar customers without pre-defined labels) is solved using:",
    options:[
      "Supervised Learning",
      "Unsupervised Learning",
      "Reinforcement learning",
      "Deep Learning"
    ],
    answer: "Unsupervised Learning",
    explanation: "Clustering algorithms like K-Means are unsupervised techniques explicitly used to find natural groupings in raw data."
  },
  {
    id: "q89",
    question: "'Self-Driving Cars' utilizing AI to navigate without human intervention fall under which application category?",
    options:[
      "Consumer Applications",
      "Specialized / Advanced Applications",
      "E-commerce",
      "Content Creation"
    ],
    answer: "Specialized / Advanced Applications",
    explanation: "Autonomous driving requires a complex fusion of Computer Vision, Deep Learning, and Reinforcement Learning, classifying it as highly advanced."
  },
  {
    id: "q90",
    question: "In Neural Networks, 'Bias' is added to the weighted sum to:",
    options:[
      "Increase the error",
      "Shift the activation function curve to fit the data better",
      "Decrease computational speed",
      "Convert images to text"
    ],
    answer: "Shift the activation function curve to fit the data better",
    explanation: "Bias acts like the y-intercept in a linear equation, shifting the decision boundary so the network can fit non-zero-centered data."
  },
  {
    id: "q91",
    question: "The primary purpose of a 'Loss Function' in Neural Networks is to:",
    options:[
      "Calculate the computational cost",
      "Determine the error between the prediction and actual result",
      "Delete unused data",
      "Encode text"
    ],
    answer: "Determine the error between the prediction and actual result",
    explanation: "The loss function calculates the network's inaccuracy. The optimizer then steps in to minimize this loss via backpropagation."
  },
  {
    id: "q92",
    question: "What is 'Data Analytics & Business Intelligence' in the context of ML?",
    options:[
      "Extracting insights from large datasets to make data-driven decisions",
      "Creating realistic deepfake videos",
      "Driving autonomous cars",
      "Fixing compiler errors"
    ],
    answer: "Extracting insights from large datasets to make data-driven decisions",
    explanation: "Machine learning enhances BI by identifying deep trends and predicting future sales metrics from historic corporate data."
  },
  {
    id: "q93",
    question: "A bank wants to assess loan risks. Which AI technology is best suited?",
    options:[
      "Generative AI",
      "Unsupervised Learning",
      "Supervised Machine Learning",
      "Image Recognition"
    ],
    answer: "Supervised Machine Learning",
    explanation: "By analyzing historic datasets of past loan defaults (labels), supervised ML creates an accurate risk classification model."
  },
  {
    id: "q94",
    question: "Which of the following is NOT an example of Generative AI?",
    options:[
      "Image Generation (DALL-E)",
      "Text Generation (ChatGPT)",
      "Face recognition to unlock a smartphone",
      "Deepfakes (Face-swapping videos)"
    ],
    answer: "Face recognition to unlock a smartphone",
    explanation: "Face recognition is a discriminative AI task (classification/verification), not a generative one."
  },
  {
    id: "q95",
    question: "In AI Security, 'Credential Stuffing' attacks are best mitigated by:",
    options:[
      "Using shorter passwords",
      "Multi-Factor Authentication (MFA)",
      "Disabling antivirus",
      "Downloading free software"
    ],
    answer: "Multi-Factor Authentication (MFA)",
    explanation: "Credential stuffing uses leaked passwords across multiple sites; MFA neutralizes this by requiring secondary hardware approval."
  },
  {
    id: "q96",
    question: "Which type of AI would be required to perfectly emulate the human brain, understanding emotions and possessing self-awareness?",
    options:[
      "Artificial Superintelligence (ASI)",
      "Self-Aware AI",
      "Reactive Machines",
      "Narrow AI"
    ],
    answer: "Self-Aware AI",
    explanation: "Self-aware AI is a theoretical AI tier where machines achieve human-level consciousness and independent sentience."
  },
  {
    id: "q97",
    question: "An AI system generating new protein sequences and synthetic gene sequences is used in:",
    options:[
      "Software Development",
      "Finance",
      "Healthcare & Life Sciences",
      "Marketing"
    ],
    answer: "Healthcare & Life Sciences",
    explanation: "Generative AI is revolutionizing biotechnology by artificially predicting sequence folds that normally take years to research."
  },
  {
    id: "q98",
    question: "Which AI model architecture allows gradients to flow more effectively by stabilizing training?",
    options:[
      "Softmax",
      "Layer Normalization",
      "Hashing",
      "Salting"
    ],
    answer: "Layer Normalization",
    explanation: "Layer Normalization limits variance within hidden layers, stabilizing gradients and preventing them from vanishing or exploding during training."
  },
  {
    id: "q99",
    question: "In AI, what does AGI stand for?",
    options:[
      "Artificial General Intelligence",
      "Automated Generative Intelligence",
      "Advanced General Imagery",
      "Algorithmic General Instructions"
    ],
    answer: "Artificial General Intelligence",
    explanation: "AGI represents systems that have general cognitive capabilities matching or exceeding human intellect across any given field."
  },
  {
    id: "q100",
    question: "The concept where AI models are optimized for dynamic problem-solving and nuanced decision-making rather than immediate text prediction is called:",
    options:[
      "Traditional LLM",
      "Vibe Coding",
      "AI Reasoning Models",
      "Narrow AI"
    ],
    answer: "AI Reasoning Models",
    explanation: "Reasoning models trade instantaneous generation for prolonged compute, allowing them to systematically think through layered problems."
  },

  // ==========================================
  // UNIT 2: INTERNET OF THINGS (IoT)
  // ==========================================
  
  {
    id: "q101",
    question: "Which characteristic of IoT ensures that diverse devices from different manufacturers can work together seamlessly?",
    options:["Heterogeneity", "Scalability", "Dynamic Nature", "Interoperability"],
    answer: "Interoperability",
    explanation: "Interoperability is the ability of different IoT systems and devices to communicate and share data regardless of their manufacturer."
  },
  {
    id: "q102",
    question: "What does 'Heterogeneity' mean in the context of IoT?",
    options:["Devices are self-adapting", "Devices operate in real-time", "The ecosystem consists of diverse devices, sensors, and communication protocols", "Devices consume low power"],
    answer: "The ecosystem consists of diverse devices, sensors, and communication protocols",
    explanation: "IoT networks contain a mix of Wi-Fi, Bluetooth, Zigbee devices, and various sensors—this diversity is heterogeneity."
  },
  {
    id: "q103",
    question: "In IoT applications, what does 'IoMT' stand for?",
    options:["Internet of Mobile Things", "Internet of Manufacturing Things", "Internet of Medical Things", "Interconnected Machine Technology"],
    answer: "Internet of Medical Things",
    explanation: "IoMT involves wearable health monitors and remote patient monitoring."
  },
  {
    id: "q104",
    question: "Which of the following is a key advantage of Edge Computing in IoT?",
    options:["Increases hardware costs", "Centralizes all data processing in a single remote cloud", "Reduces latency and bandwidth usage by processing data closer to where it is generated", "Completely eliminates the need for security"],
    answer: "Reduces latency and bandwidth usage by processing data closer to where it is generated",
    explanation: "Edge computing processes data locally (e.g., on an edge controller), ensuring real-time response for time-sensitive tasks like autonomous driving."
  },
  {
    id: "q105",
    question: "Which of the following is a major limitation of IoT?",
    options:["Predictive maintenance", "Improved resource efficiency", "High Initial Cost and complexity in integration", "Remote monitoring capabilities"],
    answer: "High Initial Cost and complexity in integration",
    explanation: "Deploying vast networks of sensors and gateways requires a heavy initial financial investment."
  },
  {
    id: "q106",
    question: "In the Physical Design of IoT, what is the process of manipulating an analog signal to make it suitable for a microcontroller?",
    options:["Actuation", "Signal Conditioning", "Protocol Routing", "Cloud Storage"],
    answer: "Signal Conditioning",
    explanation: "Raw sensor signals are often weak and noisy. Signal conditioning prepares them for processing."
  },
  {
    id: "q107",
    question: "Which type of controller combines an MCU, memory, wireless modules, and peripherals on a single chip (e.g., ESP32)?",
    options:["Programmable Logic Controller (PLC)", "Edge Controller", "System-on-Chip (SoC)", "Media Gateway"],
    answer: "System-on-Chip (SoC)",
    explanation: "SoC integrates all necessary electronic circuits and parts for a given system onto a single integrated circuit."
  },
  {
    id: "q108",
    question: "What is the primary function of an IoT Gateway?",
    options:["To act as a physical sensor", "To bridge the physical devices with the cloud, performing data aggregation and protocol translation", "To display visualizations to the end-user", "To convert digital signals into physical movement"],
    answer: "To bridge the physical devices with the cloud, performing data aggregation and protocol translation",
    explanation: "Gateways connect localized IoT networks (using protocols like Zigbee or Bluetooth) to the wider Internet/Cloud."
  },
  {
    id: "q109",
    question: "Which of the following is NOT an IoT communication protocol?",
    options: ["MQTT", "CoAP", "HTML", "LoRaWAN"],
    answer: "HTML",
    explanation: "HTML is a markup language. MQTT, CoAP, and LoRaWAN are specific IoT data transfer protocols."
  },
  {
    id: "q110",
    question: "In the Logical Design of IoT, which layer is responsible for collecting raw data from the physical environment?",
    options:["Application Layer", "Data Processing Layer", "Perception (Device) Layer", "Network Layer"],
    answer: "Perception (Device) Layer",
    explanation: "The Perception Layer consists of sensors and actuators acting as the 'eyes and ears' of the system."
  },
  {
    id: "q111",
    question: "Which logical layer ensures securely and reliably transmitted data from the perception layer to processing systems?",
    options: ["Application Layer", "Data Processing Layer", "Perception Layer", "Network (Communication) Layer"],
    answer: "Network (Communication) Layer",
    explanation: "This layer includes Gateways and Wi-Fi/5G infrastructure."
  },
  {
    id: "q112",
    question: "In IoT platform functions, OTA stands for:",
    options:["Over-The-Area", "Open-Trust-Architecture", "Over-The-Air (firmware updates)", "Optical-Transmission-Access"],
    answer: "Over-The-Air (firmware updates)",
    explanation: "Device Management uses OTA to update software on remote IoT devices without physical access."
  },
  {
    id: "q113",
    question: "Which temperature sensor relies on the principle that the electrical resistance of a metal changes with temperature?",
    options:["Thermocouple", "RTD (Resistance Temperature Detector)", "Thermistor", "NDIR Sensor"],
    answer: "RTD (Resistance Temperature Detector)",
    explanation: "RTDs offer high accuracy and a linear response compared to thermistors."
  },
  {
    id: "q114",
    question: "A Thermocouple generates a voltage that varies with temperature based on which scientific effect?",
    options:["Doppler Effect", "Seebeck Effect", "Lorentz Force", "Piezoelectric Effect"],
    answer: "Seebeck Effect",
    explanation: "The Seebeck effect occurs when two dissimilar metals are joined and experience a temperature difference, creating a voltage."
  },
  {
    id: "q115",
    question: "Which sensor is also known as a 'Hygrometer'?",
    options:["Light Sensor", "Pressure Sensor", "Humidity Sensor", "Flow Sensor"],
    answer: "Humidity Sensor",
    explanation: "Hygrometers measure the atmospheric moisture or water vapor content."
  },
  {
    id: "q116",
    question: "Which motion sensor uses the Doppler effect to detect changes in reflected waves?",
    options:["Passive Infrared (PIR)", "Ultrasonic", "Microwave Sensor", "LDR"],
    answer: "Microwave Sensor",
    explanation: "Microwave sensors emit microwaves and use the Doppler shift of the reflected waves to detect motion."
  },
  {
    id: "q117",
    question: "What does a PIR sensor detect to trigger an action?",
    options:["Sound waves", "Changes in infrared (heat) radiation emitted by objects", "Magnetic fields", "Changes in capacitance"],
    answer: "Changes in infrared (heat) radiation emitted by objects",
    explanation: "PIR (Passive Infrared) triggers when a warm body (like a human) moves across its field of view."
  },
  {
    id: "q118",
    question: "Which gas sensor is popular for detecting combustible gases like LPG, methane, and carbon monoxide?",
    options:["NDIR Sensor", "CMOS Sensor", "MQ-series Sensor", "RTD"],
    answer: "MQ-series Sensor",
    explanation: "MQ-2, MQ-3, MQ-7 are highly common semiconductor gas sensors used in Arduino/IoT projects."
  },
  {
    id: "q119",
    question: "Non-Dispersive Infrared (NDIR) sensors are primarily used to measure:",
    options:["The absorption of infrared light by specific gases (like CO2)", "The speed of a DC motor", "The flow rate of water", "The capacitance of a human finger"],
    answer: "The absorption of infrared light by specific gases (like CO2)",
    explanation: "NDIR is the industry standard for precise CO2 and other greenhouse gas measurements."
  },
  {
    id: "q120",
    question: "Which image sensor technology is most prevalent in modern IoT devices due to its lower cost and energy efficiency?",
    options:["CCD (Charge-Coupled Device)", "LDR (Light Dependent Resistor)", "CMOS (Complementary Metal-Oxide Semiconductor)", "VCA (Voice Coil Actuator)"],
    answer: "CMOS (Complementary Metal-Oxide Semiconductor)",
    explanation: "While CCDs historically had better quality, CMOS is now dominant because it draws far less power, perfect for IoT."
  },
  {
    id: "q121",
    question: "An LDR (Light Dependent Resistor) operates by:",
    options:["Generating a magnetic field", "Emitting infrared beams", "Changing its resistance in proportion to ambient light intensity", "Converting flow rate to an electrical signal"],
    answer: "Changing its resistance in proportion to ambient light intensity",
    explanation: "As light increases, LDR resistance decreases."
  },
  {
    id: "q122",
    question: "Which proximity sensor is specifically used for detecting metallic objects?",
    options: ["Capacitive Sensor", "Inductive Sensor", "Photoelectric Sensor", "Ultrasonic Sensor"],
    answer: "Inductive Sensor",
    explanation: "Inductive sensors use electromagnetic fields to detect ferrous (metal) objects only."
  },
  {
    id: "q123",
    question: "Which proximity sensor can detect both metallic and non-metallic objects (like a human finger or plastic)?",
    options: ["Capacitive Sensor", "Inductive Sensor", "Magnetic Sensor", "Thermocouple"],
    answer: "Capacitive Sensor",
    explanation: "Capacitive sensors detect changes in the electrostatic field, allowing them to sense virtually any material."
  },
  {
    id: "q124",
    question: "How does an Ultrasonic sensor measure distance?",
    options:["By measuring the change in light intensity", "By emitting high-frequency sound waves and measuring the time it takes for the echo to return", "By analyzing infrared heat signatures", "By calculating electrical resistance"],
    answer: "By emitting high-frequency sound waves and measuring the time it takes for the echo to return",
    explanation: "Uses the formula Distance = (Speed of sound × Time) / 2."
  },
  {
    id: "q125",
    question: "A smart water metering system would most likely utilize a:",
    options:["PIR Sensor", "Sound Sensor", "Capacitive Touch Sensor", "Flow Sensor"],
    answer: "Flow Sensor",
    explanation: "Flow sensors measure the rate of liquids or gases passing through a pipe."
  },
  {
    id: "q126",
    question: "What is the core component inside a sound sensor that converts vibrations into electrical voltage?",
    options:["Photodiode", "Condenser microphone", "Strain gauge", "Bimetallic strip"],
    answer: "Condenser microphone",
    explanation: "A condenser microphone picks up sound pressure changes, which are then amplified by an onboard circuit."
  },
  {
    id: "q127",
    question: "Which touch sensor technology allows detecting a finger's presence without direct physical contact?",
    options:["Capacitive Touch Sensor", "Inductive Touch Sensor", "Infrared (IR) Touch Sensor", "Mechanical switch"],
    answer: "Infrared (IR) Touch Sensor",
    explanation: "IR touch sensors use a grid of infrared light beams; breaking the beam registers a touch."
  },
  {
    id: "q128",
    question: "An actuator is defined as a device that:",
    options:["Converts physical conditions into electrical signals", "Converts digital commands or electrical signals into physical actions or movements", "Stores data in the cloud", "Filters raw analog data"],
    answer: "Converts digital commands or electrical signals into physical actions or movements",
    explanation: "Sensors = Input (world to data). Actuators = Output (data to world)."
  },
  {
    id: "q129",
    question: "Which motor uses a PWM (Pulse Width Modulation) signal for highly precise angular positioning, commonly used in robotic arms?",
    options: ["DC Motor", "Servo Motor", "Stepper Motor", "BLDC Motor"],
    answer: "Servo Motor",
    explanation: "Servos use internal feedback (potentiometer/encoder) to know their exact angle."
  },
  {
    id: "q130",
    question: "Which electromechanical device converts electrical pulses into distinct mechanical steps without needing a feedback loop?",
    options:["Servo Motor", "Stepper Motor", "AC Motor", "Relay"],
    answer: "Stepper Motor",
    explanation: "Stepper motors move in precise 'steps' per electrical pulse, ideal for 3D printers and CNC machines."
  },
  {
    id: "q131",
    question: "The direction of rotation of a standard DC Motor can be reversed by:",
    options:["Changing the PWM frequency", "Upgrading the firmware", "Changing the polarity of the power supply", "Using a step-down transformer"],
    answer: "Changing the polarity of the power supply",
    explanation: "Reversing the positive and negative terminals reverses the magnetic field interaction, spinning the motor backward."
  },
  {
    id: "q132",
    question: "What is the primary purpose of a Linear Actuator?",
    options:["To rotate continuously at high speeds", "To act as a physical sensor", "To convert the rotary motion of a motor into straight-line (push/pull/lift) motion", "To switch high voltage circuits"],
    answer: "To convert the rotary motion of a motor into straight-line (push/pull/lift) motion",
    explanation: "Linear actuators use a lead screw-gear system to create straight movement (e.g., automated hospital beds)."
  },
  {
    id: "q133",
    question: "An electrically operated switch that allows a low-power microcontroller to safely control a high-power AC appliance is a:",
    options:["Stepper Motor", "VCA", "Solenoid", "Relay"],
    answer: "Relay",
    explanation: "A relay uses an electromagnet to close a switch, isolating the low-voltage IoT board from the 220V AC mains."
  },
  {
    id: "q134",
    question: "A device containing a coil of wire and a movable iron core (plunger) that pushes or pulls when current is applied is a:",
    options:["Capacitor", "Solenoid", "Flow Sensor", "Relay"],
    answer: "Solenoid",
    explanation: "Solenoids are heavily used in electronic door locks and automated water valves."
  },
  {
    id: "q135",
    question: "BLDC motors are highly efficient and have a long operational life because:",
    options:["They run on AC power", "They use electronic commutation instead of physical brushes, eliminating wear and tear", "They do not use magnets", "They operate strictly without controllers"],
    answer: "They use electronic commutation instead of physical brushes, eliminating wear and tear",
    explanation: "Brushless DC (BLDC) motors use Hall-effect sensors and electronic controllers to switch coil currents, removing the need for carbon brushes."
  },
  {
    id: "q136",
    question: "Which actuator uses materials like PZT ceramics or quartz that change shape when an electric voltage is applied, providing nano-meter precision?",
    options:["Shape Memory Alloy", "Solenoid", "Piezoelectric Actuator", "MEMS Actuator"],
    answer: "Piezoelectric Actuator",
    explanation: "Piezoelectric actuators are used in inkjet printers, medical micro-pumps, and smartphone haptics due to their ultra-fast, tiny movements."
  },
  {
    id: "q137",
    question: "Which actuator utilizes 'Nitinol' (Nickel-Titanium), a metal that 'remembers' and returns to its pre-programmed shape when heated?",
    options:["MEMS Actuator", "Shape Memory Alloy (SMA) Actuator", "Voice Coil Actuator", "Linear Actuator"],
    answer: "Shape Memory Alloy (SMA) Actuator",
    explanation: "SMAs act like artificial muscles with a high force-to-weight ratio, excellent for wearable robotics."
  },
  {
    id: "q138",
    question: "Actuators built on a single silicon substrate using IC fabrication processes (like etching), used in microscopic applications, are called:",
    options:["Micro-Electro-Mechanical Systems (MEMS) Actuators", "Solenoids", "Stepper Motors", "Relays"],
    answer: "Micro-Electro-Mechanical Systems (MEMS) Actuators",
    explanation: "MEMS combine tiny mechanical moving parts with electrical circuits on silicon chips."
  },
  {
    id: "q139",
    question: "A Voice Coil Actuator (VCA) generates precise linear motion based on the interaction between a current-carrying coil and a magnetic field. This is known as:",
    options:["The Seebeck effect", "Piezoelectricity", "Lorentz Force", "Pseudo-elasticity"],
    answer: "Lorentz Force",
    explanation: "VCAs work on the exact same principle as audio speakers to provide highly precise, low-friction linear movement."
  },
  {
    id: "q140",
    question: "Which 5G characteristic ensures near-instantaneous responses (less than 1 ms latency), crucial for remote robotic surgery?",
    options:["eMBB (Enhanced Mobile Broadband)", "Massive Machine-Type Communication", "uRLLC (Ultra-Reliable Low-Latency Communication)", "Network Slicing"],
    answer: "uRLLC (Ultra-Reliable Low-Latency Communication)",
    explanation: "uRLLC guarantees sub-millisecond latency for mission-critical tasks."
  },
  {
    id: "q141",
    question: "The 5G technology that divides a single physical network into multiple customizable, isolated virtual networks for different IoT applications is:",
    options:["Packet Switching", "Network Slicing", "Edge Computing", "Multiplexing"],
    answer: "Network Slicing",
    explanation: "Slicing allows a smart city to give a dedicated 'slice' to autonomous ambulances, and a low-priority 'slice' to smart meters."
  },
  {
    id: "q142",
    question: "What is a major disadvantage of 5G Networks in IoT?",
    options:["Low data transfer speeds", "High latency", "High-frequency bands have short ranges and are easily blocked by obstacles (buildings/trees)", "Inability to support multiple devices"],
    answer: "High-frequency bands have short ranges and are easily blocked by obstacles (buildings/trees)",
    explanation: "5G requires a very dense network of small cell towers because its high-frequency signals cannot penetrate walls easily."
  },
  {
    id: "q143",
    question: "Using 5G's V2X (Vehicle-to-Everything) communication for optimized routes and proactive maintenance is an application in:",
    options:["Precision Agriculture", "Connected Healthcare", "Intelligent Transportation", "Smart Buildings"],
    answer: "Intelligent Transportation",
    explanation: "V2X allows cars to talk to other cars, traffic lights, and pedestrians."
  },
  {
    id: "q144",
    question: "Which of the following is a core characteristic of a Next Generation Network (NGN)?",
    options:["Circuit-switched strictly for voice", "Proprietary and hardware-locked", "Packet-Based & All-IP architecture", "Bound to legacy PSTN architecture"],
    answer: "Packet-Based & All-IP architecture",
    explanation: "NGN replaces old circuit-switched networks with a unified IP (Internet Protocol) packet-based system."
  },
  {
    id: "q145",
    question: "'Control-Service Decoupling' in NGN means:",
    options:["Disconnecting users from the internet", "Separating the control plane (call routing) from the service layer (applications), allowing rapid innovation", "Removing security protocols to increase speed", "Converting digital signals to analog"],
    answer: "Separating the control plane (call routing) from the service layer (applications), allowing rapid innovation",
    explanation: "In legacy networks, hardware and services were bundled. NGN decouples them using SDN and NFV."
  },
  {
    id: "q146",
    question: "In the NGN Layered Architecture, which layer is responsible for Authentication, Authorization, and Accounting (AAA)?",
    options: ["Access Layer", "Transport Layer", "Control Layer", "Application Layer"],
    answer: "Control Layer",
    explanation: "The Control Layer manages sessions, signaling (SIP), and AAA functions."
  },
  {
    id: "q147",
    question: "Which NGN component converts circuit-switched voice (TDM) into packet-switched voice (VoIP) and compresses the streams?",
    options:["Media Server (MS)", "Media Gateway (MGW)", "Application Server (AS)", "Signaling Gateway (SG)"],
    answer: "Media Gateway (MGW)",
    explanation: "The MGW bridges the physical data formats between old PSTN and modern IP networks."
  },
  {
    id: "q148",
    question: "The Media Gateway Controller (MGC), which acts as the 'brain' handling call setup, routing, and controlling the MGW, is also known as a:",
    options:["Media Server", "Access Gateway", "Softswitch", "IP Router"],
    answer: "Softswitch",
    explanation: "MGC (Softswitch) uses protocols like H.248/MEGACO to dictate what the MGW should do."
  },
  {
    id: "q149",
    question: "Which gateway provides connectivity between user access networks (like DSL, Cable) and the NGN core IP network for broadband subscribers?",
    options: ["Media Gateway", "Signaling Gateway", "Access Gateway", "Softswitch"],
    answer: "Access Gateway",
    explanation: "The Access Gateway is the entry point for end-users to utilize NGN services like IPTV and VoIP."
  },
  {
    id: "q150",
    question: "Which gateway specializes in translating legacy SS7 signaling into IP-based signaling (like SIP or H.323)?",
    options:["Access Gateway", "Media Gateway", "Signaling Gateway (SG)", "Application Server"],
    answer: "Signaling Gateway (SG)",
    explanation: "The SG only translates the control/setup messages (signaling), not the actual voice data."
  },
  {
    id: "q151",
    question: "Which of the following is an example of a Fixed Fiber-based Access Network?",
    options:["xDSL", "LTE / 5G", "WiMAX", "FTTH (Fiber To The Home)"],
    answer: "FTTH (Fiber To The Home)",
    explanation: "FTTH, FTTB, and PON are optical fiber access networks."
  },
  {
    id: "q152",
    question: "The high-capacity backbone of NGN that uses technologies like MPLS and DWDM to carry aggregated traffic is the:",
    options:["Service Layer", "Access Network", "IP Core Network", "Application Server"],
    answer: "IP Core Network",
    explanation: "The IP Core Network handles the high-speed routing and transport of all converged data."
  },
  {
    id: "q153",
    question: "In NGN, which component acts as a 'media toolbox' responsible for playing announcements, mixing conference streams, and Voice Mail/IVR?",
    options:["Softswitch", "Application Server", "Media Server (MS)", "Signaling Gateway"],
    answer: "Media Server (MS)",
    explanation: "The MS handles media processing and interactive services (like 'Press 1 for English')."
  },
  {
    id: "q154",
    question: "Which NGN component executes service logic (like prepaid billing logic, caller ID, or video calling rules)?",
    options: ["Media Gateway", "IP Router", "Media Server", "Application Server (AS)"],
    answer: "Application Server (AS)",
    explanation: "The AS holds the 'intelligence' of the specific service the user is consuming."
  },
  {
    id: "q155",
    question: "Why do IoT systems heavily rely on Cloud Computing?",
    options:["Because IoT devices have infinite local storage", "Because IoT devices generate huge amounts of data but have limited storage, battery, and processing power locally", "Because the cloud works completely offline", "Because cloud computing eliminates the need for sensors"],
    answer: "Because IoT devices generate huge amounts of data but have limited storage, battery, and processing power locally",
    explanation: "The cloud provides the massive scalability, storage, and analytics engines that tiny edge devices lack."
  },
  {
    id: "q156",
    question: "In Cloud-based IoT Architecture, AWS IoT, Microsoft Azure IoT Hub, and Google IoT Core reside in which layer?",
    options:["IoT Devices (Edge Layer)", "IoT Gateway", "Data Processing Layer", "Cloud Services (Application Layer)"],
    answer: "Cloud Services (Application Layer)",
    explanation: "These are enterprise IoT platforms providing data management and application enablement in the cloud."
  },
  {
    id: "q157",
    question: "Which communication protocol is considered highly lightweight and designed specifically for constrained IoT devices to talk to the cloud?",
    options:["HTTP", "FTP", "MQTT (Message Queuing Telemetry Transport)", "SSH"],
    answer: "MQTT (Message Queuing Telemetry Transport)",
    explanation: "MQTT uses a publish/subscribe model, making it incredibly efficient for low-bandwidth IoT sensors."
  },
  {
    id: "q158",
    question: "An industrial plant uses IoT for 'Predictive Maintenance'. This means:",
    options:["Fixing machines only after they break down", "Using sensors and AI to estimate machine health and predict failures before they occur", "Replacing all machines every 6 months regardless of condition", "Maintaining manual logbooks"],
    answer: "Using sensors and AI to estimate machine health and predict failures before they occur",
    explanation: "Predictive maintenance uses vibration, temperature, and acoustic sensors to foresee wear and tear."
  },
  {
    id: "q159",
    question: "If an IoT developer needs to translate analog PSTN telephone signals into digital IP packets, they need a:",
    options: ["Media Server", "Media Gateway", "Wi-Fi Router", "Bluetooth module"],
    answer: "Media Gateway",
    explanation: "Media Gateway performs the physical payload conversion (TDM to VoIP)."
  },
  {
    id: "q160",
    question: "Which protocol is primarily used by the Control Plane (Application Server to Media Server) in an NGN?",
    options: ["HTTP", "LoRaWAN", "SIP (Session Initiation Protocol)", "CAN Bus"],
    answer: "SIP (Session Initiation Protocol)",
    explanation: "SIP is the standard signaling protocol used for initiating, maintaining, and terminating real-time sessions like VoIP."
  },
  {
    id: "q161",
    question: "What does the 'QoS' characteristic in an IP Core Network ensure?",
    options:["That all passwords are encrypted", "That devices consume zero power", "That delay-sensitive services (like VoIP and IPTV) get priority bandwidth", "That the network uses analog cables"],
    answer: "That delay-sensitive services (like VoIP and IPTV) get priority bandwidth",
    explanation: "Quality of Service (QoS) guarantees network performance for real-time applications."
  },
  {
    id: "q162",
    question: "Which smart city application is most likely to use a combination of 'Inductive Proximity Sensors' and IoT Gateways?",
    options:["Air quality monitoring", "Smart parking (detecting metallic cars)", "Waste management (detecting trash fill levels)", "Noise pollution monitoring"],
    answer: "Smart parking (detecting metallic cars)",
    explanation: "Inductive sensors only detect metal, making them perfect for burying under parking spots to detect cars."
  },
  {
    id: "q163",
    question: "An IoT architect needs a sensor to measure the precise fill level of a garbage bin without touching the trash. Which sensor is best?",
    options:["RTD", "Piezoelectric Actuator", "Ultrasonic Sensor", "Capacitive Touch Sensor"],
    answer: "Ultrasonic Sensor",
    explanation: "Ultrasonic sensors measure distance (time-of-flight of sound), ideal for non-contact level measurement."
  },
  {
    id: "q164",
    question: "What is the main advantage of an 'Edge Controller' over a simple Microcontroller (MCU)?",
    options:["It uses 10 times more battery", "It cannot connect to the internet", "It can perform local processing and AI tasks before sending data to the cloud", "It only processes analog signals"],
    answer: "It can perform local processing and AI tasks before sending data to the cloud",
    explanation: "Edge controllers (like NVIDIA Jetson Nano) have enough power to run AI locally, unlike an Arduino."
  },
  {
    id: "q165",
    question: "The 'Identity of Things' characteristic implies that:",
    options:["All devices look the same", "Every device is given a unique identity (like an IP address) for tracking and sending commands", "Devices share the same MAC address", "Only humans have identities"],
    answer: "Every device is given a unique identity (like an IP address) for tracking and sending commands",
    explanation: "Unique identity ensures data goes to the correct smart bulb out of a thousand others."
  },
  {
    id: "q166",
    question: "Which type of relay is preferred for high-speed switching without mechanical wear?",
    options: ["Electromechanical Relay", "Solid State Relay", "Solenoid Relay", "Pneumatic Relay"],
    answer: "Solid State Relay",
    explanation: "Solid State Relays (SSRs) use semiconductors instead of physical moving contacts."
  },
  {
    id: "q167",
    question: "In a smart greenhouse, what combination of components controls roof vents automatically when the temperature gets too hot?",
    options:["Microphone and LED", "Capacitive sensor and Relay", "Temperature sensor (RTD) and Linear Actuator / Stepper Motor", "Gas sensor and DC Motor"],
    answer: "Temperature sensor (RTD) and Linear Actuator / Stepper Motor",
    explanation: "The RTD senses the heat, and a Linear actuator physically pushes the heavy vent window open."
  },
  {
    id: "q168",
    question: "'Pseudo-elasticity' is a property associated with which type of IoT actuator?",
    options:["BLDC Motor", "VCA", "Shape Memory Alloys (SMA)", "Solenoids"],
    answer: "Shape Memory Alloys (SMA)",
    explanation: "Pseudo-elasticity allows SMAs to undergo significant deformation and return to their original shape without damage."
  },
  {
    id: "q169",
    question: "What is a 'Data Lake' in IoT Cloud Infrastructure?",
    options:["A physical pool of water for cooling servers", "A centralized repository that allows storing all structured and unstructured IoT data at any scale", "A routing protocol", "An edge computing node"],
    answer: "A centralized repository that allows storing all structured and unstructured IoT data at any scale",
    explanation: "Data lakes hold raw, unstructured sensor data until it is needed for AI/ML analytics."
  },
  {
    id: "q170",
    question: "Which of the following is NOT an application of Piezoelectric Actuators?",
    options:["Micro-pumps for drug delivery", "Smartphone haptic feedback (vibration)", "Nano-positioning for robotic arms", "Opening heavy automated garage doors"],
    answer: "Opening heavy automated garage doors",
    explanation: "Piezo actuators have very high precision but very small displacement/force. They cannot move massive objects like garage doors."
  },
  {
    id: "q171",
    question: "Which component in the NGN Architecture is responsible for 'Lawful Interception' and Policy Control?",
    options:["Media Server", "Media Gateway Controller (MGC)", "Access Network", "IoT Gateway"],
    answer: "Media Gateway Controller (MGC)",
    explanation: "The MGC manages call admission control, user authentication, and lawful interception (wiretapping for authorities)."
  },
  {
    id: "q172",
    question: "The use of NFV (Network Function Virtualization) and SDN (Software Defined Networking) in NGN primarily provides:",
    options:["Physical hardware lock-in", "Slower data speeds", "Separation of network control from hardware, allowing network functions to run on commodity servers", "Analog signal transmission"],
    answer: "Separation of network control from hardware, allowing network functions to run on commodity servers",
    explanation: "SDN and NFV make the network highly flexible, software-based, and cost-effective."
  },
  {
    id: "q173",
    question: "What is the difference between a CMOS and a CCD Image Sensor?",
    options:["CCD uses less power than CMOS", "CCD historically provided higher image quality, but CMOS is now standard in IoT due to cost and energy efficiency", "CMOS cannot capture video, only still images", "CCD uses infrared light, CMOS uses ultraviolet"],
    answer: "CCD historically provided higher image quality, but CMOS is now standard in IoT due to cost and energy efficiency",
    explanation: "CMOS is cheaper and uses less power, making it the king of modern digital and IoT cameras."
  },
  {
    id: "q174",
    question: "Which sensor acts as an 'artificial nose' in an IoT system?",
    options: ["LDR", "Gas / Electrochemical Sensor", "Ultrasonic Sensor", "Gyroscope"],
    answer: "Gas / Electrochemical Sensor",
    explanation: "Gas sensors 'smell' the chemical composition of the air."
  },
  {
    id: "q175",
    question: "Which technology bridges a Zigbee smart home network to the IP-based Internet?",
    options:["Relay", "NDIR Sensor", "Wireless IoT Gateway", "Softswitch"],
    answer: "Wireless IoT Gateway",
    explanation: "A Wireless Gateway translates local protocols like Zigbee to Wi-Fi/Ethernet to reach the cloud."
  },
  {
    id: "q176",
    question: "Which type of cellular IoT gateway is required for a remote oil pipeline where wired internet is impossible?",
    options:["Wi-Fi Gateway", "Bluetooth Gateway", "Cellular Gateway (3G/4G/5G)", "Modbus Gateway"],
    answer: "Cellular Gateway (3G/4G/5G)",
    explanation: "Cellular gateways use mobile network towers to transmit data from remote locations to the cloud."
  },
  {
    id: "q177",
    question: "If a hacker exploits a vulnerability in a smart TV to jump into a home's private Wi-Fi network, which IoT limitation does this expose?",
    options:["Short Device Lifespan", "Data Overload", "Security Risks / Network Compromise", "High Initial Cost"],
    answer: "Security Risks / Network Compromise",
    explanation: "This is a classic lateral movement attack stemming from poor IoT security."
  },
  {
    id: "q178",
    question: "What does 'Device Management' entail in an IoT Platform?",
    options:["Designing the physical plastic casing of the device", "Registering, configuring, monitoring, and pushing firmware updates to the devices remotely", "Deleting user accounts", "Manufacturing the printed circuit boards"],
    answer: "Registering, configuring, monitoring, and pushing firmware updates to the devices remotely",
    explanation: "Platforms like AWS IoT handle the lifecycle (onboarding, updating, retiring) of millions of connected devices."
  },
  {
    id: "q179",
    question: "A 'Closed-Loop System' in IoT implies:",
    options:["Data is only stored locally", "Sensors send data to the cloud, but the cloud cannot send data back", "Sensors collect data, logic processes it, and actuators perform an action in response, creating a continuous feedback loop", "The network is physically sealed with cables"],
    answer: "Sensors collect data, logic processes it, and actuators perform an action in response, creating a continuous feedback loop",
    explanation: "Example: A thermostat detects a temperature drop, tells the heater to turn on, and stops when the target temp is reached."
  },
  {
    id: "q180",
    question: "The protocol translation from legacy SS7 to modern SIP is handled by which two NGN components working together?",
    options:["Media Server and Access Gateway", "Signaling Gateway (SG) and Media Gateway Controller (MGC)", "Media Gateway and IP Router", "Application Server and Database"],
    answer: "Signaling Gateway (SG) and Media Gateway Controller (MGC)",
    explanation: "The SG converts the physical SS7 protocols to IP, and the MGC understands and routes the resulting SIP logic."
  },
  {
    id: "q181",
    question: "In an IoT application for 'Smart Transportation', what is the primary benefit of Fleet Management and GPS tracking?",
    options:["Increasing fuel consumption", "Real-time route optimization, better logistics, and reduced fuel consumption", "Tracking personal text messages", "Making vehicles heavier"],
    answer: "Real-time route optimization, better logistics, and reduced fuel consumption",
    explanation: "Tracking fleets allows companies to minimize idle time and take optimal routes."
  },
  {
    id: "q182",
    question: "Which of the following is a key advantage of deploying an IP Core Network in NGN?",
    options:["Convergence of all traffic types (voice, video, data) onto a single network", "Requirement of dedicated copper lines for every phone call", "Inability to support IoT devices", "Use of slow, circuit-switched routing"],
    answer: "Convergence of all traffic types (voice, video, data) onto a single network",
    explanation: "'Convergence' means IP carries everything, saving massive infrastructure costs."
  },
  {
    id: "q183",
    question: "Which mechanism ensures that a Stepper motor rotates precisely?",
    options:["Analog feedback from a potentiometer", "Hall-effect sensors", "It rotates a fixed step angle for every digital electrical pulse received", "It uses a variable resistor"],
    answer: "It rotates a fixed step angle for every digital electrical pulse received",
    explanation: "Stepper motors are open-loop. If you send 200 pulses, and the motor has a 1.8-degree step, it turns exactly 360 degrees."
  },
  {
    id: "q184",
    question: "What is the fundamental difference between a DC motor and a BLDC motor?",
    options:["DC motors run on AC; BLDC runs on DC.", "DC motors use physical brushes for commutation; BLDC motors use electronic controllers and Hall-effect sensors.", "DC motors are more efficient than BLDC.", "BLDC motors can only rotate exactly 180 degrees."],
    answer: "DC motors use physical brushes for commutation; BLDC motors use electronic controllers and Hall-effect sensors.",
    explanation: "'Brushless' DC motors have no friction-causing brushes, giving them a vastly superior lifespan."
  },
  {
    id: "q185",
    question: "In a 'Smart Building', HVAC automation relies heavily on which sensors?",
    options:["Temperature and Occupancy (PIR) sensors", "Gas and LDR sensors", "Touch and Sound sensors", "Magnetic and Inductive sensors"],
    answer: "Temperature and Occupancy (PIR) sensors",
    explanation: "HVAC systems need to know the room's temperature and if anyone is actually in the room to save energy."
  },
  {
    id: "q186",
    question: "Which 5G feature is essential for extending the battery life of remote, hard-to-reach IoT sensors?",
    options:["eMBB", "uRLLC", "Increased Energy Efficiency protocols", "Network Slicing"],
    answer: "Increased Energy Efficiency protocols",
    explanation: "5G includes low-power modes (like NB-IoT and LTE-M) to allow sensors to run on coin batteries for years."
  },
  {
    id: "q187",
    question: "What does 'Active Engagement' mean as a feature of IoT?",
    options:["Devices require users to manually press buttons constantly", "Devices passively log data without taking action", "Devices not only collect data but actively share information and interact with each other to achieve a goal", "Devices drain battery actively"],
    answer: "Devices not only collect data but actively share information and interact with each other to achieve a goal",
    explanation: "An ecosystem where the smart alarm clock wakes you up, and actively engages the coffee maker to start brewing."
  },
  {
    id: "q188",
    question: "Which of the following is the most suitable actuator for a delicate medical 'Lab-on-a-chip' device that requires moving tiny droplets of fluid?",
    options:["Heavy-duty Solenoid", "Standard DC Motor", "Piezoelectric or MEMS Actuator", "Servo Motor"],
    answer: "Piezoelectric or MEMS Actuator",
    explanation: "MEMS and Piezo actuators operate at the micro/nano scale."
  },
  {
    id: "q189",
    question: "A 'Data Overload' limitation in IoT refers to:",
    options:["The battery exploding", "The difficulty of managing, storing, and extracting meaningful analytics from the massive, continuous influx of sensor data", "A device getting too hot", "Exceeding Wi-Fi range"],
    answer: "The difficulty of managing, storing, and extracting meaningful analytics from the massive, continuous influx of sensor data",
    explanation: "Millions of sensors generating data every second creates a Big Data bottleneck."
  },
  {
    id: "q190",
    question: "Why is IPv6 critical for the future of IoT?",
    options:["It increases internet speed artificially", "It provides a massively huge number of unique IP addresses, ensuring every single IoT device can have a unique identity", "It prevents all hacking attempts", "It replaces Wi-Fi routers"],
    answer: "It provides a massively huge number of unique IP addresses, ensuring every single IoT device can have a unique identity",
    explanation: "IPv4 ran out of addresses. IPv6 has enough addresses to assign an IP to every grain of sand on Earth."
  },
  {
    id: "q191",
    question: "In a NGN, what provides the 'first mile / last mile' connection from the end-user's home to the service provider's backbone?",
    options:["IP Core Network", "Signaling Gateway", "Access Network (AN)", "Application Server"],
    answer: "Access Network (AN)",
    explanation: "The Access Network is the physical cable, fiber (FTTH), or wireless connection going directly to the consumer."
  },
  {
    id: "q192",
    question: "Which protocol ensures 'Secure Communication' at the Network/Transport layer for IoT to Cloud connections?",
    options:["HTTP", "CoAP", "TLS/SSL (HTTPS, MQTTS)", "MQTT (Unencrypted)"],
    answer: "TLS/SSL (HTTPS, MQTTS)",
    explanation: "Security and Access control in the Cloud Server utilizes TLS/SSL encryption to prevent data sniffing."
  },
  {
    id: "q193",
    question: "The primary role of an IoT 'User Interface' is to:",
    options:["Store data permanently", "Convert AC to DC power", "Allow humans to monitor data via dashboards and send control commands via mobile apps or web portals", "Route IP packets"],
    answer: "Allow humans to monitor data via dashboards and send control commands via mobile apps or web portals",
    explanation: "The UI is the presentation layer for the human."
  },
  {
    id: "q194",
    question: "A farmer using an app to open greenhouse vents is interacting with which layer of the IoT logical design?",
    options:["Perception Layer", "Application Layer", "Data Processing Layer", "Network Layer"],
    answer: "Application Layer",
    explanation: "The smartphone app sits at the Application Layer."
  },
  {
    id: "q195",
    question: "Which IoT sensor converts mechanical strain or physical pressure in liquids/gases into an electrical signal?",
    options: ["LDR", "Pressure Sensor", "Capacitive Touch Sensor", "Thermocouple"],
    answer: "Pressure Sensor",
    explanation: "Used in oil/gas pipelines and smart water networks to detect leaks."
  },
  {
    id: "q196",
    question: "The 'Brain' of the NGN that manages SIP sessions, executes VoIP service logic, and hosts IPTV features is the:",
    options:["Media Gateway", "Access Network", "Media Server", "Application Server (AS)"],
    answer: "Application Server (AS)",
    explanation: "The AS runs the software logic for the services users subscribe to."
  },
  {
    id: "q197",
    question: "Which of the following is considered a 'Smart City' IoT application?",
    options:["A wearable heart rate monitor", "A robotic arm welding cars", "Smart traffic lights, waste management, and air quality monitoring systems", "A home smart speaker"],
    answer: "Smart traffic lights, waste management, and air quality monitoring systems",
    explanation: "Smart cities deploy IoT on a municipal scale for public benefit."
  },
  {
    id: "q198",
    question: "'Optical Transport (DWDM/SONET/SDH)' is a technology utilized in which NGN layer for long-distance, high-capacity links?",
    options: ["Service Layer", "Access Layer", "IP Core Network / Transport Layer", "Application Layer"],
    answer: "IP Core Network / Transport Layer",
    explanation: "DWDM over fiber optics forms the ultra-fast physical backbone of the IP Core network."
  },
  {
    id: "q199",
    question: "A system where a human fingertip disrupts a local electrostatic field to register a command is a:",
    options:["Piezoelectric Actuator", "Capacitive Touch Sensor", "IR Touch Sensor", "Limit Switch"],
    answer: "Capacitive Touch Sensor",
    explanation: "Modern smartphone screens and IoT smart panels use capacitive touch."
  },
  {
    id: "q200",
    question: "What is a 'Hybrid Cloud' IoT deployment?",
    options:["A cloud that runs on diesel and electricity", "A system that uses only local hard drives", "A combination of edge computing/local private servers for sensitive data, and public cloud services for scalable analytics", "An IoT system without any sensors"],
    answer: "A combination of edge computing/local private servers for sensitive data, and public cloud services for scalable analytics",
    explanation: "Hybrid models offer the security of private infrastructure and the raw power/scale of public clouds."
  },

  // ==========================================
  // UNIT 3: BLOCKCHAIN TECHNOLOGY
  // ==========================================
  {
    id: "q201",
    question: "What is the fundamental definition of Blockchain?",
    options:["A centralized database managed by a single administrator", "A decentralized, distributed digital ledger that securely records and verifies transactions", "A cloud storage platform for backing up images", "A hardware device used for high-speed gaming"],
    answer: "A decentralized, distributed digital ledger that securely records and verifies transactions",
    explanation: "It is a 'distributed ledger' maintained across a peer-to-peer network without a central authority."
  },
  {
    id: "q202",
    question: "Which key feature ensures that once a block of transactions is added to the blockchain, it cannot be altered or deleted?",
    options:["Decentralization", "Transparency", "Immutability", "Automation"],
    answer: "Immutability",
    explanation: "Immutability makes the blockchain a tamper-proof record."
  },
  {
    id: "q203",
    question: "How is 'Trust' established in a Blockchain system compared to Traditional Systems?",
    options:["By relying on banks and notaries", "By giving control to a single government server", "Through cryptography and consensus mechanisms", "By hiding all transaction data from users"],
    answer: "Through cryptography and consensus mechanisms",
    explanation: "Traditional systems use trusted 3rd parties. Blockchain uses math (cryptography) and network agreement (consensus)."
  },
  {
    id: "q204",
    question: "In traditional systems, data modification allows 'Add, Update, Delete'. In blockchain systems, data modification is:",
    options:["Delete-only", "Append-only", "Update-only", "Read-only"],
    answer: "Append-only",
    explanation: "You can only 'append' (add) new blocks. You cannot update or delete past data."
  },
  {
    id: "q205",
    question: "Self-executing contracts where the terms of the agreement are written directly into code are called:",
    options:["Legal Ledgers", "Digital Signatures", "Smart Contracts", "Hash Functions"],
    answer: "Smart Contracts",
    explanation: "Smart contracts automate actions (like transferring funds) when predefined conditions are met."
  },
  {
    id: "q206",
    question: "In blockchain architecture, what are 'Nodes'?",
    options:["The smallest units of a transaction", "Computers or users that participate in the network, store the ledger, and validate transactions", "The cryptographic algorithms used to secure blocks", "The graphical user interfaces for DApps"],
    answer: "Computers or users that participate in the network, store the ledger, and validate transactions",
    explanation: "Every computer participating in the P2P network is a node."
  },
  {
    id: "q207",
    question: "What cryptographically links a sequence of blocks together, making the ledger tamper-proof?",
    options:["Public Keys", "Merkle Trees", "Unique Hashes", "IP Addresses"],
    answer: "Unique Hashes",
    explanation: "Each block contains the 'hash' of the previous block, creating an unbreakable cryptographic chain."
  },
  {
    id: "q208",
    question: "Which layer of the Blockchain Architecture is responsible for providing interfaces like Wallets, APIs, and DApps?",
    options:["Network Layer", "Application Layer", "Data Layer", "Consensus Layer"],
    answer: "Application Layer",
    explanation: "The Application Layer is the user-facing layer where Decentralized Applications (DApps) reside."
  },
  {
    id: "q209",
    question: "The 'Contract Layer' in advanced blockchains (like Ethereum) primarily contains:",
    options:["Smart Contracts and Virtual Machines (e.g., EVM, WASM)", "Peer-to-Peer network protocols", "Hard drives and GPUs", "Merkle trees and digital signatures"],
    answer: "Smart Contracts and Virtual Machines (e.g., EVM, WASM)",
    explanation: "The Contract Layer executes the business logic using smart contracts running on Virtual Machines."
  },
  {
    id: "q210",
    question: "Which layer decides which transactions are valid and prevents 'double-spending'?",
    options:["Infrastructure Layer", "Contract Layer", "Consensus Layer", "Application Layer"],
    answer: "Consensus Layer",
    explanation: "The Consensus layer ensures all nodes agree on the true state of the ledger using algorithms like PoW or PoS."
  },
  {
    id: "q211",
    question: "Which Consensus Mechanism involves 'Miners' competing to solve complex cryptographic puzzles to add a block?",
    options:["Proof of Stake (PoS)", "Proof of Work (PoW)", "Delegated Proof of Stake (DPoS)", "Practical Byzantine Fault Tolerance (PBFT)"],
    answer: "Proof of Work (PoW)",
    explanation: "PoW is used by Bitcoin. It is highly secure but very energy-intensive."
  },
  {
    id: "q212",
    question: "In which Consensus Mechanism do validators lock up their coins to be randomly chosen to validate blocks?",
    options:["Proof of Work", "Practical Byzantine Fault Tolerance", "Proof of Stake (PoS)", "Proof of Authority"],
    answer: "Proof of Stake (PoS)",
    explanation: "PoS (used in Ethereum 2.0) is much more energy-efficient than PoW."
  },
  {
    id: "q213",
    question: "Which consensus mechanism is heavily used in 'Permissioned' or enterprise blockchains like Hyperledger Fabric?",
    options:["Proof of Work", "Proof of Stake", "Practical Byzantine Fault Tolerance (PBFT)", "Proof of Space"],
    answer: "Practical Byzantine Fault Tolerance (PBFT)",
    explanation: "PBFT relies on nodes reaching agreement by majority voting, ideal for closed/private networks."
  },
  {
    id: "q214",
    question: "The 'Network Layer' uses which protocol to efficiently spread transactions and blocks across all nodes?",
    options: ["HTTP", "FTP", "Gossip Protocol", "TCP/IP"],
    answer: "Gossip Protocol",
    explanation: "Nodes 'gossip' with their peers to rapidly broadcast updates across the decentralized network."
  },
  {
    id: "q215",
    question: "In the Network Layer, a node that stores only block headers and relies on other nodes for verification is called a:",
    options:["Full Node", "Validator Node", "Light Node (SPV)", "Mining Rig"],
    answer: "Light Node (SPV)",
    explanation: "Light Nodes (Simplified Payment Verification) are used on mobile phones where downloading the 500GB+ blockchain is impossible."
  },
  {
    id: "q216",
    question: "The 'Data Layer' of a blockchain contains a binary tree structure used to store transactions efficiently. This is called a:",
    options:["B-Tree", "Red-Black Tree", "Merkle Tree", "Spanning Tree"],
    answer: "Merkle Tree",
    explanation: "Merkle Trees allow rapid verification of whether a specific transaction exists in a block without downloading the whole block."
  },
  {
    id: "q217",
    question: "How does the Data Layer ensure the authenticity and ownership of transactions?",
    options:["By using IP tracking", "By using Digital Signatures (Public/Private Key Cryptography)", "By using passwords and OTPs", "By using Captchas"],
    answer: "By using Digital Signatures (Public/Private Key Cryptography)",
    explanation: "A user signs a transaction with their Private Key, and the network verifies it using their Public Key."
  },
  {
    id: "q218",
    question: "ASICs, GPUs, Data Centers, and Internet Backbones form which layer of the Blockchain Architecture?",
    options:["Network Layer", "Data Layer", "Consensus Layer", "Infrastructure / Hardware Layer"],
    answer: "Infrastructure / Hardware Layer",
    explanation: "This is the physical 'body' of the blockchain that provides the raw computational power and networking."
  },
  {
    id: "q219",
    question: "In the flow of a blockchain transaction, what is the 'Mempool'?",
    options:["A pool of hacked funds", "The final storage block", "A temporary waiting area for verified transactions before they are bundled into a block", "A smart contract virtual machine"],
    answer: "A temporary waiting area for verified transactions before they are bundled into a block",
    explanation: "Miners pick transactions from the mempool to build the next block."
  },
  {
    id: "q220",
    question: "What does 'Block Finality' mean in the Consensus Layer?",
    options:["The block is rejected", "The block is sent back to the mempool", "Confirmation that once a block is added, it is irreversible and immutable", "The blockchain has reached its maximum size"],
    answer: "Confirmation that once a block is added, it is irreversible and immutable",
    explanation: "Finality guarantees that the transaction cannot be rolled back or reversed."
  },
  {
    id: "q221",
    question: "A blockchain that is completely decentralized, permissionless, and open for anyone to join (e.g., Bitcoin) is a:",
    options: ["Public Blockchain", "Private Blockchain", "Consortium Blockchain", "Hybrid Blockchain"],
    answer: "Public Blockchain",
    explanation: "Anyone can read, write, and audit a public blockchain."
  },
  {
    id: "q222",
    question: "What is a major disadvantage of a Public Blockchain?",
    options:["High risk of censorship", "Lack of transparency", "Slow transaction speeds and high energy consumption", "Requires a central authority"],
    answer: "Slow transaction speeds and high energy consumption",
    explanation: "Because thousands of nodes must verify every transaction, public chains (like Bitcoin) are relatively slow."
  },
  {
    id: "q223",
    question: "A closed, permissioned network run by a single organization that dictates rules and permissions is a:",
    options:["Public Blockchain", "Consortium Blockchain", "Private Blockchain", "Open Blockchain"],
    answer: "Private Blockchain",
    explanation: "Private blockchains offer fast speeds and privacy, but sacrifice true decentralization."
  },
  {
    id: "q224",
    question: "Which type of blockchain is governed by a pre-selected group of multiple organizations (e.g., multiple banks collaborating)?",
    options: ["Public Blockchain", "Private Blockchain", "Consortium Blockchain", "Hybrid Blockchain"],
    answer: "Consortium Blockchain",
    explanation: "R3 Corda and Hyperledger Fabric are often used as Consortiums where multiple entities share control."
  },
  {
    id: "q225",
    question: "A blockchain that combines the transparent nature of a public ledger with the restricted access of a private ledger is a:",
    options: ["Pure Public Blockchain", "Consortium Blockchain", "Legacy Database", "Hybrid Blockchain"],
    answer: "Hybrid Blockchain",
    explanation: "Hybrids allow companies to keep sensitive data private while making certain proofs available publicly."
  },
  {
    id: "q226",
    question: "Which of the following is an example of a Consortium Blockchain?",
    options:["Bitcoin", "Dogecoin", "R3 Corda", "Solana"],
    answer: "R3 Corda",
    explanation: "R3 Corda is used heavily by a consortium of 200+ financial institutions."
  },
  {
    id: "q227",
    question: "In a Hybrid Blockchain, 'Selective Transparency' means:",
    options:["All data is public", "All data is hidden", "Members can choose which transactions are made public and which are kept private", "Only hackers can see the data"],
    answer: "Members can choose which transactions are made public and which are kept private",
    explanation: "This gives businesses the flexibility to protect trade secrets while proving compliance."
  },
  {
    id: "q228",
    question: "What does 'DeFi' stand for in blockchain finance?",
    options:["Direct Financial Integration", "Decentralized Finance", "Digital Fiat", "Distributed Federal Insurance"],
    answer: "Decentralized Finance",
    explanation: "DeFi uses smart contracts to offer lending/borrowing without traditional banks (e.g., Uniswap, Aave)."
  },
  {
    id: "q229",
    question: "CBDC stands for:",
    options:["Crypto-Based Digital Coin", "Central Bank Digital Currency", "Centralized Blockchain Data Center", "Cross-Border Digital Currency"],
    answer: "Central Bank Digital Currency",
    explanation: "Digital Yuan or eNaira are government-backed digital fiats running on DLT/Blockchain."
  },
  {
    id: "q230",
    question: "How does blockchain fundamentally improve Cross-Border Transactions and Remittances?",
    options:["By adding more intermediary banks", "By removing intermediaries, making transfers faster, cheaper, and transparent", "By converting all money to physical gold", "By slowing down the transaction to ensure accuracy"],
    answer: "By removing intermediaries, making transfers faster, cheaper, and transparent",
    explanation: "RippleNet and Stellar settle international transfers in seconds for pennies, bypassing the slow SWIFT system."
  },
  {
    id: "q231",
    question: "In Healthcare, what is the primary benefit of putting Electronic Health Records (EHR) on a blockchain?",
    options:["Doctors can delete patient history", "It provides a secure, decentralized, and immutable ledger where patients control access to their complete medical history", "It makes records completely public to the internet", "It replaces MRI machines"],
    answer: "It provides a secure, decentralized, and immutable ledger where patients control access to their complete medical history",
    explanation: "Patient-centric control and data interoperability across different hospitals."
  },
  {
    id: "q232",
    question: "In the Pharmaceutical Supply Chain, blockchain is highly effective at:",
    options:["Manufacturing drugs faster", "Tracking the origin of medications from manufacturer to patient, combating counterfeit drugs", "Hiding the ingredients of drugs", "Replacing pharmacists"],
    answer: "Tracking the origin of medications from manufacturer to patient, combating counterfeit drugs",
    explanation: "Provenance and traceability ensure the drug you buy is genuine."
  },
  {
    id: "q233",
    question: "How does blockchain aid 'Personalized Medicine and Genomics'?",
    options:["By printing DNA", "By securely storing and managing sensitive DNA/genomic data for research while maintaining patient privacy", "By generating fake medical reports", "By replacing human doctors with AI"],
    answer: "By securely storing and managing sensitive DNA/genomic data for research while maintaining patient privacy",
    explanation: "Projects like Nebula Genomics allow users to share their DNA data for research securely."
  },
  {
    id: "q234",
    question: "In Supply Chain Management, ensuring that records cannot be altered to prevent fraud utilizes which blockchain feature?",
    options:["Decentralization", "Immutability", "Consensus", "Tokenization"],
    answer: "Immutability",
    explanation: "If a shipping manifest is logged, no one can secretly go back and change the temperature logs or timestamps."
  },
  {
    id: "q235",
    question: "Walmart uses IBM Food Trust to track the freshness and origin of produce. This is an application of blockchain in:",
    options:["Gaming", "Finance", "Healthcare", "Supply Chain"],
    answer: "Supply Chain",
    explanation: "Blockchain provides 'End-to-end transparency and visibility' from farm to table."
  },
  {
    id: "q236",
    question: "In Blockchain Gaming, what technology gives players true ownership of unique in-game assets (like a rare sword or skin)?",
    options:["Virtual Machines", "NFTs (Non-Fungible Tokens)", "Stablecoins", "Merkle Trees"],
    answer: "NFTs (Non-Fungible Tokens)",
    explanation: "NFTs prove that you, not the game developer, own the digital item."
  },
  {
    id: "q237",
    question: "The gaming model where players can earn real-world value (crypto or fiat) by breeding, training, or selling in-game assets is called:",
    options:["Pay-to-Win", "Free-to-Play", "Play-to-Earn (P2E)", "Subscription Model"],
    answer: "Play-to-Earn (P2E)",
    explanation: "Axie Infinity is a prime example of the P2E model."
  },
  {
    id: "q238",
    question: "'Cross-Game Assets' in blockchain gaming relies on which characteristic?",
    options: ["Immutability", "Interoperability", "Centralization", "Obfuscation"],
    answer: "Interoperability",
    explanation: "A sword bought in Game A can theoretically be transferred and used in Game B if they share compatible blockchains."
  },
  {
    id: "q239",
    question: "Which feature of a Smart Contract ensures that parties do not need to trust each other, only the code?",
    options: ["Mutability", "Trustless Transactions", "Centralized Control", "Ambiguity"],
    answer: "Trustless Transactions",
    explanation: "The system enforces rules automatically, so you don't need a lawyer or a bank to guarantee the deal."
  },
  {
    id: "q240",
    question: "What is a 'Cryptocurrency'?",
    options:["A physical coin printed by the government", "A stock market share", "A digital or virtual currency that uses cryptography for security and operates on a decentralized blockchain network", "A database of credit card numbers"],
    answer: "A digital or virtual currency that uses cryptography for security and operates on a decentralized blockchain network",
    explanation: "Crypto relies on the underlying blockchain to function securely."
  },
  {
    id: "q241",
    question: "Which cryptocurrency is known as 'digital gold,' has a finite supply of 21 million, and was the first public blockchain?",
    options:["Ethereum (ETH)", "Bitcoin (BTC)", "Tether (USDT)", "Solana (SOL)"],
    answer: "Bitcoin (BTC)",
    explanation: "Bitcoin introduced the world to blockchain technology."
  },
  {
    id: "q242",
    question: "Which cryptocurrency is the second-largest by market cap and is famous for pioneering Smart Contracts and DApps?",
    options:["Bitcoin", "Cardano", "Ethereum (ETH)", "Dogecoin"],
    answer: "Ethereum (ETH)",
    explanation: "Ethereum introduced the Ethereum Virtual Machine (EVM) to run code, not just transfer money."
  },
  {
    id: "q243",
    question: "Tether (USDT) is aiming to control price volatility because it is a:",
    options:["Meme coin", "Proof of Work coin", "Stablecoin pegged to fiat currencies (US Dollar)", "Central Bank Digital Currency"],
    answer: "Stablecoin pegged to fiat currencies (US Dollar)",
    explanation: "1 USDT is designed to always be worth 1 USD."
  },
  {
    id: "q244",
    question: "Which blockchain platform features the 'Ouroboros' protocol, utilizes a multi-asset ledger, and is seen as an alternative to Ethereum?",
    options: ["Dogecoin", "Bitcoin", "Solana", "Cardano (ADA)"],
    answer: "Cardano (ADA)",
    explanation: "Cardano is heavily focused on peer-reviewed research and formal verification."
  },
  {
    id: "q245",
    question: "Which cryptocurrency started as a meme, has an unlimited supply, and is heavily influenced by social media trends?",
    options:["Solana", "Tether", "Cardano", "Dogecoin (DOGE)"],
    answer: "Dogecoin (DOGE)",
    explanation: "Dogecoin is the original 'meme coin.'"
  },
  {
    id: "q246",
    question: "Solana (SOL) is primarily known in the crypto market for its:",
    options:["Peg to the US Dollar", "High transaction speeds and throughput", "Complete privacy and hidden transactions", "Use in traditional banking"],
    answer: "High transaction speeds and throughput",
    explanation: "Solana uses Proof of History (PoH) alongside PoS to achieve massive speeds (thousands of TPS)."
  },
  {
    id: "q247",
    question: "The inability of blockchains like Bitcoin to process as many transactions per second (TPS) as Visa or Mastercard is known as the:",
    options: ["Energy Consumption challenge", "Scalability challenge", "Privacy challenge", "Interoperability challenge"],
    answer: "Scalability challenge",
    explanation: "As networks grow, congestion causes slow speeds and high gas (transaction) fees."
  },
  {
    id: "q248",
    question: "Proof of Work (PoW) networks face severe criticism globally due to:",
    options:["Lack of security", "Extremely high energy consumption", "Being too fast", "Centralized control"],
    answer: "Extremely high energy consumption",
    explanation: "Bitcoin mining farms use more electricity than some entire countries."
  },
  {
    id: "q249",
    question: "Which regulatory issue directly conflicts with the 'Immutability' feature of public blockchains?",
    options:["High implementation costs", "Scalability", "GDPR’s 'Right to be Forgotten'", "51% Attacks"],
    answer: "GDPR’s 'Right to be Forgotten'",
    explanation: "If a user legally demands their personal data be deleted (GDPR), it is impossible to do on a true blockchain."
  },
  {
    id: "q250",
    question: "A security risk in DeFi where developers abandon a project and run away with investors' funds is called a:",
    options:["51% Attack", "Phishing Attack", "Rug Pull", "Evasion Attack"],
    answer: "Rug Pull",
    explanation: "Rug pulls are a massive risk in unregulated Decentralized Finance environments."
  },
  {
    id: "q251",
    question: "If a group of hackers gains control of more than half of the network's mining power, allowing them to reverse transactions, this is called a:",
    options:["Double-spend attack", "51% Attack", "Zero-day exploit", "DDoS attack"],
    answer: "51% Attack",
    explanation: "A 51% attack breaks the consensus mechanism because the malicious actors become the 'majority vote.'"
  },
  {
    id: "q252",
    question: "Different blockchain networks (like Bitcoin and Ethereum) struggle to communicate and exchange data seamlessly. This challenge is known as:",
    options: ["Scalability", "Energy Consumption", "Interoperability", "Regulation"],
    answer: "Interoperability",
    explanation: "Isolated blockchains struggle to 'talk' to each other without risky bridges."
  },
  {
    id: "q253",
    question: "In the Contract Layer, which programming language is primarily used to write smart contracts on Ethereum?",
    options:["Python", "Java", "C++", "Solidity"],
    answer: "Solidity",
    explanation: "Solidity is the native language compiled into bytecode for the EVM."
  },
  {
    id: "q254",
    question: "When an AI developer creates a 'DApp' (Decentralized Application), which layer of the blockchain architecture is the end-user interacting with?",
    options:["Infrastructure Layer", "Application Layer", "Consensus Layer", "Data Layer"],
    answer: "Application Layer",
    explanation: "The Application layer holds UIs, APIs, and the frontend of DApps."
  },
  {
    id: "q255",
    question: "What happens during the 'Broadcasting' phase of a blockchain transaction?",
    options:["The transaction is permanently locked into a block.", "The transaction is sent out to the P2P network so all nodes are aware of the request.", "The transaction is deleted.", "The receiver signs the transaction."],
    answer: "The transaction is sent out to the P2P network so all nodes are aware of the request.",
    explanation: "You initiate the transaction, then it broadcasts to the network to sit in the mempool."
  },
  {
    id: "q256",
    question: "Which of the following is NOT a consensus mechanism?",
    options:["Proof of Work (PoW)", "Proof of Stake (PoS)", "Proof of Privacy (PoP)", "Practical Byzantine Fault Tolerance (PBFT)"],
    answer: "Proof of Privacy (PoP)",
    explanation: "PoP is not a standard blockchain consensus mechanism."
  },
  {
    id: "q257",
    question: "In a supply chain, what is 'Provenance'?",
    options:["The cost of shipping", "The verifiable origin and history of a product recorded on the ledger", "The packaging material used", "The customer's credit card number"],
    answer: "The verifiable origin and history of a product recorded on the ledger",
    explanation: "Provenance proves that organic coffee actually came from an organic farm."
  },
  {
    id: "q258",
    question: "Smart Contracts in Trade Finance can replace manual paperwork like:",
    options:["Source Code", "Letters of Credit", "Passwords", "Digital Signatures"],
    answer: "Letters of Credit",
    explanation: "Platforms like Voltron automate Letters of Credit, cutting processing time from days to hours."
  },
  {
    id: "q259",
    question: "The 'Delegated Proof of Stake (DPoS)' mechanism used in EOS and TRON works by:",
    options:["Everyone mining with GPUs", "A single bank approving transactions", "Token holders voting for a small group of delegates who validate the transactions", "Burning coins to create blocks"],
    answer: "Token holders voting for a small group of delegates who validate the transactions",
    explanation: "DPoS is faster than standard PoS because only a few elected nodes do the validating."
  },
  {
    id: "q260",
    question: "What makes a 'Private Blockchain' different from a traditional centralized database?",
    options:["It still uses cryptographic hashing and consensus (among approved nodes) to ensure data is tamper-resistant.", "It allows anyone on the internet to join.", "It does not use blocks.", "It allows users to easily delete past records."],
    answer: "It still uses cryptographic hashing and consensus (among approved nodes) to ensure data is tamper-resistant.",
    explanation: "Even though it's private and governed by one entity, the underlying data structure is still a secure, immutable chain of blocks."
  },
  {
    id: "q261",
    question: "Why is 'Fault Tolerance' a critical function of the Consensus Layer?",
    options:["It makes transactions faster.", "It keeps the blockchain functional and secure even if some nodes fail or act maliciously.", "It corrects human typing errors in smart contracts.", "It decreases energy consumption."],
    answer: "It keeps the blockchain functional and secure even if some nodes fail or act maliciously.",
    explanation: "The network survives as long as the honest nodes outnumber the faulty/malicious ones."
  },
  {
    id: "q262",
    question: "In the Infrastructure Layer, what are ASICs?",
    options:["Application Software in Cloud", "Special-purpose hardware machines designed specifically for highly efficient blockchain mining", "Artificial Smart Intelligent Contracts", "A type of network protocol"],
    answer: "Special-purpose hardware machines designed specifically for highly efficient blockchain mining",
    explanation: "Application-Specific Integrated Circuits (ASICs) are customized chips built only to mine crypto like Bitcoin."
  },
  {
    id: "q263",
    question: "When Alice sends 1 BTC to Bob, how do nodes verify that Alice actually has the funds and authorized the transfer?",
    options:["By calling Alice's bank", "By checking her Digital Signature and verifying the ledger history using her Public Key", "By asking Alice for an OTP", "By checking the MAC address of her computer"],
    answer: "By checking her Digital Signature and verifying the ledger history using her Public Key",
    explanation: "Asymmetric cryptography (Public/Private keys) completely secures ownership."
  },
  {
    id: "q264",
    question: "What is the primary role of 'Validators' in a Proof of Stake (PoS) network?",
    options:["To solve complex math puzzles using GPUs", "To propose and validate new blocks based on the amount of cryptocurrency they have locked up (staked)", "To write smart contracts", "To design UI for DApps"],
    answer: "To propose and validate new blocks based on the amount of cryptocurrency they have locked up (staked)",
    explanation: "Instead of miners burning electricity, validators put up their own money (stake) as collateral to guarantee they will act honestly."
  },
  {
    id: "q265",
    question: "An immutable record of a new vendor's details on a blockchain speeds up which Supply Chain process?",
    options:["Counterfeit Control", "Inventory Management", "Supplier Onboarding", "Automated Recalls"],
    answer: "Supplier Onboarding",
    explanation: "Once a vendor's credentials (KYC/compliance) are verified on the blockchain, any company in the network can trust them instantly."
  },
  {
    id: "q266",
    question: "Blockchain in the Insurance sector is primarily used for:",
    options:["Tracking game characters", "Transparent claim processing and using smart contracts to automate payouts", "Creating deepfakes", "Modifying patient history"],
    answer: "Transparent claim processing and using smart contracts to automate payouts",
    explanation: "E.g., if a flight is delayed, a smart contract connected to flight data automatically pays out flight insurance to the passenger."
  },
  {
    id: "q267",
    question: "What is 'Double Spending'?",
    options:["Paying twice the normal transaction fee", "A flaw where a digital currency can be spent twice, which blockchain's consensus mechanisms are designed to prevent", "Buying two different cryptocurrencies", "Using a hybrid blockchain"],
    answer: "A flaw where a digital currency can be spent twice, which blockchain's consensus mechanisms are designed to prevent",
    explanation: "Before blockchain, digital files could just be copy-pasted. Blockchain solves the double-spending problem."
  },
  {
    id: "q268",
    question: "Which type of node stores the entire blockchain history and independently validates every transaction?",
    options: ["Light Node", "SPV Node", "Full Node", "Gateway Node"],
    answer: "Full Node",
    explanation: "Full nodes enforce the rules of the network and don't rely on anyone else for verification."
  },
  {
    id: "q269",
    question: "The 'Ethereum Virtual Machine (EVM)' resides in which layer?",
    options:["Application Layer", "Consensus Layer", "Network Layer", "Contract Layer"],
    answer: "Contract Layer",
    explanation: "The EVM acts as a global computer that executes the compiled smart contract code."
  },
  {
    id: "q270",
    question: "In Blockchain, what does a 'Hash' function do?",
    options:["Converts digital data into analog waves", "Takes input data of any size and produces a fixed-size string of characters that acts as a unique digital fingerprint", "Translates English to Spanish", "Creates a public Wi-Fi network"],
    answer: "Takes input data of any size and produces a fixed-size string of characters that acts as a unique digital fingerprint",
    explanation: "SHA-256 (used in Bitcoin) always outputs a 256-bit hash. Even changing one comma in a document changes the entire hash."
  },
  {
    id: "q271",
    question: "What is the purpose of the 'Nonce' in a block?",
    options:["It is the name of the miner", "It is a list of smart contracts", "It is a random number added to the block data so that the resulting hash meets the difficulty target in PoW", "It is the signature of the receiver"],
    answer: "It is a random number added to the block data so that the resulting hash meets the difficulty target in PoW",
    explanation: "Miners constantly change the 'nonce' and re-hash the block until they find a hash that starts with the required number of zeros."
  },
  {
    id: "q272",
    question: "A major benefit of using a Consortium Blockchain over a Public Blockchain is:",
    options:["It is open to the entire world", "It has higher energy consumption", "Faster processing and privacy, as only limited, pre-approved nodes validate transactions", "It doesn't use cryptography"],
    answer: "Faster processing and privacy, as only limited, pre-approved nodes validate transactions",
    explanation: "Because validators are trusted entities (like 10 banks), they don't need slow PoW consensus."
  },
  {
    id: "q273",
    question: "How does blockchain help in 'Automated Compliance and Recalls' in the food industry?",
    options:["By cooking food automatically", "By quickly identifying the exact source and batch of contaminated food using an auditable record of transactions", "By replacing quality control inspectors", "By hiding the origin of bad food"],
    answer: "By quickly identifying the exact source and batch of contaminated food using an auditable record of transactions",
    explanation: "If E. coli is found in spinach, blockchain can trace it back to the exact farm in seconds, rather than days."
  },
  {
    id: "q274",
    question: "In gaming, what does 'Interoperability' of assets mean?",
    options:["Assets (like NFTs) can be moved and used across different games or metaverse platforms", "Games can run without an internet connection", "Players can hack the game", "Developers can delete players' items"],
    answer: "Assets (like NFTs) can be moved and used across different games or metaverse platforms",
    explanation: "Blockchain decouples the asset from the game server, allowing cross-platform usage."
  },
  {
    id: "q275",
    question: "Which feature of blockchain ensures that no single company controls the data in a supply chain network?",
    options:["Centralization", "Immutability", "Transparency", "Shared Governance / Decentralization"],
    answer: "Shared Governance / Decentralization",
    explanation: "Multiple stakeholders share trust and control, eliminating monopoly power over the data."
  },
  {
    id: "q276",
    question: "What is the primary function of 'Node Discovery' in the Network Layer?",
    options:["To find deleted files", "To help new nodes join the network and find other P2P peers to connect with", "To crack passwords", "To execute smart contracts"],
    answer: "To help new nodes join the network and find other P2P peers to connect with",
    explanation: "When you launch a Bitcoin node, it uses discovery protocols to find other nodes to download the ledger from."
  },
  {
    id: "q277",
    question: "Why is 'Transparency' sometimes considered a Data Privacy Concern (Challenge) in Public Blockchains?",
    options:["It hides the data", "Because all transaction details are visible to anyone, making it difficult to store sensitive personal information safely", "Because it causes network congestion", "Because it consumes too much electricity"],
    answer: "Because all transaction details are visible to anyone, making it difficult to store sensitive personal information safely",
    explanation: "You can't put unencrypted medical records on a public blockchain because everyone in the world could see them."
  },
  {
    id: "q278",
    question: "Which of the following best describes 'State Sponsored Hackers'?",
    options:["Novice hackers using scripts", "Security experts hired for testing", "Hackers employed by governments to conduct cyber warfare, often targeting crypto exchanges to bypass sanctions", "Hackers who hack for social justice"],
    answer: "Hackers employed by governments to conduct cyber warfare, often targeting crypto exchanges to bypass sanctions",
    explanation: "State-sponsored groups (like Lazarus Group) frequently attack blockchain bridges and exchanges to steal funds."
  },
  {
    id: "q279",
    question: "The technology that underpins Bitcoin is:",
    options:["Quantum Computing", "Immersive Technology", "Blockchain Technology", "5G Networking"],
    answer: "Blockchain Technology",
    explanation: "Bitcoin was the first successful implementation of a blockchain."
  },
  {
    id: "q280",
    question: "What is a 'Smart Contract' an alternative to in the real world?",
    options:["A physical computer", "A web browser", "Intermediaries like lawyers, escrow agents, and clearinghouses", "A database backup"],
    answer: "Intermediaries like lawyers, escrow agents, and clearinghouses",
    explanation: "Code is law. The smart contract acts as an incorruptible digital middleman."
  },
  {
    id: "q281",
    question: "In the context of Smart Contracts, what does 'Accuracy' refer to?",
    options:["The ability to guess user inputs", "The execution of actions exactly as coded, eliminating human errors in contract interpretation", "The speed of the network", "The ability to predict cryptocurrency prices"],
    answer: "The execution of actions exactly as coded, eliminating human errors in contract interpretation",
    explanation: "A smart contract will never misread a clause or make a typo when executing."
  },
  {
    id: "q282",
    question: "Which of the following describes 'Cross-Border Data Transfers' that is facilitated by Blockchain?",
    options:["Storing data on a local USB", "Allowing international transfer of personal/financial data seamlessly, which governments now seek to regulate", "Deleting all foreign data", "Blocking public access to information"],
    answer: "Allowing international transfer of personal/financial data seamlessly, which governments now seek to regulate",
    explanation: "Blockchain makes borders invisible, which is why regulatory frameworks are struggling to catch up."
  },
  {
    id: "q283",
    question: "'WebAssembly (WASM)' is a Virtual Machine technology used for contract execution in which advanced blockchain ecosystems?",
    options:["Bitcoin", "Litecoin", "Polkadot and Cosmos", "Dogecoin"],
    answer: "Polkadot and Cosmos",
    explanation: "WASM is a newer, highly efficient alternative to the Ethereum Virtual Machine (EVM) for smart contracts."
  },
  {
    id: "q284",
    question: "Which of the following blockchains is strictly intended to be a 'Private Blockchain' framework for enterprises?",
    options:["Ethereum", "Solana", "Bitcoin", "Hyperledger Fabric"],
    answer: "Hyperledger Fabric",
    explanation: "Hyperledger Fabric (Linux Foundation) requires permission to join, making it a private/consortium framework."
  },
  {
    id: "q285",
    question: "A system that uses 'Delegated Proof of Stake (DPoS)' trades a certain degree of _______ in exchange for faster transaction speeds.",
    options: ["Security", "Immutability", "Decentralization", "Transparency"],
    answer: "Decentralization",
    explanation: "Because only a small handful of 'delegates' validate transactions (instead of thousands of nodes), it is less decentralized."
  },
  {
    id: "q286",
    question: "What is the role of 'Cryptography' in Blockchain?",
    options:["To make the UI look visually appealing", "To compress video files", "To secure data within blocks, link blocks together via hashing, and authenticate users via digital signatures", "To increase the energy consumption"],
    answer: "To secure data within blocks, link blocks together via hashing, and authenticate users via digital signatures",
    explanation: "Without cryptography, the ledger would just be a standard, hackable database."
  },
  {
    id: "q287",
    question: "Which of the following statements about 'Nodes' is TRUE?",
    options:["Nodes are central servers owned by Google.", "Only miners are considered nodes.", "Every computer that participates in the network and holds a copy of the ledger is a node.", "Nodes are only found in Private blockchains."],
    answer: "Every computer that participates in the network and holds a copy of the ledger is a node.",
    explanation: "Nodes are the backbone of a P2P distributed network."
  },
  {
    id: "q288",
    question: "In Hybrid Blockchains, the public part ensures trust and auditability, while the private part ensures:",
    options:["Total global transparency", "Speed, security, and confidentiality of sensitive business data", "High energy consumption", "Lack of governance"],
    answer: "Speed, security, and confidentiality of sensitive business data",
    explanation: "A bank can verify a transaction occurred (public) without revealing who sent what amount to whom (private)."
  },
  {
    id: "q289",
    question: "Which of the following is NOT an advantage of Blockchain in Finance?",
    options:["Faster cross-border transactions", "Reduced costs by eliminating middlemen", "Improved security against fraud", "Centralized control by a single regulatory bank"],
    answer: "Centralized control by a single regulatory bank",
    explanation: "Blockchain in finance is defined by its decentralization."
  },
  {
    id: "q290",
    question: "What is a 'Wallet' in the context of Blockchain and Crypto?",
    options:["A physical leather purse", "A software program or hardware device that stores public and private keys and interacts with the blockchain to manage digital assets", "A smart contract that holds bank details", "A database of IP addresses"],
    answer: "A software program or hardware device that stores public and private keys and interacts with the blockchain to manage digital assets",
    explanation: "Wallets don't actually hold coins; they hold the keys that give you access to your coins on the blockchain."
  },
  {
    id: "q291",
    question: "'Digital Twins' in Industry 4.0 can be combined with Blockchain to:",
    options:["Play video games", "Securely track the lifecycle and maintenance records of a physical machine on an immutable ledger", "Generate deepfakes of factory workers", "Increase hardware costs"],
    answer: "Securely track the lifecycle and maintenance records of a physical machine on an immutable ledger",
    explanation: "A digital twin's data becomes 100% trustworthy if backed by a blockchain."
  },
  {
    id: "q292",
    question: "Why is 'Cost-Effective' considered a key feature of Smart Contracts?",
    options:["Because deploying them requires zero electricity", "Because cryptocurrencies are always free", "Because they reduce legal, administrative, and transaction costs by removing human middlemen", "Because they use analog hardware"],
    answer: "Because they reduce legal, administrative, and transaction costs by removing human middlemen",
    explanation: "You save money by not paying lawyer fees or escrow fees."
  },
  {
    id: "q293",
    question: "Which blockchain application allows content creators and developers to earn 'Royalties on Secondary Sales'?",
    options:["Supply Chain Tracking", "Clinical Trials", "Gaming and NFTs", "Medical Records"],
    answer: "Gaming and NFTs",
    explanation: "A smart contract can be coded so that every time a digital artwork (NFT) is resold, 10% automatically goes back to the original artist."
  },
  {
    id: "q294",
    question: "'Decentralized Marketplaces' in gaming allow players to:",
    options:["Only buy items from the game developer", "Delete other players' items", "Trade their owned assets on open, player-to-player markets without developer interference", "Hack the game code"],
    answer: "Trade their owned assets on open, player-to-player markets without developer interference",
    explanation: "True digital ownership means players govern the economy."
  },
  {
    id: "q295",
    question: "Which type of attack involves an attacker flooding a smart contract or network, though less common in robust blockchains due to gas fees?",
    options:["51% Attack", "DDoS (Distributed Denial of Service)", "Poisoning Attack", "Evasion Attack"],
    answer: "DDoS (Distributed Denial of Service)",
    explanation: "Attackers try to spam the network, but transaction fees (gas) usually make this too expensive to sustain on public blockchains."
  },
  {
    id: "q296",
    question: "'XinFin (XDC Network)' is cited as an example of which type of blockchain?",
    options: ["Pure Public", "Pure Private", "Hybrid Blockchain", "Legacy Database"],
    answer: "Hybrid Blockchain",
    explanation: "XinFin combines the power of public and private states."
  },
  {
    id: "q297",
    question: "In the flow of a transaction, what happens after a miner solves the cryptographic puzzle?",
    options:["The transaction goes to the mempool", "The user initiates the request", "The new block is added to the blockchain (Block Confirmation)", "The network deletes the block"],
    answer: "The new block is added to the blockchain (Block Confirmation)",
    explanation: "Solving the puzzle gives the miner the right to officially append the block to the chain."
  },
  {
    id: "q298",
    question: "Which of the following is an example of an application at the Application Layer of a blockchain?",
    options:["SHA-256 Hash", "Merkle Tree", "Uniswap (A Decentralized Exchange DApp)", "Proof of Work algorithm"],
    answer: "Uniswap (A Decentralized Exchange DApp)",
    explanation: "Uniswap is a user-facing application (DApp) that runs on top of Ethereum."
  },
  {
    id: "q299",
    question: "What does it mean when a blockchain network is 'Permissionless'?",
    options:["Anyone can connect to the network, read the ledger, and participate in consensus without needing approval from a central entity.", "Users need a password from an admin to view data.", "The network does not use cryptography.", "Transactions can be deleted at will."],
    answer: "Anyone can connect to the network, read the ledger, and participate in consensus without needing approval from a central entity.",
    explanation: "Bitcoin and Ethereum are open, permissionless networks."
  },
  {
    id: "q300",
    question: "The concept that 'All participants on a blockchain network can view the ledger, creating an auditable trail' is known as:",
    options:["Decentralization", "Immutability", "Transparency", "Automation"],
    answer: "Transparency",
    explanation: "Transparency ensures that everyone can verify the truth independently."
  },

  // ==========================================
  // UNIT 4: IMMERSIVE TECHNOLOGY & SUSTAINABLE COMPUTING
  // ==========================================
  { id: "q301", question: "Which immersive technology completely replaces the real world with a computer-generated 3D environment?", options:["Virtual Reality (VR)", "Augmented Reality (AR)", "Telepresence", "Haptic Technology"], answer: "Virtual Reality (VR)", explanation: "VR completely blocks out the physical world and immerses the user in a fully digital simulation." },
  { id: "q302", question: "In which technology do users wear headsets like the Oculus Quest or HTC Vive to look around in 360 degrees?", options:["Augmented Reality", "Extended Reality", "Virtual Reality", "FPV Drone Flight"], answer: "Virtual Reality", explanation: "VR requires dedicated enclosed headsets to block out reality." },
  { id: "q303", question: "Which technology enriches the real world by overlaying digital elements onto the physical environment in real-time?", options:["Virtual Reality", "Augmented Reality (AR)", "Telepresence", "FPV"], answer: "Augmented Reality (AR)", explanation: "AR 'augments' reality but does not replace it (e.g., viewing a 3D dinosaur on your physical desk via a smartphone screen)." },
  { id: "q304", question: "IKEA’s app allowing customers to see how digital furniture fits into their physical living room is an application of:", options: ["Virtual Reality", "Augmented Reality", "Haptic Technology", "Quantum Computing"], answer: "Augmented Reality", explanation: "AR places digital overlays onto a real-world camera feed." },
  { id: "q305", question: "How does Mixed Reality (MR) differ primarily from Augmented Reality (AR)?", options:["MR completely replaces the physical world.", "MR allows digital and physical objects to interact in real-time, and digital objects are anchored to the environment.", "MR only works on desktop computers.", "MR uses only audio, no visuals."], answer: "MR allows digital and physical objects to interact in real-time, and digital objects are anchored to the environment.", explanation: "In AR, the digital object just floats on the screen. In MR, a digital ball can bounce off a physical table." },
  { id: "q306", question: "Microsoft HoloLens is a prime example of hardware used for:", options:["VR", "Basic AR", "Mixed Reality (MR)", "Green Computing"], answer: "Mixed Reality (MR)", explanation: "HoloLens uses spatial mapping to understand the physical room, placing holographic objects that interact with real walls and tables." },
  { id: "q307", question: "What does the term 'XR' stand for?", options:["Extreme Reality", "Extra Reality", "Extended Reality", "External Reality"], answer: "Extended Reality", explanation: "XR is the umbrella term covering the entire spectrum: VR, AR, and MR." },
  { id: "q308", question: "Which of the following best describes the 'Umbrella Concept' of XR?", options:["It only focuses on fully virtual worlds.", "It only involves digital overlays on smartphones.", "It encompasses all immersive technologies blending real and virtual worlds at different levels of immersion.", "It relies solely on haptic suits."], answer: "It encompasses all immersive technologies blending real and virtual worlds at different levels of immersion.", explanation: "XR is the master category that includes VR, AR, and MR." },
  { id: "q309", question: "Which technology simulates the sense of touch, force, and vibration in digital interactions?", options: ["Telepresence", "FPV", "Haptic Technology", "Quantum Computing"], answer: "Haptic Technology", explanation: "Haptics provide tactile feedback, like a game controller vibrating or a medical simulator providing resistance against a scalpel." },
  { id: "q310", question: "A smartphone vibrating to alert you of a notification is a basic example of:", options:["Virtual Reality", "Haptic feedback", "Telepresence", "Augmented Reality"], answer: "Haptic feedback", explanation: "Any physical sensation generated by a device to communicate with the user is a form of haptics." },
  { id: "q311", question: "Which immersive technology aims to make a person feel as if they are physically present in a different location, bridging physical and digital communication?", options: ["Mixed Reality", "Virtual Reality", "Telepresence", "Quantum computing"], answer: "Telepresence", explanation: "Telepresence uses high-definition video, audio, and sometimes robotics so a doctor can feel present in a remote operating room." },
  { id: "q312", question: "A critical requirement for effective Telepresence to ensure smooth, natural conversations is:", options:["High carbon footprint", "High bandwidth delay", "Low latency", "Single-channel audio"], answer: "Low latency", explanation: "If latency is high, video and audio lag, destroying the illusion of 'being there'." },
  { id: "q313", question: "In FPV Drone Flight, what does 'FPV' stand for?", options:["Flight Point Verification", "Fully Programmable Vehicle", "First-Person View", "Fast Propeller Velocity"], answer: "First-Person View", explanation: "FPV lets the pilot see exactly what the drone's camera sees in real-time." },
  { id: "q314", question: "Most FPV racing drones are flown in 'Acro Mode'. What does this mean?", options:["The drone flies autonomously.", "It is manual control allowing maximum maneuverability and acrobatic tricks without auto-leveling.", "The drone automatically avoids obstacles using AI.", "The drone only hovers in one place."], answer: "It is manual control allowing maximum maneuverability and acrobatic tricks without auto-leveling.", explanation: "Acro mode removes software safety limits, giving the pilot 100% control over the drone's pitch and roll." },
  { id: "q315", question: "What hardware is essential for an immersive FPV Drone experience?", options:["A VR walking treadmill", "Haptic gloves", "FPV Goggles with low-latency video transmission", "A HoloLens"], answer: "FPV Goggles with low-latency video transmission", explanation: "FPV goggles put the pilot 'inside the cockpit' of the drone." },
  { id: "q316", question: "Using VR to rehearse complex surgical procedures before operating on a real patient is an application in:", options:["Retail", "Entertainment", "Healthcare", "Real Estate"], answer: "Healthcare", explanation: "VR surgical simulations allow risk-free practice for medical professionals." },
  { id: "q317", question: "'Virtual Try-On' applications that let customers see how makeup or sunglasses look on their face use:", options:["Virtual Reality", "Augmented Reality", "Telepresence", "FPV Drones"], answer: "Augmented Reality", explanation: "By looking at the smartphone selfie camera, AR overlays the makeup onto the user's live face." },
  { id: "q318", question: "'Digital Twins' visualized using XR headsets for remote factory maintenance belong to which application area?", options:["Education", "Entertainment", "Industry 4.0 / Manufacturing", "Sports & Fitness"], answer: "Industry 4.0 / Manufacturing", explanation: "Industry 4.0 relies on XR to overlay repair instructions and visualize digital twins of physical machinery." },
  { id: "q319", question: "Viewing a historically accurate, 3D reconstruction of the Colosseum while physically standing in its ruins is an example of:", options:["Haptic training", "FPV Racing", "AR-guided Tourism & Cultural Heritage", "Healthcare VR"], answer: "AR-guided Tourism & Cultural Heritage", explanation: "AR overlays the past onto the present physical location." },
  { id: "q320", question: "In Real Estate, allowing prospective buyers to walk through a completely digital model of an unbuilt apartment is an application of:", options:["Virtual Property Tours (VR)", "Telepresence", "Haptics", "Mixed Reality"], answer: "Virtual Property Tours (VR)", explanation: "Because the building doesn't physically exist yet, VR creates a fully simulated walkthrough." },
  { id: "q321", question: "Exposure therapy, where a patient is gradually exposed to their phobia in a safe, controlled digital environment, uses:", options:["Virtual Reality", "FPV Drones", "Telepresence", "Smart Contracts"], answer: "Virtual Reality", explanation: "VR tricks the brain into feeling the fear, while remaining physically safe in a therapist's office." },
  { id: "q322", question: "What is the primary goal of Green Computing (Green IT)?", options:["To paint all computer hardware green", "To increase the clock speed of processors", "To achieve energy efficiency, reduce e-waste, and minimize carbon footprint while maintaining high performance", "To use only open-source software"], answer: "To achieve energy efficiency, reduce e-waste, and minimize carbon footprint while maintaining high performance", explanation: "Green Computing focuses on the environmentally responsible design, use, and disposal of IT systems." },
  { id: "q323", question: "Which of the following is a direct environmental benefit of Green Computing?", options:["Reduced greenhouse gas emissions (Lower Carbon Footprint)", "Increased e-waste generation", "Higher utility bills", "Faster depletion of natural resources"], answer: "Reduced greenhouse gas emissions (Lower Carbon Footprint)", explanation: "Lowering power consumption directly reduces the burning of fossil fuels at power plants." },
  { id: "q324", question: "How do 'Low-power processors' achieve better energy efficiency?", options:["By constantly running at maximum speed", "By utilizing Dynamic Voltage and Frequency Scaling (DVFS) to adjust power usage based on workload", "By disabling the operating system", "By increasing heat generation"], answer: "By utilizing Dynamic Voltage and Frequency Scaling (DVFS) to adjust power usage based on workload", explanation: "DVFS slows down the processor and lowers voltage when the computer is idle, saving massive amounts of power." },
  { id: "q325", question: "In Green Computing, why are Solid-State Drives (SSDs) preferred over traditional Hard Disk Drives (HDDs)?", options:["SSDs are heavier.", "SSDs use spinning magnetic disks.", "SSDs contain no moving parts and consume significantly less power.", "SSDs generate more heat."], answer: "SSDs contain no moving parts and consume significantly less power.", explanation: "Because HDDs have physical spinning platters and moving read/write heads, they waste energy as friction and heat. SSDs are purely electronic." },
  { id: "q326", question: "What does 'Server Virtualization' achieve in a data center?", options:["It increases the number of physical servers needed.", "It allows multiple virtual machines to run on a single physical server, drastically reducing hardware and energy needs.", "It prevents remote access.", "It increases the physical space taken up by servers."], answer: "It allows multiple virtual machines to run on a single physical server, drastically reducing hardware and energy needs.", explanation: "Instead of 10 physical servers running at 10% capacity, virtualization puts 10 virtual servers on 1 physical machine running at 90% capacity, saving the power of 9 physical machines." },
  { id: "q327", question: "Consolidating lightly-utilized servers is a Green IT practice because:", options:["It creates more e-waste.", "It requires more cooling.", "It prevents underused servers from wasting energy while idle.", "It slows down network speed."], answer: "It prevents underused servers from wasting energy while idle.", explanation: "An idle server still consumes a massive amount of power. Consolidating workloads lets admins turn off unnecessary machines." },
  { id: "q328", question: "Which of the following is an 'Efficient Cooling' technique used in Green Data Centers?", options:["Placing servers in direct sunlight", "Using traditional home air conditioners", "Cold and hot aisle containment, free air cooling, and liquid cooling", "Increasing the voltage of processors"], answer: "Cold and hot aisle containment, free air cooling, and liquid cooling", explanation: "Containment prevents cold air from mixing with hot exhaust air, vastly improving AC efficiency." },
  { id: "q329", question: "What is 'Heat Recovery' in the context of Green Data Centers?", options:["Reusing waste heat generated by servers to heat nearby buildings or water supplies.", "Making servers run hotter to improve performance.", "Destroying old servers with fire.", "Using solar panels to generate heat."], answer: "Reusing waste heat generated by servers to heat nearby buildings or water supplies.", explanation: "Instead of venting hot exhaust air into the atmosphere, eco-friendly data centers pipe that heat into municipal heating systems." },
  { id: "q330", question: "Integrating solar and wind power into a data center to reduce reliance on fossil fuels is an application of:", options: ["Virtualization", "Liquid Cooling", "Renewable Energy", "DVFS"], answer: "Renewable Energy", explanation: "Using green energy sources drastically cuts the carbon footprint of massive cloud server farms." },
  { id: "q331", question: "E-waste (Electronic Waste) contains toxic materials that can harm the environment. Which of the following is a common toxic material found in e-waste?", options:["Silicon", "Copper", "Lead, mercury, cadmium, and arsenic", "Aluminum"], answer: "Lead, mercury, cadmium, and arsenic", explanation: "Improper disposal of old computers leaks heavy metals into the soil and groundwater." },
  { id: "q332", question: "What is the first step in the E-Waste Management process?", options:["Safe Disposal", "Dismantling", "Recycling & Recovery", "Collection (via e-waste bins or buy-back programs)"], answer: "Collection (via e-waste bins or buy-back programs)", explanation: "Before you can recycle electronics, you must gather them from consumers." },
  { id: "q333", question: "Extracting precious metals (like gold, silver, and copper) from old circuit boards is part of which e-waste step?", options:["Collection", "Sorting", "Recycling & Recovery", "Safe Disposal"], answer: "Recycling & Recovery", explanation: "Recovery 'mines' valuable materials from old tech so we don't have to mine them from the Earth." },
  { id: "q334", question: "Which principle encourages reuse, refurbishing, and sustainable production to keep electronics out of landfills?", options:["Quantum Interference", "Circular Economy", "Linear Economy", "Planned Obsolescence"], answer: "Circular Economy", explanation: "A circular economy aims to continually reuse materials, eliminating the concept of 'waste'." },
  { id: "q335", question: "If an organization repairs and resells old laptops rather than throwing them away, they are engaging in:", options: ["Evasion attacking", "Data center optimization", "Refurbishing", "Down-cycling"], answer: "Refurbishing", explanation: "Refurbishing extends the lifecycle of IT hardware, a core pillar of Green Computing." },
  { id: "q336", question: "The fundamental unit of quantum information is the:", options:["Byte", "Bit", "Qubit (Quantum Bit)", "Datagram"], answer: "Qubit (Quantum Bit)", explanation: "Classical computers use bits (0 or 1). Quantum computers use qubits." },
  { id: "q337", question: "Which principle allows a Qubit to exist as a 0, a 1, or both simultaneously?", options: ["Entanglement", "Superposition", "Interference", "Virtualization"], answer: "Superposition", explanation: "Superposition is what allows quantum computers to process a massive number of possibilities at the same time." },
  { id: "q338", question: "When two or more qubits become correlated, meaning the state of one instantly affects the other regardless of distance, this is called:", options:["Superposition", "Telepresence", "Entanglement", "Quantum Gates"], answer: "Entanglement", explanation: "Einstein called this 'spooky action at a distance.' It is crucial for quantum data transfer and processing." },
  { id: "q339", question: "In quantum computing, what is the purpose of 'Quantum Interference'?", options:["To crash the system", "To enhance correct results and cancel out incorrect paths in computations", "To block Wi-Fi signals", "To convert qubits into classical bits"], answer: "To enhance correct results and cancel out incorrect paths in computations", explanation: "Quantum algorithms use interference to amplify the probability of the correct answer and suppress wrong answers." },
  { id: "q340", question: "Classical computers use logic gates like AND/OR. What do quantum computers use to manipulate qubits?", options:["Transistors", "Relays", "Quantum Gates (e.g., Hadamard, CNOT, Pauli-X)", "Analog Switches"], answer: "Quantum Gates (e.g., Hadamard, CNOT, Pauli-X)", explanation: "Quantum gates change the state of qubits, putting them into superposition or entangling them." },
  { id: "q341", question: "Which of the following is a primary advantage of Quantum Computing over classical supercomputers?", options:["Ability to solve complex optimization and simulation problems exponentially faster", "Lower hardware costs", "Ability to run Windows 10 more efficiently", "Can be built easily at home"], answer: "Ability to solve complex optimization and simulation problems exponentially faster", explanation: "Quantum computers excel at problems with millions of variables, like modeling molecular structures or traffic." },
  { id: "q342", question: "In which industry is Quantum Computing poised to accelerate the design of new medications by simulating molecular interactions?", options:["Agriculture", "Logistics", "Finance", "Drug Discovery (Healthcare)"], answer: "Drug Discovery (Healthcare)", explanation: "Classical computers struggle to simulate large molecules. Quantum computers can simulate them perfectly, finding new cures rapidly." },
  { id: "q343", question: "How will Quantum Computing impact Cybersecurity?", options:["It will make passwords unnecessary.", "It will stop all physical theft.", "It threatens current encryption but also enables highly secure 'post-quantum cryptography' based on quantum mechanics.", "It will destroy all antivirus software."], answer: "It threatens current encryption but also enables highly secure \"post-quantum cryptography\" based on quantum mechanics.", explanation: "Quantum computers will easily crack modern RSA encryption, driving the need for new quantum-resistant algorithms." },
  { id: "q344", question: "Using quantum algorithms to enhance urban traffic flow and public transportation routing is an application in:", options:["Materials Science", "Climate Analysis", "Traffic Optimization / Logistics", "Drug Discovery"], answer: "Traffic Optimization / Logistics", explanation: "Optimizing the routes of 10,000 buses simultaneously is a classic optimization problem perfect for quantum processing." },
  { id: "q345", question: "'Simulating complex chemical processes to develop better, more efficient fertilizers' is a quantum computing application in:", options: ["Cybersecurity", "Finance", "Agriculture", "Entertainment"], answer: "Agriculture", explanation: "Fixing the energy-intensive Haber-Bosch process for making fertilizer is a major goal of quantum chemistry." },
  { id: "q346", question: "You are playing a video game where you feel the recoil of a digital gun through a wearable vest. This is a combination of VR and:", options:["FPV Drones", "Green Computing", "Haptic Technology", "Quantum Entanglement"], answer: "Haptic Technology", explanation: "The vest provides force/touch feedback (haptics) to the VR visual experience." },
  { id: "q347", question: "Which technology relies on 'Spatial Awareness' to properly anchor digital holograms?", options:["Traditional VR", "Mixed Reality (MR)", "5G Networks", "Server Virtualization"], answer: "Mixed Reality (MR)", explanation: "To make a digital ball bounce off a real table, the MR headset must spatially map the table's exact location." },
  { id: "q348", question: "An enterprise replaces 50 separate physical servers running at 10% capacity with 3 powerful servers running 50 virtual machines. This is called:", options:["E-waste Recycling", "Dynamic Voltage Scaling", "Server Virtualization & Consolidation", "Quantum Computing"], answer: "Server Virtualization & Consolidation", explanation: "Consolidation reduces hardware footprint, cooling requirements, and power draw." },
  { id: "q349", question: "Green Computing minimizes flaws in environmental policy by promoting:", options:["Planned obsolescence", "Corporate Social Responsibility (CSR) and Regulatory Compliance", "Increased power draw", "Heavy metal mining"], answer: "Corporate Social Responsibility (CSR) and Regulatory Compliance", explanation: "Companies adopting green IT improve their CSR reputation and comply with environmental laws." },
  { id: "q350", question: "What is the fundamental difference between an AR application and an MR application?", options:["AR requires a headset; MR uses a smartphone.", "In AR, digital objects just overlay the screen. In MR, digital objects integrate, anchor, and interact with the physical environment.", "MR is only used for gaming.", "There is no difference; they are identical."], answer: "In AR, digital objects just overlay the screen. In MR, digital objects integrate, anchor, and interact with the physical environment.", explanation: "MR is a more advanced, spatially aware version of AR." },
  { id: "q351", question: "Why is FPV Drone flight considered an 'Immersive Experience'?", options:["Because the drone flies itself.", "Because the pilot wears goggles showing the drone's live camera feed, making them feel like they are inside the drone.", "Because the drone uses quantum computing.", "Because the drone plays loud music."], answer: "Because the pilot wears goggles showing the drone's live camera feed, making them feel like they are inside the drone.", explanation: "The first-person view removes the pilot's awareness of the ground, immersing them in the flight." },
  { id: "q352", question: "Which e-waste recycling method involves breaking down devices into basic parts like plastics, metals, and circuit boards?", options:["Collection", "Dismantling", "Refurbishing", "Safe Disposal"], answer: "Dismantling", explanation: "Dismantling physically separates the device so different materials can go to their respective recycling streams." },
  { id: "q353", question: "'Post-Quantum Cryptography' refers to:", options:["Encryption methods that are easily broken by quantum computers.", "Physical locks on data centers.", "New cryptographic methods designed to be secure against the massive processing power of future quantum computers.", "Hiding passwords in e-waste."], answer: "New cryptographic methods designed to be secure against the massive processing power of future quantum computers.", explanation: "Since quantum computers will break traditional RSA/ECC encryption, post-quantum math is required." },
  { id: "q354", question: "In Telepresence, the integration of robotics allows a doctor to:", options:["Play games during surgery.", "Not only see and hear the remote patient, but also manipulate surgical tools remotely (Tele-surgery).", "Turn off the hospital's power.", "Experience VR without a headset."], answer: "Not only see and hear the remote patient, but also manipulate surgical tools remotely (Tele-surgery).", explanation: "Advanced telepresence combines low-latency video with robotic actuators." },
  { id: "q355", question: "Which Green Data Center practice ensures that hot exhaust air from servers does not mix with the cold air conditioning supply?", options:["Liquid Cooling", "Heat Recovery", "Hot/Cold Aisle Containment", "Server Virtualization"], answer: "Hot/Cold Aisle Containment", explanation: "Containment uses physical barriers to isolate airflows, massively increasing AC efficiency." },
  { id: "q356", question: "What does 'DVFS' stand for in energy-efficient hardware?", options:["Digital Virtual Frequency System", "Dynamic Voltage and Frequency Scaling", "Direct Voltage For Servers", "Data Verification and File System"], answer: "Dynamic Voltage and Frequency Scaling", explanation: "DVFS reduces processor power when idle to save energy." },
  { id: "q357", question: "Which immersive technology would be most appropriate for 'Maintenance Training' where a worker needs hands free?", options:["Fully enclosed VR Headset", "AR Glasses (Augmented Reality)", "FPV Drone", "Haptic Gloves only"], answer: "AR Glasses (Augmented Reality)", explanation: "VR would blind them to the real engine. AR glasses overlay the instructions while keeping hands free." },
  { id: "q358", question: "In Quantum Computing, a 'Hadamard Gate' is used to:", options:["Entangle two qubits.", "Delete data.", "Put a qubit into a state of superposition.", "Convert classical bits to hex."], answer: "Put a qubit into a state of superposition.", explanation: "The Hadamard gate is the most common quantum gate used to create superposition (a 50/50 probability of 0 or 1)." },
  { id: "q359", question: "Which of the following is NOT an objective of E-Waste Management?", options:["Conserving valuable resources like gold and copper", "Reducing environmental pollution from heavy metals", "Supporting a circular economy", "Increasing the size of landfills"], answer: "Increasing the size of landfills", explanation: "The goal is to reduce landfills, not increase them." },
  { id: "q360", question: "A VR headset tracks your head movements so the digital world moves when you look around. This characteristic is known as:", options:["Immersion", "Interactivity", "Telepresence", "Haptic feedback"], answer: "Interactivity", explanation: "Interactivity allows the user to look 360 degrees and manipulate the virtual environment." },
  { id: "q361", question: "Which advanced computing paradigm uses the principles of mechanics at the subatomic level?", options:["Cloud Computing", "Edge Computing", "Fog Computing", "Quantum Computing"], answer: "Quantum Computing", explanation: "Quantum mechanics (the physics of subatomic particles) powers quantum computing." },
  { id: "q362", question: "'Virtual Showrooms' where customers can explore 3D models of cars before buying is an application of immersive tech in:", options:["Defense & Military", "Retail & E-commerce", "Agriculture", "Logistics"], answer: "Retail & E-commerce", explanation: "XR allows customers to 'try before they buy' digitally." },
  { id: "q363", question: "Which component of e-waste is considered highly toxic and requires 'Safe Disposal' if it cannot be recycled?", options:["Copper wiring", "Gold pins", "Clean plastic", "Lead and Mercury from old screens/batteries"], answer: "Lead and Mercury from old screens/batteries", explanation: "Toxins must be treated properly so they don't poison the earth." },
  { id: "q364", question: "Why is Liquid Cooling becoming popular in modern Green Data Centers?", options:["It uses more electricity than fans.", "Water is safe to pour directly onto motherboards.", "Liquids are far more efficient at transferring heat away from high-density servers than air.", "It prevents quantum entanglement."], answer: "Liquids are far more efficient at transferring heat away from high-density servers than air.", explanation: "As servers get more powerful (like AI GPUs), air cooling isn't enough. Liquid cooling pipes absorb heat efficiently." },
  { id: "q365", question: "The concept of 'Climate Analysis' using Quantum Computing involves:", options:["Simulating complex molecular interactions to develop new carbon capture and storage solutions.", "Creating VR games about the weather.", "Putting temperature sensors on drones.", "Building bigger air conditioners for data centers."], answer: "Simulating complex molecular interactions to develop new carbon capture and storage solutions.", explanation: "Quantum computers can model atmospheric chemistry perfectly to invent new materials that absorb CO2." },
  { id: "q366", question: "A 'Digital Twin' is best described as:", options:["A deepfake video of a person.", "A real-time, highly accurate virtual model of a physical object, process, or system (often viewed via XR).", "A clone of a hard drive.", "A backup server."], answer: "A real-time, highly accurate virtual model of a physical object, process, or system (often viewed via XR).", explanation: "Digital twins (in Industry 4.0) use IoT sensor data to simulate a physical machine in VR/MR." },
  { id: "q367", question: "The 'Right to be Forgotten' under privacy laws directly challenges which blockchain feature, but is easily handled by which Green Computing practice?", options:["Decentralization; Liquid Cooling", "Immutability; Safe Data Destruction (E-waste)", "Smart Contracts; Telepresence", "Hashing; Virtualization"], answer: "Immutability; Safe Data Destruction (E-waste)", explanation: "Blockchain cannot delete data (Immutability). Green computing involves safely wiping and destroying old hard drives to protect privacy." },
  { id: "q368", question: "Which of the following describes 'Cinematic FPV'?", options:["Racing through obstacle courses", "Capturing smooth, immersive video footage for films and real estate using an FPV drone", "Flying a drone autonomously to map a farm", "Using a drone to drop bombs"], answer: "Capturing smooth, immersive video footage for films and real estate using an FPV drone", explanation: "Cinematic FPV uses smooth flying techniques to get beautiful video shots." },
  { id: "q369", question: "How does 'Optimization' in Green Data Centers utilize Artificial Intelligence?", options:["AI writes code for smart contracts.", "AI creates deepfakes of the facility.", "AI continuously monitors and adjusts power consumption and cooling based on real-time server workloads.", "AI physically dismantles old servers."], answer: "AI continuously monitors and adjusts power consumption and cooling based on real-time server workloads.", explanation: "AI acts as a smart thermostat for the entire data center, saving massive amounts of power." },
  { id: "q370", question: "Which of the following is an 'Economic & Business Benefit' of Green Computing?", options:["Increasing global warming", "Shorter hardware lifespans", "Cost savings through lower utility bills and enhanced corporate reputation", "Higher carbon footprint"], answer: "Cost savings through lower utility bills and enhanced corporate reputation", explanation: "Going green saves money on electricity and looks great for PR (Corporate Social Responsibility)." },
  { id: "q371", question: "What is the equivalent of parallel processing in Quantum?", options:["Edge Computing", "Hashing", "Superposition", "Virtualization"], answer: "Superposition", explanation: "Superposition allows a quantum computer to evaluate many possibilities simultaneously (parallelism)." },
  { id: "q372", question: "A major challenge of FPV Drone Flying is:", options:["The drone flies too slowly.", "Lack of video recording.", "The need for low-latency transmission; if the video lags, the pilot will crash.", "The goggles are too cold."], answer: "The need for low-latency transmission; if the video lags, the pilot will crash.", explanation: "FPV requires analog or high-end digital links with sub-20ms latency to fly safely." },
  { id: "q373", question: "'Combating Climate Change' is considered a __________ benefit of Green Computing.", options: ["Personal", "Economic", "Hardware", "Societal & Global"], answer: "Societal & Global", explanation: "Reducing IT emissions helps achieve global net-zero climate goals." },
  { id: "q374", question: "What is a required hardware component for true Virtual Reality (VR) immersion?", options:["A VR headset that blocks the real world.", "A transparent pane of glass.", "A standard keyboard.", "A drone."], answer: "A VR headset that blocks the real world.", explanation: "Immersion in VR relies on blocking peripheral vision of the real world using a headset." },
  { id: "q375", question: "'Financial Modeling' using Quantum Computing is used for:", options:["Creating cryptocurrencies.", "Optimizing financial portfolios, managing risk, and handling complex asset pricing at unprecedented speeds.", "Printing paper money.", "Bypassing the DPDP Act."], answer: "Optimizing financial portfolios, managing risk, and handling complex asset pricing at unprecedented speeds.", explanation: "Quantum computers can calculate millions of market variables instantly." },
  { id: "q376", question: "'VR battlefields to train soldiers in realistic scenarios' is an application in:", options:["Healthcare", "Retail", "Defense & Military", "Real Estate"], answer: "Defense & Military", explanation: "VR allows military personnel to train for combat without the physical dangers or ammunition costs." },
  { id: "q377", question: "Which e-waste recycling method involves passing still-functioning devices to other users, thereby extending their life cycle?", options:["Dismantling", "Safe Disposal", "Melting", "Reuse & Donation"], answer: "Reuse & Donation", explanation: "The greenest way to handle an old computer is to let someone else use it if it still works." },
  { id: "q378", question: "What does 'Real + Virtual Blend' define?", options:["Telepresence", "Augmented Reality (AR)", "Data Processing Layer", "Solid State Drives"], answer: "Augmented Reality (AR)", explanation: "AR blends the physical world with digital graphics." },
  { id: "q379", question: "What makes 'Quantum Interference' useful in a quantum algorithm?", options:["It amplifies the probability of measuring the correct answer and cancels out the wrong paths.", "It destroys the quantum computer.", "It prevents hackers from accessing the network.", "It cools the quantum processor down."], answer: "It amplifies the probability of measuring the correct answer and cancels out the wrong paths.", explanation: "Quantum algorithms are designed so that the correct answer constructively interferes (gets louder), while wrong answers destructively interfere." },
  { id: "q380", question: "A technology that allows users to feel the texture of a digital fabric in an e-commerce VR app is:", options:["FPV", "Telepresence", "Haptic Gloves", "Quantum Qubit"], answer: "Haptic Gloves", explanation: "Haptic gloves use micro-vibrations and resistance to simulate physical touch." },
  { id: "q381", question: "'Free air cooling' in a data center implies:", options:["Giving away air conditioners for free.", "Using naturally cool outside air to cool the servers instead of power-hungry mechanical chillers.", "Removing all fans from the servers.", "Using liquid nitrogen."], answer: "Using naturally cool outside air to cool the servers instead of power-hungry mechanical chillers.", explanation: "Data centers in cold climates just open the vents to let freezing outside air cool the servers for free." },
  { id: "q382", question: "Which of the following limits the immediate widespread use of Quantum Computers?", options:["They are too cheap.", "They use standard Windows OS.", "They are currently in the R&D phase, require extreme cooling (near absolute zero), and are highly prone to errors.", "They are slower than smartphones."], answer: "They are currently in the R&D phase, require extreme cooling (near absolute zero), and are highly prone to errors.", explanation: "Quantum states are incredibly fragile and require highly specialized, super-cooled environments to maintain coherence." },
  { id: "q383", question: "Using an AR app at a tourist site to view how a ruined castle looked 2,000 years ago is an application of XR in:", options:["Sports & Fitness", "Manufacturing", "Tourism & Cultural Heritage", "Corporate Training"], answer: "Tourism & Cultural Heritage", explanation: "AR reconstructs history visually over the actual physical location." },
  { id: "q384", question: "A 'Circular Economy' in Green IT opposes the traditional model of:", options:["Recycle, Reuse, Reduce", "Take, Make, Dispose (Linear Economy)", "Refurbish and Donate", "Energy Efficiency"], answer: "Take, Make, Dispose (Linear Economy)", explanation: "The traditional linear model creates massive waste. Circular keeps materials in use indefinitely." },
  { id: "q385", question: "In Telepresence, what is the role of 'Integration of robotics'?", options:["To attack enemy drones.", "To mine cryptocurrency.", "To allow the remote user to physically manipulate objects in the remote environment.", "To cool the data center."], answer: "To allow the remote user to physically manipulate objects in the remote environment.", explanation: "A robotic arm controlled by a doctor in New York can perform surgery on a patient in London." },
  { id: "q386", question: "Which technology is best for viewing an interactive 3D model of a human heart floating above a classroom desk?", options:["Virtual Reality (VR)", "FPV", "Mixed Reality / Augmented Reality", "Tele-surgery"], answer: "Mixed Reality / Augmented Reality", explanation: "Because the desk is visible (real world) and the heart is overlaid, it is AR/MR." },
  { id: "q387", question: "By switching from HDDs to SSDs, a company improves its Green Computing metrics because SSDs:", options:["Hold less data.", "Have no moving parts, dramatically reducing power consumption and heat.", "Are easily recycled into soil.", "Consume more voltage."], answer: "Have no moving parts, dramatically reducing power consumption and heat.", explanation: "Mechanical movement takes far more energy than electron movement." },
  { id: "q388", question: "'Freestyle FPV' flying is focused on:", options:["Flying as fast as possible in a straight line.", "Taking high-resolution photos of houses.", "Performing acrobatic tricks and maneuvers in open spaces.", "Carrying heavy cargo."], answer: "Performing acrobatic tricks and maneuvers in open spaces.", explanation: "Freestyle is an artistic, acrobatic form of drone flying." },
  { id: "q389", question: "The 'Collection' phase of E-Waste Management is often facilitated by:", options:["Landfills", "E-waste bins and manufacturer buy-back programs", "Incinerators", "Deepfake AI"], answer: "E-waste bins and manufacturer buy-back programs", explanation: "Buy-back programs ensure proper collection." },
  { id: "q390", question: "If a Qubit can be 0 and 1 at the same time, a system with 3 Qubits can exist in how many states simultaneously?", options:["3", "6", "8 (2^3)", "9"], answer: "8 (2^3)", explanation: "Quantum power scales exponentially. N qubits = 2^N simultaneous states." },
  { id: "q391", question: "Which immersive technology removes all physical visual and auditory inputs from the user?", options:["Augmented Reality", "Virtual Reality", "Telepresence", "Holograms"], answer: "Virtual Reality", explanation: "Total sensory replacement is the definition of VR." },
  { id: "q392", question: "Using MR headsets to guide technicians with step-by-step overlays during aircraft engine repair is an application in:", options:["Entertainment", "Retail", "Manufacturing & Industry 4.0", "Sports"], answer: "Manufacturing & Industry 4.0", explanation: "XR drastically reduces repair time and errors in complex industrial maintenance." },
  { id: "q393", question: "The practice of 'Sorting & Segregation' in e-waste management involves:", options:["Dumping everything into a river.", "Burning the plastic.", "Separating reusable, recyclable, and hazardous components.", "Formatting the hard drives."], answer: "Separating reusable, recyclable, and hazardous components.", explanation: "Batteries go one way, plastics another, and gold pins another." },
  { id: "q394", question: "What distinguishes 'Extended Reality (XR)' from VR, AR, and MR?", options:["XR uses quantum mechanics.", "XR only refers to the real world.", "XR is not a separate tech, but the umbrella term that covers VR, AR, and MR.", "XR is only for drones."], answer: "XR is not a separate tech, but the umbrella term that covers VR, AR, and MR.", explanation: "XR = VR + AR + MR." },
  { id: "q395", question: "Which Green Data Center technique involves transforming existing buildings and using recycled materials?", options:["Liquid Cooling", "Heat Recovery", "Sustainable Construction", "Server Virtualization"], answer: "Sustainable Construction", explanation: "Building the physical data center using eco-friendly materials is part of sustainable construction." },
  { id: "q396", question: "In Quantum Computing, classical logic gates (AND, OR) are replaced by:", options:["Transistors", "Neural Networks", "Subnets", "Quantum Gates (Hadamard, CNOT)"], answer: "Quantum Gates (Hadamard, CNOT)", explanation: "Quantum gates manipulate the probabilities and entanglements of qubits." },
  { id: "q397", question: "'Virtual Workplaces' where remote teams collaborate using digital avatars around a digital whiteboard use:", options: ["FPV", "E-waste recycling", "Agriculture sensors", "VR / XR Collaboration"], answer: "VR / XR Collaboration", explanation: "This replaces Zoom calls with feeling 'physically' present in a digital room." },
  { id: "q398", question: "Which of the following is a primary objective of the 'Dismantling' step in e-waste processing?", options:["Erasing software", "Selling the device whole", "Breaking down devices into base parts (plastics, metal, circuit boards) for specific recycling streams", "Burying the device"], answer: "Breaking down devices into base parts (plastics, metal, circuit boards) for specific recycling streams", explanation: "You can't recycle a phone whole; it must be shredded and separated by material." },
  { id: "q399", question: "'Traffic Optimization' using Quantum Computers aims to:", options:["Give every car a VR headset.", "Mine cryptocurrency at red lights.", "Enhance urban traffic flow and public transport routing through advanced real-time simulations.", "Increase fuel consumption."], answer: "Enhance urban traffic flow and public transport routing through advanced real-time simulations.", explanation: "Quantum algorithms can instantly calculate the fastest routes for millions of vehicles simultaneously." },
  { id: "q400", question: "In an FPV drone system, the component that transmits the live video to the pilot's goggles is the:", options:["Telepresence robot", "Quantum Gate", "SSD", "On-board Camera and Low-Latency Transmitter"], answer: "On-board Camera and Low-Latency Transmitter", explanation: "The camera captures the view, and the VTX sends it instantly to the goggles." },

  // ==========================================
  // UNIT 5: DIGITAL FORENSICS & ETHICAL HACKING
  // ==========================================
  { id: "q401", question: "What is the primary goal of Digital Forensics?", options:["To hack into competitor networks", "To delete evidence from a system", "To identify, collect, preserve, and analyze digital data to reconstruct events for legal proceedings", "To format hard drives safely"], answer: "To identify, collect, preserve, and analyze digital data to reconstruct events for legal proceedings", explanation: "Forensics provides scientifically sound and legally admissible evidence in a court of law." },
  { id: "q402", question: "Which key area of digital forensics involves the extraction of SMS, calls, and app data from tablets and smartphones?", options:["Network Forensics", "Cloud Forensics", "Mobile Device Forensics", "Database Forensics"], answer: "Mobile Device Forensics", explanation: "Mobile forensics targets portable smart devices, which are distinct from traditional PC hard drives." },
  { id: "q403", question: "Which digital forensics rule ensures that the evidence is proven to be exactly what it is claimed to be and hasn't been altered?", options: ["Admissibility", "Authenticity", "Reproducibility", "Minimal Handling"], answer: "Authenticity", explanation: "Authenticity proves the evidence is genuine." },
  { id: "q404", question: "What technique is specifically used to verify the 'Integrity Rule' of digital evidence?", options:["Taking a photograph of the screen", "Encrypting the hard drive with a password", "Using write-blockers and hash functions (like MD5, SHA-256)", "Changing the file extension"], answer: "Using write-blockers and hash functions (like MD5, SHA-256)", explanation: "Hashing generates a digital fingerprint. If the hash matches, the integrity is mathematically proven." },
  { id: "q405", question: "The 'Chain of Custody' rule requires investigators to:", options:["Maintain a continuous record of every person who has collected, accessed, stored, or transferred the evidence", "Lock the evidence in a safe and never touch it again", "Use physical chains to tie computers to a desk", "Delete the original file after copying it"], answer: "Maintain a continuous record of every person who has collected, accessed, stored, or transferred the evidence", explanation: "The Chain of Custody proves the evidence was never left unattended or tampered with." },
  { id: "q406", question: "Which rule dictates that the forensic process should yield the same results if performed by a different expert?", options: ["Legality Rule", "Completeness Rule", "Reproducibility Rule", "Minimal Handling Rule"], answer: "Reproducibility Rule", explanation: "Scientific evidence must be reproducible to be considered reliable in court." },
  { id: "q407", question: "What is the correct order of the first three steps in the digital forensics process?", options:["Collection -> Preservation -> Identification", "Preservation -> Identification -> Collection", "Identification -> Preservation -> Collection", "Examination -> Identification -> Collection"], answer: "Identification -> Preservation -> Collection", explanation: "You must first identify what to collect, then preserve the scene/device, and finally collect the data." },
  { id: "q408", question: "In the evidence handling process, why must investigators 'always work on copies, not the original data'?", options:["To save time", "To reduce the file size", "To Preserve Integrity and prevent accidental modification of the original evidence", "Because originals cannot be hashed"], answer: "To Preserve Integrity and prevent accidental modification of the original evidence", explanation: "Forensic images (bit-by-bit copies) are created, and the original device is locked away." },
  { id: "q409", question: "The DFRWS Model was proposed in which year?", options: ["2008", "2001", "2023", "2003"], answer: "2001", explanation: "The Digital Forensic Research Workshop (DFRWS) proposed this systematic framework in 2001." },
  { id: "q410", question: "Which of the following is NOT a phase in the DFRWS Model?", options:["Identification", "Preservation", "Event De-confliction", "Presentation"], answer: "Event De-confliction", explanation: "Event De-confliction is a phase in the EEDIP model, not DFRWS." },
  { id: "q411", question: "The ADFM was developed in 2002 to address gaps in the DFRWS model by adding which specific phases?", options:["Readiness and Deployment", "Physical and Digital Crime Scene Investigation", "Preparation, Approach Strategy, and Returning Evidence", "Event Normalization and Timeline Analysis"], answer: "Preparation, Approach Strategy, and Returning Evidence", explanation: "Reith, Carr & Gunsch added these three phases to make the model more comprehensive and legally robust." },
  { id: "q412", question: "How many phases are there in the Abstract Digital Forensics Model (ADFM)?", options:["5", "7", "9", "10"], answer: "9", explanation: "ADFM contains 9 sequential phases." },
  { id: "q413", question: "Which model was proposed by Carrier and Spafford in 2003 to integrate digital evidence handling with traditional physical crime investigations?", options:["DFRWS", "IDIP (Integrated Digital Investigation Process) Model", "EEDIP", "EMCI"], answer: "IDIP (Integrated Digital Investigation Process) Model", explanation: "IDIP integrates the 'Physical Crime Scene' and 'Digital Crime Scene' into one complete approach." },
  { id: "q414", question: "The first phase of the IDIP Model is 'Readiness'. What does it focus on?", options:["Searching the crime scene", "Preparing the organization and infrastructure (operational readiness) to support a digital investigation", "Reviewing the investigation", "Arresting the suspect"], answer: "Preparing the organization and infrastructure (operational readiness) to support a digital investigation", explanation: "Readiness means having the lab, tools, and trained staff prepared before a crime even occurs." },
  { id: "q415", question: "Which model operates on the principle of 'Source-to-Destination Focus,' tracing the path of an incident through a network?", options:["ADFM", "IDIP", "EEDIP (End to End Digital Investigation Process) Model", "EMCI"], answer: "EEDIP (End to End Digital Investigation Process) Model", explanation: "Stephenson's EEDIP model specifically focuses on tracing network attacks from the attacker's PC, through intermediate nodes, to the victim." },
  { id: "q416", question: "In the EEDIP model, what is 'Event Normalization'?", options:["Deleting irregular events", "Standardizing different data formats and events to allow for better comparison and analysis", "Putting the evidence in a physical locker", "Presenting the data to a judge"], answer: "Standardizing different data formats and events to allow for better comparison and analysis", explanation: "A firewall log and a Windows log look different. Normalization makes them speak the same language." },
  { id: "q417", question: "The Extended Model of Cybercrime Investigation (EMCI) was specifically designed to handle:", options:["Simple offline desktop hacking", "Employee attendance tracking", "The complexity of cybercrimes involving physical and digital evidence, multiple jurisdictions, and sophisticated offenders", "Updating software patches"], answer: "The complexity of cybercrimes involving physical and digital evidence, multiple jurisdictions, and sophisticated offenders", explanation: "Real-world cybercrimes span across multiple countries and jurisdictions, which EMCI addresses." },
  { id: "q418", question: "Why is UML (Unified Modeling Language) used in Digital Forensics?", options:["To encrypt evidence", "To generate passwords", "To provide a structured, understandable, and formalized graphical representation of the complex digital forensics workflow", "To hack into the target system"], answer: "To provide a structured, understandable, and formalized graphical representation of the complex digital forensics workflow", explanation: "UML diagrams make it easy for lawyers and techies to communicate the forensic process." },
  { id: "q419", question: "Which UML diagram would an investigator use to map out the step-by-step activities and decision points in a forensic process?", options:["Statechart Diagram", "Activity Diagram", "Deployment Diagram", "Use Case Diagram"], answer: "Activity Diagram", explanation: "Activity diagrams are like flowcharts showing the logical flow of the investigation." },
  { id: "q420", question: "Ethical hacking is defined as:", options:["The authorized practice of using hacking techniques to find and fix security vulnerabilities with the owner's permission", "Stealing data to sell to competitors", "Hacking government websites for political reasons", "Installing ransomware for financial gain"], answer: "The authorized practice of using hacking techniques to find and fix security vulnerabilities with the owner's permission", explanation: "Ethical hackers act as defenders (penetration testers) to secure systems proactively." },
  { id: "q421", question: "Which type of hacker maliciously exploits vulnerabilities for illegal purposes or financial gain?", options:["White Hat", "Gray Hat", "Black Hat", "Blue Hat"], answer: "Black Hat", explanation: "Black hats are cybercriminals." },
  { id: "q422", question: "A hacker who discovers a vulnerability without authorization but reports it to the owner operates in a moral gray area and is called a:", options:["Red Hat", "Gray Hat", "Green Hat", "Script Kiddie"], answer: "Gray Hat", explanation: "Gray hats don't have malicious intent, but they still break the law by hacking without permission." },
  { id: "q423", question: "Who are 'Red Hat Hackers'?", options:["Inexperienced beginners", "Security experts hired for software launches", "Vigilantes who actively target, attack, and disable black hat hackers' networks", "Government-employed cyber spies"], answer: "Vigilantes who actively target, attack, and disable black hat hackers' networks", explanation: "Red hats take the law into their own hands to destroy black hat infrastructure." },
  { id: "q424", question: "A teenager who uses pre-written tools like LOIC to launch a DDoS attack without understanding the underlying code is a:", options:["White Hat", "Blue Hat", "Script Kiddie", "State Sponsored Hacker"], answer: "Script Kiddie", explanation: "Script Kiddies lack technical depth and rely on scripts written by others." },
  { id: "q425", question: "Hackers who use their skills to advance a political or social agenda by disrupting websites are known as:", options: ["Script Kiddies", "Hacktivists", "Green Hats", "Blue Hats"], answer: "Hacktivists", explanation: "Groups like 'Anonymous' are classic examples of hacktivists." },
  { id: "q426", question: "AI-powered phishing scams are highly dangerous because they use algorithms to analyze public data and create messages that are:", options:["Full of spelling errors", "Hyper-personalized, contextually appropriate, and grammatically perfect", "Only sent via SMS", "Easily caught by traditional spam filters"], answer: "Hyper-personalized, contextually appropriate, and grammatically perfect", explanation: "AI eliminates the 'bad grammar' red flags that usually give away phishing emails." },
  { id: "q427", question: "What is a key indicator to detect AI-powered phishing?", options:["Perfect lip-syncing", "Sudden atypical request patterns (like wire transfers outside normal processes) or slight contextual errors in a timeline", "The email comes from a known colleague's actual desk", "The email contains no links"], answer: "Sudden atypical request patterns (like wire transfers outside normal processes) or slight contextual errors in a timeline", explanation: "While the grammar is perfect, the behavior or request is usually highly unusual." },
  { id: "q428", question: "'Ransomware 2.0' features 'Double Extortion'. What does this mean?", options:["The attacker demands payment in two different cryptocurrencies.", "The attacker steals sensitive data before encrypting it, threatening to publicly leak the data if the ransom isn't paid.", "The attacker encrypts the computer twice.", "The attacker attacks the user and the user's family."], answer: "The attacker steals sensitive data before encrypting it, threatening to publicly leak the data if the ransom isn't paid.", explanation: "Even if the victim has data backups, they are forced to pay to prevent a massive data breach." },
  { id: "q429", question: "What is 'RaaS' in the context of modern cybercrime?", options:["Recovery as a Service", "Ransomware-as-a-Service", "Routing as a Service", "Reconnaissance as a Service"], answer: "Ransomware-as-a-Service", explanation: "Elite hackers build the ransomware and rent it out to affiliates, taking a cut of the profits." },
  { id: "q430", question: "Which of the following is a common IoT Exploit resulting from manufacturers' negligence?", options:["Double Extortion", "WAF Bypass", "Shipping devices with easily guessable Weak/Default Passwords", "OS Downgrade"], answer: "Shipping devices with easily guessable Weak/Default Passwords", explanation: "Devices shipped with 'admin/admin' credentials are easily hijacked into botnets." },
  { id: "q431", question: "A compromised IoT device (like a smart camera) can be used to form a ________ to launch a Distributed Denial-of-Service (DDoS) attack.", options: ["Blockchain", "Botnet", "Cloud Server", "Deepfake"], answer: "Botnet", explanation: "A botnet is a zombie army of hijacked IoT devices used to flood a target website." },
  { id: "q432", question: "What technology uses Generative Adversarial Networks (GANs) and Autoencoders to create highly realistic but fake audio and video?", options:["Quantum Computing", "NGN Gateways", "Deep Fake Technology", "Server Virtualization"], answer: "Deep Fake Technology", explanation: "Deepfakes swap faces or clone voices, creating severe risks for misinformation and fraud." },
  { id: "q433", question: "The first stage of Operating System (OS) hacking, where the attacker passively or actively gathers information about the target, is:", options: ["Scanning", "Gaining Access", "Reconnaissance", "Covering Tracks"], answer: "Reconnaissance", explanation: "Reconnaissance is the information-gathering phase." },
  { id: "q434", question: "In OS Hacking, what is 'Privilege Escalation'?", options:["Deleting system logs", "Gaining higher-level access (like administrator or 'root') after initially breaching a system as a standard user", "Using a rainbow table", "Overloading the memory buffer"], answer: "Gaining higher-level access (like administrator or \"root\") after initially breaching a system as a standard user", explanation: "Hackers need root access to fully control the OS and install backdoors." },
  { id: "q435", question: "How does an 'OS Downgrade Attack' compromise a system?", options:["It upgrades the OS to a vulnerable beta version.", "It exploits update flaws to force a fully patched system to roll back to a previous, vulnerable version of the OS.", "It deletes the OS completely.", "It physically melts the hard drive."], answer: "It exploits update flaws to force a fully patched system to roll back to a previous, vulnerable version of the OS.", explanation: "By downgrading, the attacker disables modern security features like Virtualization-Based Security (VBS)." },
  { id: "q436", question: "Firmware-level exploits are particularly dangerous because:", options:["They only affect the web browser.", "They are easily deleted by standard antivirus software.", "They reside below the operating system, giving them extreme stealth and persistence even if the OS is reinstalled.", "They require physical access to the hard drive."], answer: "They reside below the operating system, giving them extreme stealth and persistence even if the OS is reinstalled.", explanation: "Firmware is the code embedded directly into the hardware chips." },
  { id: "q437", question: "In Application Hacking, what does 'WAF' stand for?", options:["Wireless Access Frequency", "Web Application Firewall", "Wide Area Framework", "Web API Function"], answer: "Web Application Firewall", explanation: "A WAF protects web applications by filtering and monitoring HTTP traffic." },
  { id: "q438", question: "An attacker uses 'Obfuscation and Encoding' to bypass a WAF. What does this achieve?", options:["It crashes the firewall hardware.", "It alters the payload's signature so the signature-based WAF doesn't recognize it as malicious.", "It changes the IP address of the attacker.", "It unplugs the server."], answer: "It alters the payload's signature so the signature-based WAF doesn't recognize it as malicious.", explanation: "Encoding turns obvious attack code into hex or URL-encoded strings that the firewall misses." },
  { id: "q439", question: "What is a 'Zero-Day Vulnerability'?", options:["A flaw that has been patched for zero days.", "A software or hardware flaw that is completely unknown to the vendor and the public, meaning no patch exists.", "An attack that takes zero seconds.", "A virus that deletes data on day zero."], answer: "A software or hardware flaw that is completely unknown to the vendor and the public, meaning no patch exists.", explanation: "The vendor has 'zero days' of head start to fix it because the attacker found it first." },
  { id: "q440", question: "Stuxnet (2010), which sabotaged Iranian nuclear facilities, is a famous example of an attack utilizing:", options:["Deepfakes", "Phishing", "Ransomware 2.0", "Multiple Zero-Day Exploits"], answer: "Multiple Zero-Day Exploits", explanation: "Stuxnet used several unknown Windows vulnerabilities to spread silently." },
  { id: "q441", question: "The National Cyber Security Policy (NCSP) was formulated by the Government of India in which year?", options:["2000", "2008", "2013", "2023"], answer: "2013", explanation: "NCSP 2013 is the foundational policy document for protecting India's cyberspace." },
  { id: "q442", question: "Which organization is established under the NCSP 2013 as the nodal agency for cyber incident response in India?", options:["NCIIPC", "CERT-In (Indian Computer Emergency Response Team)", "Supreme Court", "MHA"], answer: "CERT-In (Indian Computer Emergency Response Team)", explanation: "CERT-In handles all national cyber emergency responses." },
  { id: "q443", question: "One of the key features of the NCSP 2013 is Cybersecurity Workforce Development. What was its target?", options:["To create a workforce of 500,000 trained cybersecurity professionals in five years", "To train 1 million police officers", "To hire foreign hackers", "To replace IT workers with AI"], answer: "To create a workforce of 500,000 trained cybersecurity professionals in five years", explanation: "The policy recognized a massive skill gap in cybersecurity and aimed to train 5 Lakh professionals." },
  { id: "q444", question: "The Information Technology (IT) Act, enacted on 17th October 2000, was India's primary law dealing with:", options:["Real estate regulations", "Cybercrime and Electronic Commerce (e-commerce)", "Traffic laws", "Physical taxation"], answer: "Cybercrime and Electronic Commerce (e-commerce)", explanation: "It gave legal recognition to electronic transactions and digital signatures." },
  { id: "q445", question: "Under the IT Act 2000, which section provides compensation for unauthorized access or damage to computer systems?", options:["Section 43", "Section 66", "Section 67", "Section 70"], answer: "Section 43", explanation: "Section 43 dictates that if someone damages your system, they must pay you compensation." },
  { id: "q446", question: "Under the IT Act, 'Hacking a computer system' is punishable under which section?", options:["Section 43", "Section 66", "Section 66F", "Section 69"], answer: "Section 66", explanation: "Section 66 covers computer-related offenses (hacking) with up to 3 years in prison or ₹5 lakh fine." },
  { id: "q447", question: "Which major amendment was passed to address emerging threats like Cyber Terrorism and Child Pornography?", options:["DPDP Act 2023", "NCSP 2013", "IT (Amendment) Act 2008", "CCPWC 2018"], answer: "IT (Amendment) Act 2008", explanation: "The 2008 amendment massively expanded the IT Act to cover modern cybercrimes." },
  { id: "q448", question: "Under the IT (Amendment) Act 2008, 'Identity Theft' is covered under:", options:["Section 66A", "Section 66B", "Section 66C", "Section 66F"], answer: "Section 66C", explanation: "66C specifically targets identity theft and phishing." },
  { id: "q449", question: "'Violation of Privacy' (capturing, publishing, or transmitting images of a private area of any person without consent) is punishable under:", options:["Section 65", "Section 66D", "Section 66E", "Section 67B"], answer: "Section 66E", explanation: "Section 66E protects against voyeurism and privacy violations via electronic means." },
  { id: "q450", question: "Which section was introduced in 2008 specifically to define and punish 'Cyber Terrorism' with up to life imprisonment?", options:["Section 66C", "Section 66E", "Section 66F", "Section 69A"], answer: "Section 66F", explanation: "Section 66F targets acts threatening the unity, integrity, security, or sovereignty of India." },
  { id: "q451", question: "Section 67 of the IT Act deals with:", options:["Identity Theft", "E-Governance", "Publishing or transmitting obscene material in electronic form", "Hacking"], answer: "Publishing or transmitting obscene material in electronic form", explanation: "Section 67 carries a penalty of up to 5 years in prison for online obscenity." },
  { id: "q452", question: "Which section of the IT Act empowers the Government to 'Block public access to information' (block websites)?", options:["Section 65", "Section 66F", "Section 69", "Section 69A"], answer: "Section 69A", explanation: "Section 69A is famously used by the Indian Government to ban apps and websites that pose a security threat." },
  { id: "q453", question: "Which section, which punished sending 'offensive messages,' was famously struck down by the Supreme Court of India in 2015 for violating free speech?", options:["Section 66A", "Section 66C", "Section 67", "Section 70"], answer: "Section 66A", explanation: "Section 66A was deemed unconstitutional as it was too vague and infringed on Article 19(1)(a)." },
  { id: "q454", question: "Which section covers the unauthorized access to 'Protected Systems' (like Critical Information Infrastructure)?", options:["Section 66", "Section 69", "Section 70", "Section 72"], answer: "Section 70", explanation: "Hacking a normal PC falls under 66. Hacking a nuclear power plant's database falls under Section 70." },
  { id: "q455", question: "What is the DPDP Act 2023?", options:["A law banning cryptocurrencies", "A policy for deploying 5G", "India's first dedicated law for the Digital Personal Data Protection, regulating how organizations process personal data", "A law strictly for arresting hackers"], answer: "India's first dedicated law for the Digital Personal Data Protection, regulating how organizations process personal data", explanation: "DPDP replaced earlier, weaker data privacy rules, giving citizens control over their data." },
  { id: "q456", question: "In the DPDP Act 2023, individuals whose data is being collected are referred to as:", options:["Data Fiduciaries", "Data Processors", "Data Principals", "Data Guardians"], answer: "Data Principals", explanation: "You (the user) are the 'Principal'. The company collecting your data is the 'Fiduciary'." },
  { id: "q457", question: "Under the DPDP Act 2023, what is a primary obligation of a 'Data Fiduciary'?", options:["To sell data to the highest bidder", "To collect data without consent", "To ensure lawful, fair, and secure processing, purpose limitation, and data minimization", "To ignore children's data rules"], answer: "To ensure lawful, fair, and secure processing, purpose limitation, and data minimization", explanation: "Companies must only collect the exact data they need, keep it secure, and delete it when done." },
  { id: "q458", question: "The DPDP Act 2023 is known for imposing heavy monetary penalties for data breaches. What is the maximum penalty for serious breaches?", options:["₹10 Lakh", "₹5 Crore", "₹100 Crore", "Up to ₹250 Crore"], answer: "Up to ₹250 Crore", explanation: "The massive ₹250 Crore fine forces companies to take data security seriously." },
  { id: "q459", question: "Section 23 of the DPDP Act 2023 strictly regulates:", options:["Cross-border data transfer", "Misuse of children's personal data (requires parental consent, forbids tracking/targeted ads)", "Notice for consent", "The Data Protection Board"], answer: "Misuse of children's personal data (requires parental consent, forbids tracking/targeted ads)", explanation: "Companies cannot legally track or serve targeted ads to minors without explicit parental consent." },
  { id: "q460", question: "Which scheme was launched by the Ministry of Home Affairs in 2018 to tackle increasing cybercrimes specifically targeting vulnerable demographics?", options:["NCIIPC", "DPDP", "CCPWC (Cyber Crime Prevention against Women and Children)", "RaaS"], answer: "CCPWC (Cyber Crime Prevention against Women and Children)", explanation: "CCPWC provides funds for cyber labs and created the national reporting portal." },
  { id: "q461", question: "Under the CCPWC Scheme, which portal was established for citizens to report online crimes 24x7?", options:["www.cert-in.org.in", "www.cybercrime.gov.in", "www.mha.gov.in", "www.dpdp.gov.in"], answer: "www.cybercrime.gov.in", explanation: "The National Cyber Crime Reporting Portal is the direct result of the CCPWC scheme." },
  { id: "q462", question: "Which nodal body guides the implementation of the CCPWC Scheme?", options:["Supreme Court", "NCIIPC", "I4C (Indian Cyber Crime Coordination Centre)", "RBI"], answer: "I4C (Indian Cyber Crime Coordination Centre)", explanation: "The I4C was set up to be the central coordination hub for all cybercrime investigations in India." },
  { id: "q463", question: "Under the IT Act, Section 67B specifically deals with publishing or transmitting material depicting:", options:["Stolen Passwords", "Child Pornography (sexually explicit acts involving children)", "Cyber Terrorism", "Protected Systems"], answer: "Child Pornography (sexually explicit acts involving children)", explanation: "Section 67B carries severe penalties to protect minors online." },
  { id: "q464", question: "If a company fails to give proper 'Notice before taking consent' regarding how they will use your data, which section of the DPDP Act 2023 are they violating?", options: ["Section 18", "Section 5", "Section 33", "Section 11"], answer: "Section 5", explanation: "Section 5 mandates that the Fiduciary must clearly explain why they need your data before you click 'Agree'." },
  { id: "q465", question: "Under the DPDP Act 2023, if an individual (Data Principal) gives false information or files a frivolous grievance, they can be penalized up to:", options:["₹250 Crore", "₹1 Lakh", "₹10,000 (Under Section 33)", "Life imprisonment"], answer: "₹10,000 (Under Section 33)", explanation: "While companies face massive fines, users can also be fined ₹10,000 for misusing the grievance system." },
  { id: "q466", question: "What is the key difference between a 'White Hat Hacker' and a 'Blue Hat Hacker'?", options:["White hats hack illegally; Blue hats hack legally.", "White hats are usually internal or regular pen-testers; Blue hats are outside security experts specifically invited to test a system before it launches.", "Blue hats only attack IoT devices.", "There is no difference."], answer: "White hats are usually internal or regular pen-testers; Blue hats are outside security experts specifically invited to test a system before it launches.", explanation: "Blue Hat is a term often used by Microsoft for independent security experts invited to find bugs before a major release." },
  { id: "q467", question: "Which phase of the EEDIP model resolves discrepancies or contradictions between different pieces of digital evidence?", options:["Event Normalization", "Event De-confliction", "Timeline Analysis", "Corroboration"], answer: "Event De-confliction", explanation: "If Log A says the attack happened at 2 PM, and Log B says 3 PM, 'De-confliction' resolves this time zone discrepancy." },
  { id: "q468", question: "In digital forensics, why is 'Metadata Analysis' important during the Examination phase?", options:["It makes the file smaller.", "It reveals hidden information about a file, such as who created it, when it was modified, and GPS location.", "It deletes the file completely.", "It encrypts the file."], answer: "It reveals hidden information about a file, such as who created it, when it was modified, and GPS location.", explanation: "A photo might look normal, but its metadata (EXIF data) can prove exactly where and when the photo was taken." },
  { id: "q469", question: "A forensic investigator needs to search an entire hard drive for a specific deleted keyword without booting up the operating system. Which tool would they most likely use?", options:["Microsoft Word", "WhatsApp", "Specialized forensic tools like FTK (Forensic Toolkit), EnCase, or Autopsy", "Nmap"], answer: "Specialized forensic tools like FTK (Forensic Toolkit), EnCase, or Autopsy", explanation: "These tools can read the raw binary of a drive, finding deleted or hidden files." },
  { id: "q470", question: "What is 'Buffer Overflow' in OS Hacking?", options:["When a hacker steals a password", "When the Wi-Fi disconnects", "Overloading a system's memory buffer to cause a crash or execute malicious code, allowing the attacker to gain control", "Scanning the network for open ports"], answer: "Overloading a system's memory buffer to cause a crash or execute malicious code, allowing the attacker to gain control", explanation: "By sending too much data, the attacker overwrites adjacent memory spaces, often injecting their own executable code." },
  { id: "q471", question: "In the DPDP Act 2023, the right to 'Erasure' means:", options:["The government can erase your computer.", "Hackers can delete logs.", "A Data Principal can request a company to permanently delete their personal data.", "Data is erased automatically every 24 hours."], answer: "A Data Principal can request a company to permanently delete their personal data.", explanation: "Also known as the 'Right to be Forgotten.'" },
  { id: "q472", question: "Which IT Act Section deals with 'Cheating by personation using computer resources'?", options:["Section 43", "Section 66F", "Section 66D", "Section 67"], answer: "Section 66D", explanation: "Section 66D is highly relevant for modern social media phishing and online frauds." },
  { id: "q473", question: "In the EMCI (Extended Model of Cybercrime Investigation), what is a defining characteristic compared to older models?", options:["It addresses the complexity of modern cybercrimes that involve both physical and digital evidence across multiple jurisdictions.", "It only has 3 phases.", "It ignores digital evidence entirely.", "It is only used for hacking smartphones."], answer: "It addresses the complexity of modern cybercrimes that involve both physical and digital evidence across multiple jurisdictions.", explanation: "EMCI is built for reality—where a hacker in Russia attacks a server in the USA, affecting a physical factory in India." },
  { id: "q474", question: "Why is 'Targeting cloud services' a key characteristic of Ransomware 2.0?", options:["Because cloud servers cannot be encrypted.", "Because companies rely on cloud backups (like G Suite, Office 365) to recover from ransomware; attackers encrypt these to force payment.", "Because it speeds up the internet.", "Because the cloud is completely secure."], answer: "Because companies rely on cloud backups (like G Suite, Office 365) to recover from ransomware; attackers encrypt these to force payment.", explanation: "If the attacker encrypts both your PC and your cloud backup, you have no choice but to pay." },
  { id: "q475", question: "A 'Use Case Diagram' in UML modeling for Digital Forensics illustrates:", options:["The physical wiring of the hard drive.", "The state of the evidence changing from 'collected' to 'analyzed'.", "The high-level interactions between actors (like the investigator, lawyer) and the forensic system.", "The binary code of the malware."], answer: "The high-level interactions between actors (like the investigator, lawyer) and the forensic system.", explanation: "Use case diagrams show who does what with the system." },
  { id: "q476", question: "Which proximity sensor principle is used in sonar to detect objects?", options:["Capacitive", "Inductive", "Magnetic", "Ultrasonic"], answer: "Ultrasonic", explanation: "Ultrasonic sensors use sound waves, similar to submarine sonar." },
  { id: "q477", question: "In the context of Application Hacking, what is 'Behavioural and logical evasion' against a WAF?", options:["Sending a massive DDoS attack.", "Bypassing the firewall by mimicking human behavior or exploiting flaws in the firewall's own logic rather than sending obvious attack signatures.", "Unplugging the WAF hardware.", "Using a brute-force password dictionary."], answer: "Bypassing the firewall by mimicking human behavior or exploiting flaws in the firewall's own logic rather than sending obvious attack signatures.", explanation: "Modern WAFs look for 'bot' behavior. Attackers code their scripts to click and pause exactly like a human." },
  { id: "q478", question: "The 'Adjudication Mechanism' set up under the IT Act 2000 serves what purpose?", options:["To arrest hackers physically.", "To design new firewalls.", "To appoint Adjudicating Officers to resolve disputes and award penalties/compensation related to cyber offenses.", "To block websites."], answer: "To appoint Adjudicating Officers to resolve disputes and award penalties/compensation related to cyber offenses.", explanation: "Adjudicating Officers handle civil IT Act cases (like compensating for data theft under Sec 43)." },
  { id: "q479", question: "Section 72A of the IT Act (Amendment 2008) punishes:", options:["Hacking into military bases.", "Disclosure of personal information in breach of a lawful contract, causing wrongful gain or loss.", "Sending spam emails.", "Destroying hardware."], answer: "Disclosure of personal information in breach of a lawful contract, causing wrongful gain or loss.", explanation: "If a bank employee steals and sells customer data, they are violating Section 72A." },
  { id: "q480", question: "An attacker utilizes a 'Zero-Day Exploit' to breach a network. At what point does the vulnerability stop being a 'Zero-Day'?", options:["When the attacker deletes the malware.", "When the company reboots the server.", "When the software vendor discovers the flaw and releases a security patch (Patch Deployment).", "Exactly 24 hours after the attack."], answer: "When the software vendor discovers the flaw and releases a security patch (Patch Deployment).", explanation: "The 'Zero-Day Window' closes the moment a patch becomes available to the public." },
  { id: "q481", question: "In the DPDP Act 2023, what is the role of the 'Data Protection Board of India'?", options:["To store citizen data.", "To hack into foreign servers.", "To act as the regulatory body for enforcement, investigation, complaint redressal, and imposing penalties on companies.", "To issue digital signatures."], answer: "To act as the regulatory body for enforcement, investigation, complaint redressal, and imposing penalties on companies.", explanation: "The Board is the 'police' of the DPDP Act, ensuring Fiduciaries obey the law." },
  { id: "q482", question: "What is a 'Statechart Diagram' used for in UML modeling of forensics?", options:["To model the different states of digital evidence as it moves through the investigation (e.g., from 'preserved' to 'analyzed').", "To show the map of the crime scene.", "To list the passwords of the suspect.", "To show hardware connections."], answer: "To model the different states of digital evidence as it moves through the investigation (e.g., from 'preserved' to 'analyzed').", explanation: "Statecharts track the lifecycle state of a specific object (the evidence)." },
  { id: "q483", question: "Which digital forensics rule states that 'evidence should present the entire relevant story, not just fragments'?", options:["Admissibility", "Completeness", "Legality", "Integrity"], answer: "Completeness", explanation: "You cannot cherry-pick only the emails that make the suspect look guilty; you must present the complete context." },
  { id: "q484", question: "The establishment of 'NCIIPC' (National Critical Information Infrastructure Protection Centre) was a key feature of:", options:["IT Act 2000", "DPDP Act 2023", "National Cyber Security Policy (NCSP) 2013", "CCPWC 2018"], answer: "National Cyber Security Policy (NCSP) 2013", explanation: "NCSP 2013 created NCIIPC to protect vital national assets like power grids and banking networks." },
  { id: "q485", question: "An attacker uses 'Social Engineering' to deceive a user into revealing their password. This hacking technique is known as:", options: ["Buffer Overflow", "Privilege Escalation", "Phishing", "OS Downgrade"], answer: "Phishing", explanation: "Phishing manipulates human psychology rather than software code." },
  { id: "q486", question: "In Firmware Exploits, what does 'Code Analysis' involve?", options:["Rebooting the device.", "Extracting firmware from binary files to find sensitive credentials or hardcoded vulnerabilities.", "Changing the IP address.", "Injecting a backdoor."], answer: "Extracting firmware from binary files to find sensitive credentials or hardcoded vulnerabilities.", explanation: "The attacker downloads the firmware and reverse-engineers it to find secrets." },
  { id: "q487", question: "A major challenge in defending against Deepfakes is:", options:["They require zero computing power to make.", "Generative AI methods constantly improve, making it incredibly hard for detection tools or humans to tell the difference between real and fake.", "They are only available in black and white.", "They cannot be shared on social media."], answer: "Generative AI methods constantly improve, making it incredibly hard for detection tools or humans to tell the difference between real and fake.", explanation: "It is an arms race between AI generators and AI detectors." },
  { id: "q488", question: "In the IDIP forensic model, the 'Review' phase focuses on:", options:["Taking photos of the crime scene.", "Hashing the hard drive.", "Reviewing the entire investigation to identify areas for improvement and building better mechanisms for future cases.", "Putting the suspect in jail."], answer: "Reviewing the entire investigation to identify areas for improvement and building better mechanisms for future cases.", explanation: "Review is a post-incident phase to improve the forensic lab's overall efficiency." },
  { id: "q489", question: "Which section of the IPC (Indian Penal Code) works alongside the IT Act to criminalize 'Cyberstalking or online harassment of women'?", options:["Section 66C", "Section 69A", "Section 354D, IPC", "Section 43"], answer: "Section 354D, IPC", explanation: "IPC 354D specifically targets stalking, including digital/electronic stalking." },
  { id: "q490", question: "'Dishonestly receiving or retaining stolen computer resources or communication devices' is a crime under:", options:["Section 66A", "Section 66B", "Section 66F", "Section 67"], answer: "Section 66B", explanation: "If you knowingly buy a stolen laptop, you violate Section 66B." },
  { id: "q491", question: "Under the DPDP Act 2023, 'Legitimate Uses' means:", options:["Companies can use data for whatever they want.", "Certain situations where data processing is allowed without explicit consent (e.g., medical emergencies, government services).", "Using data to sell targeted ads to children.", "Allowing hackers to test the network."], answer: "Certain situations where data processing is allowed without explicit consent (e.g., medical emergencies, government services).", explanation: "If you are unconscious in a hospital, the hospital doesn't need your consent to access your medical records (Legitimate Use)." },
  { id: "q492", question: "What was the primary motivation behind the IT (Amendment) Act 2008?", options:["To address emerging cyber threats that weren't covered in 2000, like cyber terrorism, data theft, and e-commerce frauds.", "To ban the internet in India.", "To promote the use of floppy disks.", "To remove the requirement for digital signatures."], answer: "To address emerging cyber threats that weren't covered in 2000, like cyber terrorism, data theft, and e-commerce frauds.", explanation: "Technology evolved rapidly from 2000 to 2008, necessitating new laws for new crimes." },
  { id: "q493", question: "In Ethical Hacking, which stage comes immediately after 'Scanning' and involves exploiting the discovered vulnerabilities?", options: ["Reconnaissance", "Covering Tracks", "Gaining Access", "Maintaining Access"], answer: "Gaining Access", explanation: "Scanning finds the open door; Gaining Access is walking through it." },
  { id: "q494", question: "A forensic investigator needs to legally acquire digital evidence without alerting the suspect. They secure a search warrant. Which forensic rule are they satisfying?", options:["Authenticity", "Reproducibility", "Legality Rule", "Minimal Handling"], answer: "Legality Rule", explanation: "The Legality Rule ensures evidence isn't thrown out of court for violating the suspect's rights (like an illegal search)." },
  { id: "q495", question: "Which type of hacker is often described as a 'Novice who is still developing their technical skills'?", options:["Script Kiddie", "Red Hat", "Green Hat", "White Hat"], answer: "Green Hat", explanation: "Green hats are beginners who want to learn, unlike Script Kiddies who just want to cause chaos without learning." },
  { id: "q496", question: "In OS Hacking, what is the goal of 'Maintaining Access'?", options:["Logging out of the server immediately.", "Paying for a subscription.", "Installing backdoors, rootkits, or Trojans so the hacker can return easily even if the original vulnerability is patched.", "Deleting all files on the drive."], answer: "Installing backdoors, rootkits, or Trojans so the hacker can return easily even if the original vulnerability is patched.", explanation: "Attackers want a permanent, hidden entryway into the compromised system." },
  { id: "q497", question: "The 'Data Protection Board of India' (DPBI) was created by which legislation?", options:["IT Act 2000", "IT Amendment Act 2008", "NCSP 2013", "DPDP Act 2023"], answer: "DPDP Act 2023", explanation: "DPBI is the brand new regulatory authority specifically for data privacy." },
  { id: "q498", question: "If a cybercriminal intercepts an email and alters the bank account number inside it before it reaches the recipient, which principle of digital evidence has been violated?", options:["Legality", "Integrity", "Admissibility", "Chain of Custody"], answer: "Integrity", explanation: "Integrity means the data remains completely untouched and unmodified." },
  { id: "q499", question: "The 'Indian Cyber Crime Coordination Centre (I4C)' acts as the nodal body for coordinating investigations primarily under which scheme?", options:["Make in India", "CCPWC Scheme 2018 (Cyber Crime Prevention against Women and Children)", "Digital India", "Smart Cities Mission"], answer: "CCPWC Scheme 2018 (Cyber Crime Prevention against Women and Children)", explanation: "I4C provides the centralized intelligence and coordination for tackling cybercrimes nationwide." },
  { id: "q500", question: "Which digital forensics model is characterized by its 9 phases, specifically adding 'Preparation' and 'Approach Strategy'?", options:["DFRWS", "ADFM (Abstract Digital Forensics Model)", "IDIP", "EEDIP"], answer: "ADFM (Abstract Digital Forensics Model)", explanation: "Reith, Carr, & Gunsch (2002) added these phases to create the 9-step ADFM." }
];