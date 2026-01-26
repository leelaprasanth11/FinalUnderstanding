import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Signup({navigation}) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        
        {/* Header Image */}
        <Image
          source={require("../assets/images/half_curve.jpg")}
          style={styles.headerImage}
          resizeMode="cover"
        />

        {/* Signup Form with Background */}
        <ImageBackground
          source={require("../assets/images/design3.jpg")}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            <Text style={styles.title}>Create My Account</Text>
            
            {/* Form Fields */}
            <TextInput style={styles.input} placeholder="First Name" placeholderTextColor="#333" />
            <TextInput style={styles.input} placeholder="Last Name" placeholderTextColor="#333" />
            <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#333" />
            <TextInput style={styles.input} placeholder="Date of Birth" placeholderTextColor="#333" />

            {/* Sign Up Button */}
            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>Sign Up</Text>
              <TouchableOpacity>
                <LinearGradient
                  colors={['#8c9acf', '#040c2b']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.button}
                >
                  <Ionicons name="arrow-forward" size={20} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
            </View>

            {/* Already have an account? */}
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>
                Already have an account?{' '}
                <Text style={styles.loginLinkText} onPress={() => { navigation.navigate('Login') }}>
                                    Log In
                </Text>
              </Text>
            </View>

          </View>
        </ImageBackground>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerImage: {
    width: '100%',
    height: 150,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  overlay: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    justifyContent: 'flex-end',
  },
  signUpText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  loginText: {
    fontSize: 14,
    color: '#333',
  },
  loginLinkText: {
    color: '#c471f5',
    fontWeight: 'bold',
  },
});
