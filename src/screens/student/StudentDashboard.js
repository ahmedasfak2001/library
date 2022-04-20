import { View, Text, Dimensions, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

const semDetails = [
    {
        Sem_id: 1,
        semNo: 1,
        semName: "Semester-1",
    },
    {
        Sem_id: 2,
        semNo: 2,
        semName: "Semester-2",
    },
    {
        Sem_id: 3,
        semNo: 3,
        semName: "Semester-3",
    },
    {
        Sem_id: 4,
        semNo: 4,
        semName: "Semester-4",
    },
    {
        Sem_id: 5,
        semNo: 5,
        semName: "Semester-5",
    },
    {
        Sem_id: 6,
        semNo: 6,
        semName: "Semester-6",
    },
    {
        Sem_id: 7,
        semNo: 7,
        semName: "Semester-7",
    },
    {
        Sem_id: 8,
        semNo: 8,
        semName: "Semester-8",
    },
];

const StudentDashboard = ({ navigation, route }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: '#066cfa' }}>
                <Ionicons
                    name='reorder-three'
                    size={60}
                    color={'white'}
                />
            </View>
            <View style={{ flex: 8, backgroundColor: '#DBF3FA', alignItems: 'center', }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {semDetails.map((post) => (
                        <TouchableOpacity onPress={() => navigation.navigate('StudentSemPageDetails', { Sem_id: post.Sem_id, Sem_No: post.semNo, Sem_Name: post.semName })}>
                            <View style={{ justifyContent: 'center', backgroundColor: 'white', height: 100, width: 370, marginTop: 10, borderBottomWidth: 1, borderColor: 'grey' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: 'black', fontSize: 20 }}>{post.semName}</Text>
                                    <MaterialCommunityIcons
                                        name="chevron-right"
                                        color="#05375a"
                                        size={20}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default StudentDashboard