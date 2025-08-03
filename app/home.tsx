import { router } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <Image
            source={require('../assets/images/sakura.png')}
            style={styles.headerImage}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.textop}>Today</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}
          onPress={() => router.push('/budgets')}>
            <Image
              source={require('../assets/images/budget.png')}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Budgets</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
          onPress={() => router.push('/history')}>
            <Image
              source={require('../assets/images/history.png')}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>History</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.textend}>Sakura Corporation 2025ⓒ</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
  },
  headerContainer: {
    padding: 16,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  headerImage: {
    width: 150,
    height: 60,
  },
  textop: {
    margin: 20,
    fontWeight: '500',
  },
  buttonContainer: {
    paddingHorizontal: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
  },
  textend: {
    textAlign: 'center',
    marginBottom: 12,
    color: '#aaa',
    fontSize: 12,
  },
});
