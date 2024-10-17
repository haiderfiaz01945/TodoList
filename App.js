import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import AppBar from './Components/AppBar';   
import { Provider } from 'react-redux';   
import store from './Components/Store/store';  

const App = () => {
  return (
    <Provider store={store}>   
      <SafeAreaProvider>
        <View style={styles.container}>
          <AppBar />
        </View>
      </SafeAreaProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
});

export default App;
