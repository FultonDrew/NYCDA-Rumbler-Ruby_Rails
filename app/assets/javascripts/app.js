
// var commentShowBttn = document.getElementById('see-comments-button')

	var commentSection = document.getElementsByClassName('singleComment')
	var commentAuthor = document.getElementById('comment-author')	
// document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('see-comments-button').addEventListener("click", function(){
	for (let i = 0; i < commentSection.length; i++){
		commentSection[i].style.visibility = 'visible'
		commentAuthor.style.borderTopLeftRadius = '10px'
		commentAuthor.style.borderBottomLeftRadius = '10px'
		commentAuthor.style.borderBottomRightRadius = '10px'
	}

	});
// });

window.addEventListener('load', function() {
	document.getElementById('make-comments-button').addEventListener("click", function(){
	document.getElementById('make-comment-box').style.display = "block";
	document.getElementById('submit-comment-button').style.display = "block";
	});
});