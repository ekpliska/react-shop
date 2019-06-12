// Список всех книг

const initialState = {
    books: [
        {
            id: 0,
            title: 'Title book 1'
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BOOKS':
            return {
                ...state,   // Возвращаем все состояние
                books: action.payload   // А затем, books заменяем на то что пришло
            };
        case 'ADD_BOOK':
            return {
                ...state,
                books: [
                    ...state.books,
                    action.payload
                ]
            };
        default:
            return state;
    }
}