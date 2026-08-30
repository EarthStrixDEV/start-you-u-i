import { beginnerPosts } from "./beginnerPosts";
import { juniorPosts } from "./juniorPosts";
import { midLevelPosts } from "./midLevelPosts";
import { seniorPosts } from "./seniorPosts";
import type { BlogPost } from "../types";

export const blogPosts: BlogPost[] = [...beginnerPosts, ...juniorPosts, ...midLevelPosts, ...seniorPosts];
