/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */

import inlineStyles from "./inline-styles"

function styling( props ) {

	const {
		backgroundType,
		backgroundVideoColor,
		backgroundImageColor,
		backgroundOpacity,
		backgroundVideoOpacity,
		backgroundVideo
	} = props.attributes

	var selectors = {
		".uagb-column__wrap" : inlineStyles( props ),
		" .uagb-column__video-wrap": {
			"opacity" : ( typeof backgroundVideoOpacity != "undefined" ) ? ( 100 - backgroundVideoOpacity )/100 : 0.5
		}
	}

	if ( "video" == backgroundType ) {
		selectors[" > .uagb-column__overlay"] = {
			"opacity" : 1,
			"background-color": backgroundVideoColor
		}
	} else if( "image" == backgroundType ) {
		selectors[" > .uagb-column__overlay"] = {
			"opacity" : ( typeof backgroundOpacity != "undefined" ) ? backgroundOpacity/100 : 0,
			"background-color": backgroundImageColor
		}
	} else {
		selectors[" > .uagb-column__overlay"] = {
			"opacity" : ( typeof backgroundOpacity != "undefined" ) ? backgroundOpacity/100 : 0
		}
	}

	var styling_css = ""

	for( var i in selectors ) {

		styling_css += `#uagb-column-${ props.clientId }`

		styling_css += i + " { "

		var sel = selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}

	return styling_css
}

export default styling
