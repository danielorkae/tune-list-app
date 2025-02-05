import { Music } from "@/app/domain/music";

export const loadFavorites = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

export const saveFavorites = (favorites: Music[]) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};
