import { Typography, Container } from '@mui/material';

export default function Schemes() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>Интерактивные схемы автомобилей</Typography>
      <Typography variant="body1">Здесь будут интерактивные электрические схемы для разных моделей авто.</Typography>
    </Container>
  );
}
