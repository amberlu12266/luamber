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