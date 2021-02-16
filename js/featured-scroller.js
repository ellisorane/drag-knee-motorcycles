$(document).ready(function () {
    // GET JSON DATA TO POPULATE FEATURED MOTORCYCLES WITH ITEMS 
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: "./js/data.json",
        success: function (result) {
            result.forEach(function (data, index) {
                if (data.featured) {
                    $('.featured-scroller').append(`
                        <a href=""><div class="featured-item" style="background-image: url('${data.imgs[0]}');">
                            <div class="featured-item-info">
                                <p class="featured-price"><strong>${formatNumber(data.price)}</strong></p>
                                <p class="featured-item-name"><strong>${data.year} ${data.make} ${data.model}</strong></p>
                            </div>
                        </div></a>
                    `)
                }
            })
            $('.featured-scroller').append(`<a href="#"><button class="more-featured">SEE MORE...</button></a>`)

            scroller()
        }
    })

    function scroller () {
        let currentPosition = $('.featured-scroller').position().left
        let divWidth = $('.featured-item').width()
        const margin = 20
    
        // TO PREVENT IMAGE VIEWING ISSUES ON WINDOW RESIZE
        $(window).resize(function () {
            currentPosition = 0
            divWidth = $('.featured-item').width()
    
            $('.featured-scroller').transition({ x:`${0}px`}, 500)
        })
    
        //MOVE IMG WHEN THE NEXT OR PREV BTNS ARE PRESSED
        const slideImgs = () => {
            $('.scroller-prev').on('click', function () {
                currentPosition = currentPosition + (divWidth + margin)
                if (currentPosition > 0) {
                    currentPosition = -( ( $('.featured-item').length - 1 ) * ( (divWidth) + margin ) )
                }
                $('.featured-scroller').transition({ x:`${currentPosition}px`}, 500)
            })
    
            $('.scroller-next').on('click', function () {
                currentPosition = currentPosition - (divWidth + margin)
                if ( currentPosition < -( $('.featured-item').length * (divWidth)) ) {
                    currentPosition = 0
                }
                $('.featured-scroller').transition({ x:`${currentPosition}px`}, 500)
            })
        }
    
        slideImgs()
    }

})