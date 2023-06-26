import { Typography } from '@mui/material';
import BaseLayout from '../layouts/BaseLayout';
import FavoritesList from '../components/FavoriteList';

const Favorites = () => {
  return (
    <BaseLayout>
      <Typography variant="h4" mb={3}>
        My favorite repositories
      </Typography>
      <FavoritesList />
    </BaseLayout>
  );
};

export default Favorites;
