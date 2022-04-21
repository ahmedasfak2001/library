import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const StudentSubjectDetails = ({ navigation, route }) => {
    const Subject_Name = route.params.Subject_Name
    const Subject_id = route.params.Subject_id
    const Book_Name = route.params.Book_Name
    const Author = route.params.Author
    console.warn( Author)

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
                <Text style={{ fontSize: 20, color: 'black' }}>Subject: {Subject_Name}</Text>
                <Text style={{ fontSize: 15, color: 'grey' }}>Code: {Subject_id}</Text>
                <View style={{ justifyContent: 'center', backgroundColor: 'white', height: 100, width: 370, marginTop: 10, borderBottomWidth: 1, borderColor: 'grey' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <View>
                            <Text style={{ textAlign: 'justify', color: 'black', fontSize: 20 }}>Book Name</Text>
                            <Text style={{ textAlign: 'justify', color: 'black', fontSize: 15, color:'grey' }}>Author</Text>
                        </View>
                        <MaterialCommunityIcons
                            name="chevron-right"
                            color="#05375a"
                            size={20}
                        />
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default StudentSubjectDetails