import { IconButton, List, Typography } from '@mui/material';
import RepositoryItem from './RepositoryItem';
import { useReactiveVar } from '@apollo/client';
import { favoriteRepositoriesVar } from '../apollo/apollo-client';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const FavoritesList = () => {
  const favoriteRepos = useReactiveVar(favoriteRepositoriesVar);

  const handleDelete = (repoId: string) => {
    favoriteRepos.delete(repoId);
    favoriteRepositoriesVar(new Map(favoriteRepos));
  };

  return favoriteRepos.size > 0 ? (
    <List>
      {[...favoriteRepos.values()].map(repo => (
        <RepositoryItem
          {...repo}
          key={repo.id}
          action={
            <IconButton onClick={() => handleDelete(repo.id)}>
              <DeleteForeverIcon />
            </IconButton>
          }
        />
      ))}
    </List>
  ) : (
    <Typography>No favorite repositories yet.</Typography>
  );
};

export default FavoritesList;
