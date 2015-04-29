
$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff','#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff','#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
		anchors: ['a1','a2','a3','a4','a5','a6','a7','a8','a9','a10','a11','a12','a13','a14','a15','a16','a17','a18','a19','a20'],
		menu: '#menu',
		css3: true,
		scrollingSpeed: 1000
	});

	$('#showExamples').click(function(e){
		e.stopPropagation();
		e.preventDefault();
		$('#examplesList').toggle();
	});

	$('html').click(function(){
		$('#examplesList').hide();
	});
	$('.clickable pre').click(function(){
		$( this ).toggleClass('activated');
	})
});
	