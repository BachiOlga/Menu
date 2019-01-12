const buttons = document.querySelectorAll('.tabs-links__item');
const blocks = document.querySelectorAll('.tabs-content__item');
buttons.forEach(function(element,i) {
    element.addEventListener('click', function() {
        blocks.forEach(function(block) {
            block.style.display = 'none';
        })
        blocks[i].style.display = 'block';

    })
})