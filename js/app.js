$(document).ready(function () {
    //SLIDE NAV
    const navSlide = () => {
        const burger = document.querySelector('.burger')
        const navLinksDiv = document.querySelector('.nav-links')
        const navLinks = document.querySelectorAll('.nav-links li')
    
        burger.addEventListener('click', () => {
            // TOGGLE NAV 
            navLinksDiv.classList.toggle('nav-active')
    
            // ANIMATE LINKS 
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ''
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
                }
            })
    
            //BURGER ANIMATION
            burger.classList.toggle('toggle')
        })
    }
    navSlide()

    //ADDS COMMAS TO NUMBERS >= 1000
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: "./js/data.json",
        success: function (result) {
            console.log(result)
            result.forEach(data => {
                $('.catsDiv').append(`<button class="catsBtn" id="catsMake">${data.make} +</button>`)
                $('.inventory').append(`
                <div class="item">
                    <a href="#">
                        <div class="imgArea" style="background-image: url(${data.imgs[0]});">
                            <div class="priceDiv">
                                <p class="price">$${formatNumber(data.price)} <span class="imgsLength">📷${data.imgs.length}</span></p>
                            </div>
                        </div>
                        <div class="itemInfoContainer">
                            <div class="itemInfo">
                                <div class="itemName"><strong>${data.year} ${data.make} ${data.model} 250</strong></div>
                                <div class="condition">${data.condition}</div>
                                <div class="mileage">Mileage: ${data.mileage} miles</div>
                                <div class="color">Color: ${data.color}</div>
                                <div class="desc">
                                <p>Description: ${data.description.substring(0, 100)}</p>
                            </div>
                            </div>
                            <div class="itemBtnContainer">
                                <button class="itemBtn">✉ Email</button> <button class="itemBtn">☎ Call</button> 
                            </div>
                        </div>
                    </a>
                </div>
            `)
                // $('.catsDiv').append(`<button class="catsBtn" id="catsMake">${data.model} +</button>`)
                // $('.catsDiv').append(`<button class="catsBtn" id="catsMake">${data.condition} +</button>`)
            })
        }
    })
    
    const imgs = [
        "https://cdn1.cycletrader.com/v1/media/5ffaa769f38d0430b65d4096.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
        "https://cdn2.cycletrader.com/v1/media/5ffaa769f38d0430b65d4097.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
        "https://cdn2.cycletrader.com/v1/media/5ffaa76af38d0430b65d4098.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
        "https://cdn1.cycletrader.com/v1/media/600a5d639fae190ffc7dcfe5.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
        "https://cdn1.cycletrader.com/v1/media/600a5d639fae190ffc7dcfe5.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true", 
        "https://cdn1.cycletrader.com/v1/media/600a5d639fae190ffc7dcfe6.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
        "https://cdn1.cycletrader.com/v1/media/600a5d639fae190ffc7dcfe5.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
        "https://cdn2.cycletrader.com/v1/media/60090bf404376a462478165c.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"

    ]

      
})