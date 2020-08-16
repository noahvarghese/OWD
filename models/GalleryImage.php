<?php

class GalleryImage extends AbstractModel {

    public int $id;
    public string $description;
    public ?DateTime $published_date;
    public DateTime $created_date;
    public DateTime $last_modified_date;
    public int $file_id;
    public int $thumbnail_id;
    public string $file;
    public string $thumbnail;
    public string $type;

    public function getKeys() : array {
        $props = get_object_vars($this);

        return [
            key($props[0]) => $props[0]
        ];
    }

    public function getListKeys() : array {
        $props = get_object_vars($this);

        return [
            key($props[2]) => $props[2]
        ];
    }
}

?>