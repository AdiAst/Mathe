import React from 'react';
import { View } from 'react-native';
import ProfileCard from './ProfileCard';

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ProfileCard />
    </View>
  );
};

export default App;
