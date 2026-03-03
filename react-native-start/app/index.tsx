import { useState } from "react";
import { Alert, Button, Image, ScrollView, Text, View } from "react-native";

export default function App() {
  const [data, setData] = useState({
    name: "นนท์",
    year: 2566,
    lang: "th",
  });

  const translate = () => {
    if (data.lang === "th") {
      setData({ name: "Non", year: 2020, lang: "en" });
    } else {
      setData({ name: "นนท์", year: 2566, lang: "th" });
    }
  };
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <ScrollView>
        <View className="items-center justify-center mt-16 gap-6">
          <Image
            source={require("../assets/images/icon.png")}
            className="w-16 h-16"
          />
          <Text className="text-xl font-bold text-white">
            Welcome Non
          </Text>
          <Text className=" text-xl font-bold text-white py-1">{`ชื่อ: ${data.name}`}</Text>
          <Text className=" text-xl font-bold text-white py-1">{`ปี: ${data.year}`}</Text>
          <Button
            title="กด"
            onPress={() => Alert.alert("กดแล้ว", "แสดงข้อมูล")}
          ></Button>
          <Button title="กด เปลี่ยน" onPress={() => translate()}></Button>
        </View>
      </ScrollView>
    </View>
  );
}
