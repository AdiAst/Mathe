import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import vera from './Rozen.jpg';
const ProfileCard = () => {
  return (
    <View style={styles.cardProfile}>
      <Image source={vera} style={styles.profile} />
      <Text style={styles.username}>Rathe N.</Text>
      <View style={styles.largeButton}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#393E46' }}>Edit</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  cardProfile: {
    width: 300,
    height: 400,
    alignItems: 'center',
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#393E46',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#fff',
  },
  largeButton: {
    width: '100%',
    backgroundColor: '#FFC069',
    paddingVertical: 15,
    marginTop: 40,
    alignItems: 'center',
    borderRadius: 4,
  },
});
export default ProfileCard;
