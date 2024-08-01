import React, { useState, useEffect } from "react";
import allProjects from "@/data/allProjects.json";

interface Post {
  name: string;
  desc: string;
  url: string;
  targets: string[];
}

const PostsList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(allProjects);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredPosts = allProjects.filter(
      (post: Post) =>
        post.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.targets.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    setPosts(filteredPosts);
  }, [searchTerm]);

  return (
    <div className="flex flex-col gap-y-3 w-full">
      <input
        type="text"
        name="searchProjects"
        id="searchProjects"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="text-xl w-full rounded-md px-4 py-3 border border-white/10 focus:bg-white/5 outline-none placeholder:text-white/50"
        placeholder="Buscar proyectos..."
      />
      <span className="text-white/50 mb-5">
        ✨ Aquí podrás encontrar mis proyectos y repositorios de GitHub.
      </span>
      <div className="grid grid-cols-1 gap-4 overflow-x-hidden">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div
              key={index}
              className="border border-white/10 p-4 rounded-lg hover:bg-white/5 transition cursor-pointer"
            >
              <a
                href={post.url}
                target="_blank"
                className="text-lg font-semibold mb-2 hover:underline"
              >
                {post.name}
              </a>
              <p className="text-sm text-gray-300 my-3">{post.desc}</p>
              <div className="flex flex-wrap gap-2">
                {post.targets.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs text-white/50 border border-white/5 bg-white/5 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
};

export default PostsList;
