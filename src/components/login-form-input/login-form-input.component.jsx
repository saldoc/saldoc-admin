import React from 'react'

import './login-form-input.styles.scss'

const LoginFormInput = ({ handleChange, required, label, ...otherProps }) => {
	return (
		<div className="login-form-group">
			<input
				className="login-form-input"
				onChange={handleChange}
				{...otherProps}
			/>
			{label ? (
				<label
					className={`${
						otherProps.value.length ? 'shrink' : ''
					} login-form-label`}>
					{label}
				</label>
			) : null}
		</div>
	)
}

export default LoginFormInput
