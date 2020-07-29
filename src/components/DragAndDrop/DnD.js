import React from 'react';

// context
import { useContextHook } from '../../contexts/Context';

// components
import DnDHeader from './Header/Header';
import Wrapper from './Wrapper/Wrapper';
import Col from './Col/Col';
import Card from './Card/Card';
import Container from './Container/Container';

const DnD = () => {
  const { lists } = useContextHook();
  return (
    <Container>
      <DnDHeader />
      <Wrapper>
        {Object.entries(lists).map(([key, value], index) => {
          return (
            <Col key={`${key}-${index+1}`}>
              {value && value.length ? value.map((item, index) => (
                <Card
                  key={item.id}
                  index={index}
                  listIndex={key}
                  data={item}
                />
              )): null}
            </Col>
          );
        })}
      </Wrapper>
    </Container>
  );
};

DnD.propTypes = {};
DnD.defaultProps = {};
DnD.displayName = 'DnD';

export default DnD;
