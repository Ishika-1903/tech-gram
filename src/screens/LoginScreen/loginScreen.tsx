import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import InputBox from '../../components/inputBox';
import strings from '../../constants/strings';
import colors from '../../constants/colors';
import Button from '../../components/button';
import { useNavigation } from '@react-navigation/native';
import { login } from '../../apis/login/login';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/navigator';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleLogin = () => {
    try {
      const loginRequest = login({ email, password });
      console.log('loginRequest', loginRequest);
      navigation.replace('Home'); // Navigate to Home on successful login
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* App Logo */}
      <Text style={styles.logo}>{strings.TECHGRAM}</Text>

      {/* Form */}
      <View style={styles.form}>
        <InputBox
          label={strings.EMAIL}
          value={email}
          onChangeText={setEmail}
          placeholder={strings.ENTER_EMAIL}
        />
        <InputBox
          label={strings.PASSWORD}
          value={password}
          onChangeText={setPassword}
          placeholder={strings.ENTER_PASSWORD}
          secureTextEntry
        />
      </View>

      {/* Login Button */}
      <Button
        title={strings.LOGIN}
        onPress={handleLogin}
        backgroundColor={colors.primary}
        textColor={colors.white}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>{strings.DONT_HAVE_AN_ACCOUNT}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.footerLink}> {strings.SIGNUP}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 50, // thoda upar shift kar diya
  },
  form: {
    marginBottom: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  footerText: {
    color: colors.text,
    fontSize: 14,
  },
  footerLink: {
    marginLeft: 6,
    color: colors.primary,
    fontWeight: '600',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
