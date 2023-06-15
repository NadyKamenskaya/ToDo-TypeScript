import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Modal from './Modal/index';
import Todos from './Todos/Todos';

const Content: React.FC = (): JSX.Element => (
  <Container fluid className="p-4">
    <Row>
      <Todos />
    </Row>
    <Modal />
  </Container>
);

export default Content;
