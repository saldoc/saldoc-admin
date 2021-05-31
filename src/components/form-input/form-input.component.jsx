import React from 'react'

import './form-input.styles.scss'

const FormInput = ({ handleChange, required, label, ...otherProps }) => {
	return (
		<div className="form-group">
			<input className="form-input" onChange={handleChange} {...otherProps} />
			{label ? (
				<label
					className={`${otherProps.value.length ? 'shrink' : ''} form-label`}>
					{label}
				</label>
			) : null}
		</div>
	)
}

export default FormInput
