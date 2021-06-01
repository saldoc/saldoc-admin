import React, { useEffect } from 'react'
import { useTable } from 'react-table'
import Button from 'components/button/button.component'
import './product-table.styles.scss'

const ProductTable = ({ product, getProducts, deleteProduct }) => {
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
	}

	const columns = React.useMemo(
		() => [
			{
				Header: 'ID',
				accessor: 'ID',
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
				accessor: ' ',
				Cell: (props) => {
					return (
						<Button onClick={() => handleDelete(props.row.values.ID)}>
							Delete
						</Button>
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
		</div>
	)
}

export default ProductTable
