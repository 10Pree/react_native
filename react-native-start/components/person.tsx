import { User } from "@/types/user";
import { Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
//TODO:  export default function Person({name, age}: {name: string; age: number})
type propsData = {
  item: User;
  deleteData: (id: number) => void;
};
export default function Person({ item, deleteData }: propsData) {
  return (
    <View className="justify-center items-center">
      <TouchableOpacity onPress={() => deleteData(item.id)}>
        <View className=" bg-black p-4 rounded-md flex-row gap-4">
          <Text className="text-white text-lg font-medium">
            ชื่อ: {item.name} อายุ: {item.age}
          </Text>
          <MaterialIcons name="delete" size={24} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
