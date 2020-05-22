const toggleBtn = document.querySelector('.nav-toggleBtn');
const list = document.querySelector('.nav-lists');
const icons = document.querySelector('.nav-icons');

toggleBtn.addEventListener('click', () => {
    list.classList.toggle('active');
    icons.classList.toggle('active');
});


 $(document).ready(function (){
  $('.nav-toggleBtn').on("click", function() {
    $('.nav-lists').slideToggle("slow");
     $(window).resize(function() {
        if($(window).width() > 600) {
            $(".nav-lists").removeAttr("style");
            }
        });
    });
    });
