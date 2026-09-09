export default function Code() {
  return (
    <section id="code" className="section">
      <div className="section-inner">
        <h2>Selected projects</h2>
        <p className="section-intro">Production work. Everything here is live or in active use.</p>
        <div className="repo-grid">
          <div className="repo-card">
            <div className="repo-card-header">
              <span className="repo-name">MaidLink</span>
              <span className="repo-visibility">Private Beta</span>
            </div>
            <p className="repo-desc">
              Full-stack agentic AI platform for MaidLink. AI Estimator uses AWS Bedrock + Amazon Nova
              Lite to analyze room photos and return time estimates at $0.0012/analysis. Sole engineer,
              live in production.
            </p>
            <div className="repo-stack">
              <span>TypeScript</span>
              <span>AWS Lambda</span>
              <span>Bedrock</span>
              <span>React</span>
              <span>Node.js</span>
            </div>
            <div className="repo-links">
              <a href="https://maidlink.ca" target="_blank" rel="noopener" className="link-arrow">
                Live app →
              </a>
            </div>
          </div>

          <div className="repo-card">
            <div className="repo-card-header">
              <span className="repo-name">Signal Agent</span>
              <span className="repo-visibility">Private</span>
            </div>
            <p className="repo-desc">
              Agentic pipeline that scans RSS news feeds, evaluates signals with Claude on Bedrock, drafts
              LinkedIn posts, and emails for approval before committing to a content repo. Fully automated,
              zero manual curation.
            </p>
            <div className="repo-stack">
              <span>TypeScript</span>
              <span>Claude API</span>
              <span>Node.js</span>
              <span>AWS Lambda</span>
            </div>
            <div className="repo-links">
              <a href="https://github.com/sindhujaIBM" target="_blank" rel="noopener" className="link-arrow">
                GitHub profile →
              </a>
            </div>
          </div>

          <div className="repo-card">
            <div className="repo-card-header">
              <span className="repo-name">Library Management System</span>
              <span className="repo-visibility">Public</span>
            </div>
            <p className="repo-desc">
              AI-powered library management system on AWS serverless. Members borrow, hold, and get AI book
              recommendations via Amazon Nova. Librarians get an admin dashboard with AI loan analytics
              (Claude Haiku), scheduled background agents for overdue detection and demand signals, and a
              human-approval queue before any consequential action fires.
            </p>
            <div className="repo-stack">
              <span>React</span>
              <span>TypeScript</span>
              <span>AWS Lambda</span>
              <span>Bedrock</span>
              <span>OpenSearch</span>
              <span>EventBridge</span>
            </div>
            <div className="repo-links">
              <a
                href="https://d360m6tattqe2h.cloudfront.net/"
                target="_blank"
                rel="noopener"
                className="link-arrow"
              >
                Live app →
              </a>
              <a
                href="https://github.com/sindhujaIBM/library-management-system"
                target="_blank"
                rel="noopener"
                className="link-muted"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="repo-card">
            <div className="repo-card-header">
              <span className="repo-name">Subcontractor Compliance Tracker</span>
              <span className="repo-visibility">Public</span>
            </div>
            <p className="repo-desc">
              Construction-compliance prototype built for a Founding Product Engineer take-home
              assessment (inspired by Tough Leaf&apos;s ClearComply concept). Compliance managers track
              subcontractor certificates of insurance, workers&apos; comp, and EMR expiration; AWS Bedrock
              (Claude Haiku) extracts structured data from uploaded documents. Two roles: compliance
              manager and subcontractor portal.
            </p>
            <div className="repo-stack">
              <span>React</span>
              <span>TypeScript</span>
              <span>Vite</span>
              <span>AWS Lambda</span>
              <span>DynamoDB</span>
              <span>Bedrock</span>
            </div>
            <p className="repo-demo">
              Demo (synthetic data) — Compliance Manager: <code>compliance</code> /{" "}
              <code>ClearComply2026!</code> at <code>/login</code> · Subcontractor Portal:{" "}
              <code>apex-electrical</code> / <code>Passw0rd!</code> at <code>/sub-portal/login</code>
            </p>
            <div className="repo-links">
              <a
                href="https://ds4wgujh68dua.cloudfront.net/"
                target="_blank"
                rel="noopener"
                className="link-arrow"
              >
                Live app →
              </a>
              <a
                href="https://github.com/sindhujaIBM/subcontractor-compliance-tracker"
                target="_blank"
                rel="noopener"
                className="link-muted"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="repo-card">
            <div className="repo-card-header">
              <span className="repo-name">LinkedIn MCP Server</span>
              <span className="repo-visibility">Public</span>
            </div>
            <p className="repo-desc">
              Published MCP (Model Context Protocol) server that lets an AI agent post, comment, and
              read analytics on LinkedIn — for a personal profile or a company page. Credentials come
              from a .env file, not hardcoded accounts; each tool takes a generic profile or company
              role. Auto-crawled and scored 4.1/5 by Glama, an MCP server directory, with perfect
              marks on tool-naming clarity, tool-purpose disambiguation, and right-sized scope.
            </p>
            <div className="repo-stack">
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>MCP SDK</span>
            </div>
            <p className="repo-demo">
              Install: <code>npm install -g @sindhujaks/linkedin-mcp</code>
            </p>
            <div className="repo-links">
              <a
                href="https://github.com/sindhujaIBM/linkedin-mcp"
                target="_blank"
                rel="noopener"
                className="link-arrow"
              >
                GitHub →
              </a>{" "}
              <a
                href="https://www.npmjs.com/package/@sindhujaks/linkedin-mcp"
                target="_blank"
                rel="noopener"
                className="link-muted"
              >
                npm
              </a>{" "}
              <a
                href="https://glama.ai/mcp/servers/sindhujaIBM/linkedin-mcp"
                target="_blank"
                rel="noopener"
                className="link-muted"
              >
                Glama (4.1/5)
              </a>
            </div>
          </div>
        </div>
        <div className="build-log-note" style={{ marginTop: "1.5rem" }}>
          <p>Most production work lives in private repos. Public repos and contributions at github.com/sindhujaIBM.</p>
          <a
            href="https://github.com/sindhujaIBM?tab=repositories"
            target="_blank"
            rel="noopener"
            className="link-arrow"
          >
            View GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
