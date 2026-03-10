import { useState } from "react";
import { Button, TextInput, View } from "react-native";
type propsData = {
    insertData: (name:string, age: number) => void
}
export default function AddForm({insertData}: propsData) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  return (
    <View className="w-full items-center gap-4 mt-4">
      <TextInput
        className="border rounded-md bg-white w-64"
        placeholder="ชื่อ"
        keyboardType="default"
        onChangeText={(e)=>setName(e)}
      />
      <TextInput
        className="border rounded-md bg-white w-64"
        placeholder="อายุ"
        keyboardType="number-pad"
        onChangeText={(e)=>setAge(Number(e))}
      />
      <Button title="เพิ่มผู้ใช้" onPress={()=> insertData(name, age)}/>
    </View>
  );
}
