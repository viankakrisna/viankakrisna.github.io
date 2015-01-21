document.addEventListener('DOMContentLoaded', function() {
    var slide = 0;
    var slides = document.querySelectorAll('#slides > li');
    var numSlides = slides.length;
    var currentSlide = function() {
        var itemToShow = Math.abs(slide % numSlides);
        [].forEach.call(slides, function(el) {
            el.classList.remove('slideActive')
        });
        slides[itemToShow].classList.add('slideActive');
		resetprogress();
		resetInterval();
    };
    //buttons
    document.querySelector('#next').addEventListener('click', function() {
        next();
    }, false);
    document.querySelector('#previousSlide').addEventListener('click', function() {
        prev();
    }, false);
	var next = function() {
	slide++;
	currentSlide(); 
	}
	var prev = function() {
	slide--;
	currentSlide();
	}
function resetInterval() {
	clearInterval(autonext);
	autonext = setInterval(function() {
        slide++;
        currentSlide();
	}, 10000);	
}
var autonext =  setInterval(function(){
		next();
		}, 10000)
	document.querySelector('#first').addEventListener('click', function() {
        slide = 0;
		currentSlide();
    }, false);
	document.querySelector('#second').addEventListener('click', function() {
        slide = 1;
		currentSlide();
    }, false);
	document.querySelector('#third').addEventListener('click', function() {
        slide = 2;
		currentSlide();
    }, false);
	document.querySelector('#fourth').addEventListener('click', function() {
        slide = 3;
		currentSlide();
    }, false);
	document.querySelector('#fifth').addEventListener('click', function() {
        slide = 4;
		currentSlide();
    }, false);
	document.querySelector('#sixth').addEventListener('click', function() {
        slide = 5;
		currentSlide();
    }, false);
	function resetprogress()
	{var elm = document.querySelector('.progressbar');
	var newone = elm.cloneNode(true);
	var x = elm.parentNode.replaceChild(newone, elm);}
	function resetslide()
	{var elm = document.querySelector('#slides > li');
	var newone = elm.cloneNode(true);
	var x = elm.parentNode.replaceChild(newone, elm);}
}, false);

