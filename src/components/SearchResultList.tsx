import { Box, CircularProgress, IconButton, Typography } from '@mui/material';

import { useQuery, useReactiveVar } from '@apollo/client';
import { favoriteRepositoriesVar } from '../apollo/apollo-client';
import { Repository } from '../models/Repository';
import RepositoryItem from './RepositoryItem';
import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { GET_REPOSITORIES } from '../apollo/queries/getRepositories';
import { SearchType } from '../__generated__/graphql';

interface RepositoriesListProps {
  query: string;
}

const SearchResultList = ({ query }: RepositoriesListProps) => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    skip: !query,
    variables: {
      type: SearchType.Repository,
      query,
    },
  });
  const favoriteRepos = useReactiveVar(favoriteRepositoriesVar);

  const isFavorite = (repoId: string) => favoriteRepos.has(repoId);

  const handleFavorite = (repo: Repository) => {
    isFavorite(repo.id)
      ? favoriteRepos.delete(repo.id)
      : favoriteRepos.set(repo.id, { ...repo, rating: null });

    favoriteRepositoriesVar(new Map(favoriteRepos));
  };

  const renderRow = props => {
    const { data, index, style } = props;
    const repo = data[index];

    const action = (
      <IconButton onClick={() => handleFavorite(repo)}>
        {isFavorite(repo.id) ? (
          <FavoriteIcon color="error" />
        ) : (
          <FavoriteBorderIcon />
        )}
      </IconButton>
    );

    return <RepositoryItem style={style} action={action} {...repo} />;
  };

  let content;

  if (!query) {
    content = <Typography>Type something in the search.</Typography>;
  } else if (loading) {
    content = <CircularProgress />;
  } else if (error) {
    content = <Typography>An Error occurred. Please, try again.</Typography>;
  } else if (!data?.search.nodes?.length) {
    content = (
      <Typography>
        Nothing found for <i>"{query}"</i>.
      </Typography>
    );
  } else {
    content = (
      <Box sx={{ width: '100%', height: 'calc(100vh - 208px)' }}>
        <AutoSizer>
          {({ height, width }) => (
            <FixedSizeList
              height={height}
              width={width}
              itemSize={72}
              itemCount={data.search.nodes?.length ?? 0}
              itemData={data.search.nodes}
              overscanCount={5}
            >
              {renderRow}
            </FixedSizeList>
          )}
        </AutoSizer>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', mt: 2, justifyContent: 'center' }}>
      {content}
    </Box>
  );
};

export default SearchResultList;
