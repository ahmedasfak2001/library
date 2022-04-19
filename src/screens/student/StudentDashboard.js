import { View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

const semDetails = [
    {
        Sem_id: 1,
        semNo: "Semester-1",
    },
    {
        Sem_id: 2,
        semNo: "Semester-2",
    },
    {
        Sem_id: 3,
        semNo: "Semester-3",
    },
    {
        Sem_id: 4,
        semNo: "Semester-4",
    },
    {
        Sem_id: 5,
        semNo: "Semester-5",
    },
    {
        Sem_id: 6,
        semNo: "Semester-6",
    },
    {
        Sem_id: 7,
        semNo: "Semester-7",
    },
    {
        Sem_id: 8,
        semNo: "Semester-8",
    },
];


const StudentDashboard = ({ navigation, route }) => {

    // const [Sem, setSem] = useState([]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'cyan' }}>
                <Ionicons
                    name='reorder-three'
                    size={60}
                    color={'black'}
                />
            </View>
            <View style={{ flex: 8, backgroundColor: '#f5f5f5', alignItems: 'center' }}>
                <ScrollView>
                    {semDetails.map((post) => (
                        <TouchableOpacity onPress={() => navigation.navigate('StudentSemPageDetails', {Sem_id: post.Sem_id})}>
                            <View style={{ borderColor: 'black', borderRadius: 1, borderWidth: 1, height: 50, width: W / 3, marginTop: 10, justifyContent: 'center' }}>
                                <Text style={{ color: 'black', fontSize: 15, textAlign: 'center' }}>{post.semNo}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default StudentDashboard