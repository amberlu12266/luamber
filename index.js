function fadeInPage() {
	 if (!window.AnimationEvent) { return; }
	 var fader = document.getElementById('fader');
    fader.classList.add('fade-out');
}

function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}

/*$(document).ready(function($){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 740) {
			$('nav div a').css("color","#2b2b2b");
		} else {
			$('nav div a').css("color","#fff");
		}
		if ($(this).scrollTop() > 740) {
			$('nav a').css("color","#2b2b2b");
		} else {
			$('nav a').css("color","#fff");
		}
	});
});*/

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}




