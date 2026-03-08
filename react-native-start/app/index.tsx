import { View } from "react-native";
import Person from "@/components/person";
export default function App() {
  return (
    <View className="flex-1 items-center bg-red-500">
      <View className=" mt-8 border-2 border-white p-8 rounded-lg gap-4">
        <Person name={"นนท์"} age={30} />
        <Person name={"Bas"} age={31} />
        <Person name={"Kiss"} age={21} />
      </View>
    </View>
  );
}
