(async () => {
    clear();
    const rootURL = "https://cocky-shannon-ef353a.netlify.app/";

    const mainPage = await fetch(rootURL + "/blog").then(async (res) => await res.text());

    const parser = new DOMParser();
    let doc = parser.parseFromString(mainPage, "text/html");

    let links = Array.from(doc.getElementsByClassName("blogLink"));
    let pages = [];

    for (let url of links) {
        pages.push(await fetch(url).then(async (res) => await res.text()));
    }

    let results = [];

    for (let page of pages) {

        doc = parser.parseFromString(page, "text/html");

        let val = {};
        val.banner = doc.getElementById("blogPostBanner").getAttribute("src");
        val.title = doc.getElementsByClassName("title")[0].textContent;
        val.description = doc.getElementById("description").getElementsByTagName("strong")[0].textContent;
        val.date = doc.getElementById("description").getElementsByTagName("span")[1].textContent;
        val.sections = [];

        console.log(val);

        let contents = Array.from(doc.getElementsByClassName("contents"));

        try {

            let res = undefined;

            for (let content of contents) {
                for (let child of Array.from(content.children)) {
                    if (child.nodeName[0] === "H" && child.nodeName.length === 2) {
                        if (res !== undefined) {
                            val.sections.push(res);
                        }

                        res = {
                            title: child.textContent,
                            contents: []
                        };
                    } else if (child.nodeName === "UL" || child.nodeName === "OL") {
                        let list = [];

                        for (let el of child.children) {
                            list.push(el.textContent);
                        }
                        res.contents.push(list);
                    } else if (child.nodeName === "P") {
                        res.contents.push(child.textContent);
                    }
                }
            }
        } catch (_) {
            for (let content of contents) {
                for (let child of Array.from(content.children)) {
                    let res = {
                        contents: []
                    };
                    if (child.nodeName === "UL" || child.nodeName === "OL") {
                        let list = [];

                        for (let el of child.children) {
                            list.push(el.textContent);
                        }

                        res.contents.push(list);
                    } else if (child.nodeName === "P") {
                        res.contents.push(child.textContent);
                    }

                    val.sections.push(res);
                }
            }
        }

        results.push(val);
    }
    console.log(results);
})();