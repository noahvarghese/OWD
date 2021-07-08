import React from "react";
import { blogPosts } from "../data/blogs";
import "./page.scss";
import "./Blog.scss";
// import BlogPost from "./BlogPost";
import BlogLink from "../components/BlogLink";

const Blog: React.FC = () => {
    return (
        <div id="Blog" className="page">
            <div className="blurb">
                <h1>Our Blog</h1>
                <p>
                    At Oakville Windows & Doors, we’re committed to providing
                    you with excellent service – even after your window or door
                    installation is finished. Stay up to date with all of the
                    latest industry trends, maintenance advice and need-to-know
                    information for your new windows and doors with our blog.
                </p>
            </div>
            <div className="posts">
                {blogPosts.map((post, index) => (
                    <BlogLink index={index} post={post} key={post.banner} />
                ))}
            </div>
        </div>
    );
};

export default Blog;
