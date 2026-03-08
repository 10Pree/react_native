import Person from "@/components/person";
import { useState } from "react";
import { Button, FlatList, Text, View } from "react-native";
import { User } from "@/types/user";

export default function App() {
  const [data, setData] = useState<User[]>([]);
  // const [data, setData] = useState([
  //   {id: 1, name: "นนท์", age: 21 },
  //   {id: 2, name: "bas", age: 51 },
  //   {id: 3, name: "book", age: 31 },
  //   {id: 4, name: "Kiss", age: 21 }
  // ]);
  const addUserAll = () => {
    setData([
      { id: 1, name: "นนท์", age: 21 },
      { id: 2, name: "bas", age: 51 },
      { id: 3, name: "book", age: 31 },
      { id: 4, name: "Kiss", age: 21 },
      { id: 5, name: "Kiss", age: 21 },
      { id: 6, name: "Kiss", age: 21 },
    ]);
  };
  const deleteUserAll = () => {
    setData([]);
  };
  return (
    <View className="flex-1 items-center bg-red-500">
      <View className="h-[50%] mt-8">
        {/* {
          data.map((row, id) => (
            <Person key={row.id} name={`${row.name}`} age={row.age}/>
          ))
        } */}
        <FlatList
          className="px-8 border"
          data={data}
          renderItem={({ item }) => <Person item={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ gap: 18 }} // แต่งให้ข้อมูลไม่ชนมุมล่าง หรือ กำหนด Style บางอัน
          ListHeaderComponent={
            // กำหนด Header ของ list หรือ หัวข้อของ list
            <Text className=" text-center text-white text-xl font-bold">
              ข้อมูลผู้ใช้งาน
            </Text>
          }
          ListEmptyComponent={
            // กำหนดว่า ถ้าไม่มีข้อมูลใน list จะแสดงอะไร
            <Text className=" text-center text-white text-lg">ไม่มีข้อมูล</Text>
          }
        />
      </View>
      <View className="gap-4 mt-4">
        <Button title="Add" onPress={() => addUserAll()} />
        <Button title="Delete" onPress={() => deleteUserAll()} />
      </View>
    </View>
  );
}
