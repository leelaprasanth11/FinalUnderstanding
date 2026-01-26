import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Login({ navigation }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        {/* Header Image */}
        <Image
          source={require("../assets/images/half_curve.jpg")}
          style={styles.headerImage}
          resizeMode="cover"
        />

        {/* Login Form with Background */}
        <ImageBackground
          source={require("../assets/images/design3.jpg")}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            <Text style={styles.title}>Happy Ganathanthra dinotsavam!</Text>

            <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#333" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#333"
              secureTextEntry
            />

            {/* Forgot Password */}
            <TouchableOpacity style={styles.forgotPasswordContainer}>
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>

            {/* Sign In Button */}
            <View style={styles.signInContainer}>
              <Text style={styles.signInText}>Sign in</Text>
              <TouchableOpacity>
                <LinearGradient
                  colors={['#c471f5', '#fa71cd']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.button}
                >
                  <Ionicons name="arrow-forward" size={20} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
            </View>

            {/* Sign Up Link */}
            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>
                    Don't have an account?{' '}
                    <Text style={styles.createText} onPress={() => navigation.navigate('Signup')}>
                    Create
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
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#555',
    fontSize: 14,
  },
  signInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 70,
    justifyContent: 'flex-end',
  },
  signInText: {
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
  signupContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  signupText: {
    fontSize: 14,
    color: '#333',
  },
  createText: {
    color: '#c471f5',
    fontWeight: 'bold',
  },
});
