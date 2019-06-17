import React from 'react';
import { connect } from 'react-redux';
import { setBooks } from './actions/book';
import axios from 'axios';
import { Container, Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Menu from './components/Menu';
import BookCart from './components/BookCart';
import './App.css';

class App extends React.Component {

	/**
	 * После того как компонент смонтировался,
	 * происходит http запрос, в котором получаем массив книг
	 * после чего передаем их в reducer books
	 */
	componentWillMount() {
		const { setBooks } = this.props;
		axios.get('/books.json').then(({ data }) => {
			setBooks(data);
		});
	}

	render() {
		const { books, isReady } = this.props;
		return (
			<Container>
				<Menu />
				<Card.Group itemsPerRow={4}>
					{
						!isReady
							? 'Загрузка...'
							: books.map((book, index) => {
								return (
									<BookCart key={index} {...book} />
								)
							})
					}
				</Card.Group>
			</Container>
		)
	}
}

const mapStateToProps = ({ books }) => ({
	books: books.items,
	isReady: books.isReady
});

const mapDispatchToProps = dispatch => ({
	setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
