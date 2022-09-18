import { Badge, List, ListItem, Typography } from '@shared/ui/core';
import styled, { useTheme } from 'styled-components';

const Degree = styled.strong`
  font-weight: 500;
`;

export const EducationInfo = () => {
  const theme = useTheme();
  return (
    <>
      <Badge mb={3} color="primary">
        Education
      </Badge>
      <List>
        <ListItem>
          <Typography variant="h6" mb={1}>
            Балтийский Федеральный Университет им. И. Канта
          </Typography>
          <Typography variant="body" color={theme.palette.text.primary}>
            <Degree>Магистр</Degree>, Инфокоммуникационные технологии и системы
            связи
          </Typography>
          <Typography variant="body" color={theme.palette.text.secondary}>
            2018 - 2021
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="h6" mb={1}>
            Балтийский Федеральный Университет им. И. Канта
          </Typography>
          <Typography variant="body">
            <Degree>Бакалавр</Degree>, Информационные технологии
          </Typography>
          <Typography variant="body" color={theme.palette.text.secondary}>
            2014 - 2018
          </Typography>
        </ListItem>
      </List>
    </>
  );
};
