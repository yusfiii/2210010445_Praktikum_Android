import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#006cc7",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="mutasi"
        options={{
          title: "mutasi",
          tabBarIcon: ({ color, focused }) => <MaterialIcons name={focused ? "description" : "description"} color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="qris"
        options={{
          title: "qris",
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons name={focused ? "qrcode-scan" : "qrcode-scan"} color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="aktivitas"
        options={{
          title: "aktivitas",
          tabBarIcon: ({ color, focused }) => <MaterialIcons name={focused ? "mark-email-unread" : "mark-email-unread"} color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="akun"
        options={{
          title: "akun",
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "person" : "person-outline"} color={color} size={24} />,
        }}
      />
    </Tabs>
  );
}
