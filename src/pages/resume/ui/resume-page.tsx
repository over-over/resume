import { EducationInfo } from '@entities/personal-info';
import { Badge, Container, Typography, ListItem, List } from '@shared/ui/core';

export const ResumePage = () => {
  return (
    <main>
      <Container as="section" mb={3}>
        <Typography variant="h1" fontWeight={500}>
          Vladislav Panov
        </Typography>
        <Typography variant="h3" mb={4}>
          Frontend developer, 25 years
        </Typography>
        <Typography variant="body" fontStyle="italic">
          Занимаюсь разработкой мобильных и веб-приложений с использованием
          React и React-Native. Участвую в кодревью, пишу документацию по
          используемым технологиям внутри компании и для проектов. Занимаюсь
          менторством, обучая и погружая новых сотрудников в компании. Веду
          лекции по стажировке, выступал с докладами на онлайн и офлайн
          конференциях. Пишу на TypeScript, в свободное время люблю работать с
          NodeJS и изучать Python, Rust
        </Typography>
      </Container>

      <Container as="section" mb={3}>
        <Badge mb={2} color="primary">
          Tools
        </Badge>
        <Typography variant="body">
          React, React-Native, Typescript, Effector, Redux Saga, Storybook, Jest
        </Typography>
      </Container>

      <Container as="section" mb={3}>
        <Badge mb={2} color="primary">
          Personal info
        </Badge>
        <Typography variant="body">E-mail klg.panov@gmail.com</Typography>
        <Typography variant="body">Telegram @vldpanov</Typography>
        <Typography variant="body">Linkedin link</Typography>
      </Container>

      <Container as="section" mb={3}>
        <EducationInfo />
      </Container>

      <Container as="section" mb={3}>
        <Badge mb={2} color="primary">
          Experiences
        </Badge>
        <List>
          <ListItem>
            <Typography variant="h6">Frontend developer</Typography>
            <Typography variant="body">KОDE</Typography>
            <Typography variant="body">11.2019 - *</Typography>
            <Typography variant="subtitle">TODO</Typography>
            <Typography variant="subtitle">
              Stack: TS, React, React-Native, Jest, Effector, Redux Saga,
              Storybook
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="h6">Backend developer</Typography>
            <Typography variant="body">Quinnstheprinters.com</Typography>
            <Typography variant="body">02.2019 - 05.2019</Typography>
            <Typography variant="subtitle">
              Создание внутреннего почтового сервиса на основе IMAP PHP, MySQL,
              Laravel Homestead, Yii 2
            </Typography>
            <Typography variant="subtitle">
              Stack: JS, PHP, Laravel Homestead, MySQL
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="h6">Frontend developer</Typography>
            <Typography variant="body">{'Give&GO'}</Typography>
            <Typography variant="body">12.2017 - 04.2018</Typography>
            <Typography variant="subtitle">
              Создание лендингов и многостраничных сайтов, интеграция с
              OctoberCMS
            </Typography>
            <Typography variant="subtitle">
              Stack: JS, Gulp, SCSS, OctoberCMS
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="h6">Frontend developer</Typography>
            <Typography variant="body">Freelance Web Development</Typography>
            <Typography variant="body">06.2017 - 09.2017</Typography>
            <Typography variant="subtitle">TODO</Typography>
            <Typography variant="subtitle">Stack: JS</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="h6">Frontend developer</Typography>
            <Typography variant="body">NBICS</Typography>
            <Typography variant="body">12.2014 - 10.2015</Typography>
            <Typography variant="subtitle">
              Разработка внутреннего видеочата на основе WebRTC и создание
              модулей для приложения написанного с использование ASP.NET MVC 5
            </Typography>
            <Typography variant="subtitle">
              Stack: JS, WebRTC, C#, ASP.NET MVC5, MSSQL
            </Typography>
          </ListItem>
        </List>
      </Container>
    </main>
  );
};
