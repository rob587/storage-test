import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const caricaTema = async () => {
      const salvato = await AsyncStorage.getItem("darkmode");
      if (salvato !== null) setDarkMode(JSON.parse(salvato));
    };
    caricaTema();
  }, []);

  return (
    <View>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
