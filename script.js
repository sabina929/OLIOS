        const homeIcon = document.querySelector('.home-icon');
        const basketIcon = document.querySelector('.basket-icon');
        const searchIcon = document.querySelector('.search-icon');
        // console.log(homeIcon.src);

        const livingRoom = document.querySelector('#living_room');
        const categories = document.querySelector('.categories');

        
        // HOME ICON
        homeIcon.addEventListener('mouseenter', changeHomeIcon);
        homeIcon.addEventListener('mouseleave', changeBackHomeIcon);
       
        function changeHomeIcon(e) {
            e.preventDefault();
            let imgSrc = homeIcon.src = './images/main_site/menu/home-icon-blue.png';
            // let imgTransition = homeIcon.style.transition = 'all 0.5s ease';
            // console.log(homeIcon.src);
        }

        function changeBackHomeIcon(e) {
            e.preventDefault();
            let imgSrc = homeIcon.src = './images/main_site/menu/home-icon.png';
            // console.log(homeIcon.src);
        }

       
        // BASKET ICON
        basketIcon.addEventListener('mouseenter', changeBasketIcon);
        basketIcon.addEventListener('mouseleave', changeBackBasketIcon);

        function changeBasketIcon(e) {
            e.preventDefault();
            let imgSrc = basketIcon.src = './images/main_site/menu/basket-icon-blue.png';
            // console.log(basketIcon.src);
        }

        function changeBackBasketIcon(e) {
            e.preventDefault();
            let imgSrc = basketIcon.src = './images/main_site/menu/basket-icon.png';
            // console.log(basketIcon.src);
        }


        // SEARCH ICON
        searchIcon.addEventListener('mouseenter', changeSearchIcon);
        searchIcon.addEventListener('mouseleave', changeBackSearchIcon);

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
        // console.log(linesIcon);
        
        
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
            closeMenu();
             
            setTimeout(() => {
                    
                productSec.style.opacity = "0";
                setTimeout(() => (productSec.style.display = 'none'), 50);
                                    
                categories.style.display = 'flex';
                setTimeout(() => (categories.style.opacity = '1'), 50);
                    
            }, 140);
             
        }

      //--------------------------------------------------------------
      
        const pagBlue = document.querySelector('.pag-blue');
        const pagStroke1 = document.querySelector('.pag-stroke1');
        const pagStroke2 = document.querySelector('.pag-stroke2');
        const pagStroke3 = document.querySelector('.pag-stroke3');

        // console.log(pagBlue);
        // console.log(pagStroke1);
        // console.log(pagStroke2);
        // console.log(pagStroke3);

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

//-------------------------------------------------------


        const redSeatCont = document.querySelector('.red-seat-container');
        const blueSeatCont = document.querySelector('.blue-seat-container');
        const darkSeatCont = document.querySelector('.dark-seat-container');
        
        const productSec = document.querySelector('.product');
    
        redSeatCont.addEventListener('click', goToProduct);
        blueSeatCont.addEventListener('click', goToProduct);
        darkSeatCont.addEventListener('click', goToProduct);

        function goToProduct() {
             setTimeout(() => {
                     
                productSec.style.display = "block";
                setTimeout(() => {
                    productSec.style.opacity = "1"
                }, 50);
                     
                categories.style.opacity = "0";
                setTimeout(() => {
                categories.style.display = "none";
                }, 50);
                     
             }, 140);
        }

        homeIcon.addEventListener('click', backToHome);

        function backToHome() {
             setTimeout(() => {
                 productSec.style.opacity = "0";
                 setTimeout(() => (productSec.style.display = 'none'), 50);
                 categories.style.opacity = '0';
                 setTimeout(() => (categories.style.display = 'none'), 50);
             }, 140);
        }


       //-------------------------------------------------------------------

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
            console.log(amount);
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
