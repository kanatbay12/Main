import { Typography, Box, Paper } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <Paper elevation={3} sx={{ p: 4, mb: 3 }}>
        <Typography variant="h3" gutterBottom>
          Добро пожаловать!
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Ваш портал для работы с электрическими схемами авто, прошивками и обучающими материалами.
        </Typography>
      </Paper>
      <Typography variant="body1">
        Используйте навигацию сверху для перехода к интерактивным схемам, загрузке прошивок и обучающим статьям.
      </Typography>
    </Box>
  );
}
