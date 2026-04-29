import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "./global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-[#0F172A]">
      <StatusBar style="light" />
      <Text className="text-white text-2xl font-bold">GymSync</Text>
      <Text className="text-slate-400 mt-2">
        Dark Mode Base Setup Complete.
      </Text>
    </View>
  );
}
