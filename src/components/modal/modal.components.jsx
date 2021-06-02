import React, { useEffect, useRef } from 'react'

import './modal.styles.scss'

function useOnClickOutside(ref, handler) {
	useEffect(() => {
		const listener = (event) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return
			}

			handler(event)
		}

		document.addEventListener('mousedown', listener)
		document.addEventListener('touchstart', listener)

		return () => {
			document.removeEventListener('mousedown', listener)
			document.removeEventListener('touchstart', listener)
		}
	}, [])
}

const Modal = ({ isOpen, toggle, title, children }) => {
	const ref = useRef()
	useOnClickOutside(ref, () => toggle(false))

	const body = React.Children.map(children, (child) =>
		child.type.displayName === 'Body' ? child : null
	)
	const footer = React.Children.map(children, (child) =>
		child.type.displayName === 'Footer' ? child : null
	)

	return isOpen ? (
		<div className="modal-container">
			<div className="modal" ref={ref}>
				<div className="modal-header">
					<h3>{title}</h3>
					<i onClick={() => toggle(false)} className="icon-close"></i>
				</div>
				<div className="modal-body">{body}</div>
				<div className="modal-footer">{footer}</div>
			</div>
		</div>
	) : null
}

const Body = ({ children }) => children
Body.displayName = 'Body'
Modal.Body = Body

const Footer = ({ children }) => children
Footer.displayName = 'Footer'
Modal.Footer = Footer

export default Modal
