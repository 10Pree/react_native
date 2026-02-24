import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
    return(
        <ScrollView style={ style.container}>
            <Text>Welcome Non!!</Text>
                <Image source={require('../assets/images/icon.png')} style={{ width: 200, height: 200}}/>
            <TouchableOpacity style={ style.button}>
                <Text>กด</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#eaeaea'
    },
    button: {
        width: 200,
        backgroundColor: '#3B82F6',
    }
})