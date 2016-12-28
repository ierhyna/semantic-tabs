/*
Semantic Tabs with pure JS
Author: Irina Sokolovskaya (http://github.com/ierhyna)
*/

function changeTabs() {

    var tabHeader = document.getElementsByClassName('tab-header');
    var tabText = document.getElementsByClassName('tab-text');
    var testVariable;

    // do the first tab active
    tabHeader[0].classList.add('active');
    tabText[0].style.display = 'block';

    for (var i = 0; i < tabHeader.length; i++) {

        tabHeader[i].addEventListener( 'click', function() {

            for (var i = 0; i < tabHeader.length; i++) {
                tabHeader[i].classList.remove('active');
            };

            for (var i = 0; i < tabText.length; i++) {
                tabText[i].style.display = 'none';
            };

            this.nextElementSibling.style.display = 'block';
            this.classList.add('active');

        });
    }
}

changeTabs();
