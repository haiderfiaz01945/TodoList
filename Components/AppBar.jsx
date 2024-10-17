import React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import Tasks from './Tasks'; // Import the Tasks component

const TaskRoute = () => <Tasks />;

const CompletedRoute = () => <Text style={styles.pageText}>Completed</Text>;
const NotificationsRoute = () => <Text style={styles.pageText}>Notifications</Text>;
const ProfileRoute = () => <Text style={styles.pageText}>Profile</Text>;

const AppBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'tasks', title: 'Tasks', focusedIcon: 'check-circle', unfocusedIcon: 'check-circle-outline' },
    { key: 'completed', title: 'Completed', focusedIcon: 'check-bold', unfocusedIcon: 'check-outline' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    { key: 'profile', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  ]);

  // Render the scene based on the active route
  const renderScene = BottomNavigation.SceneMap({
    tasks: TaskRoute,
    completed: CompletedRoute,
    notifications: NotificationsRoute,
    profile: ProfileRoute,
  });

  return (
    <View style={styles.container}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={styles.navigationBar}
        activeColor='#00ADB5'
        inactiveColor='#EEEEEE'
      />
    </View>
  );
};

// Styles for the AppBar component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  navigationBar: {
    backgroundColor: '#393E46',
  },
  pageText: {
    color: '#EEEEEE',
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 18,
  },
});

export default AppBar;
