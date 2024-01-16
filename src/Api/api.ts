type resultItems = {
   name: string,
   url: string
}

interface getData {
   count: number,
   next: string,
   previous: null | string,
   results: resultItems[]
}

export const getDateFromApi = async (limit: number = 10): Promise<getData> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=0`
  );
  const data = await response.json();
  return data
};


export const getItems = async (): Promise<void> => {
   const items = (await getDateFromApi()).results
   console.log(items);

}

// const getPokemon = async (res) => {
//    res.map(async el => {
//        const result = await axios.get(el.url)
//        setPokeData(state => {

//            state = [...state, result.data];
//            state.sort((a, b) => a.id - b.id)
//            return state;
//        })
//    })
// }