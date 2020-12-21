/**
 * File polyfills.js.
 *
 * Polyfills for IE11.
 */

/**
 * Polyfill for Element.closest() because we need to support IE11.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
 */
try {
var VH = (window.innerHeight);
var Header = document.getElementById('home');
var NavBar = document.getElementById('main-menu-header')
var HeaderVHeight = document.defaultView.getComputedStyle(Header, null).getPropertyValue("height");
var NavBarHeight = document.defaultView.getComputedStyle(NavBar, null).getPropertyValue("height");

NavBar.style.transition = "background-color 200ms";

window.addEventListener('scroll', function() {
	
		var myVHd = (window.pageYOffset);
		var colorEy = parseInt(HeaderVHeight.substr(0, HeaderVHeight.length-2)) - parseInt(NavBarHeight.substr(0, NavBarHeight.length-2));
		if(window.innerWidth > 1024){
			if(myVHd > colorEy){
				NavBar.style.background = "rgba(0,0,0,0.6)";
			}else{
				NavBar.style.background = "initial";
			}
			}	
})
}
catch (err){
	var messageError = "[ERROR] Scroll-Menu-Effects:\n ";
	if(document.getElementById('home') == undefined){
		messageError = messageError + "The TAG element 'home' was not found";
		messageError = messageError + "\n\nCheck the options below:\n1)Is the 'Header' element on the page?\n2)Did you forget to insert the TAG 'home'?\n\nHugo Rodrigues.";
	}else
	if(document.getElementById('main-menu-header') == undefined){
		messageError = messageError + "The TAG element 'main-menu-header' was not found";
		messageError = messageError + "\n\nCheck the options below:\n1)Is the 'NavBar' element on the page?\n3)Did you forget to insert the TAG 'main-menu-header'?\n\nHugo Rodrigues.";
	}else{
		messageError = messageError + err;
		messageError = messageError + "\n\nCheck the options below:\n1)Is the 'Header' element on the page?\n2)Is the 'NavBar' element on the page?\n3)Did you forget to insert the TAG 'home' and/or the TAG 'main-menu-header'?\n\nHugo Rodrigues.";
	}
	
	
	
	console.log(('%c ' + messageError), "background: #ececec;font-size: 13px;")
}

if ( ! Element.prototype.matches ) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if ( ! Element.prototype.closest ) {
	Element.prototype.closest = function( s ) {
		var el = this;
		do {
			if ( Element.prototype.matches.call( el, s ) ) {
				return el;
			}
			el = el.parentElement || el.parentNode;
		} while ( el !== null && el.nodeType === 1 );
		return null;
	};
}

/**
 * Polyfill for NodeList.foreach() because we need to support IE11.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
 */
if ( window.NodeList && ! NodeList.prototype.forEach ) {
	NodeList.prototype.forEach = function( callback, thisArg ) {
		var i;
		thisArg = thisArg || window;
		for ( i = 0; i < this.length; i++ ) {
			callback.call( thisArg, this[i], i, this );
		}
	};
}
