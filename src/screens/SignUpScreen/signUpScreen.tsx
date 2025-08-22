// src/screens/SignupScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import strings from '../../constants/strings';
import InputBox from '../../components/inputBox';
import colors from '../../constants/colors';
import Button from '../../components/button';
import { useNavigation } from '@react-navigation/native';
import { signup } from '../../apis/signup/signup';
import { SignupRequest, SignupResponse } from '../../apis/signup/types';
import { AuthStackParamList } from '../../navigation/navigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const SignupScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleSignup = async () => {
    console.log('hey');
     const requestData: SignupRequest = { name, email, password, confirmPassword };
    try {
    const response: SignupResponse = await signup(requestData);

      console.log('Signup success:', response.message);
      navigation.replace('Home');
    } catch (err: any) {
      // Show friendly error
      console.error('Signup error:', err.message);
    
    }
  };
  return (
    <View style={styles.container}>
      {/* App Name */}
      <Text style={styles.logo}>{strings.TECHGRAM}</Text>

      {/* Input Fields */}
      <InputBox
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
        label="Name"
      />
      <InputBox
        value={email}
        onChangeText={setEmail}
        placeholder={strings.ENTER_EMAIL}
        label={strings.EMAIL}
      />
      <InputBox
        value={password}
        onChangeText={setPassword}
        placeholder={strings.ENTER_PASSWORD}
        label={strings.PASSWORD}
        secureTextEntry
      />
      <InputBox
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Re-enter your password"
        label="Confirm Password"
        secureTextEntry
      />

      {/* Sign Up Button */}
      <Button
        title={strings.SIGNUP}
        onPress={handleSignup}
        backgroundColor={colors.primary}
        textColor={colors.white}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>{strings.ALREADY_HAVE_AN_ACCOUNT}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.footerLink}> {strings.LOGIN}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: colors.background,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 50, // 👈 thoda aur upar shift kar diya
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    color: colors.text,
    fontSize: 14,
  },
  footerLink: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 14,
  },
});

export default SignupScreen;
