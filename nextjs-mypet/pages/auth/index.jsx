import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Api from '../../lib/api'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'
import { useRouter } from 'next/router'

const defaultTheme = createTheme()

const Login = () => {
	const router = useRouter()

	const [isLogin, setIsLogin] = useState(true)

	const handleSubmit = async (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		if (isLogin) {
			await Api.login({ username: data.get('username'), password: data.get('password') })
			router.push('/')
		} else {
			await Api.registry({ username: data.get('username'), password: data.get('password') })
			setIsLogin(true)
		}
	}

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						{isLogin ? 'Sign in' : 'Sign up'}
					</Typography>
					<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
						<TextField
							margin="normal"
							required
							fullWidth
							id="username"
							label="User Name"
							name="username"
							autoComplete="username"
							autoFocus
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							{isLogin ? 'Sign In' : 'Sign Up'}
						</Button>
						<Grid container>
							<Grid item>
								<Link sx={{ cursor: 'pointer' }} variant="body2" onClick={() => setIsLogin(!isLogin)}>
									{isLogin ? 'Don\'t have an account? Sign Up' : 'Had an account! Sign In'}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	)
}

export default Login