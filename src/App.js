import React from 'react';
import { connect } from 'react-redux';
import { setBooks } from './actions/book';
import axios from 'axios';

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
		const { books } = this.props;
		return (
			<ul>
				{
					!books
						? 'Загрузка...'
						: books.map((book, index) => {
							return (
								<li key={index}>
									<b>
										{book.title}
									</b> - 
									{book.author}
								</li>
							)
						})
				}
			</ul>
		)
	}
}

const mapStateToProps = ({ books }) => ({
	books: books.items
});

const mapDispatchToProps = dispatch => ({
	setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
