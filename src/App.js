import logo from './logo.svg'
import './App.css'
import './style.css' // import style

// Компонент - это функция или класс, который возвращающая разметку (JSX)

const headerComponent = () => {
	return (
		<header>
			<ul>
				<li>
					<a>Home</a>
				</li>
				<li>
					<a>Main</a>
				</li>
				<li>
					<a>Shop</a>
				</li>
				<li>
					<a>Login</a>
				</li>
			</ul>
		</header>
	)
}

const App = () => {
	return (
		<div className='App'>
			<header className='App-header'>
				{headerComponent()}
				<img src={logo} className='App-logo' alt='logo' />
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	)
}


export default App
