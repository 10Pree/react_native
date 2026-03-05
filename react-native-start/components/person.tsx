import { Text, View } from "react-native";

export default function Person({name, age}: {name: string; age: number}){
    return(
        <View className="justify-center items-center">
            <Text className="text-white">ชื่อ: {name} อายุ: {age}</Text>
        </View>
    )
}