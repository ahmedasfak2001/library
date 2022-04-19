import { View, Text, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

const StudentSemPageDetails = ({navigation, route}) => {

    const Sem_id = route.params.Sem_id
    // console.warn(Sem_id)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'cyan' }}></View>
            <View style={{ flex: 8, backgroundColor: '#f5f5f5f5', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('StudentBook', {Sem_id})}>
                    <View style={{ justifyContent: 'center', height: 100, width: 350, marginTop: 10, borderRadius: 1, borderWidth: 1, borderColor: 'black' }}>
                        <Text style={{ textAlign: 'center' }}>Book</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ justifyContent: 'center', height: 100, width: 350, marginTop: 10, borderRadius: 1, borderWidth: 1, borderColor: 'black' }}>
                        <Text style={{ textAlign: 'center' }}>Notes</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ justifyContent: 'center', height: 100, width: 350, marginTop: 10, borderRadius: 1, borderWidth: 1, borderColor: 'black' }}>
                        <Text style={{ textAlign: 'center' }}>Previous Year Questions</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export default StudentSemPageDetails