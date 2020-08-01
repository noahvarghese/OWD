<a href="index.php?action=addBlog">Add Blog Post</a>

<table>
    <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Categories</th>
        <th>Tags</th>
        <th>Date Published</th>
        <th>Date Created</th>
    </tr>
    <?php
    foreach ( $post in $TPL["posts"] )
    {
        ?>
        <tr>
            <td><?= $post["title"] ?></td>
            <td><?= $post["author"] ?></td>
            <td><?= implode(", ", $post["categories"]) ?></td>
            <td><?= implode(", ", $post["tags"]) ?></td>
            <td><?= $post["published_date"] ?></td>
            <td><?= $post["created_date"] ?></td>
        </tr>
        <?php
    }
    ?>
</table>