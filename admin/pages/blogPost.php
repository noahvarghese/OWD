<div id="addBlog">
    <h1>Add Blog Post</h1>
    <button>Back</button>
    <form>
        <div>
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" />
        </div>
        <div>
            <label for="banner">Banner Image:</label>
            <input type="file" id="banner" name="banner" />
        </div>
        <div>
            <label for="category">Categories:</label>
            <select name="category" multiple>
            </select>
        </div>
        <div>
            <label for="tag">Tags:</label>
            <select name="tag" multiple>
            </select>
        </div>
        <div>
            <label for="intro">Introduction:</label>
            <textarea id="intro" name="intro"></textarea>
        </div>
        <div id="sectionList">
            <div class="section">
                <h2>Section 1</h2>
                <div>
                    <label for="heading1">Header:</label>
                    <input type="text" id="heading1" name="heading1" class="header">
                </div>
                <div>
                    <label for="content1">Content:</label>
                    <textarea name="content1" id="content1" class="content"></textarea>
                </div>
            </div>
        </div>
        <div id="sectionBtns">
            <button id="delBtn">Delete Section</button>
            <button id="addBtn">Add Section</button>
        </div>
        <div>
            <input type="reset" value="Clear" />
            <input type="submit" value="Save" />
            <input type="submit" value="Publish" />
        </div>
        <button id="delete">Delete Post</button>
    </form>
</div>