import { Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Learning() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Материалы для обучения
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Изучайте статьи, инструкции и видео по автоэлектронике.
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Основы чтения электрических схем</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Узнайте, как читать схемы, понимать обозначения и находить неисправности.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Прошивка ЭБУ: пошаговая инструкция</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Подробная инструкция по перепрошивке электронных блоков управления.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
