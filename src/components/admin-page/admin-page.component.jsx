import React from 'react'
import { ProductTableContainer } from 'containers/product-table.container'

import './admin-page.styles.scss'

const AdminPage = () => {
	return (
		<div className="admin-page-container">
			admin
			<ProductTableContainer />
		</div>
	)
}

export default AdminPage
