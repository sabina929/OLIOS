        const homeIcon = document.querySelector('.home-icon');
        const basketIcon = document.querySelector('.basket-icon');
        const searchIcon = document.querySelector('.search-icon');

        const livingRoom = document.querySelector('#living_room');
        const categories = document.querySelector('.categories');

        const searchSection = document.querySelector('.search-section');

        // HOME ICON
        homeIcon.addEventListener('mouseover', changeHomeIcon);
        homeIcon.addEventListener('mouseout', changeBackHomeIcon);

        homeIcon.addEventListener('click', backToHome);

        function changeHomeIcon(e) {
            e.preventDefault();
            let imgSrc = homeIcon.src = './images/main_site/menu/home-icon-blue.png';
            // console.log(homeIcon.src);
        }

        function changeBackHomeIcon(e) {
            e.preventDefault();
            let imgSrc = homeIcon.src = './images/main_site/menu/home-icon.png';
        }



        // BASKET ICON
        basketIcon.addEventListener('mouseover', changeBasketIcon);
        basketIcon.addEventListener('mouseout', changeBackBasketIcon);

        function changeBasketIcon(e) {
            e.preventDefault();
            let imgSrc = basketIcon.src = './images/main_site/menu/basket-icon-blue.png';
            // console.log(basketIcon.src);
        }

        function changeBackBasketIcon(e) {
            e.preventDefault();
            let imgSrc = basketIcon.src = './images/main_site/menu/basket-icon.png';
        }


        // SEARCH ICON
        searchIcon.addEventListener('click', changeSearchIconOnClick);
        searchIcon.addEventListener('mouseover', changeSearchIcon);
        searchIcon.addEventListener('mouseout', changeBackSearchIcon);

        function changeSearchIconOnClick(e) {
            e.preventDefault();
            let imgSrc = searchIcon.src = './images/main_site/menu/search-icon-blue.png';
            searchIcon.removeEventListener('mouseout', changeBackSearchIcon);
            homeIcon.addEventListener('mouseout', changeBackHomeIcon);
            homeIcon.src = './images/main_site/menu/home-icon.png';

            setTimeout(() => {
                setTimeout(() => {
                    whiteSeat.src = "./images/product/left_photo/white-seat.png";
                    whiteSeat.style.width = "60%";
                    whiteSeat.style.left = "28%";
                    whiteSeat.style.top = "18%";
                }, 150);    
                    
                productSec.style.opacity = "0";
                setTimeout(() => {
                    productSec.style.display = 'none'
                }, 50);
                searchSection.style.display = "block";
                setTimeout(() => {
                    searchSection.style.opacity = '1'
                }, 50);
                categories.style.opacity = '0';
                setTimeout(() => {
                    categories.style.display = 'none'
                }, 50);
            }, 20);
        }

        function changeSearchIcon(e) {
            e.preventDefault();
            let imgSrc = searchIcon.src = './images/main_site/menu/search-icon-blue.png';

        }

        function changeBackSearchIcon(e) {
            e.preventDefault();
            let imgSrc = searchIcon.src = './images/main_site/menu/search-icon.png';

        }

        //--------------------------------------------------------------

        const downloadIcon = document.querySelector('.down-icon');
        // console.log(downloadIcon);

        downloadIcon.addEventListener('mouseover', moveDown);
        downloadIcon.addEventListener('mouseout', moveUp);

        function moveDown(e) {
            e.preventDefault();
            let imgDown = downloadIcon.style.transform = "translateY(8px)";
            let imgSrc = downloadIcon.src = " ./images/main_site/menu/in-icon-blue.png";
        }

        function moveUp(e) {
            e.preventDefault();
            let imgDown = downloadIcon.style.transform = "translateY(0px)";
            let imgSrc = downloadIcon.src = " ./images/main_site/menu/in-icon.png";
        }

        //--------------------------------------------------------------

        const linesIcon = document.querySelector('.lines');
        const rightMenu = document.querySelector('.right-menu');
       
        linesIcon.addEventListener('mouseover', zoomIn);
        linesIcon.addEventListener('mouseout', zoomOut);

        let timesClicked = 1;

        linesIcon.addEventListener('click', checktimesClicked);
        livingRoom.addEventListener('click', displayCategories);

        function changeToCloseIcon() {
            linesIcon.style.top = '24.5px';
            linesIcon.style.right = '23px';
            linesIcon.style.transform = 'scale(.85)';
            linesIcon.src = './images/main_site/hamburger/close.png';
            rightMenu.style.opacity = "1";
            rightMenu.style.right = "0px";
            timesClicked = 2;
            // console.log(timesClicked);
        }


        function closeMenu() {
            linesIcon.style.top = '-12px';
            linesIcon.style.right = '-12.5px';
            rightMenu.style.opacity = "0";
            rightMenu.style.right = "-440px";
            linesIcon.src = './images/main_site/hamburger/lines.png';
            // console.log(linesIcon.src);
            timesClicked = 1;
            // console.log(timesClicked);
        }

        function checktimesClicked(e) {
            e.preventDefault();
            if (timesClicked == 2) {
                // console.log("close");
                closeMenu();
            } else if (timesClicked == 1) {
                // console.log("lines");
                changeToCloseIcon();
            }
        }

        // checktimesClicked();  


        function zoomIn(e) {
            e.preventDefault();
            let imgScale = linesIcon.style.transform = 'scale(1.09)';
        }

        function zoomOut(e) {
            e.preventDefault();
            let imgScale = linesIcon.style.transform = 'scale(1)';
        }


        function displayCategories() {
            homeIcon.addEventListener('mouseout', changeBackHomeIcon);
            homeIcon.src = './images/main_site/menu/home-icon.png';
            searchIcon.addEventListener('mouseout', changeBackSearchIcon);
            searchIcon.src = './images/main_site/menu/search-icon.png';

            closeMenu();

            setTimeout(() => {
                setTimeout(() => {
                    searchInput.value = "RED SEAT";
                    whiteSeat.src = "./images/product/left_photo/white-seat.png"
                    whiteSeat.style.width = "60%";
                    whiteSeat.style.left = "28%";
                    whiteSeat.style.top = "18%";
                    prodRedSeat.style.display = 'block';
                    resultText.innerText = '1 searched result';
                }, 150);
                productSec.style.opacity = "0";
                setTimeout(() => {
                    productSec.style.display = 'none';
                }, 50);

                searchSection.style.opacity = "0";
                setTimeout(() => {
                    searchSection.style.display = 'none';
                }, 50);

                categories.style.display = 'flex';
                setTimeout(() => {
                    categories.style.opacity = '1';
                }, 50);

            }, 20);

        }


        //--------------------------------------------------------------

        const pagBlue = document.querySelector('.pag-blue');
        const pagStroke1 = document.querySelector('.pag-stroke1');
        const pagStroke2 = document.querySelector('.pag-stroke2');
        const pagStroke3 = document.querySelector('.pag-stroke3');


        pagBlue.addEventListener('click', changeToBlue);
        pagStroke1.addEventListener('click', changeToBlue1);
        pagStroke2.addEventListener('click', changeToBlue2);
        pagStroke3.addEventListener('click', changeToBlue3);


        function changeToBlue() {
            pagBlue.src = './images/main_site/pagination_icons/1.png';
            pagStroke1.src = './images/main_site/pagination_icons/2.png';
            pagStroke2.src = './images/main_site/pagination_icons/2.png';
            pagStroke3.src = './images/main_site/pagination_icons/2.png';
        }

        function changeToBlue1() {
            pagStroke1.src = './images/main_site/pagination_icons/1.png';
            pagStroke1.style.width = '40px';
            pagStroke1.style.height = '35px';
            pagStroke1.style.transform = 'translateY(-3px)';
            pagBlue.src = './images/main_site/pagination_icons/2.png';
            pagStroke2.src = './images/main_site/pagination_icons/2.png';
            pagStroke3.src = './images/main_site/pagination_icons/2.png';
        }

        function changeToBlue2() {
            pagStroke2.src = './images/main_site/pagination_icons/1.png';
            pagStroke2.style.width = '40px';
            pagStroke2.style.height = '35px';
            pagStroke2.style.transform = 'translateY(-3px)';
            pagBlue.src = './images/main_site/pagination_icons/2.png';
            pagStroke1.src = './images/main_site/pagination_icons/2.png';
            pagStroke3.src = './images/main_site/pagination_icons/2.png';
        }

        function changeToBlue3() {
            pagStroke3.src = './images/main_site/pagination_icons/1.png';
            pagStroke3.style.width = '40px';
            pagStroke3.style.height = '35px';
            pagStroke3.style.transform = 'translateY(-3px)';
            pagBlue.src = './images/main_site/pagination_icons/2.png';
            pagStroke1.src = './images/main_site/pagination_icons/2.png';
            pagStroke2.src = './images/main_site/pagination_icons/2.png';
        }


        const redSeatCont = document.querySelector('.red-seat-container');
        const blueSeatCont = document.querySelector('.blue-seat-container');
        const darkSeatCont = document.querySelector('.dark-seat-container');

        const productSec = document.querySelector('.product');

        redSeatCont.addEventListener('click', goToProduct);
        blueSeatCont.addEventListener('click', goToProduct);
        darkSeatCont.addEventListener('click', goToProduct);

        function goToProduct() {
            homeIcon.addEventListener('mouseout', changeBackHomeIcon);
            homeIcon.src = './images/main_site/menu/home-icon.png';
            searchIcon.addEventListener('mouseout', changeBackSearchIcon);
            searchIcon.src = './images/main_site/menu/search-icon.png';
                
            setTimeout(() => {
                productSec.style.display = "block";
                setTimeout(() => {
                    productSec.style.opacity = "1"
                }, 50);
                searchSection.style.opacity = "0";
                setTimeout(() => {
                    searchSection.style.display = 'none';
                }, 50);
                categories.style.opacity = "0";
                setTimeout(() => {
                    categories.style.display = "none";
                }, 50);
            }, 20);
        }


        function backToHome() {
            homeIcon.removeEventListener('mouseout', changeBackHomeIcon);
            searchIcon.addEventListener('mouseout', changeBackSearchIcon);
            searchIcon.src = './images/main_site/menu/search-icon.png';

            setTimeout(() => {
                setTimeout(() => {
                    searchInput.value = "RED SEAT";
                    whiteSeat.src = "./images/product/left_photo/white-seat.png"
                    whiteSeat.style.width = "60%";
                    whiteSeat.style.left = "28%";
                    whiteSeat.style.top = "18%";
                    prodRedSeat.style.display = 'block';
                    prodDarkSeat.style.display = 'block';
                    resultText.innerText = '1 searched result';
                }, 740);
                productSec.style.opacity = "0";
                setTimeout(() => {
                    productSec.style.display = 'none';
                }, 640);
                searchSection.style.opacity = "0";
                setTimeout(() => {
                    searchSection.style.display = 'none';
                }, 640);
                categories.style.opacity = '0';
                setTimeout(() => {
                    categories.style.display = 'none';
                }, 640);
            }, 140);
        }


        //----------------------------------------------------------------

        const incrIcon = document.querySelector('#increment');
        const decrIcon = document.querySelector('#decrement');
        const quant = document.querySelector('#quantity');
     
        incrIcon.addEventListener('click', increaseAmount);
        decrIcon.addEventListener('click', decreaseAmount);

        function increaseAmount(event) {
            event.preventDefault();
            // event.stopPropagation();
            let amount = Number(quant.innerText);
            amount++;
            // console.log(amount);
            quant.innerText = `${amount}`;
            // console.log(quant.innerText);
            // console.log(quant);
        }


        function decreaseAmount(event) {
            event.preventDefault();
            // event.stopPropagation();
               
            let amount = Number(quant.innerText);
                
            if (amount > 1) {
                amount--;
            } else if (amount === 1) {
                return;
            }
            // console.log(amount);
            quant.innerText = `${amount}`;
            // console.log('clicked');
        }


        //---------------------------------------------------

        const clearIcon = document.querySelector('#clear-icon');
        const searchInput = document.querySelector('#search-input');

        clearIcon.addEventListener('click', clearInputValue);

        function clearInputValue() {
            // console.log(searchInput.value);
            searchInput.value = "";
            searchInput.focus();
            prodRedSeat.style.display = 'none';
            prodDarkSeat.style.display = 'none';
            resultText.innerText = 'No results found';
        }



        //----------------------------------------------------------------

        const addIcon = document.querySelector('#add-icon');
        const removeIcon = document.querySelector('#remove-icon');
        const searchIcon2 = document.querySelector('#search-icon');
        const pinIcon = document.querySelector('#pin-icon');
        const heartIcon = document.querySelector('#heart-icon');


        addIcon.addEventListener('mouseover', changeAddIconToReversed);
        addIcon.addEventListener('mouseout', changeBackToAddIcon);
        removeIcon.addEventListener('mouseover', changeRemoveIconToReversed);
        removeIcon.addEventListener('mouseout', changeBackToRemoveIcon);
        searchIcon2.addEventListener('click', goToSearchSection);
        searchIcon2.addEventListener('mouseover', changeSearchIconToDark);
        searchIcon2.addEventListener('mouseout', changeBackToSearchIcon);
        pinIcon.addEventListener('mouseover', changePinIconToDark);
        pinIcon.addEventListener('mouseout', changeBackToPinIcon);

        let timesClickedToHeartIcon = 1;

        heartIcon.addEventListener('click', checktimesClickedToHeartIcon);
        heartIcon.addEventListener('mouseover', changeHeartIconToFilledOnMouseover);
        heartIcon.addEventListener('mouseout', changeBackToHeartIconOnMouseout);

        // ADD ICON
        function changeAddIconToReversed() {
            addIcon.src = "./images/product/left_photo/add-reversed.png";
            // console.log('changed');
        }

        function changeBackToAddIcon() {
            addIcon.src = "./images/product/left_photo/add.png";
            // console.log('changed');
        }

        // REMOVE ICON
        function changeRemoveIconToReversed() {
            removeIcon.src = "./images/product/left_photo/remove-reversed.png";
        }

        function changeBackToRemoveIcon() {
            removeIcon.src = "./images/product/left_photo/remove.png";
        }

        // SEARCH ICON
        function goToSearchSection() {
            searchIcon.src = './images/main_site/menu/search-icon-blue.png';
            searchIcon.removeEventListener('mouseout', changeBackSearchIcon);
                
            setTimeout(() => {
                whiteSeat.src = "./images/product/left_photo/white-seat.png";
                whiteSeat.style.width = "60%";
                whiteSeat.style.left = "28%";
                whiteSeat.style.top = "18%";
            }, 150);
         
            setTimeout(() => {
                productSec.style.opacity = "0";
                setTimeout(() => {
                    productSec.style.display = 'none'
                }, 50);
                searchSection.style.display = "block";
                setTimeout(() => {
                    searchSection.style.opacity = '1'
                }, 50);
            }, 20);
        }

        function changeSearchIconToDark() {
            searchIcon2.src = "./images/product/left_photo/search-dark.png";
        }

        function changeBackToSearchIcon() {
            searchIcon2.src = "./images/product/left_photo/search.png";
        }

        // PIN ICON
        function changePinIconToDark() {
            pinIcon.src = "./images/product/left_photo/pin-dark.png";
        }

        function changeBackToPinIcon() {
            pinIcon.src = "./images/product/left_photo/pin.png";
        }

        // HEART ICON
        function changeHeartIconToFilledOnMouseover() {
            heartIcon.src = "./images/product/left_photo/filled-heart.png";
        }

        function changeBackToHeartIconOnMouseout() {
            heartIcon.src = "./images/product/left_photo/heart.png";
        }

        function changeHeartIconToFilled() {
            heartIcon.src = "./images/product/left_photo/filled-heart.png";
            timesClickedToHeartIcon = 2;
            heartIcon.removeEventListener('mouseout', changeBackToHeartIconOnMouseout);
        }

        function changeBackToHeartIcon() {
            heartIcon.src = "./images/product/left_photo/heart.png";
            timesClickedToHeartIcon = 1;
            heartIcon.addEventListener('mouseout', changeBackToHeartIconOnMouseout);
        }

        function checktimesClickedToHeartIcon() {
            if (timesClickedToHeartIcon == 2) {
                // console.log("not filled");
                changeBackToHeartIcon();
            } else if (timesClickedToHeartIcon == 1) {
                // console.log("filled");
                changeHeartIconToFilled();
            }
        }


        // -----------------------------------------------------------------------

        const prodRedSeat = document.querySelector('#redseat');
        const prodDarkSeat = document.querySelector('#darkseat');
        const resultText = document.querySelector('.result-text p');
        const whiteSeat = document.querySelector('.white-seat');
        const recommendedDark = document.querySelector('.recommended-dark');
        const recommendedBlue = document.querySelector('.recommended-blue');
        const recommendedRed = document.querySelector('.recommended-red');
        
        searchInput.addEventListener('change', displayMatches);
        searchInput.addEventListener('keyup', displayMatches);

        // const prods = ['red seat', 'dark seat'];

        // const regex = /^r(([a-z]\s?)*)?/gi;
        const regex1 = /^r((e)?(d)?(\s)?(s)?(e)?(a)?(t)?)*/gi;
        const regex2 = /^d((a)?(r)?(k)?(\s)?(s)?(e)?(a)?(t)?)*/gi;
        const regex3 = /^s((e)?(a)?(t)?)*/gi;

        function displayMatches(e) {
            e.preventDefault();
            // console.log(searchInput.value);

            if (regex1.test(searchInput.value)) {
                prodDarkSeat.style.display = 'none';
                prodRedSeat.style.display = 'block';
                resultText.innerText = '1 searched result';
            } else if (regex2.test(searchInput.value)) {
                prodRedSeat.style.display = 'none';
                prodDarkSeat.style.display = 'block';
                resultText.innerText = '1 searched result';
            } else if (regex3.test(searchInput.value)) {
                prodRedSeat.style.display = 'block';
                prodDarkSeat.style.display = 'block';
                resultText.innerText = '2 searched results';
            } else if (!regex1.test(searchInput.value) && !regex2.test(searchInput.value) && !regex3.test(searchInput.value)) {
                // console.log('false');
                prodRedSeat.style.display = 'none';
                prodDarkSeat.style.display = 'none';
                resultText.innerText = 'No results found';
            }
        }

    
        
        prodRedSeat.addEventListener('click', goToRedSeatProduct);
        prodDarkSeat.addEventListener('click', goToDarkSeatProduct);

        function goToRedSeatProduct() {
            homeIcon.addEventListener('mouseout', changeBackHomeIcon);
            homeIcon.src = './images/main_site/menu/home-icon.png';
            searchIcon.addEventListener('mouseout', changeBackSearchIcon);
            searchIcon.src = './images/main_site/menu/search-icon.png';
            setTimeout(() => {
                whiteSeat.src = "./images/categories/red-seat/red-seat.png"
                whiteSeat.style.width = "52%";
                whiteSeat.style.left = "31%";
                whiteSeat.style.top = "20.5%";
                    
                setTimeout(() => {
                    searchInput.value = "RED SEAT";
                    prodRedSeat.style.display = 'block';
                    prodDarkSeat.style.display = 'block';
                    resultText.innerText = '1 searched result';
                }, 150);
                    
                productSec.style.display = "block";
                setTimeout(() => {
                    productSec.style.opacity = "1"
                }, 50);
                searchSection.style.opacity = "0";
                setTimeout(() => {
                    searchSection.style.display = 'none';
                }, 50);
                categories.style.opacity = "0";
                setTimeout(() => {
                    categories.style.display = "none";
                }, 50);

            }, 20);
        }

        function goToDarkSeatProduct() {
            homeIcon.addEventListener('mouseout', changeBackHomeIcon);
            homeIcon.src = './images/main_site/menu/home-icon.png';
            searchIcon.addEventListener('mouseout', changeBackSearchIcon);
            searchIcon.src = './images/main_site/menu/search-icon.png';
            setTimeout(() => {
                whiteSeat.src = "./images/categories/dark-seat/dark-seat.png"
                whiteSeat.style.width = "55%";
                whiteSeat.style.left = "29%";
                whiteSeat.style.top = "23%";

                setTimeout(() => {
                    searchInput.value = "RED SEAT";
                    prodRedSeat.style.display = 'block';
                    prodDarkSeat.style.display = 'block';
                    resultText.innerText = '1 searched result';
                }, 150);
                    
                productSec.style.display = "block";
                setTimeout(() => {
                    productSec.style.opacity = "1"
                }, 50);
                searchSection.style.opacity = "0";
                setTimeout(() => {
                    searchSection.style.display = 'none';
                }, 50);
                categories.style.opacity = "0";
                setTimeout(() => {
                    categories.style.display = "none";
                }, 50);
            }, 20);
        }

        recommendedDark.addEventListener('click', changeToDarkSeat);
        recommendedBlue.addEventListener('click', changeToBlueSeat);
        recommendedRed.addEventListener('click', changeToRedSeat);

        function changeToDarkSeat() {
            setTimeout(() => {
                whiteSeat.style.opacity = "0";
                setTimeout(() => {
                    whiteSeat.src = "./images/categories/dark-seat/dark-seat.png"
                    whiteSeat.style.width = "55%";
                    whiteSeat.style.left = "29%";
                    whiteSeat.style.top = "23%";
                }, 360);
                setTimeout(() => {
                    whiteSeat.style.opacity = "1";
                }, 680);
            }, 10);
        }

        function changeToBlueSeat() {
            setTimeout(() => {
                whiteSeat.style.opacity = "0";
                setTimeout(() => {
                    whiteSeat.src = "./images/categories/blue-seat/blue-seat.png"
                    whiteSeat.style.width = "50%";
                    whiteSeat.style.left = "32.5%";
                    whiteSeat.style.top = "22.5%";
                }, 360);
                setTimeout(() => {
                    whiteSeat.style.opacity = "1";
                }, 680);
            }, 10);
        }

        function changeToRedSeat() {
            setTimeout(() => {
                whiteSeat.style.opacity = "0";
                setTimeout(() => {
                    whiteSeat.src = "./images/categories/red-seat/red-seat.png"
                    whiteSeat.style.width = "52%";
                    whiteSeat.style.left = "31%";
                    whiteSeat.style.top = "20.5%";
                }, 360);
                setTimeout(() => {
                    whiteSeat.style.opacity = "1";
                }, 680);
            }, 10);
        }
