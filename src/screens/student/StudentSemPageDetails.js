import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, Image,StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

const StudentSemPageDetails = ({navigation, route}) => {

    const Sem_id = route.params.Sem_id
    // console.warn(Sem_id)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: '#066cfa' }}></View>
            <View style={{ flex: 8, backgroundColor: '#DBF3FA', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('StudentBook', {Sem_id})}>
                    <View style={{ justifyContent: 'center',backgroundColor:'white', height: 100, width: 370, marginTop: 10,borderBottomWidth:1,borderColor: 'grey' }}>
                        <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                        <Image source={require('../../assets/book.jpg')} style={{width:100, height:70, borderRadius:18}}></Image>
                        <Text style={{ textAlign: 'center', color:'black', fontSize:20 }}>Books</Text>
                        <MaterialCommunityIcons
                name="chevron-right"
                color="#05375a"
                size={20}
                style={styles.icon}
              />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ justifyContent: 'center',backgroundColor:'white', height: 100, width: 370, marginTop: 10,borderBottomWidth:1,borderColor: 'grey'}}>
                    <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                        <Image source={require('../../assets/notes.jpg')} style={{width:100, height:70, borderRadius:18}}></Image>
                        <Text style={{textAlign: 'center', color:'black', fontSize:20 }}>Notes</Text>
                        <MaterialCommunityIcons
                name="chevron-right"
                color="#05375a"
                size={20}
                style={styles.icon}
              />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ justifyContent: 'center',backgroundColor:'white', height: 100, width: 370, marginTop: 10,borderBottomWidth:1,borderColor: 'grey' }}>
                    <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                        <Image source={require('../../assets/ques.jpg')} style={{width:70, height:90, borderRadius:18}}></Image>
                        <Text style={{ textAlign: 'center', color:'black', fontSize:20 }}>Questions</Text>
                        <MaterialCommunityIcons
                name="chevron-right"
                color="#05375a"
                size={20}
                style={styles.icon}
              />
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    icon: {
        
    }
})
export default StudentSemPageDetails