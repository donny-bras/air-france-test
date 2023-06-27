import { ListItem, ListItemButton, ListItemText, Rating } from '@mui/material';
import { Repository } from '../models/Repository';

interface RepositoryItemProps extends Repository {
  style?: React.CSSProperties;
  action: React.ReactNode;
  rating?: number | null;
  onRatingChange?: (repoId: string, newRating: number | null) => void;
}

const RepositoryItem = ({
  id,
  url,
  name,
  description,
  style,
  action,
  rating,
  onRatingChange,
}: RepositoryItemProps) => {
  return (
    <ListItem style={style} disablePadding secondaryAction={action}>
      <ListItemButton component="a" href={url}>
        <ListItemText
          primary={name}
          secondary={description}
          secondaryTypographyProps={{
            sx: {
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            },
          }}
        />
        {!(rating === undefined) && (
          <Rating
            size="small"
            value={rating}
            onChange={(_, newValue) => onRatingChange?.(id, newValue)}
            sx={{ mr: 1 }}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
};

export default RepositoryItem;
