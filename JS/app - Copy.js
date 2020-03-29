document.addEventListener("DOMContentLoaded", () => {
  //  little hack to detect if the user is on ie 11
  const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
  // get all the links with ID that starts with 'sectionLink'
  const listOfLinks = document.querySelectorAll("a[href^='#sectionLink']");
  // loop over all the links
  listOfLinks.forEach(function (link) {
    // listen for a click
    link.addEventListener('click',  () => {
      // toggle highlight on and off when we click a link
      listOfLinks.forEach( (link) => {
        if (link.classList.contains('highlighted')) {
          link.classList.remove('highlighted');
        }
      });
      link.classList.add('highlighted');
      // get the element where to scroll
      let ref = link.href.split('#sectionLink');
      ref = "#section" + ref[1];
      
      // ie 11 does not support smooth scroll, so we will simply scroll
      if (isIE11) {
       window.scrollTo(0, document.querySelector(ref).offsetTop);
      } else {
        window.scroll({
          behavior: 'smooth',
          left: 0,
          // top gets the distance from the top of the page of our target element
          top: document.querySelector(ref).offsetTop
         
        });
       
      }
    })
  })
})




document.addEventListener('DOMContentLoaded', () => {

  var sections      = document.querySelectorAll('section');
	var navbar        =	document.querySelectorAll('.navbar__menu');
	var navbarHeight  = navbar.height();

  var sectionOffset = [];

  Array.prototype.forEach.call(sections, function(){
    var section = this;

    var position = section.offset().top - navbarHeight;
    var backgroundColor = section.css("background-color");

    sectionOffset.push({'postion': position,'color': backgroundColor});
  });

  window.on('scroll', function(){
		var scrollPos = document.scrollTop();

		array.forEach(sectionOffset, function(index, section){
			if (scrollPos >= section.postion) {
				navbar.css("background-color", section.color);
			}
		}) 
	});




 }
);

