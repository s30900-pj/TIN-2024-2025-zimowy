$(document).ready(function () {
    $.get("https://jsonplaceholder.typicode.com/albums", function (albums) {
        displayGalleryList(albums);
    });

    $(document).on("click", ".gallery-item", function () {
        const albumId = $(this).data("album-id");
        $.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`, function (photos) {
            displayGalleryDetails(albumId, photos);
        });
    });

    $(document).on("click", "#thumbnails img", function () {
        const imageUrl = $(this).attr("src");
        openLightbox(imageUrl);
    });

    $("#photo-form").submit(function (event) {
        event.preventDefault();

        const albumId = $("#selected-album-id").val();
        const title = $("#photo-title").val();
        const url = $("#photo-url").val();

        const newPhoto = {
            albumId: parseInt(albumId),
            title: title,
            url: url,
            thumbnailUrl: url
        };

        $.ajax({
            type: "POST",
            url: "https://jsonplaceholder.typicode.com/photos",
            data: newPhoto,
        });
    });

});

function displayGalleryList(albums) {
    const $galleryList = $("#gallery-list");
    albums.forEach(album => {
        const $galleryItem = $("<div>")
            .addClass("gallery-item")
            .data("album-id", album.id)
            .text(album.title);
        $galleryList.append($galleryItem);
    });
}

function displayGalleryDetails(albumId, photos) {
    const $galleryDetails = $("#gallery-details");
    const $galleryTitle = $("#gallery-title");
    const $thumbnails = $("#thumbnails");
    const $photoForm = $("#photo-form");

    $galleryTitle.text(`Galeria ${albumId}`);
    $thumbnails.empty();
    $photoForm.show();

    photos.forEach(photo => {
        const $thumbnail = $("<img>")
            .attr("src", photo.thumbnailUrl)
            .attr("alt", `Photo ${photo.id}`);
        $thumbnails.append($thumbnail);
    });

    $galleryDetails.show();
    $thumbnails.show();
}

function openLightbox(imageUrl) {
    const $lightbox = $("#lightbox");
    const $lightboxImage = $("#lightbox-image");

    $lightboxImage.attr("src", imageUrl);
    $lightbox.show();

    $("#close-lightbox").on("click", function () {
        $lightbox.hide();
    });
}
