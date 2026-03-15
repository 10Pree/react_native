import { User } from "@/types/user";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text, TouchableOpacity, View } from "react-native";
//TODO:  export default function Person({name, age}: {name: string; age: number})
// การใช้ Type ใน parameter
type propsData = {
  item: User;
  deleteData: (id: number) => void; // function รับค่าอะไรบ้างและ => ไม่ return อะไรเลย คือ void
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
