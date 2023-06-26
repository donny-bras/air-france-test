import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Repository } from '../models/Repository';

interface RepositoryItemProps extends Repository {
  style?: React.CSSProperties;
  action: React.ReactNode;
}

const RepositoryItem = ({
  url,
  name,
  description,
  style,
  action,
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
      </ListItemButton>
    </ListItem>
  );
};

export default RepositoryItem;
