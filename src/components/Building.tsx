export default function Building() {
  return (
    <section id="building" className="section section-alt">
      <div className="section-inner">
        <h2>What I&apos;m building</h2>
        <div className="card">
          <div className="card-header">
            <span className="card-tag">Active build</span>
            <h3>MaidLink</h3>
            <p className="card-sub">Two-sided marketplace for professional cleaning services · Calgary, CA</p>
          </div>
          <div className="prose">
            <p>
              The business exists and the app is live — real maids, real clients, real jobs.
              People are actively using it.
            </p>
            <p>
              The flagship feature is an <strong>AI Estimator</strong>: a client uploads photos
              of their space directly to S3 (Lambda never touches the bytes), and Amazon Nova Lite
              on Bedrock returns room-by-room time estimates, 1-cleaner and 2-cleaner hours, a full
              cleaning checklist, and coverage warnings if photos are incomplete.
            </p>
            <p>
              Cost per analysis: <strong>$0.0012</strong>. At 1,000 analyses/month: $1.20.
              Built on <strong>AWS Bedrock + Amazon Nova Lite</strong> on Lambda.
              Currently building a scheduling agent — agentic AI, not just generative.
            </p>
          </div>
          <div className="card-links">
            <a href="https://maidlink.app" target="_blank" rel="noopener" className="link-arrow">
              maidlink.app →
            </a>
            <a href="https://maidlink.ca" target="_blank" rel="noopener" className="link-arrow">
              maidlink.ca (app) →
            </a>
            <a
              href="https://www.linkedin.com/company/maidlinkcanada/"
              target="_blank"
              rel="noopener"
              className="link-muted"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="build-log-note">
          <p>I document the build publicly on LinkedIn — the real decisions, the tradeoffs, the mistakes.</p>
          <a href="https://www.linkedin.com/in/sindhujaks/" target="_blank" rel="noopener" className="link-arrow">
            Follow the build log →
          </a>
        </div>
      </div>
    </section>
  );
}
