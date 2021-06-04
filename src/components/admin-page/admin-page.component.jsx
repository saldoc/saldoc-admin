import React from 'react'
import { ProductTableContainer } from 'containers/product-table.container'
import ProductForm from 'components/product-form/product-form.component'

import './admin-page.styles.scss'

const AdminPage = () => {
	return (
		<div className="admin-page-container">
			<ProductForm />
			<ProductTableContainer />
		</div>
	)
}

export default AdminPage
