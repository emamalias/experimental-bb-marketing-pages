import { defineCollection } from 'astro:content';

const pageCollection = defineCollection({ /* ... */ });

export const collections = {
  'page': pageCollection,
};

// TODO: add more collections
