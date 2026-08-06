import type { ReactNode } from "react";

type DiagramNode = { label: string; sub?: string };
type DiagramStep =
  | { kind: "box"; node: DiagramNode }
  | { kind: "parallel"; nodes: [DiagramNode, DiagramNode] };

const BOX_H = 58;
const STEP_GAP = 40;
const PAD = 10;
const VIEW_W = 340;
const FULL_W = 300;
const FULL_X = 20;
const PAR_W = 150;
const PAR_GAP = 20;
const LEFT_X = 10;
const RIGHT_X = LEFT_X + PAR_W + PAR_GAP;
const CENTER_X = FULL_X + FULL_W / 2;
const LEFT_CENTER_X = LEFT_X + PAR_W / 2;
const RIGHT_CENTER_X = RIGHT_X + PAR_W / 2;

const LINE = "var(--text-muted)";
const BOX_FILL = "var(--bg)";
const BOX_STROKE = "var(--border)";

function renderBox(x: number, y: number, w: number, node: DiagramNode, key: string): ReactNode {
  return (
    <g key={key}>
      <rect x={x} y={y} width={w} height={BOX_H} rx={8} fill={BOX_FILL} stroke={BOX_STROKE} strokeWidth={1.5} />
      <foreignObject x={x} y={y} width={w} height={BOX_H}>
        <div className="diagram-box-content">
          <div className="diagram-box-label">{node.label}</div>
          {node.sub ? <div className="diagram-box-sub">{node.sub}</div> : null}
        </div>
      </foreignObject>
    </g>
  );
}

function renderConnector(
  step: DiagramStep,
  next: DiagramStep,
  y1: number,
  y2: number,
  markerId: string
): ReactNode {
  const midY = y1 + (y2 - y1) / 2;
  const marker = `url(#${markerId})`;

  if (step.kind === "box" && next.kind === "box") {
    return <path d={`M ${CENTER_X} ${y1} L ${CENTER_X} ${y2}`} stroke={LINE} strokeWidth={1.5} fill="none" markerEnd={marker} />;
  }

  if (step.kind === "box" && next.kind === "parallel") {
    return (
      <g>
        <path
          d={`M ${CENTER_X} ${y1} L ${CENTER_X} ${midY} L ${LEFT_CENTER_X} ${midY} L ${LEFT_CENTER_X} ${y2}`}
          stroke={LINE}
          strokeWidth={1.5}
          fill="none"
          markerEnd={marker}
        />
        <path
          d={`M ${CENTER_X} ${y1} L ${CENTER_X} ${midY} L ${RIGHT_CENTER_X} ${midY} L ${RIGHT_CENTER_X} ${y2}`}
          stroke={LINE}
          strokeWidth={1.5}
          fill="none"
          markerEnd={marker}
        />
      </g>
    );
  }

  // parallel -> box (merge)
  return (
    <g>
      <path
        d={`M ${LEFT_CENTER_X} ${y1} L ${LEFT_CENTER_X} ${midY} L ${CENTER_X} ${midY} L ${CENTER_X} ${y2}`}
        stroke={LINE}
        strokeWidth={1.5}
        fill="none"
        markerEnd={marker}
      />
      <path
        d={`M ${RIGHT_CENTER_X} ${y1} L ${RIGHT_CENTER_X} ${midY} L ${CENTER_X} ${midY} L ${CENTER_X} ${y2}`}
        stroke={LINE}
        strokeWidth={1.5}
        fill="none"
      />
    </g>
  );
}

export default function ArchitectureDiagram({ steps, id }: { steps: DiagramStep[]; id: string }) {
  const positions: { y: number; step: DiagramStep }[] = [];
  let y = PAD;
  for (const step of steps) {
    positions.push({ y, step });
    y += BOX_H + STEP_GAP;
  }
  const totalHeight = y - STEP_GAP + PAD;
  const markerId = `arrow-${id}`;

  return (
    <div className="diagram-wrap">
      <svg viewBox={`0 0 ${VIEW_W} ${totalHeight}`} className="architecture-diagram" role="img" aria-label="Architecture flow diagram">
        <defs>
          <marker id={markerId} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill={LINE} />
          </marker>
        </defs>

        {positions.map((p, i) => {
          const next = positions[i + 1];
          const boxes =
            p.step.kind === "box"
              ? renderBox(FULL_X, p.y, FULL_W, p.step.node, `box-${i}`)
              : (
                <g key={`par-${i}`}>
                  {renderBox(LEFT_X, p.y, PAR_W, p.step.nodes[0], `par-${i}-a`)}
                  {renderBox(RIGHT_X, p.y, PAR_W, p.step.nodes[1], `par-${i}-b`)}
                </g>
              );

          return (
            <g key={`step-${i}`}>
              {boxes}
              {next ? renderConnector(p.step, next.step, p.y + BOX_H, next.y, markerId) : null}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export type { DiagramStep };
