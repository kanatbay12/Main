import { Typography, Box, List, ListItem, ListItemText, ListItemButton } from '@mui/material';

const demoFirmwares = [
  { name: 'Toyota Camry ECU v2.1', size: '2.4 MB' },
  { name: 'Ford Focus ABS v1.3', size: '1.1 MB' },
];

export default function Firmwares() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Файлы прошивок
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Скачайте необходимые прошивки для блоков управления вашего автомобиля.
      </Typography>
      <List>
        {demoFirmwares.map((fw, idx) => (
          <ListItem key={idx} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={fw.name}
                secondary={`Размер: ${fw.size}`}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
