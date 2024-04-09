import { getCollection } from "astro:content";
export const getCurrentPath = (url: URL, remove?: string[]) => {
  let rawPath = url.pathname.split("/").filter(Boolean);
  let path = rawPath.slice().splice(1);
  if (remove) {
    path = path.filter((element) => !remove.includes(element));
  }

  return {
    path: path.join("/"),
    lang: rawPath[0],
    array: rawPath.splice(1),
    raw: url.pathname,
  };
};
export const getSectionNames = async () => {
  const sections = new Set<string>();
  const collecion = await getCollecion();
  collecion.forEach(({ slug }) => sections.add(slug.split("/")[1]));
  return sections;
};

export const getSectionPaths = async () => {
  const sections = await getSectionNames();
  const paths = Array.from(sections).map((section) => {
    return {
      params: { section },
    };
  });
  return paths;
};

export const getFolderPaths = async () => {
  const sectionsData = new Map<string, Set<string>>();
  const paths: { params: { section: string; folder: string } }[] = [];
  const collecion = await getCollecion();
  collecion.forEach(({ slug }) => {
    const path = slug.split("/").splice(1);
    if (!sectionsData.has(path[0])) sectionsData.set(path[0], new Set());
    sectionsData.get(path[0])?.add(path[1]);
  });
  sectionsData.forEach((set, key) => {
    set.forEach((name) => {
      paths.push({ params: { section: key, folder: name } });
    });
  });
  return paths;
};

export const getDemoPaths = async () => {
  const collecion = await getCollecion();
  const paths = collecion.map(({ slug }) => {
    const slice = slug.split("/").splice(1);
    return { params: { section: slice[0], folder: slice[1], demo: slice[2] } };
  });
  return paths;
};
const getCollecion = async () =>
  await getCollection("demos", ({ slug }) => slug.startsWith("pl"));
