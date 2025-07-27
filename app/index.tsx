import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Sign() {
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
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => router.push('/signup')}
        >
          <Text style={styles.textButton}>Sign up free</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.phoneButton}
          onPress={() => router.push('/signup')}
        >
          <Text>Continue with phone number</Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.iconRow}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
              }}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://img.favpng.com/19/19/7/logo-apple-icon-information-png-favpng-LgLa8kMeALfAyE0iKbRnAJtnE.jpg',
              }}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.loginText}>
          Already have an account?{' '}
          <Text style={styles.loginLink} onPress={() => router.push('/signup')}>
            Log in now!
          </Text>
        </Text>
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
    paddingBottom: 40,
  },
  signUpButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFB7C5',
    width: 300,
    borderRadius: 50,
    height: 60,
  },
  textButton: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  phoneButton: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    width: 300,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000000',
    borderWidth: 1,
    marginTop: 10,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: 260,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#000',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#000',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  bottom: {
    alignItems: 'center',
    paddingBottom: 20,
    marginBottom: 20,
  },
  loginText: {
    color: '#000',
    fontSize: 14,
  },
  loginLink: {
    fontWeight: 'bold',
    color: '#0000EE',
    textDecorationLine: 'underline',
  },
});