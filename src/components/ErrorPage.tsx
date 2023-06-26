import { Container } from '@mui/material';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Container maxWidth='lg' sx={{textAlign: 'center'}}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
      <Link to='/'>Home</Link>
    </Container>
  );
};

export default ErrorPage;