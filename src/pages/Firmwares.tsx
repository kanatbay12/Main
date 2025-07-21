import { Typography, Container } from '@mui/material';

export default function Firmwares() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>Файлы прошивок</Typography>
      <Typography variant="body1">Каталог прошивок для различных электронных блоков автомобилей.</Typography>
    </Container>
  );
}
