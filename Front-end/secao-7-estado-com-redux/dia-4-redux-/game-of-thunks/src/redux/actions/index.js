export const searchBegin = () => ({
  type: 'SEARCH_BEGIN' 
 });
 
 export const searchSuccess = (character) => ({
   type: 'SEARCH_SUCESS', character 
  });
 
  export const searchError = (error) => ({
   type: 'SEARCH_ERROR', error 
  });
  
 
  export function thunkCharacter(name) {
   return async (dispatch) => {
     try {
       dispatch(searchBegin());
       const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${name}`);
       const data = await response.json();
       dispatch(searchSuccess(data))
     } catch (error) {
       dispatch(searchError(error))
     }
   };
  };
  