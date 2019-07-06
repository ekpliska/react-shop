import React from 'react';
import axios from 'axios';
import { Container, Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Menu from './Menu';
import BookCart from './BookCart';
import '../App.css';
import Filter from './Filter';

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
				<Filter />
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

export default App;
