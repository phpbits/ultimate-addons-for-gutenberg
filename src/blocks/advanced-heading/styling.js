/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */

function styling( props ) {

	const {
		headingAlign,
		headingTag,
		headFontSize,
		headingColor,
		headSpace,
		separatorHeight,
		separatorWidth,
		separatorColor,
		separatorSpace,
		subHeadFontSize,
		subHeadingColor,
		subHeadSpace
	} = props.attributes

	var selectors = {
		" .uagb-separator-wrap": {
			"text-align": headingAlign,
		},
		" .uagb-separator": {
			"border-top-width": separatorHeight + "px",
			"width": separatorWidth + "%",
			"border-color": separatorColor,
			"margin-bottom": separatorSpace + "px",
		},
		" .editor-rich-text .uagb-desc-text": {
			"text-align": headingAlign,
			"font-size": subHeadFontSize + "px",
			"color": subHeadingColor,
			"margin-bottom": subHeadSpace + "px",
		}
	}

	selectors[" .editor-rich-text " + headingTag + ".uagb-heading-text"] = {
		"text-align": headingAlign,
		"font-size": headFontSize + "px",
		"color": headingColor,
		"margin-bottom": headSpace + "px",
	}

	var styling_css = ""

	for( var i in selectors ) {

		styling_css += `.gutenberg-editor-page #wpwrap #uagb-adv-heading-${ props.clientId }`

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
