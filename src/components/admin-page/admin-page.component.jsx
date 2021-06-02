import React, { useState } from 'react'
import { ProductTableContainer } from 'containers/product-table.container'
import Modal from 'components/modal/modal.components'
import Button from 'components/button/button.component'

import './admin-page.styles.scss'

const AdminPage = () => {
	const [isModalOpen, toggleModal] = useState(false)

	return (
		<div className="admin-page-container">
			<Button btnType="btn-outline" onClick={() => toggleModal(!isModalOpen)}>
				Toggle Modal
			</Button>
			<Modal title={'Title'} isOpen={isModalOpen} toggle={toggleModal}>
				<Modal.Body>
					This is a wider card with supporting text below as a natural lead-in
					to additional content. This card has even longer content than the
					first to show that equal height action. Lorem ipsum dolor sit, amet
					consectetur adipisicing elit. Nostrum ab ducimus doloremque amet
					molestias iusto qui perferendis nesciunt laborum obcaecati, ex
					laboriosam illo ipsam ullam rem tenetur quam excepturi vitae.
				</Modal.Body>
				<Modal.Footer>
					<Button btnType="btn-text danger" onClick={() => toggleModal(false)}>
						Cancel
					</Button>
					<Button onClick={() => toggleModal(false)}>Create</Button>
				</Modal.Footer>
			</Modal>
			<ProductTableContainer />
		</div>
	)
}

export default AdminPage
