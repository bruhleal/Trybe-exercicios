const INITIAL_STATE = {
  isloading: false,
  character: '',
}

function characterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // Primeira condição sinaliza o sucesso da requisição a API
    case 'SEARCH_BEGIN ':
      return {
       ...state,
       isloading: true,
      }
      // Indica a resposta do retorno a API
    case 'SEARCH_SUCESS':
      return {
        ...state,
        isloading: false,
        character: action.character[0],
      }
      // Indica que a resposta indica algum erro
      case 'SEARCH_ERROR': 
        return {
          isloading: false,
          error: action.error,
        }
        default:
          return state
  }
}

export default characterReducer;