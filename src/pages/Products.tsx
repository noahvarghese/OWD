import React, { useEffect } from "react";
import CardLink from "../components/CardLink";
import "./page.scss";
import "./Products.scss";

export interface ProductProps {
    productType: string;
    description: string[];
    products: {
        title?: string;
        items: { name: string; to?: string; img: string }[];
    }[];
    hero: string;
    parentImagePath: string;
}

const Products: React.FC<ProductProps> = (props) => {
    useEffect(() => {
        const els = Array.from(
            document.querySelectorAll(
                "#Product.Repairs .cards .CardLink .imgContainer img"
            )
        );

        for (const el of els) {
            const image = el as HTMLImageElement;

            if (image.naturalHeight > image.naturalWidth) {
                image.style.width = "auto";
                image.style.height = "100%";
            } else {
                image.style.width = "100%";
                image.style.height = "auto";
            }
        }
    }, []);

    return (
        <div id="Product" className={props.productType + " page"}>
            <div className="hero">
                <div className="imgContainer">
                    <img src={props.hero} alt="Hero" loading="lazy" />
                    <div className="filter"></div>
                </div>
            </div>
            <div className="blurb">
                <h1>{props.productType}</h1>
                {props.description.map((desc) => (
                    <p key="desc">{desc}</p>
                ))}
            </div>

            {props.products.map((prod, index) => (
                <div
                    className={
                        (prod.title ? prod.title.toLowerCase() : "") +
                        " products"
                    }
                    key={(prod.title ?? "product") + index}
                >
                    <h2>{prod.title}</h2>
                    <div className="cards">
                        {prod.items.map((item, idx) => (
                            <CardLink
                                key={item.name + idx}
                                to={item.to}
                                img={props.parentImagePath + item.img}
                                title={item.name}
                            />
                        ))}
                    </div>
                </div>
            ))}

            {/* <div className="styles">
                <h2>Styles</h2>
                <div className="cards">
                    {styles.map((style) => (
                        <CardLink
                            to={style.to}
                            img={imageURL + style.img}
                            title={style.name}
                        />
                    ))}
                </div>
            </div>
            <div className="materials">
                <h2>Materials</h2>
                <div className="cards">
                    {materials.map((mat) => (
                        <CardLink
                            to={mat.to}
                            img={imageURL + mat.img}
                            title={mat.name}
                        />
                    ))}
                </div>
            </div> */}
        </div>
    );
};

export default Products;
