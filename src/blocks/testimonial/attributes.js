/**
 * BLOCK: UAGB Section Attributes
 */

const ITEM_COUNT = 3

const testimonial_block = []

for (var i = 1; i <= ITEM_COUNT; i++) {
	var desc_text = "I have been working with these guys since years now! With lots of hard work and timely communication they made sure they delivered the best to me. Highly recommended!"
	var author_text    = "John Doe "
	var company_text    = "Company"+i
	testimonial_block.push(
		{
			"description": desc_text,
			"name": author_text,
			"company": company_text,
			"image": "",
		}
	)
}

const attributes = {
	test_item_count: {
		type: "number",
		default: ITEM_COUNT
	},
	test_block: {
		type: "array",
		default : testimonial_block,
	},	
	headingAlign: {
		type: "string",
		default: "center",
	},
	descColor: {
		type: "string",
		default: "#333"
	},
	companyColor: {
		type: "string",
		default: "#888888"		
	},	
	authorColor: {
		type: "string",
		default: "#333"		
	},		
	iconimgStyle: {
		type: "string",
		default: "circle"
	},	
	imagePosition:{
		type: "string",
		default: "bottom"
	},	
	imageAlignment:{
		type: "string",
		default: "top"
	},
	authorFontSize: {
		type: "number",
	},
	nameFontSize:{
		type: "number",
	},	
	companyFontSize: {
		type: "number",
		default: 15
	},
	descFontSize: {
		type: "number",
	},
	nameSpace: {
		type: "number",
		default : 5
	},	
	descSpace: {
		type: "number",
		default : 15
	},		
	block_id :{
		type : "string",
		default : "not_set"
	},	
	authorSpace :{
		type: "number",
		default: 5,
	},
	imgVrPadding :{
		type: "number",
		default: 10,
	},
	imgHrPadding :{
		type: "number",
		default: 10,
	},
	imgTopPadding :{
		type: "number",
		default: 10,
	},
	imgBottomPadding :{
		type: "number",
		default: 10,
	},
	iconImage: {
		type: "object",
		default:{
			"url": "",
			"alt": "InfoBox placeholder img",
		}
	},
	imageSize:{
		type: "string",
		default: "thumbnail",
	},
	imageWidth :{
		type: "number",
		default: 60,
	},	
	columns :{
		type: "number",
		default: 1,
	},	
	tcolumns :{
		type: "number",
		default: 1,
	},	
	mcolumns :{
		type: "number",
		default: 1,
	},
	pauseOnHover: {
		type: "boolean",
		default: true,
	},	
	infiniteLoop: {
		type: "boolean",
		default: true,
	},
	transitionSpeed :{
		type: "number",
		default: 500,
	},
	autoplay: {
		type: "boolean",
		default: true,
	},
	autoplaySpeed :{
		type: "number",
		default: 2000,
	},
	arrowSize :{
		type: "number",
		default: 20,
	},
	arrowColor :{
		type: "string",
		default: "#aaaaaa",
	},	
	rowGap: {
		type: "number",
		default : 10
	},
	columnGap: {
		type: "number",
		default : 10
	},	
	contentPadding: {
		type: "number",
		default : 5
	},	
	backgroundType: {
		type: "string",
	},
	backgroundImage: {
		type: "object",
	},
	backgroundPosition: {
		type: "string",
		default: "center-center"
	},
	backgroundSize: {
		type: "string",
		default: "cover"
	},
	backgroundRepeat: {
		type: "string",
		default: "no-repeat"
	},	
	backgroundColor:{
		type: "string"
	},
	backgroundImageColor: {
		type: "string"
	},
	borderStyle : {
		type: "string",
		default: "none"
	},
	borderWidth : {
		type: "number",
		default: "1"
	},
	borderRadius : {
		type: "number"
	},
	borderColor : {
		type: "string"
	},	
	backgroundOpacity:{
		type: "number",
		default: 0
	},
	arrowColor:{
		type: "string",
		default: "#333"
	},
	stack: {
		type: "string",
		default: "tablet"
	}
}

export default attributes
