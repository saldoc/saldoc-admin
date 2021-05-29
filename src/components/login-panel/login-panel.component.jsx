import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useHistory } from 'react-router-dom'
import { routes } from 'routes'
import './login-panel.styles.scss'

const LoginPanel = ({ resetUser, getUser, user }) => {
	let history = useHistory()

	const [username, setUseraname] = useState('')
	const [password, setPassword] = useState('')
	const { users, fetching, fetched, error } = user

	const handleSubmit = (e) => {
		e.preventDefault()
		getUser(username)
	}

	const handleReset = (e) => {
		resetUser()
	}

	if (fetched) {
		if (users.length > 0 && users[0].password === password) {
			console.log('oldu')
			history.push(routes.admin.path)
			return <div>Login Başarılı</div>
		} else {
			return (
				<div>
					Login Başarısız
					<button onClick={handleReset}>Return Login</button>
				</div>
			)
		}
	} else if (fetching) {
		return (
			<div>
				Sunucuya Erişim Sağlanıyor ....
				<button onClick={handleReset}>Return Login</button>
			</div>
		)
	} else if (error) {
		return (
			<div>
				Sunucuya Erişimda Hata oluştu
				<button onClick={handleReset}>Return Login</button>
			</div>
		)
	} else {
		return (
			<div className="login-panel-container">
				<form
					className="login-form"
					onSubmit={handleSubmit}
					noValidate
					autoComplete="on">
					<TextField
						fullWidth
						required
						label="Username"
						onChange={(e) => {
							setUseraname(e.target.value)
						}}
					/>
					<TextField
						fullWidth
						required
						label="Password"
						type="password"
						autoComplete="current-password"
						onChange={(e) => {
							setPassword(e.target.value)
						}}
					/>
					<Button type="submit" color="primary">
						Primary
					</Button>
				</form>
			</div>
		)
	}
}

export default LoginPanel
