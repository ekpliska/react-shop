import React from 'react';
import { connect } from 'react-redux';
import { setBooks } from './actions/book';

class App extends React.Component {
	render() {
		// console.log(this.props);
		const { books } = this.props.books;
		const { setBooks } = this.props;
		const newBook = [
			{
				id: 0,
				title: 'New Book'
			}
		];
		return (
			<div>
				<h1>
					{books[0].title}
				</h1>
				<button onClick={setBooks.bind(this, newBook)}>
					Сменить заголовок
				</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	...state
});

const mapDispatchToProps = dispatch => ({
	setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
