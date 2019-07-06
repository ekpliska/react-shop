// Список всех книг

const initialState = {
    isReady: false,
    items: null,
    filterBy: 'all'
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
        case 'SET_FILTER':
            return {
                ...state,
                filterBy: action.payload
            };
        default:
            return state;
    }
}