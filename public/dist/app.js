/*! XecutionerArts - v0.0.0 - 2014-07-21
 * https://github.com/
 * Copyright (c) 2014 Sergio Khlopenkov;
 * Licensed MIT
 */
(function(window){
	'use strict';
	function define_Please(){
		var Please = {};
		var color_data = {
			aliceblue: "F0F8FF",
			antiquewhite: "FAEBD7",
			aqua: "00FFFF",
			aquamarine: "7FFFD4",
			azure: "F0FFFF",
			beige: "F5F5DC",
			bisque: "FFE4C4",
			black: "000000",
			blanchedalmond: "FFEBCD",
			blue: "0000FF",
			blueviolet: "8A2BE2",
			brown: "A52A2A",
			burlywood: "DEB887",
			cadetblue: "5F9EA0",
			chartreuse: "7FFF00",
			chocolate: "D2691E",
			coral: "FF7F50",
			cornflowerblue: "6495ED",
			cornsilk: "FFF8DC",
			crimson: "DC143C",
			cyan: "00FFFF",
			darkblue: "00008B",
			darkcyan: "008B8B",
			darkgoldenrod: "B8860B",
			darkgray: "A9A9A9",
			darkgrey: "A9A9A9",
			darkgreen: "006400",
			darkkhaki: "BDB76B",
			darkmagenta: "8B008B",
			darkolivegreen: "556B2F",
			darkorange: "FF8C00",
			darkorchid: "9932CC",
			darkred: "8B0000",
			darksalmon: "E9967A",
			darkseagreen: "8FBC8F",
			darkslateblue: "483D8B",
			darkslategray: "2F4F4F",
			darkslategrey: "2F4F4F",
			darkturquoise: "00CED1",
			darkviolet: "9400D3",
			deeppink: "FF1493",
			deepskyblue: "00BFFF",
			dimgray: "696969",
			dimgrey: "696969",
			dodgerblue: "1E90FF",
			firebrick: "B22222",
			floralwhite: "FFFAF0",
			forestgreen: "228B22",
			fuchsia: "FF00FF",
			gainsboro: "DCDCDC",
			ghostwhite: "F8F8FF",
			gold: "FFD700",
			goldenrod: "DAA520",
			gray: "808080",
			grey: "808080",
			green: "008000",
			greenyellow: "ADFF2F",
			honeydew: "F0FFF0",
			hotpink: "FF69B4",
			indianred: "CD5C5C",
			indigo: "4B0082",
			ivory: "FFFFF0",
			khaki: "F0E68C",
			lavender: "E6E6FA",
			lavenderblush: "FFF0F5",
			lawngreen: "7CFC00",
			lemonchiffon: "FFFACD",
			lightblue: "ADD8E6",
			lightcoral: "F08080",
			lightcyan: "E0FFFF",
			lightgoldenrodyellow: "FAFAD2",
			lightgray: "D3D3D3",
			lightgrey: "D3D3D3",
			lightgreen: "90EE90",
			lightpink: "FFB6C1",
			lightsalmon: "FFA07A",
			lightseagreen: "20B2AA",
			lightskyblue: "87CEFA",
			lightslategray: "778899",
			lightslategrey: "778899",
			lightsteelblue: "B0C4DE",
			lightyellow: "FFFFE0",
			lime: "00FF00",
			limegreen: "32CD32",
			linen: "FAF0E6",
			magenta: "FF00FF",
			maroon: "800000",
			mediumaquamarine: "66CDAA",
			mediumblue: "0000CD",
			mediumorchid: "BA55D3",
			mediumpurple: "9370D8",
			mediumseagreen: "3CB371",
			mediumslateblue: "7B68EE",
			mediumspringgreen: "00FA9A",
			mediumturquoise: "48D1CC",
			mediumvioletred: "C71585",
			midnightblue: "191970",
			mintcream: "F5FFFA",
			mistyrose: "FFE4E1",
			moccasin: "FFE4B5",
			navajowhite: "FFDEAD",
			navy: "000080",
			oldlace: "FDF5E6",
			olive: "808000",
			olivedrab: "6B8E23",
			orange: "FFA500",
			orangered: "FF4500",
			orchid: "DA70D6",
			palegoldenrod: "EEE8AA",
			palegreen: "98FB98",
			paleturquoise: "AFEEEE",
			palevioletred: "D87093",
			papayawhip: "FFEFD5",
			peachpuff: "FFDAB9",
			peru: "CD853F",
			pink: "FFC0CB",
			plum: "DDA0DD",
			powderblue: "B0E0E6",
			purple: "800080",
			rebeccapurple: "663399",
			red: "FF0000",
			rosybrown: "BC8F8F",
			royalblue: "4169E1",
			saddlebrown: "8B4513",
			salmon: "FA8072",
			sandybrown: "F4A460",
			seagreen: "2E8B57",
			seashell: "FFF5EE",
			sienna: "A0522D",
			silver: "C0C0C0",
			skyblue: "87CEEB",
			slateblue: "6A5ACD",
			slategray: "708090",
			slategrey: "708090",
			snow: "FFFAFA",
			springgreen: "00FF7F",
			steelblue: "4682B4",
			tan: "D2B48C",
			teal: "008080",
			thistle: "D8BFD8",
			tomato: "FF6347",
			turquoise: "40E0D0",
			violet: "EE82EE",
			wheat: "F5DEB3",
			white: "FFFFFF",
			whitesmoke: "F5F5F5",
			yellow: "FFFF00",
			yellowgreen: "9ACD32"
		};

		var Color_options = {
			hue: null,
			saturation: null,
			value: null,
			base_color: '',
			greyscale: false,
			grayscale: false, //whatever I support them both, murrica
			golden: true,
			full_random: false,
			colors_returned: 1,
			format: 'hex',
		};

		var Scheme_options = {
			scheme_type: 'analogous',
			format: 'hex'
		};

		function random_int( min, max ){
			return Math.floor( Math.random() * ( max - min + 1 )) + min;
		}

		function random_float( min, max ){
			return Math.random() * ( max - min ) + min;
		}

		function clamp( num, min, max ){
			return Math.max( min, Math.min( num, max ));
		}

		function convert_to_format( format_string, array ){
			switch( format_string ){
				case 'hex':
					for ( var i = 0; i < array.length; i++ ) {
						array[i] = Please.HSV_to_HEX( array[i] );
					}
					break;
				case 'rgb':
					for ( var i = 0; i < array.length; i++ ) {
						array[i] = Please.HSV_to_RGB( array[i] );
					}
					break;
				case 'rgb-string':
					for ( var i = 0; i < array.length; i++ ) {
						var raw_rgb =  Please.HSV_to_RGB( array[i] );
						array[i] =
							"rgb(" +
							raw_rgb.r + "," +
							raw_rgb.g + "," +
							raw_rgb.b + ")";
					}
					break;
				case 'hsv':
					break;
				default:
					console.log( 'Format not recognized.' );
					break;
			}
			return array;
		}

		function copy_object( object ){
			var copy = {};
			for( var key in object ){
				if( object.hasOwnProperty( key )){
					copy[key] = object[key];
				}
			}
			return copy;
		}

		Please.NAME_to_HEX = function( name ){
			if( name in color_data ){
				return color_data[name];
			}
			else{
				console.log( 'Color name not recognized.' );
			}
		}

		Please.NAME_to_HSV = function( name ){
			return Please.HEX_to_RGB( Please.NAME_to_HEX( name ));
		}

		Please.NAME_to_HSV = function( name ){
			return Please.HEX_to_HSV( Please.NAME_to_HEX( name ));
		}

		//accepts hex string, produces RGB object
		Please.HEX_to_RGB = function( hex ){
			var regex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
			hex = hex.replace( regex, function( m, r, g, b ) {
				return r + r + g + g + b + b;
			});
			var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( hex );
			return result ? {
				r: parseInt( result[1], 16 ),
				g: parseInt( result[2], 16 ),
				b: parseInt( result[3], 16 )
			} : null;
		}

		//accepts RGB object, produces hex string
		Please.RGB_to_HEX = function( RGB ){
			return "#" +
			(( 1 << 24 ) + ( RGB.r << 16 ) + ( RGB.g << 8 ) + RGB.b )
			.toString( 16 ).slice( 1 );
		}

		//accepts HSV object, returns RGB object
		Please.HSV_to_RGB = function( HSV ){
			var r, g, b;
			var h = ( HSV.h / 360 );
			var s = HSV.s;
			var v = HSV.v;
			var i = Math.floor( h * 6 );
			var f = h * 6 - i;
			var p = v * ( 1 - s );
			var q = v * ( 1 - f * s );
			var t = v * ( 1 - ( 1 - f ) * s );
			switch( i % 6 ){
				case 0: r = v, g = t, b = p;
					break;
				case 1: r = q, g = v, b = p;
					break;
				case 2: r = p, g = v, b = t;
					break;
				case 3: r = p, g = q, b = v;
					break;
				case 4: r = t, g = p, b = v;
					break;
				case 5: r = v, g = p, b = q;
					break;
			}
			return{
				r:Math.floor( r * 255 ),
				g:Math.floor( g * 255 ),
				b:Math.floor( b * 255 )
			}
		}

		//accepts RGB object, returns HSV object
		Please.RGB_to_HSV = function( RGB ){
			var r, g, b;
			var computed_H = 0;
			var computed_S = 0;
			var computed_V = 0;
			r = ( RGB.r / 255 );
			g = ( RGB.g / 255 );
			b = ( RGB.b / 255 );
			var min_RGB = Math.min( r, Math.min( g, b ) );
			var max_RGB = Math.max( r, Math.max( g, b ) );
			// Black-gray-white
			if ( min_RGB == max_RGB ) {
				computed_V = min_RGB;
				return{
					h: 0,
					s: 0,
					v: computed_V
				}
			}
			// Colors other than black-gray-white:
			var d = ( r == min_RGB ) ? g - b : (( b == min_RGB ) ? r - g : b - r);
			var h = ( r == min_RGB ) ? 3 : (( b == min_RGB ) ? 1 : 5 );
			computed_H = 60 * ( h - d / ( max_RGB - min_RGB ));
			computed_S = ( max_RGB - min_RGB ) / max_RGB;
			computed_V = max_RGB;
			return {
				h: computed_H,
				s: computed_S,
				v: computed_V
			}
		}

		//accepts HSV object, returns hex string
		Please.HSV_to_HEX = function( HSV ){
			return Please.RGB_to_HEX( Please.HSV_to_RGB( HSV ));
		}

		//accepts hex string, returns HSV object
		Please.HEX_to_HSV = function( hex ){
			return Please.RGB_to_HSV( Please.HEX_to_RGB( hex ));
		}
		
		//accepts HSV object and options object, returns list or single object depending on options
		Please.make_scheme = function( HSV, options ){
			//clone base please options
			var scheme_options = copy_object( Scheme_options );

			if( options != null ){
			//override base Please options
				for( var key in options ){
					if( options.hasOwnProperty( key )){
						scheme_options[key] = options[key];
					}
				}
			}

			var scheme = [HSV];
			//DRY for repeated cloning
			function clone( HSV ){
				return{
					h: HSV.h,
					s: HSV.s,
					v: HSV.v
				}
			}
			switch( scheme_options.scheme_type.toLowerCase() ){
				case 'monochromatic':
				case 'mono':
					for ( var i = 1; i <= 2; i++ ) {
						var adjusted = clone(HSV);

						var adjusted_s = adjusted.s + ( .1 * i );
						adjusted_s = clamp( adjusted_s, 0, 1 );

						var adjusted_v = adjusted.v + ( .1 * i );
						adjusted_v = clamp( adjusted_v, 0, 1 );

						adjusted.s = adjusted_s;
						adjusted.v = adjusted_v;

						scheme.push(adjusted);
					}
					for ( var i = 1; i < 2; i++ ) {
						var adjusted = clone( HSV );

						var adjusted_s = adjusted.s - ( .1 * i );
						adjusted_s = clamp( adjusted_s, 0, 1 );

						var adjusted_v = adjusted.v - ( .1 * i );
						adjusted_v = clamp( adjusted_v, 0, 1 );

						adjusted.s = adjusted_s;
						adjusted.v = adjusted_v;

						scheme.push( adjusted );
					}
				break;
				case 'complementary':
				case 'complement':
					var adjusted = clone( HSV );
					adjusted.h += 180;
					if( adjusted.h > 360 ){
						adjusted.h -= 360;
					}
					scheme.push( adjusted );
				break;
				//30 degree seperation
				case 'split-complementary':
				case 'split-complement':
				case 'split':
					var adjusted = clone( HSV );
					adjusted.h += 165;
					if( adjusted.h > 360 ){
						adjusted.h -= 360;
					}
					scheme.push( adjusted );
					var adjusted = clone( HSV );
					adjusted.h -= 165;
					if( adjusted.h < 0 ){
						adjusted.h += 360;
					}
					scheme.push( adjusted );
				break;
				case 'double-complementary':
				case 'double-complement':
				case 'double':
					//first basic complement
					var adjusted = clone( HSV );
					adjusted.h += 180;
					if( adjusted.h > 360 ){
						adjusted.h -= 360;
					}
					scheme.push( adjusted );
					//then offset
					var adjusted = clone( HSV );
					adjusted.h += 30;
					if( adjusted.h > 360 ){
						adjusted.h -= 360;
					}
					var secondary = clone( adjusted );
					scheme.push( adjusted );
					//complement offset
					secondary.h += 180;
					if( secondary.h > 360 ){
						secondary.h -= 360;
					}
					scheme.push( secondary );
				break;
				case 'analogous':
				case 'ana':
					for ( var i = 1; i <= 5; i++ ) {
						var adjusted = clone( HSV );
						adjusted.h += ( 20 * i );
						if ( adjusted.h > 360 ) {
							adjusted.h -= 360;
						}
						scheme.push( adjusted );
					}
				break;
				case 'triadic':
				case 'triad':
				case 'tri':
					for ( var i = 1; i < 3; i++ ) {
						var adjusted = clone( HSV );
						adjusted.h += ( 120 * i );
						if( adjusted.h > 360 ){
							adjusted.h -= 360;
						}
						scheme.push( adjusted );
					};
				break;
				default:
					console.log( 'Color scheme not recognized.' )
				break;
			}
			convert_to_format( scheme_options.format.toLowerCase(), scheme );
			return scheme;
		}
		//accepts options object returns list or single color
		Please.make_color = function( options ){
			var color = [];
			//clone base please options
			var color_options = {};
			for( var key in Color_options ){
				if( Color_options.hasOwnProperty( key )){
					color_options[key] = Color_options[key];
				}
			}
			if( options != null ){
			//override base Please options
				for( var key in options ){
					if( options.hasOwnProperty( key )){
						color_options[key] = options[key];
					}
				}
			}
			//first, check for a base color
			var base_color;
			if ( color_options.base_color.length > 0 ) {
				base_color = color_data[color_options.base_color.toLowerCase()];
				base_color = Please.HEX_to_HSV( base_color );
			}
			for ( var i = 0; i < color_options.colors_returned; i++ ) {
				var random_hue = random_int( 0, 360 );
				var hue,saturation,value;
				if( base_color != null ){
					hue = random_int( ( base_color.h - 5 ), ( base_color.h + 5 ));
					saturation = random_float( .4, .85 );
					value = random_float( .4, .85 );
					color.push({h: hue, s: saturation, v: value});
				}
				else{
					if( color_options.greyscale == true || color_options.grayscale == true ){
						hue = 0;
					}
					//make hue goldennnnnnnn
					else if( color_options.golden == true ){
						hue =  ( random_hue + ( random_hue / 0.618033988749895 )) % 360;
					}
					else if( color_options.hue == null || color_options.full_random == true ){
						hue = random_hue;
					}
					else{
						hue = clamp( color_options.hue, 0, 360 );
					}
					//set saturation
					if ( color_options.greyscale == true || color_options.grayscale == true ) {
						saturation = 0; //if they want greyscale no saturation allowed
					}
					else if ( color_options.full_random == true ){
						saturation = random_float( 0, 1 );
					}
					else if ( color_options.saturation == null ){
						saturation = .4;
					}
					else{
						saturation = clamp( color_options.saturation, 0, 1 );
					}
					//set value
					if( color_options.full_random == true ){
						value = random_float( 0, 1 );
					}
					else if( color_options.greyscale == true || color_options.grayscale == true ){
						value = random_float(.15,.75)
					}
					else if( color_options.value == null ){
						value = .75;
					}
					else{
						value = clamp( color_options.value, 0 , 1 );
					}
					color.push( {h: hue, s: saturation, v: value} );
				}
			}
			//output options based on format
			convert_to_format( color_options.format.toLowerCase(),color );
			if ( color.length === 1 ){return color[0];}
			else{return color;}
		}
		return Please;
	}
	//globalize it 3/60
	if( typeof( Please ) == 'undefined' ) {
		window.Please = define_Please();
	}
})( window );
/**
 * Created by Leonheart on 7/15/2014.
 */
//function addEventListener(e, t, n) {
//    if (e.addEventListener) {
//        e.addEventListener(t, n)
//    } else {
//        e.attachEvent("on" + t, function () {
//            n.call(e)
//        })
//    }
//}
//function color_cycle() {
//    var e = document.getElementById("title").getElementsByTagName("span");
//    var t = document.getElementsByClassName("download")[0];
//    for (var n = e.length - 1; n >= 0; n--) {
//        e[n].style.color = Please.make_color({saturation: .7, value: .7})
//    }
//    t.style.color = Please.make_color({saturation: .7, value: .7})
//}
//function easeInOutQuad(e) {
//    return e < .5 ? 2 * e * e : -1 + (4 - 2 * e) * e
//}
//function scrollTo(e, t, n, r) {
//    function u(e, t) {
//        return e < t ? e : t
//    }
//
//    function a(f) {
//        var l = Date.now(), c = u(1, (l - i) / t), h = n(c);
//        s.scrollTop = h * (e - o) + o;
//        if (c < 1)requestAnimationFrame(a); else if (r)r()
//    }
//
//    var i = Date.now(), s = document.documentElement.scrollTop ? document.documentElement : document.body, o = s.scrollTop;
//    if (o === e) {
//        r();
//        return
//    }
//    requestAnimationFrame(a)
//}
//function remove_first_child(e) {
//    if (e.hasChildNodes()) {
//        e.removeChild(e.childNodes[0])
//    }
//}
//(function () {
//    var e = 0;
//    var t = ["ms", "moz", "webkit", "o"];
//    for (var n = 0; n < t.length && !window.requestAnimationFrame; ++n) {
//        window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"];
//        window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"]
//    }
//    if (!window.requestAnimationFrame)window.requestAnimationFrame = function (t, n) {
//        var r = (new Date).getTime();
//        var i = Math.max(0, 16 - (r - e));
//        var s = window.setTimeout(function () {
//            t(r + i)
//        }, i);
//        e = r + i;
//        return s
//    };
//    if (!window.cancelAnimationFrame)window.cancelAnimationFrame = function (e) {
//        clearTimeout(e)
//    }
//})();
//color_cycle();
//window.setInterval(color_cycle, 3e3);
//var make_color = document.getElementById("make-color");
//addEventListener(make_color, "click", function () {
//    remove_first_child(document.getElementById("make-color-demo"));
//    document.getElementById("make-color-demo").style.background = Please.make_color()
//});
//var make_color_multiple = document.getElementById("make-color-multiple");
//addEventListener(make_color_multiple, "click", function () {
//    var e = document.getElementById("multiple-demo").getElementsByTagName("div");
//    var t = Please.make_color({colors_returned: 4});
//    for (var n = e.length - 1; n >= 0; n--) {
//        remove_first_child(e[n]);
//        e[n].style.background = t[n]
//    }
//});
//var base_color = document.getElementById("base-color");
//var base_color_picker = document.getElementById("base-color-picker");
//addEventListener(base_color, "click", function () {
//    remove_first_child(document.getElementById("base-color-demo"));
//    document.getElementById("base-color-demo").style.background = Please.make_color({base_color: base_color_picker.value})
//});
//var grey_color = document.getElementById("grey-color");
//addEventListener(grey_color, "click", function () {
//    remove_first_child(document.getElementById("grey-color-demo"));
//    document.getElementById("grey-color-demo").style.background = Please.make_color({greyscale: true})
//});
//var random_color = document.getElementById("random-color");
//addEventListener(random_color, "click", function () {
//    remove_first_child(document.getElementById("random-color-demo"));
//    document.getElementById("random-color-demo").style.background = Please.make_color({golden: false, full_random: true})
//});
//var fiddle_hue = document.getElementById("fiddle-hue");
//var fiddle_sat = document.getElementById("fiddle-sat");
//var fiddle_val = document.getElementById("fiddle-val");
//var fiddle_color = document.getElementById("fiddle-color");
//addEventListener(fiddle_color, "click", function () {
//    var e, t, n;
//    if (fiddle_hue.value.length == 0) {
//        e = null
//    } else {
//        e = parseInt(fiddle_hue.value);
//        if (isNaN(e)) {
//            e = null
//        }
//    }
//    if (fiddle_sat.value.length == 0) {
//        t = null
//    } else {
//        t = parseFloat(fiddle_sat.value);
//        if (isNaN(t)) {
//            t = null
//        }
//    }
//    if (fiddle_val.value.length == 0) {
//        n = null
//    } else {
//        n = parseFloat(fiddle_val.value);
//        if (isNaN(n)) {
//            n = null
//        }
//    }
//    remove_first_child(document.getElementById("fiddle-color-demo"));
//    document.getElementById("fiddle-color-demo").style.background = Please.make_color({golden: false, hue: e, saturation: t, value: n})
//});
//var scheme_color_picker = document.getElementById("scheme-color-picker");
//var scheme_color = document.getElementById("scheme-color");
//addEventListener(scheme_color, "click", function () {
//    var e = document.getElementById("scheme-demo").getElementsByTagName("div");
//    var t = Please.NAME_to_HSV(scheme_color_picker.value);
//    var n = Please.make_scheme(t, {scheme_type: "ana", format: "rgb-string"});
//    for (var r = 0; r < e.length; r++) {
//        remove_first_child(e[r]);
//        e[r].style.background = n[r]
//    }
//});
//var demos = document.getElementsByClassName("demo");
//for (var i = demos.length - 1; i >= 0; i--) {
//    addEventListener(demos[i], "click", function () {
//        var e = document.createTextNode(this.style.backgroundColor);
//        remove_first_child(this);
//        this.appendChild(e)
//    })
//}
//var nav = document.getElementsByTagName("li");
//var articles = document.getElementsByTagName("article");
//for (var i = 0; i < nav.length; i++) {
//    (function (e) {
//        addEventListener(nav[e], "click", function () {
//            scrollTo(articles[e].offsetTop, 300, easeInOutQuad)
//        })
//    })(i)
//}
angular.module('app', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngAnimate'
]);

angular.module('app').config(function ($routeProvider, $locationProvider) {
    var routeRoleChecks = {
        admin: {auth: function (mvAuth) {
            return mvAuth.authorizeCurrentUserForRoute('admin')
        }},
        user: {auth: function (mvAuth) {
            return mvAuth.authorizeAuthenticatedUserForRoute()
        }}
    };

    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', { templateUrl: '/partials/main/main', controller: 'mvMainCtrl'})
        .when('/about', { templateUrl: '/partials/main/about', controller: 'mvMainAboutCtrl'})
        .when('/admin/users', { templateUrl: '/partials/admin/user-list',
            controller: 'mvUserListCtrl', resolve: routeRoleChecks.admin
        })
        .when('/signup', { templateUrl: '/partials/account/signup',
            controller: 'mvSignupCtrl'
        })
        .when('/signin', { templateUrl: '/partials/account/navbar-login',
            //controller: 'mvNavBarLoginCtrl'
        })
        .when('/technologies', { templateUrl: '/partials/techs/tech-list',
            controller: 'mvTechListCtrl'
        })
        .when('/profile', { templateUrl: '/partials/account/profile',
            controller: 'mvProfileCtrl', resolve: routeRoleChecks.user
        })
        .when('/courses', { templateUrl: '/partials/courses/course-list',
            controller: 'mvCourseListCtrl'
        })
        .when('/courses/:id', { templateUrl: '/partials/courses/course-details',
            controller: 'mvCourseDetailCtrl'
        })
        .when('/blog', { templateUrl: '/partials/blog/blog',
            controller: 'mvBlogListCtrl'
        })
        .when('/blog/post', { templateUrl: '/partials/blog/blogNewRecord',
            controller: 'mvBlogNewRecordCtrl'
        })
        .when('/blog/:id/edit', { templateUrl: '/partials/blog/blogEditRecord',
            controller: 'mvBlogEditRecordCtrl'//, resolve: routeRoleChecks.user
        })
        .when('/blog/:id/delete', { templateUrl: '/partials/blog/blogDeleteRecord',
            controller: 'mvBlogDeleteCtrl'//, resolve: routeRoleChecks.user
        })
        .when('/blog/:id', { templateUrl: '/partials/blog/blog-details',
            controller: 'mvBlogDetailCtrl'
        })
});

angular.module('app').run(function ($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function (evt, current, previous, rejection) {
        if (rejection === 'not authorized') {
            $location.path('/');
        }
    });
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.transitionState = "";
        $rootScope.transitionState = "active";
    });
});

angular.module('app').directive('syntaxElement', function () {
    return {
        restrict:'E',
        replace:true,
        template:
            '<div>' +
                '  <button type="button" class="btn btn-primary save" ng-disabled="!canSave()" ng-click="save()">Save</button>' +
            '</div>'
    };
});

angular.module('app').directive('goClick', function ($location) {
    return function (scope, element, attrs) {
        var path;

        attrs.$observe('goClick', function (val) {
            path = val;
        });

        element.bind('click', function () {
            scope.$apply(function () {
                $location.path(path);
            });
        });
    };
});


angular.module('app').directive('goClick', function ($location) {
    return function (scope, element, attrs) {
        var path;

        attrs.$observe('goClick', function (val) {
            path = val;
        });

        element.bind('click', function () {
            scope.$apply(function () {
                $location.path(path);
            });
        });
    };
});
angular.module('app').factory('mvAuth', function ($http, mvIdentity, $q, mvUser) {
    return {
        authenticateUser: function (username, password) {
            var dfd = $q.defer();
            $http.post('/login', {username: username, password: password}).then(function (response) {
                if (response.data.success) {
                    var user = new mvUser();
                    angular.extend(user, response.data.user);
                    mvIdentity.currentUser = user;
                    dfd.resolve(true);
                } else {
                    dfd.resolve(false);
                }
            });
            return dfd.promise;
        },

        createUser: function (newUserData) {
            var newUser = new mvUser(newUserData);
            var dfd = $q.defer();

            newUser.$save().then(function () {
                mvIdentity.currentUser = newUser;
                dfd.resolve();
            }, function (response) {
                dfd.reject(response.data.reason);
            });

            return dfd.promise;
        },

        updateCurrentUser: function (newUserData) {
            var dfd = $q.defer();

            var clone = angular.copy(mvIdentity.currentUser);
            console.log('object is ', newUserData);
            angular.extend(clone, newUserData);

            clone.$update().then(function () {
                mvIdentity.currentUser = clone;
                dfd.resolve();
            }, function (response) {
                dfd.reject(response.data.reason);
            });
            return dfd.promise;
        },

        logoutUser: function () {
            var dfd = $q.defer();
            $http.post('/logout', {logout: true}).then(function () {
                mvIdentity.currentUser = undefined;
                dfd.resolve();
            });
            return dfd.promise;
        },
        authorizeCurrentUserForRoute: function (role) {
            if (mvIdentity.isAuthorized(role)) {
                return true;
            } else {
                return $q.reject('not authorized');
            }

        },
        authorizeAuthenticatedUserForRoute: function () {
            if (mvIdentity.isAuthenticated()) {
                return true;
            } else {
                return $q.reject('not authorized');
            }
        }
    }
});
angular.module('app').factory('mvIdentity', function ($window, mvUser) {
    var currentUser;
    if (!!$window.bootstrappedUserObject) {
        currentUser = new mvUser();
        angular.extend(currentUser, $window.bootstrappedUserObject);
    }
    return {
        currentUser: currentUser,
        isAuthenticated: function () {
            return !!this.currentUser;
        },
        isAuthorized: function (role) {
            return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
        }
    }
})
angular.module('app').controller('mvNavBarLoginCtrl', function ($scope, $http, mvIdentity, mvNotifier, mvAuth, $location) {
    $scope.identity = mvIdentity;
    $scope.signin = function (username, password) {
        mvAuth.authenticateUser(username, password).then(function (success) {
            if (success) {
                mvNotifier.notify('You have successfully signed in!');
            } else {
                mvNotifier.notify('Username/Password combination incorrect');
            }
        });
    }

    $scope.signout = function () {
        mvAuth.logoutUser().then(function () {
            $scope.username = "";
            $scope.password = "";
            mvNotifier.notify('You have successfully signed out!');
            $location.path('/');
        })
    }
});
angular.module('app').controller('mvProfileCtrl', function ($scope, mvAuth, mvIdentity, mvNotifier) {
    $scope.email = mvIdentity.currentUser.username;
    $scope.fname = mvIdentity.currentUser.firstName;
    $scope.lname = mvIdentity.currentUser.lastName;

    $scope.update = function () {
        var newUserData = {
            username: $scope.email,
            firstName: $scope.fname,
            lastName: $scope.lname
        }
        if ($scope.password && $scope.password.length > 0) {
            newUserData.password = $scope.password;
        }

        mvAuth.updateCurrentUser(newUserData).then(function () {
            mvNotifier.notify('Your user account has been updated');
        }, function (reason) {
            mvNotifier.error(reason);
        })
    }
})
angular.module('app').controller('mvSignupCtrl', function ($scope, mvUser, mvNotifier, $location, mvAuth) {

    $scope.signup = function () {
        var newUserData = {
            username: $scope.email,
            password: $scope.password,
            firstName: $scope.fname,
            lastName: $scope.lname
        };

        mvAuth.createUser(newUserData).then(function () {
            mvNotifier.notify('User account created!');
            $location.path('/');
        }, function (reason) {
            mvNotifier.error(reason);
        })
    }
})
angular.module('app').factory('mvUser', function ($resource) {
    var UserResource = $resource('/api/users/:id', {_id: "@id"}, {
        update: {method: 'PUT', isArray: false}
    });

    UserResource.prototype.isAdmin = function () {
        return this.roles && this.roles.indexOf('admin') > -1;
    }

    return UserResource;
});
angular.module('app').controller('mvUserListCtrl', function ($scope, mvUser) {
    $scope.users = mvUser.query();
});
angular.module('app').controller('mvBlogDeleteCtrl', function ($scope, mvBlogRecord, mvCachedBlog, mvNotifier, $location, mvBlogq, $routeParams) {

    $scope.deletePost = function () {


        mvBlogq.deleteBlogRecord($routeParams.id).then(function () {
            mvNotifier.notify('Blog post deleted!');
            mvCachedBlog.refresh();
            $location.path('/blog');
        }, function (reason) {
            mvNotifier.error(reason);
        })
}
})
angular.module('app').controller('mvBlogDetailCtrl', function ($scope, mvCachedBlog, $routeParams) {
    mvCachedBlog.query().$promise.then(function (collection) {
        collection.forEach(function (blogrecord) {
            if (blogrecord._id === $routeParams.id) {
                $scope.blogrecord = blogrecord;
            }
        })
    })
});
angular.module('app').controller('mvBlogEditRecordCtrl', function ($scope, mvCachedBlog, $routeParams, mvBlogq, mvBlogRecordCur, mvBlogRecord, mvNotifier) {
    /*$scope.title = mvBlogRecordCur.currentBlogRecord.title;
    $scope.text = mvBlogRecordCur.currentBlogRecord.text;
    $scope.author = mvBlogRecordCur.currentBlogRecord.author;*/

    mvCachedBlog.query().$promise.then(function (collection) {
        collection.forEach(function (blogrecord) {
            if (blogrecord._id === $routeParams.id) {
                //$scope.blogrecord = blogrecord;
                $scope.blogrecord = mvBlogRecord.get({id:$routeParams.id});
                mvBlogRecordCur.currentBlogRecord = $scope.blogrecord;
            }
        })
    })

    $scope.update = function () {
        var newBlogRecordData = {
            title: $scope.blogrecord.title,
            text: $scope.blogrecord.text,
            author: $scope.blogrecord.author
        }

        mvBlogq.updateCurrentBlogRecord(newBlogRecordData).then(function () {
            mvNotifier.notify('Post has been updated');
            mvCachedBlog.refresh();
        }, function (reason) {
            mvNotifier.error(reason);
        })
    }
})
angular.module('app').controller('mvBlogListCtrl', function ($scope, mvCachedBlog) {
    $scope.blog = mvCachedBlog.query();

    $scope.sortOptions = [
        {value: "title", text: "Sort by Title"},
        {value: "-published", text: "Sort by Publish Date"}
    ];
    $scope.sortOrder = $scope.sortOptions[1].value;

    $scope.sOrder = function(newSortingOrder)
    {
        $scope.sortOrder = newSortingOrder;
        $scope.reverse =! $scope.reverse;
    };
});
angular.module('app').controller('mvBlogNewRecordCtrl', function ($scope, mvBlogRecord, mvCachedBlog, mvNotifier, $location, mvBlogq) {

    $scope.createPost = function () {
        var newRecord = {
            title: $scope.title,
            text: $scope.text,
            author: $scope.author
        };

        mvBlogq.createBlogRecord(newRecord).then(function () {
            mvNotifier.notify('Blog post created!');
            mvCachedBlog.refresh();
            $location.path('/blog');
        }, function (reason) {
            mvNotifier.error(reason);
        })
}
})
angular.module('app').factory('mvBlogRecord', function ($resource) {
    var BlogRecordResource = $resource('/api/blog/:id', {_id: "@id"}, {
        update: {method: 'PUT', isArray: false}
    });

    BlogRecordResource.prototype.isAdmin = function () {
        return this.roles && this.roles.indexOf('admin') > -1;
    }

    return BlogRecordResource;
});


angular.module('app').factory('mvBlogRecordCur', function (mvBlogRecord) {
    var currentBlogRecord;
            currentBlogRecord = new mvBlogRecord();


    return {
        currentBlogRecord: currentBlogRecord

    }
});

angular.module('app').factory('mvBlogq', function ($http, mvBlogRecordCur, $q, mvBlogRecord) {
    return {

        createBlogRecord: function (newRecord) {
            var newBlogRecord = new mvBlogRecord(newRecord);
            var dfd = $q.defer();

            newBlogRecord.$save().then(function () {
                //mvIdentity.currentUser = newUser;
                dfd.resolve();
            }, function (response) {
                dfd.reject(response.data.reason);
            });

            return dfd.promise;
        },

        updateCurrentBlogRecord: function (newBlogRecordData) {
            var dfd = $q.defer();
            var clone = angular.copy(mvBlogRecordCur.currentBlogRecord);

            angular.extend(clone, newBlogRecordData);
            console.log('object is ', clone);
            clone.$update().then(function () {
                //mvIdentity.currentUser = clone;
                dfd.resolve();
            }, function (response) {
                dfd.reject(response.data.reason);
            });
            return dfd.promise;
        },

        deleteBlogRecord: function (id) {
            //var newBlogRecord = new mvBlogRecord(newRecord);
            var dfd = $q.defer();

            mvBlogRecord.remove({id: id}
                ,function (err) {
                    if (!err) {dfd.resolve();}
                    else {dfd.reject(err.data.reason);}
                }
            );

            return dfd.promise;
        }
    }
});
angular.module('app').factory('mvCachedBlog', function (mvBlogRecord) {
    var blogList;

    return {
        query: function () {
            if (!blogList) {
                blogList = mvBlogRecord.query();
            }

            return blogList;
        },
        refresh: function() {
            blogList = mvBlogRecord.query();
        }
    }
})
angular.module('app').value('mvToastr', toastr);

angular.module('app').factory('mvNotifier', function (mvToastr) {
    return {
        notify: function (msg) {
            mvToastr.success(msg);
            console.log(msg);
        },
        error: function (msg) {
            mvToastr.error(msg);
            console.log(msg);
        }
    }
})
angular.module('app').factory('mvCachedCourses', function (mvCourse) {
    var courseList;

    return {
        query: function () {
            if (!courseList) {
                courseList = mvCourse.query();
            }

            return courseList;
        }
    }
})
angular.module('app').factory('mvCourse', function ($resource) {
    var CourseResource = $resource('/api/courses/:_id', {_id: "@id"}, {
        update: {method: 'PUT', isArray: false}
    });

    return CourseResource;
});
angular.module('app').controller('mvCourseDetailCtrl', function ($scope, mvCachedCourses, $routeParams) {
    mvCachedCourses.query().$promise.then(function (collection) {
        collection.forEach(function (course) {
            if (course._id === $routeParams.id) {
                $scope.course = course;
            }
        })
    })
});
angular.module('app').controller('mvCourseListCtrl', function ($scope, mvCachedCourses) {
    $scope.courses = mvCachedCourses.query();

    $scope.sortOptions = [
        {value: "title", text: "Sort by Title"},
        {value: "published", text: "Sort by Publish Date"}
    ];
    $scope.sortOrder = $scope.sortOptions[0].value;
});
angular.module('app').controller('mvMainAboutCtrl', function ($scope, $interval) {
    var stop = $interval(function () {
        color_cycle();
    }, 3000);

    var color_cycle = function () {
        try {
            var e = document.getElementById("aboutMeIntro").getElementsByTagName("span");
            var bg = document.getElementById("aboutMeIntro");
            for (var n = e.length - 1; n >= 0; n--) {
                e[n].style.color = Please.make_color({saturation: .7, value: .7});
            }
            bg.style.backgroundColor = Please.make_color({saturation: .4, value: .4});
        } catch (error) {
//            console.log(error);
            if (angular.isDefined(stop)) {
                $interval.cancel(stop);
                stop = undefined;
            }
        }

    };
    color_cycle();


    //$scope.courses = mvCachedCourses.query();
});
angular.module('app').controller('mvMainCtrl', function ($scope, mvCachedBlog, mvCachedTechs) {
    $scope.techs = mvCachedTechs.query();
    $scope.blogrecords = mvCachedBlog.query();
});
angular.module('app').factory('mvCachedTechs', function (mvTech) {
    var TechList;

    return {
        query: function () {
            if (!TechList) {
                TechList = mvTech.query();
            }

            return TechList;
        }
    }
})
angular.module('app').factory('mvTech', function ($resource) {
    var TechResource = $resource('/api/techs/:_id', {_id: "@id"}, {
        update: {method: 'PUT', isArray: false}
    });

    return TechResource;
});
angular.module('app').controller('mvTechListCtrl', function ($scope, mvCachedTechs) {
    $scope.techs = mvCachedTechs.query();

    $scope.sortOptions = [
        {value: "name", text: "Sort by Name"},
        {value: "released", text: "Sort by Release Date"}
    ];
    $scope.sortOrder = $scope.sortOptions[0].value;
});
angular.module('templates.app', []);


angular.module('templates.common', []);

