import React from "react";
import "./page.scss";
import "./BlogPost.scss";

interface BlogPostProps {
    post: any;
}

const BlogPost: React.FC<BlogPostProps> = () => {
    return (
        <div id="BlogPost" className="page">
            <h1>Blog Post</h1>
        </div>
    );
};

export default BlogPost;
