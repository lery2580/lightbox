// 1. when we click an image, show the modal
// 2. we want to grab the image that's just been clicked, and show it inside the modal
// 3. when we click the close button, hide the modal
// 4. our link doesn't follow the default href

$('.photos a').on('click', function()
{

    var currentImage = $(this).html()

    $('.modal-content').html(currentImage)

    $('.modal').fadeIn(300)


    // block the default action of following the href attribute
    return false

}
)

$('.modal-background, .modal-close').on('click', function() {

    $('.modal').fadeOut(300)
    
    return false
})

