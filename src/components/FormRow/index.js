import React from 'react';

import { Container } from './styles';
import { StyleSheet } from 'react-native';

const FormRow = ({ children, first, last }) => {
  return (
      <Container style={[first ? styles.first : null, last ? styles.last : null]}>
          {children}
      </Container>
  );
}

const styles = StyleSheet.create({
  
  first: {
    marginTop: 10
  },

  last: {
    marginBottom: 10
  }

}) 

export default FormRow;