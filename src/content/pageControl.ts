import { object } from "astro/zod";

type ProgressStatus =
  | "Preplaning"
  | "In progress"
  | "On hold"
  | "Alpha"
  | "Beta"
  | "Done";
interface StatsSchema {
  currentVersion: string;
  progress: Record<string, { percent: number; status: ProgressStatus }>;
  newPost: { show: boolean; showName: string; slug: string };
}
export default {
  currentVersion: verifyVersion("V:0.01A"),
  progress: {
    Editor: { percent: 10, status: "Preplaning" },
    Core: { percent: 75, status: "In progress" },
    Aurora: { percent: 80, status: "In progress" },
    Dogma: { percent: 90, status: "In progress" },
    MapCreator: { percent: 0, status: "Preplaning" },
    NaviGPU: { percent: 40, status: "On hold" },
  },
  newPost: { show: true, showName: "Aurora", slug: "intro/intro" },
} as StatsSchema;
function verifyVersion(version: string) {
  const regex = /^V:\d+\.(0[1-9]|[1-9][0-9])[A-Z]$/;
  if (!regex.test(version))
    throw new Error(
      `Version number is 'stats' dont match requirements: \n1)Need to start with 'V:'\n2)Need to have Major version number followed by dot\ne)Need to have minor version number between 01-99\n4)Need to have hotfix letter\nExamples: V:0.01A,V:14.60G \nYours: ${version}`,
    );
  return version;
}
