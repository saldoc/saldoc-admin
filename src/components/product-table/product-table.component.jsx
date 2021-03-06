import React, { useEffect, useState } from 'react'
import { useTable } from 'react-table'
import Button from 'components/button/button.component'
import ProductForm from 'components/product-form/product-form.component'
import './product-table.styles.scss'

const ProductTable = ({
	product,
	getProducts,
	deleteProduct,
	updateProduct,
}) => {
	const [isModalOpen, toggleModal] = useState(false)
	const [selectProduct, setSelectProduct] = useState(null)

	useEffect(() => {
		getProducts()
	}, [])

	const { products } = product

	const formatDate = (date) => {
		const formattedDate = new Date(date).toLocaleString()
		return formattedDate
	}

	const handleDelete = (id) => {
		deleteProduct(id)
		getProducts()
	}

	const handleModalApply = (product) => {
		console.log(product)
		// // product.updatedDate = new Date().getTime()
		// toggleModal(false)
		// setSelectProduct(null)
		// //updateProduct(product)
	}

	const handleEdit = (id) => {
		const selectedProduct = products.find((el) => el.id === id)
		if (selectedProduct) {
			toggleModal(true)
			setSelectProduct(selectedProduct)
		}
	}

	const columns = React.useMemo(
		() => [
			{
				Header: 'ID',
				accessor: 'id',
			},
			{
				Header: 'Product Name',
				accessor: 'Name',
			},
			{
				Header: 'Price',
				accessor: 'Price',
			},
			{
				Header: 'Price Sale',
				accessor: 'PriceSale',
			},
			{
				Header: 'Location',
				accessor: 'Location',
			},
			{
				Header: 'IsNew',
				accessor: 'IsNew',
				Cell: (props) => {
					return <span>{props.value ? 'true' : 'false'}</span>
				},
			},
			{
				Header: 'Creation Date',
				accessor: 'CreationDate',
				Cell: (props) => {
					const custom_date = formatDate(props.value)
					return <span>{custom_date}</span>
				},
			},
			{
				Header: 'Actions',
				accessor: '',
				Cell: (props) => {
					return (
						<div className="table-action-row">
							<Button
								btnType="btn-icon"
								onClick={() => handleEdit(props.row.values.id)}>
								<i className="icon-edit" />
							</Button>
							<Button
								btnType="btn-icon"
								onClick={() => handleDelete(props.row.values.id)}>
								<i className="icon-delete" />
							</Button>
						</div>
					)
				},
			},
		],
		[]
	)

	const data = React.useMemo(() => products, [])

	const tableInstance = useTable({ columns, data })

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		tableInstance

	return (
		<div>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>{column.render('Header')}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row, i) => {
						prepareRow(row)
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
								})}
							</tr>
						)
					})}
				</tbody>
			</table>
			<ProductForm
				isModalOpen={isModalOpen}
				selectedProduct={selectProduct}
				handleModalApply={handleModalApply}
				handleModalClose={toggleModal}
				title="Edit Product"
				applyTitle="Update"
			/>
		</div>
	)
}

export default ProductTable
