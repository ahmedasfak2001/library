/* =================================import all the necessary items =================================*/
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';

let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

const Sem1 = [
    {
        SemNo: 1,
        Subject_id: "BSC101",
        Subject_Name: "Physics",
    },
    {
        SemNo: 1,
        Subject_id: "BSC103",
        Subject_Name: "Mathematics-I",
    },
    {
        SemNo: 1,
        Subject_id: "ESC101",
        Subject_Name: "Basic Electrical Engineering",
    },
    {
        SemNo: 1,
        Subject_id: "ESC105",
        Subject_Name: "Programming for Problem Solving-I",
    },
    {
        SemNo: 1,
        Subject_id: "GSC101",
        Subject_Name: "Essential Studies for Professionals-I",
    },
];

const StudentBook = ({ navigation, route }) => {

    const Sem_id = route.params.Sem_id
    console.warn(Sem_id)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'cyan' }}></View>
            <View style={{ flex: 8, backgroundColor: '#f5f5f5', alignItems: 'center', }}>
                <ScrollView>
                    <Text style={{ color: 'black', fontSize: 18, textAlign: 'center' }}>Semester: {Sem1[0].SemNo}</Text>
                    {Sem1.map((post) => (
                        <TouchableOpacity >
                            <View style={{ borderColor: 'black', borderRadius: 1, borderWidth: 1, height: 50, width: W / 3, marginTop: 10, justifyContent: 'center' }}>
                                <Text style={{ color: 'black', fontSize: 15, textAlign: 'center' }}>{post.Subject_Name}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default StudentBook