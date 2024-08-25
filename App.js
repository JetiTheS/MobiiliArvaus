import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { useState } from 'react';



export default function App() {
  const [arvaus, setArvaus] = useState(0);
  const [vihje, setVihje] = useState("Guess a number between 1-100");
  const [arvattava, setArvattava] = useState(Math.floor(Math.random() * 100) + 1);
  const [arvaustenMaara, setArvastenMaara] = useState(0);

  const painallus = () => {
    if (arvaus < arvattava) {
      setVihje("Your guess " + arvaus + " is too low")
      setArvastenMaara(arvaustenMaara + 1);
    }
    else if (arvaus > arvattava) {
      setVihje("Your guess " + arvaus + " is too high")
      setArvastenMaara(arvaustenMaara + 1);
    } else {
      Alert.alert("You guessed the number in " + (arvaustenMaara + 1) + " guesses")
      setArvattava(Math.floor(Math.random() * 100) + 1);
      setVihje("Guess a number between 1-100");
      setArvaus(0);
      setArvastenMaara(0);
    }
  }


  return (
    <View style={styles.container}>
      <Text>{vihje}</Text>

      <TextInput
        style={{
          height: 40,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        onChangeText={arvaus => setArvaus(arvaus)}
        value={arvaus}
        keyboardType="numeric"
      />
      <Button onPress={painallus} title="Make a guess" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center",
    gap: 20

  },
});
