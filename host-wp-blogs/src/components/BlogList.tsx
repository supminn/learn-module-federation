import React from 'react';
import './BlogList.css'; // Import the CSS file for styling
import { Blog } from '../utils/types';

interface BlogListProps {
  blogs: Blog[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <div className="blog-list">
      <h2>List of Blogs</h2>
      <div className="cards-container">
        {blogs.map((blog) => (
          <div className="card" key={blog.id}>
            <h3 className="card-title">{blog.title}</h3>
            <p className="card-description">{blog.description}</p>
            <p className="card-author">Author: {blog.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
