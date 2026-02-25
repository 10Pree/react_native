import { Button, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View className="bg-blue-500 flex-1 justify-center items-center">
      <View className=" bg-white border rounded-xl p-16 flex flex-col gap-4">
        <Text className="text-blue-900 text-lg font-bold">
          Hello Tailwind in React Native!
        </Text>
        <Image source={require('../assets/images/react-logo.png')} style={{ width: 200, height: 200}}/>
        <TextInput className=" border bg-blue-100 w-{200px} rounded-lg p-2"/>
        <TouchableOpacity className="bg-blue-900 w-{200px} rounded-lg p-2 flex justify-center items-center"><Text className="text-white">กด</Text></TouchableOpacity>
      </View>
    </View>
  );
}
