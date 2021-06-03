import React, { useState } from 'react'
import { ProductTableContainer } from 'containers/product-table.container'
import Modal from 'components/modal/modal.components'
import Button from 'components/button/button.component'
import FormInput from 'components/form-input/form-input.component'

import './admin-page.styles.scss'

const AdminPage = () => {
	const [isModalOpen, toggleModal] = useState(false)

	return (
		<div className="admin-page-container">
			<Button btnType="btn-outline" onClick={() => toggleModal(!isModalOpen)}>
				Toggle Modal
			</Button>
			<Modal title={'Create Product'} isOpen={isModalOpen} toggle={toggleModal}>
				<Modal.Body>
					{/* Name, Price, PriceSale (price sale in price dan küçük olmasına dikkat edeceğiz ), Location */}

					<div className="row">
						<div className="col-12">
							<FormInput
								label="Product Name"
								placeholder="Enter Product Name"
								type="text"
								value=""
								onChange={() => console.log('Product Name')}
							/>
						</div>
						<div className="col-6">
							<FormInput
								label="Product Price"
								placeholder="Enter Product Price"
								type="text"
								value=""
								onChange={() => console.log('Product Price')}
							/>
						</div>
						<div className="col-6">
							<FormInput
								label="Product Sale Price"
								placeholder="Enter Sale Price"
								type="text"
								value=""
								onChange={() => console.log('Product Sale Price')}
							/>
						</div>
						<div className="col-12">
							<FormInput
								label="Product Location"
								placeholder="Enter Product Location"
								type="text"
								value=""
								onChange={() => console.log('Product Location')}
							/>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button
						btnType="btn-outline cancel"
						onClick={() => toggleModal(false)}>
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
