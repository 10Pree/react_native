import AddForm from "@/components/addForm";
import Person from "@/components/person";
import { useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";

export default function App() {
  // const [data, setData] = useState<User[]>([
  //   { id: 1, name: "นนท์", age: 21 },
  //   { id: 2, name: "bas", age: 51 },
  //   { id: 3, name: "book", age: 31 },
  //   { id: 4, name: "Kiss", age: 21 },
  // ]);
  const [data, setData] = useState([
    { id: 1, name: "นนท์", age: 21 },
    { id: 2, name: "bas", age: 51 },
    { id: 3, name: "book", age: 31 },
    { id: 4, name: "Kiss", age: 21 },
  ]);
  // const addUserAll = () => {
  //   setData([
  //     { id: 1, name: "นนท์", age: 21 },
  //     { id: 2, name: "bas", age: 51 },
  //     { id: 3, name: "book", age: 31 },
  //     { id: 4, name: "Kiss", age: 21 },
  //     { id: 5, name: "Kiss", age: 21 },
  //     { id: 6, name: "Kiss", age: 21 },
  //   ]);
  // };
  // const deleteUserAll = () => {
  //   setData([]);
  // };

  const deleteData = (id: number) => {
    Alert.alert("ลบแล้ว", `ลบ ID:${id} แล้ว`);
    setData((prevData) => {
      return prevData.filter((item) => item.id !== id);
    });
  };
  const insertData = (name: string, age: number) => {
    if (name === "" && age === 0) {
      Alert.alert("ไม่ได้ ระบุข้อมูล", "กรุณาแจ้งชื่อและอายุ");
      return;
    }
    console.log(name, age);
    setData((prev) => {
      return [{ id: Math.random(), name, age }, ...prev];
    });
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
          renderItem={({ item }) => (
            <Person item={item} deleteData={deleteData} />
          )}
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
      <AddForm insertData={insertData} />
      {/* <Button title="Add" onPress={() => addUserAll()} />
        <Button title="Delete" onPress={() => deleteUserAll()} /> */}
    </View>
  );
}
