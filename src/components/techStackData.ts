// /components/techStackData.ts
export interface TechTool {
  name: string;
  logo: string; // path to logo in /public/techStack
}

export const techStack: TechTool[] = [
  { name: "AWS", logo: "/techStack/aws.svg" },
  { name: "Vercel", logo: "/techStack/vercel.svg" },
];
