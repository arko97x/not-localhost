import { getCollection, render, type CollectionEntry } from "astro:content";

// Resource files are plain markdown, so the title comes from frontmatter if
// present, else the first h1, else the file slug.
export async function getResourceTitle(entry: CollectionEntry<"resources">) {
	if (entry.data.title) return entry.data.title;
	const { headings } = await render(entry);
	return headings.find((h) => h.depth === 1)?.text ?? entry.id;
}

export async function getResources() {
	const entries = await getCollection("resources");
	const resources = await Promise.all(
		entries.map(async (entry) => ({
			entry,
			title: await getResourceTitle(entry),
		})),
	);
	return resources.sort((a, b) => a.title.localeCompare(b.title));
}
