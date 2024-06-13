import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
// 👇 Import our component
import Navigator from './src/navigation';

export default function App() {
  return (
    <View style={styles.container}>
      {/* 👇 Render a ChatListItem */}
      <Navigator />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: "center",
  },
});