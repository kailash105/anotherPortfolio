export const projects = [
    {
        id: 1,
        title: "Agro Aura",
        desc: "AI-powered plant disease detection using CNN models for smart farming and sustainability.",
        img: "/projects/agro-aura.jpg",
        video: "/videos/Agro-Aura.mp4",
        slug: "agro-aura",
        bg: "#f8f4ec",
        // Details
        heroImg: "/projects/agro-aura.jpg",
        summary: "AI-powered wheat disease detection using CNN with a React frontend and Flask backend API. Built for precision agriculture automation.",
        techStack: ["TensorFlow", "ReactJS", "Flask", "Material UI", "Docker"],
        duration: "Aug 2024 - Sept 2024",
        role: "AI Developer & Frontend Engineer",
        keyPoints: [
            "Achieved 94% accuracy with CNN on plant disease datasets.",
            "Built Flask API for real-time predictions.",
            "Developed a ReactJS UI for smooth image upload and visualization.",
            "Deployed full system on cloud for real-time usage.",
        ],
        repo: "https://github.com/kailash105/agro-aura",
    },
    {
        id: 2,
        title: "AI Workflow Builder",
        desc: "Visual low-code AI workflow automation tool using GPT for chaining tasks and APIs.",
        img: "/projects/workflow-builder.png",
        slug: "ai-workflow-builder",
        bg: "#f3f3f3",
        // Details
        heroImg: "/projects/workflow-builder.png",
        summary: "AI Workflow Builder is a visual node-based pipeline editor built using React Flow and FastAPI. It allows users to design, connect, and configure nodes while validating pipeline structure through backend integration.",
        techStack: ["React", "Vite", "React Flow", "Python", "FastAPI", "Vanilla CSS"],
        duration: "2024",
        role: "Full Stack Developer",
        features: [
            {
                title: "Modular Node Architecture",
                description: "Easily create new node types using a reusable NodeShell and buildNode() system.",
                icon: "🔧"
            },
            {
                title: "Dynamic Text Nodes",
                description: "Automatically detect {{variables}} and generate handles for dynamic connections.",
                icon: "🧩"
            },
            {
                title: "Modern UI",
                description: "Clean React + Vite setup with unified styling for all node components.",
                icon: "🎨"
            },
            {
                title: "Backend Integration",
                description: "FastAPI backend checks if the node graph forms a valid Directed Acyclic Graph (DAG).",
                icon: "⚙️"
            },
            {
                title: "Real-time Updates",
                description: "Instant feedback when nodes or edges are changed and submitted.",
                icon: "🔁"
            }
        ],
        overview: "AI Workflow Builder demonstrates how a modular, abstract React Flow editor can integrate with a FastAPI backend to create, validate, and visualize intelligent node-based pipelines. It’s flexible, scalable, and easy to extend — perfect for workflow design, automation tools, or AI orchestration dashboards.",
        installation: `
1️⃣ Clone the Repository
\`\`\`bash
git clone https://github.com/kailash105/ai-workflow-builder.git
cd ai-workflow-builder
\`\`\`

2️⃣ Backend Setup (FastAPI)
\`\`\`bash
cd backend
python3 -m venv .venv
source .venv/bin/activate       # Windows: .venv\\Scripts\\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
\`\`\`
🟢 Backend running at: http://127.0.0.1:8000

3️⃣ Frontend Setup (React + Vite)
In a new terminal:
\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`
🟢 Frontend running at: http://localhost:5173
        `,
        howItWorks: [
            "Add and connect nodes visually in the React Flow canvas.",
            "Use the Text Node to type content with variables like {{input}}. → Left handles appear automatically for each variable.",
            "Click Submit Pipeline to send node/edge data to the FastAPI backend.",
            "Backend returns validation status (DAG check).",
            "The frontend displays the result in an alert or toast."
        ],
        keyPoints: [
            "Visual drag-and-drop interface for workflow creation.",
            "Integration with OpenAI API for text processing.",
            "Dynamic component generation using Next.js + Node.js.",
            "DAG validation using Kahn’s Algorithm."
        ],
        repo: "https://github.com/kailash105/ai-workflow-builder",
    },
    {
        id: 3,
        title: "AI Email Generator",
        desc: "LLM-powered email creation and auto-sending app.",
        img: "/projects/ai-email.jpg",
        slug: "ai-email",
        bg: "#e8eefc",
        // Details
        heroImg: "/projects/ai-email.jpg",
        summary: "A full-stack AI-powered email writing and sending platform. Users provide a prompt, an LLM generates the email, which can then be edited and sent directly to recipients.",
        techStack: ["ReactJS", "Node.js", "LLM APIs", "Nodemailer", "Next.js", "GPT-4"],
        duration: "July 2025",
        role: "Full Stack AI Developer",
        overview: "The AI Email Generator streamlines the process of drafting and sending emails. By leveraging powerful LLMs, it converts simple user prompts into professional email drafts. Users can then refine these drafts in a dedicated editor before hitting send—all from a single, unified interface.",
        features: [
            {
                title: "Prompt-to-Email",
                description: "Generate complete emails from simple text prompts using advanced LLM APIs.",
                icon: "✨"
            },
            {
                title: "In-Browser Editor",
                description: "Rich text editor to polish and customize the generated email content.",
                icon: "📝"
            },
            {
                title: "Direct Sending",
                description: "Integrated mailing service to send emails directly to recipients without switching tabs.",
                icon: "📤"
            },
            {
                title: "Contextual & Tonal Adjustment",
                description: "AI understands context and adjusts tone (formal, casual) based on user input.",
                icon: "🎨"
            }
        ],
        howItWorks: [
            "User enters a prompt describing the email context (e.g., 'Ask for a leave of absence' or 'Follow up on a project').",
            "The backend calls an LLM API (e.g., OpenAI, Groq) to generate a draft based on the prompt.",
            "The generated text appears in an editable text box for the user to review and modify.",
            "Once finalized, the user enters the recipient's address and clicks 'Send'.",
            "The backend uses Nodemailer to dispatch the email instantly."
        ],
        installation: `
1️⃣ Clone the Repository
\`\`\`bash
git clone https://github.com/praneeth135/AI-Email-APP.git
cd AI-Email-APP
\`\`\`

2️⃣ Backend Setup
\`\`\`bash
cd backend
npm install
# Configure .env with your LLM API keys and Email credentials
npm start
\`\`\`
🟢 Backend running on port 5000

3️⃣ Frontend Setup
\`\`\`bash
cd frontend
npm install
npm start
\`\`\`
🟢 Frontend running on localhost:3000
        `,
        keyPoints: [
            "Built an AI-powered email drafting assistant.",
            "Designed modular UI with authentication.",
            "Integrated OpenAI/Groq for automated response generation.",
            "Implemented direct email sending via Nodemailer."
        ],
        repo: "https://github.com/praneeth135/AI-Email-APP",
    },
    {
        id: 4,
        title: "Task Manager App",
        desc: "Beautiful React-based productivity dashboard with animations.",
        img: "/projects/taskmanager.jpg",
        slug: "task-manager",
        bg: "#f1f8f6",
        // Details
        heroImg: "/projects/taskmanager.jpg",
        summary: "A clean and minimal Task Manager built with React. Easily add, edit, complete, delete, and sort your tasks by due date and time — with smooth animations and a clean modern design.",
        techStack: ["React.js", "Framer Motion", "UUID", "Local Storage", "CSS"],
        duration: "April 2025",
        role: "Frontend Developer",
        overview: "This Task Manager App focuses on simplicity and user experience. It uses local storage to persist data, meaning your tasks are safe even if you refresh the page. With automatic sorting and visual cues for overdue tasks, it helps you stay on top of your schedule effortlessly.",
        features: [
            {
                title: "Task Management",
                description: "Add, edit, delete, and mark tasks as complete with ease.",
                icon: "✅"
            },
            {
                title: "Smart Sorting",
                description: "Tasks are automatically sorted by due date and time.",
                icon: "🔄"
            },
            {
                title: "Overdue Highlighting",
                description: "Overdue tasks are visually highlighted to grab attention.",
                icon: "⚠️"
            },
            {
                title: "Data Persistence",
                description: "All tasks are saved in LocalStorage, surviving page refreshes.",
                icon: "💾"
            },
            {
                title: "Smooth Animations",
                description: "Powered by Framer Motion for a fluid user experience.",
                icon: "✨"
            }
        ],
        howItWorks: [
            "Add your task name, due date, and due time.",
            "Tasks are automatically sorted by the nearest deadline.",
            "Completed tasks are crossed out visually.",
            "Overdue tasks are highlighted with color.",
            "Edit or delete any task at any time.",
            "All tasks are saved automatically to your browser's local storage."
        ],
        installation: `
1️⃣ Clone the repository
\`\`\`bash
git clone https://github.com/kailash105/Task-manager-WebApp
cd Task-manager-WebApp
\`\`\`

2️⃣ Install dependencies
\`\`\`bash
npm install react react-dom react-scripts uuid framer-motion
\`\`\`

3️⃣ Start the app
\`\`\`bash
npm start
\`\`\`
The app will open at http://localhost:3000/ 🚀
        `,
        keyPoints: [
            "Clean responsive UI design.",
            "Smooth animations with Framer Motion.",
            "Visual cues for overdue and completed tasks.",
            "Offline capability using LocalStorage."
        ],
        repo: "https://github.com/kailash105/task-manager",
    },
    {
        id: 5,
        title: "Law Bot - IPC Crime Analyzer",
        desc: "AI-powered legal assistant chatbot built for document summarization and law research.",
        img: "/projects/law-bot.jpg",
        slug: "law-bot",
        bg: "#fff",
        // Details
        heroImg: "/projects/law-bot.jpg",
        summary: "An AI-powered chatbot that identifies relevant Indian Penal Code (IPC) sections from crime descriptions using advanced ML models and semantic search.",
        techStack: ["React 18", "Flask", "Sentence Transformers", "OpenAI GPT", "Tailwind CSS"],
        duration: "October 2025",
        role: "AI Engineer & Full Stack Developer",
        overview: "Law Bot serves as an intelligent legal assistant, capable of analyzing crime descriptions in plain English and mapping them to specific IPC sections. It leverages deep learning for semantic understanding and LLMs for generating legal advice, making legal information more accessible.",
        features: [
            {
                title: "AI-Powered Analysis",
                description: "Uses ML models and LLMs to accurately identify relevant IPC sections from text.",
                icon: "🧠"
            },
            {
                title: "Semantic Search",
                description: "Sentence transformers enable context-aware search beyond simple keywords.",
                icon: "🔍"
            },
            {
                title: "Legal Suggestions",
                description: "Generates actionable legal advice and next steps for the user.",
                icon: "⚡"
            },
            {
                title: "Comprehensive Database",
                description: "Extensive collection of IPC sections with detailed punishments and descriptions.",
                icon: "📚"
            },
            {
                title: "Multiple Crime Detection",
                description: "Intelligent enough to process complex queries involving multiple offenses.",
                icon: "⚖️"
            }
        ],
        howItWorks: [
            "User describes an incident (e.g., 'Someone stole my bike').",
            "The system preprocesses the text and extracts keywords.",
            "Sentence transformers generate embeddings for semantic search against the IPC database.",
            "Relevant sections are retrieved and ranked by confidence score.",
            "An LLM (Gemini/GPT) enhances the output with legal advice and considerations.",
            "Results are displayed with detailed descriptions, punishments, and next steps."
        ],
        installation: `
1️⃣ Clone the repository
\`\`\`bash
git clone https://github.com/kailash105/LawBot_using_GeminiAPI
cd lawbot
\`\`\`

2️⃣ Backend Setup
\`\`\`bash
pip install -r requirements.txt
cp env.example .env 
# Add your GEMINI_API_KEY to .env
python app.py
\`\`\`
🟢 Backend running on http://localhost:5001

3️⃣ Frontend Setup
\`\`\`bash
npm install
npm run dev
\`\`\`
🟢 Frontend running on http://localhost:3000
        `,
        keyPoints: [
            "Advanced NLP with Sentence Transformers.",
            "Real-time inference with Flask backend.",
            "Modern React UI with Tailwind CSS.",
            "Integrated with Gemini/OpenAI for reasoning."
        ],
        repo: "https://github.com/kailash105/LawBot_using_GeminiAPI",
    },
    {
        id: 6,
        title: "LLM Prompt Optimizer",
        desc: "A tool to convert JSON data into TOON (Token-Oriented Object Notation) for optimized LLM usage.",
        img: "/projects/toon-generator.jpg",
        slug: "toon-generator",
        bg: "#e6f7ff",
        // Details
        heroImg: "/projects/toon-generator.jpg",
        summary: "A Python-based tool that converts traditional JSON data into TOON—a compact, token-efficient format designed to minimize token usage and API costs for Large Language Models.",
        techStack: ["Python", "FastAPI", "Streamlit", "Render", "LLM Optimization"],
        duration: "2025",
        role: "Full Stack Developer",
        overview: "TOON (Token-Oriented Object Notation) is a newer data representation format optimized for token efficiency. This project bridges JSON and TOON, making it easier for developers and AI systems to communicate with lower costs. It takes structured JSON input, converts it, and displays real-time cost savings.",
        features: [
            {
                title: "Instant Conversion",
                description: "Converts JSON structures into TOON format instantly.",
                icon: "⚡"
            },
            {
                title: "Cost Analysis",
                description: "Displays token savings and estimated API costs for popular OpenAI models.",
                icon: "💰"
            },
            {
                title: "Interactive UI",
                description: "Clean, interactive web interface built with Streamlit.",
                icon: "🖥️"
            },
            {
                title: "Live Deployment",
                description: "Hosted on Render (API) and Streamlit Cloud (UI) for public access.",
                icon: "🌐"
            }
        ],
        howItWorks: [
            "User pastes a JSON object into the input field.",
            "The backend processes the JSON and converts it to the token-efficient TOON format.",
            "The system calculates the number of tokens used by both formats.",
            "A comparison report displays the percentage of tokens saved and potential cost reduction."
        ],
        installation: `
This project is hosted live! You can check it out here:

🌐 **Frontend UI:** [Streamlit App](https://json-toon-convertor-b8r6vn4bim3cf6surhmbks.streamlit.app)
⚙️ **Backend API:** [Render URL](https://json-toon-convertor.onrender.com)

To run locally:
\`\`\`bash
git clone https://github.com/kailash105/JSON-TOON-Convertor
cd JSON-TOON-Convertor
pip install -r requirements.txt
streamlit run app.py
\`\`\`
        `,
        keyPoints: [
            "Reduces LLM token usage significantly.",
            "Built with FastAPI and Streamlit.",
            "Real-time cost estimation.",
            "Open for research and demonstration usage."
        ],
        repo: "https://github.com/kailash105/JSON-TOON-Convertor",
    },
    {
        id: 7,
        title: "Role-Based Auth System",
        desc: "Secure Role-Based Access Control authentication system with Next.js and MongoDB.",
        img: "/projects/rbac-system.jpg",
        slug: "nextjs-rbac",
        bg: "#f9f9f9",
        // Details
        heroImg: "/projects/rbac-system.jpg",
        summary: "A production-ready Next.js application featuring secure user authentication, role-based access control (RBAC), and role-specific dashboards for Clients, HR, and Admins.",
        techStack: ["Next.js", "MongoDB Atlas", "JWT", "Node.js", "Bcrypt"],
        duration: "2024",
        role: "Full Stack Developer",
        overview: "This project is a robust, secure authentication system designed for scalability. It implements a clear hierarchy of roles (Client, HR, Admin) with distinct permissions and dashboard views, powered by MongoDB Atlas and secure JWT sessions.",
        features: [
            {
                title: "Secure Authentication",
                description: "JWT-based auth with httpOnly cookies, password hashing, and session management.",
                icon: "🔐"
            },
            {
                title: "Role-Based Access",
                description: "Three distinct roles (Client, HR, Admin) with protected routes and specific permissions.",
                icon: "👥"
            },
            {
                title: "Dynamic Dashboards",
                description: "Customized dashboard views and features for each user role.",
                icon: "📊"
            },
            {
                title: "Contact System",
                description: "Built-in feature for Clients to contact HR personnel with history tracking.",
                icon: "🔗"
            }
        ],
        howItWorks: [
            "Users sign up and select a role (Client, HR, or Admin).",
            "Secure session cookies are issued upon login.",
            "Middleware checks user role and redirects to the appropriate dashboard.",
            "Clients can view HR lists and initiate contacts.",
            "HR sees incoming contact requests.",
            "Admins have full oversight of all users and activities."
        ],
        installation: `
1️⃣ Clone the repository
\`\`\`bash
git clone https://github.com/kailash105/nextjs-rbac-auth-system
cd nextjs-rbac-auth-system
\`\`\`

2️⃣ Install dependencies
\`\`\`bash
npm install
\`\`\`


4️⃣ Start Development Server
\`\`\`bash
npm run dev
\`\`\`
        `,
        keyPoints: [
            "Next.js App Router & API routes.",
            "Secure MongoDB Atlas integration.",
            "Scalable RBAC architecture.",
            "Comprehensive error handling."
        ],
        repo: "https://github.com/kailash105/nextjs-rbac-auth-system",
    }
];
