export default function Writing() {
  return (
    <section id="writing" className="section section-alt">
      <div className="section-inner">
        <h2>How I think</h2>
        <p className="section-intro">
          I write about what I&apos;m actually building and learning — no manufactured inspiration, no
          productivity clichés.
        </p>
        <div className="writing-links">
          <a
            href="https://www.linkedin.com/in/sindhujaks/"
            target="_blank"
            rel="noopener"
            className="writing-card"
          >
            <span className="writing-platform">LinkedIn</span>
            <span className="writing-desc">Weekly — engineering leadership observations and the MaidLink build log</span>
            <span className="link-arrow-sm">→</span>
          </a>
          <a href="https://medium.com/@onvsindhu" target="_blank" rel="noopener" className="writing-card">
            <span className="writing-platform">Medium</span>
            <span className="writing-desc">Longer form — deeper dives into what I&apos;m building and why</span>
            <span className="link-arrow-sm">→</span>
          </a>
          <a href="https://github.com/sindhujaIBM" target="_blank" rel="noopener" className="writing-card">
            <span className="writing-platform">GitHub</span>
            <span className="writing-desc">Where the actual code lives</span>
            <span className="link-arrow-sm">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
