import { Typography, Container } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom>Электросхемы авто, прошивки и обучение</Typography>
      <Typography variant="body1">Добро пожаловать! Здесь вы найдете интерактивные схемы, прошивки и обучающие материалы для автоэлектроники.</Typography>
    </Container>
  );
}
