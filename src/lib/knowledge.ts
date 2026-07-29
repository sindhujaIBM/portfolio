import publicKnowledge from "@/data/public-knowledge.json";

export type KnowledgeEntry = {
  title: string;
  company: string;
  period: string;
  type: string;
  tags: string[];
  body: string;
  source_path: string;
};

const entries = publicKnowledge as KnowledgeEntry[];

export function getPublicKnowledgeContext(): string {
  return entries
    .map((e) => {
      const meta = [e.company, e.period].filter(Boolean).join(", ");
      return `### ${e.title}${meta ? ` (${meta})` : ""}\nTags: ${e.tags.join(", ")}\n\n${e.body}`;
    })
    .join("\n\n---\n\n");
}
