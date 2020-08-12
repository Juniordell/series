import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';

const FormRow = ({ children }) => {
  return (
      <Container>
          {children}
      </Container>
  );
}

export default FormRow;