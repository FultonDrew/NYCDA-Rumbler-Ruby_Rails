

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


// var commentShowBttn = document.getElementById('see-comments-button')

	var commentSection = document.getElementsByClassName('singleComment');
	var commentAuthor = document.getElementById('comment-author');
	
// document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('see-comments-button').addEventListener("click", function(){
	for (let i = 0; i < commentSection.length; i++){
		if (commentSection[i].style.visibility == 'visible'){
			commentSection[i].style.visibility = 'hidden'
			commentAuthor.style.boxShadow = '2px 2px 2px white'

		}else {
			(commentSection[i].style.visibility = 'visible')
		}
		commentAuthor.style.borderTopLeftRadius = '10px'
		commentAuthor.style.borderBottomLeftRadius = '10px'
		commentAuthor.style.borderBottomRightRadius = '10px'
	}

	});
// });

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('make-comments-button').addEventListener("click", function(){
	if (document.getElementById('make-comment-box').style.display == "block" && document.getElementById('submit-comment-button').style.display == "block"){
		document.getElementById('make-comment-box').style.display = "none"
		document.getElementById('submit-comment-button').style.display = "none"
	} else {
		document.getElementById('make-comment-box').style.display = "block"
		document.getElementById('submit-comment-button').style.display = "block"
	}
	
	});
});




