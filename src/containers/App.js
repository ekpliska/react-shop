import { connect } from 'react-redux';
import { setBooks } from '../actions/book';
import App from '../components/App';
    
// const mapStateToProps = (state) => ({
// 	books: state.books.items,
// 	isReady: state.books.isReady
// });
const mapStateToProps = ({ books }) => ({
    books: books.items,
    isReady: books.isReady
});

// const mapDispatchToProps = dispatch => ({
// 	setBooks: books => dispatch({
// 		type: 'SET_BOOKS',
// 		payload: books
// 	})
// })
const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
