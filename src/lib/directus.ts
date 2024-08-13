import { createDirectus, rest, } from '@directus/sdk';
import dotenv from 'dotenv';

dotenv.config();

type Global = {
  title: string;
  description: string;
  logo_style: string;
  logo_icon: {
    id: string;
    description: string;
  };
  logo_image: {
    id: string;
    description: string;
  };
  logo_text: string;
  introduction: string;
  site_url: string;
  keycard_headline: string;
  about: string;
  about_pic: {
    id: string;
    description: string;
  };
  mastodon: string;
  twitter: string;
  github: string;
  dribbble: string;
  linkedin: string;
  instagram: string;
  facebook: string;
  dev: string;
  show_banner: boolean;
  show_carousel: boolean;
  show_dynamic_keycards: boolean;
  show_fixed_keycards: boolean;
  show_blogcards: boolean;
  show_bloglines: boolean;
  show_introduction: boolean;
  show_logoline: boolean;
  introduction_title: string;
  banner_text: string;
  banner_link: string;
  carousel_title: string;
  blogcards_title: string;
  bloglines_title: string;

}

type Keycard = {
  title: string;
  link: string;
  style: string[];
  excerpt: string;
  background_image: {
    id: string;
    description: string;
  };
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
    image: {
      id: string;
      description: string;
    };
  };
  menus: string;
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
  };
  image: {
    id: string;
    description: string;
  };
}

type Schema = {
  global: Global;
  keycards: Keycard[];
  pages: Page[];
  authors: Author[];
  posts: Post[];
}

const directus = createDirectus<Schema>(process.env.DIRECTUS_URL!).with(rest());

export default directus;