import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./BlogLink.scss";
import PrimaryButton from "./Button/PrimaryButton";

interface BlogLinkProps {
    post: any;
    index: number;
    className?: string;
}

const BlogLink: React.FC<BlogLinkProps> = ({ post, index, className }) => {
    const isMedium = useMediaQuery({ maxWidth: 1144, minWidth: 637 });
    const isSmall = useMediaQuery({ maxWidth: 636 });

    const maxDescriptionLength = !isSmall && index === 0 ? 240 : 140;
    const description =
        post.description.length > maxDescriptionLength
            ? post.description.substring(0, maxDescriptionLength) + "..."
            : post.description;

    return (
        <div
            className={`${
                className ?? (!isMedium && !isSmall)
                    ? "large"
                    : isMedium && !isSmall
                    ? "small"
                    : "tiny"
            } BlogLink`}
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
                    <span>{description}</span>
                </p>
                <PrimaryButton
                    link={post.slug}
                    text="Read More"
                    className="secondary"
                />
            </div>
        </div>
    );
};

export default BlogLink;
