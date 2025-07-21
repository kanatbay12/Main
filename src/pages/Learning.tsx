import { Typography, Container } from '@mui/material';

export default function Learning() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>Материалы для обучения</Typography>
      <Typography variant="body1">Статьи, видео и инструкции по автоэлектронике и диагностике.</Typography>
    </Container>
  );
}
