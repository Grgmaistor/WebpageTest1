
setTimeout(() => {
    var favicon_video_image_counter = 0;
    var favicon_video_icon_tag = document.querySelector("link[rel='icon']");
    var favicon_video_images = ["Images/Icons/FavIcon/Frame1.png", "Images/Icons/FavIcon/Frame2.png", "Images/Icons/FavIcon/Frame3.png", "Images/Icons/FavIcon/Frame4.png"];

    setInterval(function () {
        if (favicon_video_images[favicon_video_image_counter])
        {
            favicon_video_icon_tag.href = favicon_video_images[favicon_video_image_counter];
        }
        if (
            favicon_video_image_counter ==
            favicon_video_images.length - 1
        )
            favicon_video_image_counter = 0;
        else favicon_video_image_counter++;
    }, 100);
}, 2000);
