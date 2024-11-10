import { Text, View, StyleSheet } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
    <MaterialIcons name={ "description"} color="#fff" size={50} />
      <Text style={styles.text}>Mutasi Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});