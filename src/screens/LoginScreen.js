import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Background from '../components/background';
import Logo from '../components/logo';
import Header from '../components/header';
import Button from '../components/buttons';
import TextInput from '../components/textInput';
import { theme } from '../core/theme';

const LoginScreen = ({navigation}) => {
    navigation.navigate('Dashboard');
  return (
    <Background>
      <Logo />

      <Header>Bienvenido</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity>
          <Text style={styles.label}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained">
        Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>¿No tiene cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
  }

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(LoginScreen);