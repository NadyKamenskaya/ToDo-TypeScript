import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Buttons from './Buttons';
import Content from './Content';

const App: React.FC = (): JSX.Element => (
  <>
    <Container fluid className="p-4">
      <Row>
        <Buttons />
      </Row>
    </Container>
    <Content />
  </>
);

export default App;
