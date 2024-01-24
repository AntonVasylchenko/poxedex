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

export const getDateFromApi = async (limit: number = 21): Promise<getData> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=0`);
  const data = await response.json();
  console.log(data);
  return data
};


export const getItems = async (): Promise<any[]> => {
   const items = (await getDateFromApi()).results
   getMaxCount((await getDateFromApi()).count)
   return await Promise.all(items.map( async item => await getSubDateFromApi(item.url)));
}


export const getMaxCount = async (max: number) => {
   console.log(max);
}

export const getSubDateFromApi = async (url: string): Promise<any[]> => {
   const subResponse = await fetch(url);
   const subResult = await subResponse.json();
   return subResult
}
