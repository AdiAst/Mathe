import React from 'react';
import { Text, View } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
      <Profile />
      <Text>Profile</Text>
    </View>
  );
};
const Profile = () => {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'grey',
        marginVertical: 15,
      }}
    >
      <Text style={{ textAlign: 'center', marginTop: '40%' }}>Rathe N.</Text>
    </View>
  );
};
export default App;
