export type Item = {
   name: string;
   id: number;
   weight: number;
   height: number;
   sprites: {
     front_default: string;
     back_default: string;
   };
 };

export type PaginationType = {
  next: string | null;
  prev: string | null;
  currentPage: number;
  maxPage: number;
  offset: string;
  limit: string;
};