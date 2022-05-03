/* =================================import all the necessary items =================================*/
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Dimensions, Image, StyleSheet } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

const Sem1 = [
    {
        SemNo: 1,
        Subject_id: "BSC101",
        Subject_Name: "Physics",
        Subject_image: "https://firebasestorage.googleapis.com/v0/b/wallpaper-app-691fa.appspot.com/o/physics.jpg?alt=media&token=b57c0302-9e5f-4e22-8cbc-593eafd6f47e",
        Book: [
            {
                Book_id: "B1",
                Book_Name: "Physics for Engineers",
                Author: "M. R. Srinivasan",
                Book_link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            },
            {
                Book_id: "B2",
                Book_Name: "Applied Physics for Engineers",
                Author: "Mehta Neeraj",
                Book_link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            }
        ],
        Notes: [
            {
                Note_id: "N1",
                Topic_Name: "Laws of Motion",
                Teacher_Name: "Biswajeet Nayak",
                Note_Link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            },
            {
                Note_id: "N2",
                Topic_Name: "Gravitational Force",
                Teacher_Name: "Biswajeet Nayak",
                Note_Link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            }
        ],
    },
    {
        SemNo: 1,
        Subject_id: "BSC103",
        Subject_Name: "Mathematics-I",
        Subject_image: "https://firebasestorage.googleapis.com/v0/b/wallpaper-app-691fa.appspot.com/o/maths.jpg?alt=media&token=e4acceb9-2e82-43be-952b-5bfbf21fabc4",
        Book: [
            {
                Book_id: 1,
                Book_Name: "Mathematics for Engineers",
                Author: "M. R. Srinivasan",
                Book_link: "",
            },
            {
                Book_id: 2,
                Book_Name: "Applied Maths for Engineers",
                Author: "Mehta Neeraj",
                Book_link: "",
            }
        ]
    },
    {
        SemNo: 1,
        Subject_id: "ESC101",
        Subject_Name: "Basic Electrical",
        Subject_image: "https://firebasestorage.googleapis.com/v0/b/wallpaper-app-691fa.appspot.com/o/electrical.jpg?alt=media&token=1fc51318-8822-49c7-ba39-39cd66aa2405",
        Book: [
            {
                Book_id: 1,
                Book_Name: "Electrical for Engineers",
                Author: "M. R. Srinivasan",
                Book_link: "",
            },
            {
                Book_id: 2,
                Book_Name: "Applied Electrical for Engineers",
                Author: "Mehta Neeraj",
                Book_link: "",
            }
        ]
    },
    {
        SemNo: 1,
        Subject_id: "ESC105",
        Subject_Name: "C Programming",
        Subject_image: "https://firebasestorage.googleapis.com/v0/b/taraknathapp.appspot.com/o/c.jpg?alt=media&token=9795afd7-1f94-45f1-bfca-108d8aa78512",
        Book: [
            {
                Book_id: 1,
                Book_Name: "C for Engineers",
                Author: "M. R. Srinivasan",
                Book_link: "",
            },
            {
                Book_id: 2,
                Book_Name: "Applied C for Engineers",
                Author: "Mehta Neeraj",
                Book_link: "",
            }
        ]
    },
    {
        SemNo: 1,
        Subject_id: "GSC101",
        Subject_Name: "ESP - I ",
        Subject_image: "https://firebasestorage.googleapis.com/v0/b/taraknathapp.appspot.com/o/esp.jpg?alt=media&token=7652660c-0b69-4f0e-9b96-685fcfad6a90",
        Book: [
            {
                Book_id: 1,
                Book_Name: "ESP for Engineers",
                Author: "M. R. Srinivasan",
                Book_link: "",
            },
            {
                Book_id: 2,
                Book_Name: "Applied ESP for Engineers",
                Author: "Mehta Neeraj",
                Book_link: "",
            }
        ]
    },
];
const Sem2 = [
    {
        SemNo: 2,
        Subject_id: "BSC201",
        Subject_Name: "Chemistry",
        Subject_image: "https://firebasestorage.googleapis.com/v0/b/wallpaper-app-691fa.appspot.com/o/physics.jpg?alt=media&token=b57c0302-9e5f-4e22-8cbc-593eafd6f47e"
    },
    {
        SemNo: 2,
        Subject_id: "BSC203",
        Subject_Name: "Mathematics & Statistics-II",
        Subject_image: "https://firebasestorage.googleapis.com/v0/b/wallpaper-app-691fa.appspot.com/o/maths.jpg?alt=media&token=e4acceb9-2e82-43be-952b-5bfbf21fabc4"
    },
    {
        SemNo: 2,
        Subject_id: "ESC201",
        Subject_Name: "Basic Electronic Engineering",
        Subject_image: "https://firebasestorage.googleapis.com/v0/b/wallpaper-app-691fa.appspot.com/o/electrical.jpg?alt=media&token=1fc51318-8822-49c7-ba39-39cd66aa2405"
    },
    {
        SemNo: 2,
        Subject_id: "ESC205",
        Subject_Name: "Programming for Problem Solving-II",
        Subject_image: "https://firebasestorage.googleapis.com/v0/b/wallpaper-app-691fa.appspot.com/o/physics.jpg?alt=media&token=b57c0302-9e5f-4e22-8cbc-593eafd6f47e"
    },
    {
        SemNo: 2,
        Subject_id: "GSC201",
        Subject_Name: "Essential Studies for Professionals-II",
        Subject_image: "https://firebasestorage.googleapis.com/v0/b/wallpaper-app-691fa.appspot.com/o/physics.jpg?alt=media&token=b57c0302-9e5f-4e22-8cbc-593eafd6f47e"
    },
    {
        SemNo: 2,
        Subject_id: "BSEFE202",
        Subject_Name: "Economy, Finance & Entrepreneurship",
        Subject_image: "https://firebasestorage.googleapis.com/v0/b/wallpaper-app-691fa.appspot.com/o/physics.jpg?alt=media&token=b57c0302-9e5f-4e22-8cbc-593eafd6f47e"
    },
];

const StudentBook = ({ navigation, route }) => {

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
            <View style={{ flex: 1, backgroundColor: '#066cfa', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => handleBackButtonClick()} style={{ flexDirection: 'row' }}>
                    <Ionicons
                        name="chevron-back-outline"
                        color="white"
                        size={40}
                    />
                    <Text style={{ fontSize: 25, color: 'white' }}>Back</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 8, backgroundColor: '#DBF3FA', alignItems: 'center', }}>

                <Text style={{ color: 'black', fontSize: 22, textAlign: 'center' }}>{Sem_Name}</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        Sem1.map((post) => (

                            <TouchableOpacity onPress={() => navigation.navigate('StudentSubjectDetails', { Subject_Name: post.Subject_Name, Subject_id: post.Subject_id, Book_Name: post.Book[0].Book_Name, Author: post.Book[0].Author, Book_Link: post.Book[0].Book_link })}>
                                <View style={{ justifyContent: 'center', backgroundColor: 'white', height: 100, width: 370, marginTop: 10, borderBottomWidth: 1, borderColor: 'grey' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                        <Image
                                            source={{ uri: String(post.Subject_image) }}
                                            style={{ width: 90, height: 85, borderRadius: 18 }}></Image>
                                        <Text style={{ textAlign: 'justify', color: 'black', fontSize: 20 }}>{post.Subject_Name}</Text>
                                        <MaterialCommunityIcons
                                            name="chevron-right"
                                            color="#05375a"
                                            size={20}
                                            style={styles.icon}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    icon: {

    }
})

export default StudentBook