// Список всех книг

const initialState = {
    isReady: false,
    items: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BOOKS':
            return {
                ...state,   // Возвращаем все состояние
                items: action.payload,   // А затем, books заменяем на то что пришло
                isReady: true
            };
        case 'SET_IS_READY':
            return {
                ...state,
                isReady: action.payload
            }
        case 'ADD_BOOK':
            return {
                ...state,
                items: [
                    ...state.books,
                    action.payload
                ]
            };
        default:
            return state;
    }
}