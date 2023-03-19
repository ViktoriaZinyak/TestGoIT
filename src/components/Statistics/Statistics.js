import PropTypes from 'prop-types';
import { Section, Title, List, Item } from './Statistics.styled';
export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(stat => (
          <Item key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}</span>
          </Item>
        ))}
      </List>
    </Section>
  );
};

Statistics.protoTypes = {
  stat: PropTypes.exact({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
  title: PropTypes.string,
};
