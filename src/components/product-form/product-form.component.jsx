import React, { useState, useEffect } from 'react'
import Modal from 'components/modal/modal.components'
import Button from 'components/button/button.component'
import FormInput from 'components/form-input/form-input.component'

import './product-form.styles.scss'

const ProductForm = ({
	isModalOpen,
	title,
	applyTitle,
	handleModalApply,
	handleModalClose,
	selectedProduct,
}) => {
	const [productName, setProductName] = useState('')
	const [productPrice, setProductPrice] = useState('')
	const [productSalePrice, setProductSalePrice] = useState('')
	const [productLocation, setProductLocation] = useState('')

	const [modalProduct, setModalProduct] = useState({
		name: productName,
		price: productPrice,
		salePrice: productSalePrice,
		location: productLocation,
	})

	useEffect(() => {
		if (isModalOpen) {
			if (selectedProduct) {
				console.log('Selected Product', selectedProduct)
				setProductName(selectedProduct.name)
				setProductPrice(selectedProduct.price)
				setProductSalePrice(selectedProduct.priceSale)
				setProductLocation(selectedProduct.location)
			} else {
				console.log('Modal Product', modalProduct)
			}
		}
	}, [selectedProduct])

	//  Name, Price, PriceSale (price sale in price dan küçük olmasına dikkat edeceğiz ), Location

	const handleApply = () => {
		const newProduct = {}
		handleModalApply(newProduct)
	}

	return (
		<>
			<Modal title={title} isOpen={isModalOpen} toggle={handleModalClose}>
				<Modal.Body>
					<div className="row">
						<div className="col-12">
							<FormInput
								label="Product Name"
								placeholder="Enter Product Name"
								type="text"
								value={productName}
								onChange={(e) => setProductName(e.target.value)}
							/>
						</div>
						<div className="col-6">
							<FormInput
								label="Product Price"
								placeholder="Enter Product Price"
								type="text"
								value={productPrice}
								onChange={(e) => setProductPrice(e.target.value)}
							/>
						</div>
						<div className="col-6">
							<FormInput
								label="Product Sale Price"
								placeholder="Enter Sale Price"
								type="text"
								value={productSalePrice}
								onChange={(e) => setProductSalePrice(e.target.value)}
							/>
						</div>
						<div className="col-12">
							<FormInput
								label="Product Location"
								placeholder="Enter Product Location"
								type="text"
								value={productLocation}
								onChange={(e) => setProductLocation(e.target.value)}
							/>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button btnType="btn-outline cancel" onClick={() => handleApply()}>
						Cancel
					</Button>
					<Button onClick={() => handleModalClose(false)}>{applyTitle}</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default ProductForm
