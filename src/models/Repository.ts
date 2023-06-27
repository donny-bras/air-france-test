export interface Repository {
  id: string;
  name: string;
  description: string;
  url: string;
}

export interface FavoriteRepository extends Repository {
  rating: number | null
}
