const BOOKING_URL = "https://calendar.app.google/ua411DWJ9jirGPVp6";

export default function Connect() {
  return (
    <section id="connect" className="section section-connect">
      <div className="section-inner">
        <h2>Let&apos;s talk</h2>
        <p className="section-intro">
          Currently open to <strong>Staff AI Engineer</strong>, <strong>Applied AI Engineer</strong>,{" "}
          <strong>Forward Deployed Engineer</strong>, and <strong>Engineering Manager (AI)</strong>{" "}
          roles — remote, Canada or US. If what you&apos;ve read here matches what you&apos;re looking for,
          reach out directly.
        </p>
        <div className="connect-links">
          <a href="https://www.linkedin.com/in/sindhujaks/" target="_blank" rel="noopener" className="btn-primary">
            Connect on LinkedIn
          </a>
          <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn-primary">
            Book a call
          </a>
        </div>
        <p className="connect-note">
          Building MaidLink? Interested in what we&apos;re doing in Calgary?{" "}
          <a href="https://maidlink.ca" target="_blank" rel="noopener">
            Check out MaidLink →
          </a>
        </p>
      </div>
    </section>
  );
}
