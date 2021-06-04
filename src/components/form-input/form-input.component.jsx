import React from 'react'

import './form-input.styles.scss'

const FormInput = ({ handleChange, required, label, ...otherProps }) => {
	return (
		<div className="form-group">
			{label ? <label className="form-label">{label}</label> : null}
			<input className="form-input" onChange={handleChange} {...otherProps} />
		</div>
	)
}

export default FormInput
