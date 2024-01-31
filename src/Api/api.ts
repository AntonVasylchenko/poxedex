import { Item } from "../type/index";

type resultItems = {
  name: string;
  url: string;
};

type responseGetItems = {
  nextPage: null | string;
  prevPage: null | string;
  pages: number;
  items: Item[];
};

interface getData {
  count: number;
  next: null | string;
  previous: null | string;
  results: resultItems[];
}

export const getDateFromApi = async (offset:string = "0", limit: string = "9"): Promise<getData> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
  );
  const data = await response.json();
  return data;
};

export const getResponse = async (offset:string = "0", limit: string = "9"): Promise<responseGetItems> => {
  const { results, count, next, previous } = await getDateFromApi(offset,limit);
  
  const res = {
    nextPage: next,
    prevPage: previous,
    pages: await getMaxRequest(count, Number(limit)),
    items: await Promise.all(
      results.map(async (result) => await getSubDateFromApi(result.url))
    ),
  };
  return res;
};

export const getMaxRequest = async (max: number, limit: number) => {
  return Math.ceil(max / limit);
};

export const getSubDateFromApi = async (url: string): Promise<Item> => {
  const subResponse = await fetch(url);
  const subResult = await subResponse.json();
  return subResult;
};
