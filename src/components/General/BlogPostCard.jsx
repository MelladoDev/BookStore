import React from "react";

const BlogPostCard = ({ post }) => {
  return (
<div className=" max-w-screen-sm">
<div className="flex flex-col">

      <img src={post.imagen} alt={post.titulo} className="w-60 h-40  rounded-md" />
</div>
<div>

      <h3 className="text-lg font-semibold mt-2">{post.titulo}</h3>
      <p className="text-sm text-gray-600">Por {post.autor} - {post.fecha}</p>
      <p className="text-gray-700 mt-2">{post.contenido.substring(0, 100)}...</p>
      <button className="mt-3 text-blue-600 hover:underline">Leer más</button>
</div>
    
</div>
  );
};

export default BlogPostCard;
