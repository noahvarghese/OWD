import React from "react";
import { Link } from "react-router-dom";

interface BlogLinkProps {
    post: any;
    index: number;
}

const BlogLink: React.FC<BlogLinkProps> = ({ post, index }) => {
    return (
        <Link
            to={post.slug}
            className="BlogLink"
            id={index === 0 ? "firstBlogPost" : ""}
        >
            <div className="imgContainer">
                <img
                    src={"/blog/" + post.banner.split("/")[2]}
                    alt="blog post banner"
                />
            </div>
            <div className="description">
                <h2>{post.title}</h2>
                <p>
                    {post.description.length > 140
                        ? post.description.substring(0, 140)
                        : post.description}
                </p>
            </div>
        </Link>
    );
};

export default BlogLink;
