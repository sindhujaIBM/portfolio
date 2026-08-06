export default function AIWork() {
  return (
    <section id="ai-work" className="section">
      <div className="section-inner">
        <h2>AI I&apos;ve actually shipped</h2>
        <p className="section-intro">
          Production systems, not slideware. Real constraints, real numbers.
        </p>
        <div className="repo-grid">
          <div className="repo-card">
            <div className="repo-card-header">
              <span className="repo-name">Buyer Probability Engine</span>
              <span className="repo-visibility">Avenue One</span>
            </div>
            <p className="repo-desc">
              OpenAI API on AWS Lambda, scoring real-estate acquisition targets in parallel with an
              automated valuation model. Nobody asked for this — I built it in a week and showed the
              business team the output directly.
            </p>
            <div className="repo-stack">
              <span>OpenAI API</span>
              <span>AWS Lambda</span>
            </div>
          </div>

          <div className="repo-card">
            <div className="repo-card-header">
              <span className="repo-name">DocHub</span>
              <span className="repo-visibility">Avenue One</span>
            </div>
            <p className="repo-desc">
              Inherited an abandoned, AI-generated document platform with zero handover. Rebuilt it
              into a VPC-only system indexing 200K+ real estate documents, metadata-first search via
              OpenSearch, RBAC via Auth0. Replaced Box entirely, saving $50K–75K/year.
            </p>
            <div className="repo-stack">
              <span>Claude</span>
              <span>S3</span>
              <span>DynamoDB</span>
              <span>OpenSearch</span>
            </div>
          </div>

          <div className="repo-card">
            <div className="repo-card-header">
              <span className="repo-name">AI Estimator</span>
              <span className="repo-visibility">MaidLink</span>
            </div>
            <p className="repo-desc">
              Amazon Bedrock + Nova Lite analyzes uploaded room photos and returns time estimates,
              cleaner-count recommendations, and a full checklist. $0.0012 per analysis.
            </p>
            <div className="repo-stack">
              <span>Bedrock</span>
              <span>Nova Lite</span>
              <span>Lambda</span>
            </div>
          </div>

          <div className="repo-card">
            <div className="repo-card-header">
              <span className="repo-name">HQ</span>
              <span className="repo-visibility">MaidLink</span>
            </div>
            <p className="repo-desc">
              Internal agent system coordinating estimator tasks. Evaluated four LLM providers on
              cost, privacy, and deployability before choosing Groq over the more familiar options.
            </p>
            <div className="repo-stack">
              <span>Groq</span>
              <span>Multi-agent</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
