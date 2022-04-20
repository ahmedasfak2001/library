/* =================================import all the necessary items =================================*/
import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, Image, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

const StudentSemPageDetails = ({ navigation, route }) => {

    const Sem_id = route.params.Sem_id
    const Sem_No = route.params.Sem_No
    const Sem_Name = route.params.Sem_Name
    // console.warn(Sem_Name)

    /*============================== For back button ==============================*/
    const handleBackButtonClick = () => {
        navigation.goBack(null);
        return true;
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: '#066cfa' }}>
                <TouchableOpacity onPress={() => handleBackButtonClick()} style={{ flexDirection: 'row' }}>
                    <Ionicons
                        name="chevron-back-outline"
                        color="white"
                        size={40}
                        style={{ marginTop: 15 }}
                    />
                    <Text style={{ fontSize: 20, color: 'white', marginTop: 23 }}>Back</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 8, backgroundColor: '#DBF3FA', alignItems: 'center' }}>
                <Text style={{ fontSize: 25, color: 'black' }}>{Sem_Name}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('StudentBook', { Sem_id, Sem_No, Sem_Name })}>
                    <View style={{ justifyContent: 'center', backgroundColor: 'white', height: 100, width: 370, marginTop: 10, borderBottomWidth: 1, borderColor: 'grey' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                            <Image source={require('../../assets/book.jpg')} style={{ width: 100, height: 70, borderRadius: 18 }}></Image>
                            <Text style={{ textAlign: 'center', color: 'black', fontSize: 20 }}>Books</Text>
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
                    <View style={{ justifyContent: 'center', backgroundColor: 'white', height: 100, width: 370, marginTop: 10, borderBottomWidth: 1, borderColor: 'grey' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                            <Image source={require('../../assets/notes.jpg')} style={{ width: 100, height: 70, borderRadius: 18 }}></Image>
                            <Text style={{ textAlign: 'center', color: 'black', fontSize: 20 }}>Notes</Text>
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
                    <View style={{ justifyContent: 'center', backgroundColor: 'white', height: 100, width: 370, marginTop: 10, borderBottomWidth: 1, borderColor: 'grey' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                            <Image source={require('../../assets/ques.jpg')} style={{ width: 70, height: 90, borderRadius: 18 }}></Image>
                            <Text style={{ textAlign: 'center', color: 'black', fontSize: 20 }}>Questions</Text>
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