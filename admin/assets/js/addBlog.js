var createNewSection = ()=> {


    var sections = document.getElementsByClassName("section");
    var newNumber = sections.length + 1;

    var newSection = document.createElement("div");
    newSection.classList.add("section");

    var h2 = document.createElement("h2");
    var h2Text = document.createTextNode("Section " + newNumber);
    h2.appendChild(h2Text);


    var idName = "heading" + newNumber;

    var headerDiv = document.createElement("div");

    var headerLabel = document.createElement("label");
    headerLabel.setAttribute("for", idName);
    var headerText = document.createTextNode("Header:");

    headerLabel.appendChild(headerText);

    headerDiv.appendChild(headerLabel);

    var headerInput = document.createElement("input");
    var idName = "heading" + newNumber;
    headerInput.setAttribute("type", "text");
    headerInput.setAttribute("id", idName);
    headerInput.setAttribute("name", idName);
    headerInput.classList.add("header");

    headerDiv.appendChild(headerInput);


    var contentDiv = document.createElement("div");

    var contentLabel = document.createElement("label");
    idName = "content" + newNumber;
    contentLabel.setAttribute("for", idName);
    var contentText = document.createTextNode("Content:");
    contentLabel.appendChild(contentText);

    contentDiv.appendChild(contentLabel);

    var contentInput = document.createElement("textarea");
    var idName = "content" + newNumber;
    contentInput.setAttribute("id", idName);
    contentInput.setAttribute("name", idName);
    contentInput.classList.add("content");

    contentDiv.appendChild(contentInput);

    newSection.appendChild(h2);
    newSection.appendChild(headerDiv);
    newSection.appendChild(contentDiv);
    
    var sectionList = document.getElementById("sectionList");
    sectionList.appendChild(newSection);
};

window.addEventListener("load", () => {

    console.log("yoyoy");
    var addBtn = document.getElementById("addBtn");

    addBtn.onclick = (e) => {
        e.preventDefault();
        createNewSection();

        if ( document.getElementsByClassName("section").length > 1 )
            document.getElementById("delBtn").style.display = "block"
    };

    var delBtn = document.getElementById("delBtn");

    delBtn.onclick = (e) => {
        e.preventDefault();

        var list = document.getElementById("sectionList");
        list.removeChild(list.childNodes[list.childNodes.length - 1]);

        if ( document.getElementsByClassName("section").length === 1 )
            document.getElementById("delBtn").style.display = "none"
    }

    document.getElementById("AddCategory").addEventListener("click", (e) => {
        e.preventDefault();

        document.getElementById("NewCategory").style.display = "block";
    });

    document.getElementById("AddTag").addEventListener("click", (e) => {
        e.preventDefault();

        document.getElementById("NewTag").style.display = "block";
    });

    document.getElementById("ClearCategory").addEventListener("click", (e) => {
        e.preventDefault();

        document.getElementById("NewCategoryInput").value = "";
        document.getElementById("NewCategory").style.display = "hidden";
    });

    document.getElementById("ClearTag").addEventListener("click", (e) => {
        e.preventDefault();

        document.getElementById("NewTagInput").value = "";
        console.log(this);
        document.getElementById("NewTag").style.display = "hidden";
    });

    document.getElementById("SubmitCategory").addEventListener("click", async (e) => {
        e.preventDefault();

        category = document.getElementById("NewCategoryInput").value;

        await fetch();

        // reload categories on success

        document.getElementById("NewCategoryInput").value = "";
        this.style.display = "none";
    });

    document.getElementById("SubmitTag").addEventListener("click", async (e) => {
        e.preventDefault();

        tag = document.getElementById("NewTagInput").value;

        await fetch();

        // reload tags on success

        document.getElementById("NewTagInput").value = "";
        this.style.display = "none";
    });
});