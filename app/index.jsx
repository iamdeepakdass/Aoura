import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Link } from "expo-router";
import Profile from "./(tabs)/profile";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Aora!</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{ color: "blue" }}>
        Go to Home
      </Link>
    </View>
  );
}
