<a href="index.php?action=addGallery">Add Gallery Image</a>

<table>
    <tr>
        <th>Thumbnail</th>
        <th>Description</th>
        <th>Date Published</th>
        <th>Date Created</th>
    </tr>
    <?php
    foreach ( $image in $TPL["images"] )
    {
        ?>
        <tr>
            <td><?= $image["thumbnail"] ?></td>
            <td><?= $image["description"] ?></td>
            <td><?= $image["published_date"] ?></td>
            <td><?= $image["created_date"] ?></td>
        </tr>
        <?php
    }
    ?>
</table>