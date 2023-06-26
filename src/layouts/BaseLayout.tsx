import {
  Box,
  Container,
  CssBaseline,
} from '@mui/material';
import Header from '../components/Header';

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Box>
      <CssBaseline />
      <Header />
      <Container maxWidth="md" component="main" sx={{ pt: 3, px: 3 }}>
        {children}
      </Container>
    </Box>
  );
};

export default BaseLayout;
