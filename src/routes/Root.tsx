import { Typography } from '@mui/material';
import BaseLayout from '../layouts/BaseLayout.tsx';
import DebouncedSearch from '../components/DebouncedSearch.tsx';
import SearchResultList from '../components/SearchResultList.tsx';
import { useState } from 'react';

const Root = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = (value: string) => setQuery(value);
  
  return (
    <BaseLayout>
      <Typography variant="h4" mb={3}>
        Search Github repositories
      </Typography>
      <DebouncedSearch onChange={handleQueryChange} />
      <SearchResultList query={query} />
    </BaseLayout>
  );
};

export default Root;
