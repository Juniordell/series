import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { Container, Input, ButtonSubmit } from './styles';
import FormRow from '../../components/FormRow';

const LoginScreen = () => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  useEffect(() => {
    var firebaseConfig = {
      apiKey: "AIzaSyCDNZlHwc592UmX5V34NjVf7AbtpQwohJg",
      authDomain: "series-2ba1a.firebaseapp.com",
      databaseURL: "https://series-2ba1a.firebaseio.com",
      projectId: "series-2ba1a",
      storageBucket: "series-2ba1a.appspot.com",
      messagingSenderId: "157281159962",
      appId: "1:157281159962:web:67c85b69b49062a24a7aa3",
      measurementId: "G-Z7RW0Z37HC"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }, [])
  
  function tryLogin() {

  }

  return (
      <Container>

          <FormRow first>
              <Input  
                placeholder='user@email.com'
                value={email}
                onChange={text => setEmail(text)}
              />
          </FormRow>

          <FormRow last>
              <Input  
                placeholder='*******'
                secureTextEntry
                value={password}
                onChange={text => setPassword(text)}
              />
          </FormRow>

          <ButtonSubmit
            onPress={tryLogin}
            title='Entrar'
          />

      </Container>
  );
}

export default LoginScreen;