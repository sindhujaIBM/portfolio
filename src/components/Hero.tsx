import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <Image
        src="/headshot.jpg"
        alt="Sindhuja Kali Srinivasan"
        width={104}
        height={104}
        className="hero-avatar"
        priority
      />
      <p className="hero-label">AI Engineer · Engineering Leader · Startup Founder</p>
      <h1>
        Still writing the code.
        <br />
        Still leading the team.
      </h1>
      <p className="hero-sub">
        14 years of software engineering. Currently co-founding MaidLink —
        a real business with real customers, and I&apos;m building the technology to scale it.
      </p>
      <div className="hero-actions">
        <a href="#connect" className="btn-primary">
          Open to work
        </a>
        <a href="#building" className="btn-secondary">
          See what I&apos;m building →
        </a>
      </div>
    </section>
  );
}
