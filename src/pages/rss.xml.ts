import rss from '@astrojs/rss';
import {  getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '#consts.js';

interface ContextType {
	site: string;
}

export async function GET({site}: ContextType) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}
