import { Genre } from "../models";

export const getRequestPathName = (genre: Genre) => {
  return genre.toLocaleLowerCase();
};
