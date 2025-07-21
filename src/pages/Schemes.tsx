import { Typography, Box, Card, CardContent, CardActionArea } from '@mui/material';

const demoSchemes = [
  { name: 'Схема электропроводки Toyota Camry', description: 'Полная интерактивная схема для Toyota Camry 2018.' },
  { name: 'Схема ABS Ford Focus', description: 'Схема блока ABS для Ford Focus 2015.' },
];

export default function Schemes() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Электрические схемы
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Выберите интересующую схему для просмотра и взаимодействия.
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
        {demoSchemes.map((scheme, idx) => (
          <Card key={idx} sx={{ minWidth: 300, flex: '1 1 300px' }}>
            <CardActionArea>
              <CardContent>
                <Typography variant="h6">{scheme.name}</Typography>
                <Typography variant="body2" color="text.secondary">{scheme.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
