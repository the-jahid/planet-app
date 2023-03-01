import { useFonts } from 'expo-font';
import {  StyleSheet, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import { StatusBar } from 'react-native';
import Details from './src/screens/Details';


const Stack = createNativeStackNavigator(); 

export default function App() {

  const [loaded] = useFonts({
    "Antonio-Medium":require('./assets/fonts/Antonio-Medium.ttf'),
    "Spartan-Regular":require('./assets/fonts/LeagueSpartan-Regular.ttf'),
    "Spartan-Bold":require('./assets/fonts/LeagueSpartan-Bold.ttf')
  })
 
  if(!loaded){
    return <Text>Hello world</Text>
  }
 
  
  return (
    <>
      <NavigationContainer >
            <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen  name="Home" component={HomeScreen} />
              <Stack.Screen  name="Details" component={Details} />
            </Stack.Navigator>
      </NavigationContainer>
      <StatusBar barStyle={'light-content'} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
