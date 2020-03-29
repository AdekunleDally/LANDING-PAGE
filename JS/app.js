document.addEventListener('DOMContentLoaded', () => {

  //find  and return all elements called 'section' and save it to the variable sections
  var sections= document.querySelectorAll('section');

  //find and return all class elements with value called called 'navbar__menu' and save it to the variable navbar
  var navbar=	document.querySelectorAll('.navbar__menu');

  //gets the height of the navbar and save it to variable heightOfNavbar
	var heightOfNavbar  = navbar.height();

  //creates an empty object for the variable sectionOffset
  var sectionOffset = [];

  // A forEach function runs through each section and performs the function on each section
  Array.prototype.forEach.call(sections, function(){
    var section = this.section;
    var position = this.section.offset().top - heightOfNavbar;
    var backgroundColor = section.css("background-color");

    sectionOffset.push({'position': position,'color': backgroundColor});
  });

 // scroll event performed here
  window.on('scroll', function(){

    //returns the vertical top position of scrollbar and saves it to the variable scrollPosition
		var scrollPosition = document.scrollTop();

    /*for each sectionOffset, perform the function below and return the navbar
     with its corresponding navbar and its section color*/
		array.forEach(sectionOffset, function(index, section){
			if (scrollPosition >= section.position) {
				navbar.css("background-color", section.color);
			}
		}) 
	});

 }
);

