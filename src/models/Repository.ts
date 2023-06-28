import { SearchResultItem, Repository as _Repository } from "../__generated__/graphql";

export type Repository = Pick<
  Extract<SearchResultItem, _Repository>,
  'id' | 'name' | 'description' | 'url'
>;

export interface FavoriteRepository extends Repository {
  rating: number | null
}

