import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { routes } from 'routes'

import LoginFormInput from 'components/login-form-input/login-form-input.component'
import Button from 'components/button/button.component'

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

	const handleReset = () => {
		resetUser()
	}

	return (
		<div className="login-panel-container">
			<h2>Sign In</h2>
			{(() => {
				if (fetched) {
					if (users.length > 0 && users[0].password === password) {
						history.push(routes.admin.path)
						return <>Login Başarılı</>
					} else {
						return (
							<>
								Login Başarısız
								<Button btnType="primary" onClick={handleReset}>
									Return Login
								</Button>
							</>
						)
					}
				} else if (fetching) {
					return <>Sunucuya Erişim Sağlanıyor ....</>
				} else if (error) {
					return (
						<>
							Sunucuya Erişimda Hata oluştu
							<Button btnType="primary" onClick={handleReset}>
								Return Login
							</Button>
						</>
					)
				} else {
					return (
						<form
							className="login-form"
							onSubmit={handleSubmit}
							noValidate
							autoComplete="on">
							<LoginFormInput
								label="Username"
								placeholder="Enter Username"
								type="text"
								name="username"
								value={username}
								handleChange={(e) => setUseraname(e.target.value)}
								required
							/>
							<LoginFormInput
								label="Password"
								placeholder="Enter Password"
								type="password"
								name="password"
								value={password}
								handleChange={(e) => {
									setPassword(e.target.value)
								}}
								required
							/>
							<Button type="submit" btnType="primary">
								Sign In
							</Button>
						</form>
					)
				}
			})()}
		</div>
	)
}

export default LoginPanel
