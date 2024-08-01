import allPosts from "@/data/allPosts.json";

interface Post {
  name: string;
  content: string;
  url: string;
  targets: string[];
}

export function search(term: string): Post[] {
  return allPosts.filter(
    (post: Post) =>
      post.name.toLowerCase().includes(term) ||
      post.content.toLowerCase().includes(term) ||
      post.targets.some((tag) => tag.toLowerCase().includes(term))
  );
}
