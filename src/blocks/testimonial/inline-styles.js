/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
function TestimonialStyle( props ) {
    const {
            headingAlign,
            headingColor,
            subHeadingColor,
            prefixColor,
            prefixFontSize,
            headFontSize,
            subHeadFontSize,
            separatorWidth,
            headSpace,
            separatorSpace,
            subHeadSpace,
            block_id,
            iconHover,
            iconBgHover,
            iconimgBorderHover,
            iconimgBorder,
            iconimgBg,
            iconimgBorderstyle,
            iconimgBorderWidth,
            iconimgBorderRadius, 
            iconimgbgSize,  
            prefixSpace,
            iconLeftMargin,
            iconRightMargin,
            iconTopMargin,
            iconBottomMargin,            
            imageSize,  
            imageWidth,            
        } = props.attributes;        

        if( props.clientId ){
            var clientId = 'uagb-'+props.clientId;
        }else{
            var clientId = 'uagb-'+block_id;
        }

        var selectors = {};
            
            selectors['.uagb-testinomial-wrapper .uagb-testinomial-image-wrap'] = {
                    'margin-left' : iconLeftMargin+'px',
                    'margin-right' : iconRightMargin+'px',                                
                    'margin-top' : iconTopMargin+'px',
                    'margin-bottom' : iconBottomMargin+'px',
                }; 

            // Image
            selectors['.uagb-testinomial-image-content img'] = {
                    'width': imageWidth+'px',
                    'max-width': imageWidth+'px',
                }; 
          

            selectors['.uagb-testimonial-imgicon-style-custom .uagb-testinomial-image-content img'] = {                    
                        'border-style' : iconimgBorderstyle,
                        'border-width' : iconimgBorderWidth+'px',
                        'border-radius' : iconimgBorderRadius+'px',
                        'border-color' : iconimgBorder,
                    };

            selectors['.uagb-testimonial-imgicon-style-custom .uagb-testinomial-image-content img:hover'] = {
                    'border-color' : iconimgBorderHover,                                     
                };

            selectors['.uagb-testinomial-image-content .components-button svg'] = {
                    'width': imageWidth+'px',
                    'max-width': imageWidth+'px',
                }; 

            selectors['.uagb-testimonial-imgicon-style-circle .components-button svg'] = {                    
                        'margin-left' : iconLeftMargin+'px',
                        'margin-right' : iconRightMargin+'px',                                
                        'margin-top' : iconTopMargin+'px',
                        'margin-bottom' : iconBottomMargin+'px',                  
                    };

            selectors['.uagb-testimonial-imgicon-style-square .components-button svg'] = {                    
                        'margin-left' : iconLeftMargin+'px',
                        'margin-right' : iconRightMargin+'px',                                
                        'margin-top' : iconTopMargin+'px',
                        'margin-bottom' : iconBottomMargin+'px',                
                    };

            selectors['.uagb-testimonial-imgicon-style-custom .components-button svg'] = {                    
                        'padding' : iconimgbgSize+'px',
                        'background' : iconimgBg,
                        'border-style' : iconimgBorderstyle,
                        'border-width' : iconimgBorderWidth+'px',
                        'border-radius' : iconimgBorderRadius+'px',
                        'border-color' : iconimgBorder,
                        'margin-left' : iconLeftMargin+'px',
                        'margin-right' : iconRightMargin+'px',                                
                        'margin-top' : iconTopMargin+'px',
                        'margin-bottom' : iconBottomMargin+'px',                 
                    };          
            
           selectors['.uagb-testinomial-wrapper'] = {                    
                    'text-align' : headingAlign,                   
                };                       

            // Prefix Style
            selectors['.uagb-testinomial-author-name'] = {
                    'font-size' : prefixFontSize+'px',
                    'color': prefixColor,
                    'margin-bottom': prefixSpace+'px',
                };

            // Title Style
            selectors['.uagb-testinomial-designation'] = {
                    'font-size' : headFontSize+'px',
                    'color': headingColor,
                    'margin-bottom': headSpace+'px',
                };

            // Description Style
            selectors['p.uagb-testinomial-desc'] = {
                    'font-size' : subHeadFontSize+'px',
                    'color': subHeadingColor,
                    'margin-bottom': subHeadSpace+'px',
                };                     
               

        var styling_css = '';

        for( var i in selectors ) {
           
            styling_css += '.gutenberg-editor-page #wpwrap .'+clientId+' '+i + ' { ';
            
            
            var sel = selectors[i];
            var css = '';

            for( var j in sel ) {

                css += j + ': ' + sel[j] + ';';
            }

            styling_css += css + ' } ';
        }       

        return styling_css;

}

export default TestimonialStyle;
