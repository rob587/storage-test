import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const caricaTema = async () => {
      const salvato = await AsyncStorage.getItem("darkmode");
      if (salvato !== null) setDarkMode(JSON.parse(salvato));
    };
    caricaTema();
  }, []);

  const toggleTema = async () => {
    const nuovoValore = !darkMode;
    setDarkMode(nuovoValore);
    await AsyncStorage.setItem("darkmode", JSON.stringify(nuovoValore));
  };

  return (
    <View style={[styles.contenitore, darkMode && styles.dark]}>
      <Text style={[styles.testo, darkMode && styles.testoLight]}>
        {darkMode ? "Tema scuro" : "Tema chiaro"}
      </Text>
      <Pressable style={styles.btn} onPress={toggleTema}>
        <Text style={styles.btnTesto}>Cambia tema</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contenitore: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  dark: { backgroundColor: "#1a1a1a" },
  testo: { fontSize: 24, marginBottom: 24, color: "#1a1a1a" },
  testoLight: { color: "#fff" },
  btn: { backgroundColor: "#4f46e5", padding: 16, borderRadius: 12 },
  btnTesto: { color: "#fff", fontWeight: "600" },
});
