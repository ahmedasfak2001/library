import { View, Text, ImageBackground, Image, Dimensions, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;
const StudentLogin = ({ navigation }) => {
  return (
    <View style={{ flex: 1, width: W }} >
      <View style={{ flex: 1, width: W }}>
        <ImageBackground source={require('../../assets/books.jpg')} resizeMode="cover" style={styles.image}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 27, textAlign: "left", padding: 20, marginTop: '20%' }}>
            LOGIN
          </Text>
          <Text style={{ color: 'white', fontSize: 16, textAlign: "left", marginLeft: 19 }}>
            Please Sign in to continue :)
          </Text>

          <View style={{ backgroundColor: 'white', height: 300, width: '90%', marginLeft: '5%', marginTop: 45, borderRadius: 20, opacity: 0.9 }}>
            <View style={styles.action}>
              <MaterialCommunityIcons
                name="email"
                color="#05375a"
                size={20}
                style={styles.emailicon}
              />
              <TextInput
                // labelValue={email}
                placeholder="Your Email"
                style={styles.textInput}
                autoCapitalize="none"
              // onChangeText={userEmail => setEmail(userEmail)}
              />
            </View>

            <View style={styles.action}>
              <MaterialCommunityIcons
                name="key"
                color="#05375a"
                size={20}
                style={styles.emailicon}
              />
              <TextInput
                // labelValue={email}
                placeholder="Your Password"
                style={styles.textInput}
                autoCapitalize="none"
                secureTextEntry={true}
              // onChangeText={userEmail => setEmail(userEmail)}
              />
            </View>



            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('StudentDashboard')}
              style={{
                height: 53,
                width: '40%',
                marginTop: 40,
                marginLeft: '50%',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#00008B'
              }}>

              <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 19 }}>
                Login
              </Text>

            </TouchableOpacity>

          </View>
        </ImageBackground>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: W,

  },
  action: {
    flexDirection: 'row',
    marginTop: 23,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginRight: '5%',
    marginLeft: '5%'
  },
  emailicon: {
    marginTop: '4%',
    marginLeft: '5%',
    color: 'black',
    marginRight: '5%'
  },
  textInput: {
    flex: 1,
    fontSize: 17,
    color: 'black'
  },
})
export default StudentLogin