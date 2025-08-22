import { StyleSheet } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    console.log('🔍 Root App mounted');
  },[]);
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
