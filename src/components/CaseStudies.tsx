export default function CaseStudies() {
  return (
    <section id="case-studies" className="section section-alt">
      <div className="section-inner">
        <h2>Three systems, three trade-offs</h2>
        <p className="section-intro">
          From Avenue One&apos;s deal-lifecycle rebuild — the kind of detail that only shows up when
          you actually built the thing.
        </p>

        <div className="card">
          <div className="card-header">
            <span className="card-tag">Case study 1</span>
            <h3>Buyer Probability Engine</h3>
            <p className="card-sub">AI wasn&apos;t on the roadmap when this shipped</p>
          </div>
          <div className="prose">
            <p>
              Avenue One needed a faster way to know which cold-called sellers were worth pursuing.
              Nobody asked for an AI solution — I built a working version in a week and showed the
              business team the output directly.
            </p>
          </div>
          <div className="flow-diagram">
            <div className="flow-step">Cold-called seller → live deal (OMS)</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">Buyer Probability Model (OpenAI · Lambda) + AVM — run in parallel</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">Structured signals → outreach to likely buyers</div>
          </div>
          <p className="case-outcome">
            Shipped to production on OpenAI. Now part of how every deal gets sourced.
          </p>
        </div>

        <div className="card">
          <div className="card-header">
            <span className="card-tag">Case study 2</span>
            <h3>Eliminating Unqork</h3>
            <p className="card-sub">No-code platform → serverless AWS</p>
          </div>
          <div className="prose">
            <p>
              Avenue One ran its entire deal lifecycle — sourcing through closing — on Unqork, an
              expensive, inflexible no-code platform. I owned re-architecting the two core systems
              onto AWS, arriving with no serverless background and a 60-day deadline.
            </p>
          </div>
          <div className="flow-diagram">
            <div className="flow-step">Before: Unqork (no-code, per-seat licensing)</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">OMS — AppSync (GraphQL) + DynamoDB</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">Data pipeline</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">Transaction Manager — Lambda + Aurora RDS</div>
          </div>
          <p className="case-outcome">
            OMS shipped in 70 days against a 60-day target. Combined with Transaction Manager,
            eliminating Unqork saved Avenue One roughly $650K/year.
          </p>
        </div>

        <div className="card">
          <div className="card-header">
            <span className="card-tag">Case study 3</span>
            <h3>DocHub — Inherited, Not Proposed</h3>
            <p className="card-sub">An abandoned AI-built codebase, handed over cold</p>
          </div>
          <div className="prose">
            <p>
              An engineer built the first version of DocHub with Claude, then left before anyone
              could run it — no documentation, no ERDs, no deployment notes. My manager handed it to
              me, offhand, in a meeting. I dug in, understood it, and rebuilt it.
            </p>
          </div>
          <div className="flow-diagram">
            <div className="flow-step">Upload → S3 (storage)</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">DynamoDB (metadata) → Streams</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">Lambda indexer → OpenSearch (metadata-only, VPC-only)</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">3-tier RBAC via Auth0 gates every read/write</div>
          </div>
          <p className="case-outcome">
            Shipped over 4.5 months, weekly stakeholder demos throughout. Replaced Box entirely —
            $50K–75K/year saved, 200K+ documents indexed, zero public endpoints. At the final demo:
            &quot;This is excellent.&quot; Shipped just before I was laid off in February 2026.
          </p>
        </div>
      </div>
    </section>
  );
}
