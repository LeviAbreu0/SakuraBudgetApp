import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "@/components/customInput";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "expo-router";
import { auth } from "@/src/firebase/firebaseConfig";

export default function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter(); 

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Usuário criado com sucesso!");
      router.push("/")

    } catch (error: any) {
      console.log("Erro ao criar conta:", error.message);
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View style={styles.logoRow}>
          <Image
            source={{
              uri: 'https://as2.ftcdn.net/jpg/02/63/17/09/1000_F_263170925_ok5yn7FUm9pzOEiqyDBuKKZ2ez92XFsC.jpg',
            }}
            style={styles.logo}
          />
          <Text style={styles.title}>Sakura Budget</Text>
        </View>
        <Text style={styles.subTitle}>Budget Beautifully</Text>
      </View>

      <View style={styles.middle}>
        <CustomInput
          placeHolder="Email Address or Username"
          value={email}
          onChangeText={setEmail}
        />
        <CustomInput
          placeHolder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.textButton}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  top: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 20,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    marginTop: 10,
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 8,
  },
  title: {
    color: '#FFB7C5',
    fontWeight: 'bold',
    fontSize: 24,
  },
  subTitle: {
    color: '#000000',
    fontSize: 16,
    marginTop: 4,
  },
  middle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 110,
  },
  signUpButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#FFB7C5',
    width: 300,
    borderRadius: 50,
    height: 60,
  },
  textButton: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});