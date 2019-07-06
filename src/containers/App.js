import { connect } from 'react-redux';
import * as booksActions from '../actions/book';
import { bindActionCreators } from 'redux';
import App from '../components/App';
import orderBy from 'lodash/orderBy';

const sortBy = (books, filterBy) => {
    switch (filterBy) {
        case 'all':
            return books;    
        case 'price_high':
            return orderBy(books, 'price', 'desc');
        case 'price_low':
            return orderBy(books, 'price', 'asc');
        case 'author':
            return orderBy(books, 'author', 'asc');
        default:
            return books;
    }
}

// const mapStateToProps = (state) => ({
// 	books: state.books.items,
// 	isReady: state.books.isReady
// });
const mapStateToProps = ({ books }) => ({
    books: sortBy(books.items, books.filterBy),
    isReady: books.isReady
});

// const mapDispatchToProps = dispatch => ({
// 	setBooks: books => dispatch({
// 		type: 'SET_BOOKS',
// 		payload: books
// 	})
// })
// const mapDispatchToProps = dispatch => ({
//     setBooks: books => dispatch(setBooks(books))
// });
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
