console.log("Jai baba ki")

function on_mouse_in(x) {
	let a = document.getElementById('changeable_img');
	let b = document.getElementById('Change_colour');
	if (x.id == "change_clr1") {
		a.style.backgroundImage = "url('https://m.media-amazon.com/images/I/61sDyXAepuL._SL1500_.jpg')";
		b.innerHTML = " Gold";
	} else if (x.id == "change_clr2") {
		a.style.backgroundImage = "url('https://m.media-amazon.com/images/I/61eDXs9QFNL._SL1500_.jpg')"
		b.innerHTML = " Graphite";
	} else if (x.id == "change_clr3") {
		a.style.backgroundImage = "url('https://m.media-amazon.com/images/I/61jLiCovxVL._SL1500_.jpg')";
		b.innerHTML = " Sierra Blue";
	} else if (x.id == "change_clr4") {
		a.style.backgroundImage = "url('https://m.media-amazon.com/images/I/617FFRO3vcL._SL1500_.jpg')";
		b.innerHTML = " Silver";
	}
}

function on_mouse_out(x) {
	let a = document.getElementById('changeable_img');
	let b = document.getElementById('Change_colour');
	if (x.id != "change_clr1") {
		a.style.backgroundImage = "url('https://m.media-amazon.com/images/I/61sDyXAepuL._SL1500_.jpg')";
		b.innerHTML = " Gold";
	}
}

function Signin_box_in() {
	let x = document.getElementById('hidden_signin_box');
	let z = document.getElementById('blur_bckground');
	z.style.display = 'block';
	x.style.display = 'block';
}

function Signin_box_out() {
	let x = document.getElementById('hidden_signin_box');
	let z = document.getElementById('blur_bckground');
	z.style.display = 'none';
	x.style.display = 'none';

}

let changebl_img = document.getElementById('changeable_img');
let image = document.getElementById('img_zoom');

changebl_img.addEventListener('mousemove', function(e) {
	let width = changebl_img.offsetWidth;
	let height = changebl_img.offsetHeight;
	let mouseX = e.offsetX;
	let mouseY = e.offsetY;
	let bckgrundX = (mouseX / width * 100);
	let bckgrundY = (mouseY / height * 100);

	image.style.display = 'block';

	image.style.backgroundImage = "url('https://m.media-amazon.com/images/I/61sDyXAepuL._SL1500_.jpg')";
	image.style.backgroundPosition = `${bckgrundX}% ${bckgrundY}%`;
});

changebl_img.addEventListener('mouseleave', function() {
	image.style.display = 'none';
});