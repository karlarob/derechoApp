import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Background from '../components/background';
import Logo from '../components/logo';
import Header from '../components/header';
import Button from '../components/buttons';
import TextInput from '../components/textInput';
import { theme } from '../core/theme';

const RegisterScreen = ({ navigation }) => {


  return (
    <Background>

      <Logo />

      <Header>Crear cuenta</Header>

      <TextInput
        label="Name"
        returnKeyType="next"
      />

      <TextInput
        label="Email"
        returnKeyType="next"
        autoCapitalize="none"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
      />

      <Button mode="contained">
        Sign Up
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>¿Ya tienes cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(RegisterScreen);