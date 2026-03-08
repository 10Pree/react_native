import { User } from "@/types/user";
import { Text, View } from "react-native";

//TODO:  export default function Person({name, age}: {name: string; age: number})

export default function Person({ item }: { item: User }) {
  return (
    <View className="justify-center items-center">
      <Text className="text-white text-lg font-medium bg-black p-4 rounded-md">
        ชื่อ: {item.name} อายุ: {item.age}
      </Text>
    </View>
  );
}
