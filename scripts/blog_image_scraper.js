const fs = require("fs");
const fetch = require("node-fetch");
const
    blogPosts = require("./src/data/blogs");

const rootURL = "https://cocky-shannon-ef353a.netlify.app";
const filePath = "./public/blog/";

const download = async (file) => {
    const response = await fetch(rootURL + file);
    const buffer = await response.buffer();
    return buffer;
};

const save = (name, buffer, prevPath) => {
    console.log(name);
    fs.writeFileSync(name, buffer, () => console.log(`Downloaded ${prevPath} to ${name}`));
};

const name = (path) => {
    const pieces = path.split("/");
    return pieces[pieces.length - 1];
};

(async () => {
    for (let blog of blogPosts) {
        const {
            banner
        } = blog;

        const newName = filePath + name(banner);
        const buffer = await download(banner);
        save(newName, buffer, rootURL + banner);
    }
})();