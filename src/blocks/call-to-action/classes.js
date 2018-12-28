/**
 * Set inline CSS class.
 * @param {object} props - The block object.
 * @return {array} The inline CSS class.
 */

function CtaPositionClasses( attributes ) {

	
	var iconimgStyle_class = ""

	iconimgStyle_class += "uagb-cta-block"+ " "
	iconimgStyle_class += "uagb-cta-block-icon-"+attributes.ctaPosition+ " "

	if( attributes.ctaPosition === "left" || attributes.ctaPosition === "left-title"  ){
		iconimgStyle_class +="uagb-cta-block-left"+ " "
	}

	if( attributes.ctaPosition === "right" || attributes.ctaPosition === "right-title"  ){
		iconimgStyle_class +="uagb-cta-block-right"+ " "
	}

	if( ( attributes.ctaPosition === "left" || attributes.ctaPosition === "right" ) && attributes.stack !== "none"  ){
		iconimgStyle_class +="uagb-cta-block-stacked-"+attributes.stack+ " "
		if( attributes.ctaPosition === "right" ){
			iconimgStyle_class += "uagb-cta-block-reverse-order-"+attributes.stack+ " "
		}
	}

	if( attributes.ctaPosition !== "above-title" || attributes.ctaPosition !== "below-title"  ){
		iconimgStyle_class += "uagb-cta-block-image-valign-"+attributes.sourceAlign+ " "
	}

	if( attributes.enableBorder ){
		iconimgStyle_class += "uagb-cta-block-enable-border"+ " "
	}

	iconimgStyle_class += "uagb-cta-block-enable-border-radius"+ " "

	return [
		iconimgStyle_class        
	]
}

export default CtaPositionClasses
