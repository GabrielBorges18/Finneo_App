import { Link } from 'expo-router';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require('../../assets/images/background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container2}>
        <Image
          source={require('../../assets/images/logobranco.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title2}>Bem-vindo</Text>
        <Text style={styles.subtitle}>Sua nova forma de cuidar do dinheiro</Text>

        <Link href="/login" asChild>
          <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.buttonTextPrimary}>Entrar</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/register" asChild>
          <TouchableOpacity style={styles.buttonSecondary}>
            <Text style={styles.buttonTextSecondary}>Criar uma conta</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ImageBackground>
  );
}
