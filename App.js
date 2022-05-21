import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import RideScreen from './screens/RideScreen';
import PaymentScreen from './screens/PaymentScreen';
import { LogBox } from 'react-native';
import UserStack from './stacks/UserStack';

LogBox.ignoreAllLogs();


export default function App() {
  return (
    <Provider store={store}>
        <SafeAreaProvider>
          <UserStack />
        </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
