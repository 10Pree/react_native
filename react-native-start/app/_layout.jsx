import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Stack จะช่วยจัดการเรื่องการ "เลื่อนหน้าจอ" (Navigation) 
         และสร้าง Header ด้านบนให้โดยอัตโนมัติ 
      */}
      <Stack.Screen name="index" options={{ title: "หน้าแรก" }} />
    </Stack>
  );
}
