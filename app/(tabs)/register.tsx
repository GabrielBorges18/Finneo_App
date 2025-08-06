import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrar, setLembrar] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logocolorido.png')} resizeMode="contain" style={styles.title} />
      <Text style={styles.slogan}>Sua nova forma de cuidar do dinheiro</Text>

      <View style={styles.card}>
        <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={24} style={styles.inputIcon} color="gray" />
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail ou CPF"
            placeholderTextColor="#666"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="lock" size={24} style={styles.inputIcon} color="gray" />
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#666"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        <View style={styles.row}>
          <View style={styles.checkboxContainer}>
            <Checkbox value={lembrar} onValueChange={setLembrar} color={lembrar ? '#004C59' : undefined} />
            <Text style={styles.checkboxLabel}>Lembrar de mim</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgot}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.separatorContainer}>
          <View style={styles.separator} />
          <Text style={styles.ou}>ou</Text>
          <View style={styles.separator} />
        </View>

        <TouchableOpacity style={styles.altButton}>
          <Text style={styles.googleText}><FontAwesome name="google" size={20} color="#4285F4" /> Entrar com Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.altButton}>
          <Text style={styles.appleText}><FontAwesome name="apple" size={20} color="black" /> Entrar com Apple</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
