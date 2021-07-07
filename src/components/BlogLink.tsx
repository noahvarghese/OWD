import React from "react";
import { Link } from "react-router-dom";
import "./BlogLink.scss";

interface BlogLinkProps {
    post: any;
    index: number;
}

const BlogLink: React.FC<BlogLinkProps> = ({ post, index }) => {
    return (
        <Link
            to={post.slug}
            className="BlogLink"
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
                    <span>{index === 0 ? post.description.length > 240 ? post.description.substring(0, 240) : post.description : post.description.length > 140 ? post.description.substring(0, 140) : post.description}</span>
                    {/* {post.description.length > 140
                        ? post.description.substring(0, 140)
                        : post.description} */}
                    <em> ...Read More</em>
                </p>
            </div>
        </Link>
    );
};

export default BlogLink;
