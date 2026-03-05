import { View } from "react-native";
import Person from "@/components/person";
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Person name={"Non"} age={30}/>
      <Person name={"Bas"} age={31}/>
    </View>
  );
}
