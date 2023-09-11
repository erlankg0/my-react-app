import './App.css'
import Footer from './footer'
import HeaderComponent from './header'
import './style.css' // import style
import Technologies from './technologies'

// Компонент - это функция или класс, который возвращающая разметку (JSX)

const App = () => {
	return (
		<div className='App container'>
			<section className='nav'>{HeaderComponent()}</section>
			<section>
				<div className='container'>{Technologies()}</div>
			</section>
			<section>
				<div className='container'>{Footer()}</div>
			</section>
		</div>
	)
}

export default App
