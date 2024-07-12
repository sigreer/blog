import { createDirectus, rest, } from '@directus/sdk';
import dotenv from 'dotenv';

dotenv.config();

type Global = {
  title: string;
  description: string;
}

type Author = {
  id: string;
  name: string;
  profile_picture: {
    id: string;
    description: string;
  };
  about: string;
  mastodon: string;
  twitter: string;
  github: string;
}

type Page = {
  id: string;
  title: string;
  content: string;
  slug: string;
  description: string;
  author: {
    id: string;
    name: string;
    profile_picture: {
      id: string;
      description: string;
    };
    about: string;
    mastodon: string;
    twitter: string;
    github: string;
  }
}

type Post = {
  id: string;
  title: string;
  content: string;
  slug: string;
  description: string;
  tags: string[];
  excerpt: string;
  author: {
    id: string;
    name: string;
    profile_picture: {
      id: string;
      description: string;
    };
    about: string;
    mastodon: string;
    twitter: string;
    github: string;
  }
}

type Schema = {
  global: Global;
  pages: Page[];
  authors: Author[];
  posts: Post[];
}

const directus = createDirectus<Schema>(process.env.DIRECTUS_URL!).with(rest());

export default directus;