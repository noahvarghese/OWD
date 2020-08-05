<?php

class BlogPost extends AbstractModel {

    public int $id;
    public string $title;
    public int $author_id;
    public ?DateTime $published_date;
    public DateTime $last_modified_date;
    public DateTime $created_date;
    public string $introduction;
    public int $banner_id;
    public int $thumbnail_id;
    public int $mid_size_thumbnail_id;
    public string $banner;
    public string $banner_name;
    public string $mid_size_thumbnail;
    public string $mid_size_thumbnail_name;
    public string $thumbnail;
    public string $thumbnail_name;

    public function getKeys() : array {
        $props = get_object_vars($this);

        return [
            key($props[0]) => $props[0],
        ];
    }

    public function getListKeys() : array {
        $props = get_object_vars($this);

        return [
            key($props[2]) => $props[2],
            key($props[3]) => $props[3]
        ];
    }
}

?>