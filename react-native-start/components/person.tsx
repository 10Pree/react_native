import { User } from "@/types/user";
import { Text, TouchableOpacity, View } from "react-native";

//TODO:  export default function Person({name, age}: {name: string; age: number})
type propsData = {
  item: User
  deleteData: (id: number) => void
}
export default function Person({ item, deleteData}: propsData) {
  return (
    <View className="justify-center items-center">
      <TouchableOpacity onPress={() => deleteData(item.id)}>
        <Text className="text-white text-lg font-medium bg-black p-4 rounded-md">
          ชื่อ: {item.name} อายุ: {item.age}
        </Text>
      </TouchableOpacity>
    </View>
  );
}


