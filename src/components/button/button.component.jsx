import React from 'react'

import './button.styles.scss'

const Button = ({ children, btnType, ...otherProps }) => {
	return (
		<button className={`${btnType ? btnType : ''} custom-btn`} {...otherProps}>
			{children}
		</button>
	)
}

export default Button
