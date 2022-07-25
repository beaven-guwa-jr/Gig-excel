window.onload = function(){
    const menu_btn = document.querySelector('.hamburger');
    const mobile_nav = document.querySelector('.mobile-nav');
    const body = document.querySelector('body');
     
    menu_btn.addEventListener('click',function(){
        menu_btn.classList.toggle('is-active');
        mobile_nav.classList.toggle('is-active');

        if(menu_btn.classList.contains('is-active')){
            body.classList.add('no-scroll'); 
        }
        else{
            body.classList.remove('no-scroll');
        }
        
    })

    // --------TABS---------
    var tabTriggerBtns = document.querySelectorAll('.tabs li button');
    tabTriggerBtns.forEach(function(tabTriggerBtn, index){
        tabTriggerBtn.addEventListener('click', function(){
            var currentTabData = document.querySelector('.tab-content[data-tab-content="' + this.dataset.tabTrigger + '"]');

            // remove classess
            document.querySelector('.tab-content.is-open').classList.remove('is-open');
            document.querySelector('.tabs li button.is-active').classList.remove('is-active');
            // add classes
            currentTabData.classList.add('is-open');
            this.classList.add('is-active');
        });
    });


    
}

 