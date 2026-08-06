import ArchitectureDiagram, { type DiagramStep } from "@/components/ArchitectureDiagram";

const CASE_1_STEPS: DiagramStep[] = [
  { kind: "box", node: { label: "Cold-called seller", sub: "→ live deal (OMS)" } },
  {
    kind: "parallel",
    nodes: [
      { label: "Buyer Probability Model", sub: "OpenAI · Lambda" },
      { label: "AVM", sub: "Automated Valuation" },
    ],
  },
  { kind: "box", node: { label: "Structured signals", sub: "→ outreach to likely buyers" } },
];

const CASE_2_STEPS: DiagramStep[] = [
  { kind: "box", node: { label: "Before: Unqork", sub: "No-code, per-seat licensing" } },
  { kind: "box", node: { label: "OMS", sub: "AppSync (GraphQL) + DynamoDB" } },
  { kind: "box", node: { label: "Data pipeline" } },
  { kind: "box", node: { label: "Transaction Manager", sub: "Lambda + Aurora RDS" } },
];

const CASE_3_STEPS: DiagramStep[] = [
  { kind: "box", node: { label: "Upload", sub: "→ S3 storage" } },
  { kind: "box", node: { label: "DynamoDB", sub: "metadata → Streams" } },
  { kind: "box", node: { label: "Lambda indexer", sub: "→ OpenSearch (VPC-only)" } },
  { kind: "box", node: { label: "3-tier RBAC", sub: "Auth0 gates every read/write" } },
];

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
          <ArchitectureDiagram id="case1" steps={CASE_1_STEPS} />
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
          <ArchitectureDiagram id="case2" steps={CASE_2_STEPS} />
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
          <ArchitectureDiagram id="case3" steps={CASE_3_STEPS} />
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
