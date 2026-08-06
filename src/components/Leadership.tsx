export default function Leadership() {
  return (
    <section id="leadership" className="section">
      <div className="section-inner">
        <h2>What I bring to a team</h2>
        <div className="prose">
          <p>
            I&apos;ve spent 14 years in the room when things ship and when they don&apos;t. I&apos;ve built
            teams, set technical direction, managed delivery under pressure, and made the calls that
            don&apos;t have clean answers.
          </p>
          <p>
            The part that makes me unusual: I never stopped coding. Most engineering managers drift away
            from the code as they move into leadership. I stayed close to it by choice — because it makes
            me a better leader, a better reviewer, and a better judge of what&apos;s actually hard vs. what
            just sounds hard.
          </p>
          <p>
            Right now I&apos;m building a production AWS serverless application on Bedrock — solo, while
            co-running a startup. Shipping real agentic AI, not just talking about it. That&apos;s the proof.
          </p>
          <p>
            The rare part isn&apos;t any one piece of this on its own — it&apos;s the combination. I can
            architect the system, ship the AI feature, lead the team through it, and still explain the
            trade-off to a stakeholder in plain language.
          </p>
        </div>

        <div className="skills-row">
          <div className="skill-group">
            <h4>AI Engineering</h4>
            <ul>
              <li>AWS Bedrock · Amazon Nova · Claude API</li>
              <li>OpenAI API</li>
              <li>Agentic AI · multi-agent orchestration</li>
              <li>LLM provider evaluation (cost, privacy, deployability)</li>
            </ul>
          </div>
          <div className="skill-group">
            <h4>Cloud Architecture</h4>
            <ul>
              <li>AWS Serverless (Lambda, API Gateway, S3)</li>
              <li>DynamoDB · Aurora RDS · OpenSearch</li>
              <li>Auth0 · RBAC design</li>
              <li>CI/CD · DevOps practices</li>
            </ul>
          </div>
          <div className="skill-group">
            <h4>Engineering Leadership</h4>
            <ul>
              <li>Engineering management</li>
              <li>Team building & mentoring</li>
              <li>Technical roadmapping</li>
              <li>Cross-functional delivery</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
