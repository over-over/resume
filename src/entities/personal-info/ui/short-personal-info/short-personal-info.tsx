import { Badge, Link, Typography } from '@shared/ui/core';
import styled from 'styled-components';

const Strong = styled.strong`
  font-weight: 500;
`;

type Props = {};

export const ShortPersonalInfo = ({}: Props) => {
  const yearDifference =
    Date.now() - new Date('1997-06-27T12:00:00Z').getTime();
  const fullYears = Math.floor(yearDifference / (1000 * 60 * 60 * 24 * 365));
  const formattedFullYears = Intl.NumberFormat('en-US', {
    style: 'unit',
    unit: 'year',
    unitDisplay: 'long',
  }).format(fullYears);

  return (
    <>
      <Badge mb={2} color="primary">
        Personal info
      </Badge>
      <Typography variant="body">
        <Strong>Location:</Strong> Armenia, Yerevan
      </Typography>
      <Typography variant="body">
        <Strong>Year of birth:</Strong> 1997 ({formattedFullYears})
      </Typography>
      <Typography variant="body" mt={3}>
        <Strong>E-mail</Strong>
        <Link
          ml={2}
          href="mailto:klg.panov@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          klg.panov@gmail.com
        </Link>
      </Typography>
      <Typography variant="body">
        <Strong>Telegram</Strong>
        <Link
          ml={2}
          href="https://t.me/vldpanov"
          target="_blank"
          rel="noreferrer"
        >
          @vldpanov
        </Link>
      </Typography>
      <Typography variant="body">
        <Strong>Linkedin</Strong>
        <Link
          ml={2}
          href="https://www.linkedin.com/in/vldpanov"
          target="_blank"
          rel="noreferrer"
        >
          @vldpanov
        </Link>
      </Typography>
    </>
  );
};
