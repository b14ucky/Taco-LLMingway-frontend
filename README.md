# Taco LLMingway - Frontend

A sleek, minimalist web interface for an AI text generation model trained on the complete discography of Taco Hemingway. This application allows users to interact with the model, adjust creativity parameters, and watch the lyrics unfold in real-time.

## Features

- **Token Streaming**: Utilizes `ReadableStream` to display generated text live, token by token, creating a typewriter effect.
- **Precision Controls**: Full control over generation length (tokens) and creativity (temperature).
- **Vibe Presets**: Three distinct generation modes based on temperature:
    - **Cool Rationalist** (Low temp): Consistent and logical.
    - **Classic Storytelling** (Mid temp): The perfect balance of rhyme and reason.
    - **Warsaw Nightlife** (High temp): Abstract, chaotic, and metaphorical.
- **Responsive Design**: Built with Tailwind CSS 4, optimized for both mobile and desktop "night mode" aesthetics.
- **Internal Documentation**: A dedicated `/docs` page explaining model mechanics and prompt engineering.

## Tech Stack

- **Framework**: [Next.js 16+](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Deployment**: GitHub Actions (CD) + SSH/SCP to Nginx

## Project Structure

```bash
├── app/ # App Router logic
│ ├── \_components/ # Home page specific components
│ ├── docs/ # Model documentation & guides
│ └── globals.css # Tailwind 4 config & custom animations
├── components/ # Shared UI (Modals, Headers)
├── .github/workflows/ # CI/CD deployment pipeline
├── next.config.ts # Next.js static export configuration
└── package.json # Scripts and dependencies
```

## Getting Started

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/taco-llmingway-frontend.git
    cd taco-llmingway-frontend
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Run the development server**:

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to see the result.

4.  **Build for production**:
    ```bash
    npm run build
    ```
    The static files will be generated in the `/out` directory.

## API Integration

The frontend communicates with the LLM backend via the following endpoint:
`POST /api/stream`

**Payload Example:**

```json
{
	"starting_text": "Wracam ekspresem do Warszawy...",
	"n_iters": 256,
	"temperature": 0.7
}
```

## Continuous Deployment

This project uses a GitHub Actions workflow (`deploy.yml`) to automate the deployment process. Upon pushing to `main`:

1.  The app is built into static files.
2.  The existing build on the server is cleared.
3.  New files are uploaded via **SCP**.
4.  The **Nginx** service is reloaded.

_Required Secrets: `HOST`, `USERNAME`, `SSH_KEY`, `PORT`._

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
