const { decodeEntities } = wp.htmlEntities
const { __ } = wp.i18n

class Title extends React.Component {

	render() {

		const { post, attributes } = this.props

		const Tag = attributes.titleTag

		let target = ( attributes.newTab ) ? "_blank" : "_self"

		return (

			<Tag
				className={ "uagb-post__title" }
				style={{
					color: attributes.titleColor,
					fontSize: attributes.titleFontSize,
					marginBottom: attributes.titleBottomSpace
				}}
			>
				<a
					style={{
						color: attributes.titleColor,
						fontSize: attributes.titleFontSize
					}}
					href={ post.link }
					target={ target }
					rel ="noopener noreferrer">{ decodeEntities( post.title.rendered.trim() ) || __( "(Untitled)" ) }</a>
			</Tag>
		)
	}
}

export default Title
