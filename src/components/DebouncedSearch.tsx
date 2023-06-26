import { InputBase, alpha, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import useDebounce from '../hooks/useDebounce';

const StyledSearch = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  marginLeft: 0,
  width: '100%',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
}));

const StyledIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

interface SearchProps {
  initialValue?: string;
  onChange: (value: string) => void;
}

const Search = ({ initialValue = '', onChange }: SearchProps) => {
  const [value, setValue] = useState(initialValue);

  const debouncedOnChange = useDebounce(() => onChange(value));

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    debouncedOnChange();
    setValue(e.target.value);
  };

  return (
    <StyledSearch>
      <StyledIconWrapper>
        <SearchIcon />
      </StyledIconWrapper>
      <StyledInputBase
        value={value}
        onChange={handleChange}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </StyledSearch>
  );
};

export default Search;
