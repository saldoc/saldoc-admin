import React from 'react'

import './button.styles.scss'

const Button = ({ children, btnType, extraClassName, ...otherProps }) => {
	let classNamesOfButton = `${btnType ? btnType : ''} 
	${extraClassName ? extraClassName : ''} btn`
		.replace(/\s+/g, ' ')
		.trim()

	return (
		<button className={classNamesOfButton} {...otherProps}>
			{children}
		</button>
	)
}

export default Button
