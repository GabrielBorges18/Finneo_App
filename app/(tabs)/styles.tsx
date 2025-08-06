import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      paddingTop: 80,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    title: {
      width: 300,
      height: 150,
      marginBottom: 10,
    },
    slogan: {
      fontSize: 16,
      color: '#444',
      marginBottom: 30,
      textAlign: 'center',
    },
    card: {
      width: '100%',
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 14,
      elevation: 4,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowRadius: 10,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F6F6F6',
      borderRadius: 8,
      paddingHorizontal: 12,
      marginBottom: 12,
    },
    inputIcon: {
      width: 20,
      height: 20,
      marginRight: 8,
      tintColor: '#999',
    },
    input: {
      flex: 1,
      paddingVertical: 12,
      fontSize: 16,
      color: '#333',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 12,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkboxLabel: {
      marginLeft: 6,
      color: '#333',
    },
    forgot: {
      color: '#00796B',
      fontWeight: '600',
      fontSize: 14,
    },
    loginButton: {
      backgroundColor: '#004C59',
      paddingVertical: 14,
      borderRadius: 8,
      marginTop: 10,
    },
    loginText: {
      textAlign: 'center',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    separatorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 18,
    },
    separator: {
      flex: 1,
      height: 1,
      backgroundColor: '#ddd',
    },
    ou: {
      marginHorizontal: 10,
      color: '#999',
    },
    altButton: {
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
      paddingVertical: 12,
      marginBottom: 10,
    },
    googleText: {
      textAlign: 'center',
      fontWeight: '600',
      color: '#000',
    },
    appleText: {
      textAlign: 'center',
      fontWeight: '600',
      color: '#000',
    },
    backLink: {
      marginTop: 15,
      textAlign: 'center',
      color: '#00796B',
      fontWeight: 'bold',
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      container2: {
        width: '85%',
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      logo: {
        width: 240,
        height: 90,
        marginBottom: 30,
      },
      title2: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
      },
      subtitle: {
        fontSize: 14,
        color: '#f0f0f0',
        marginBottom: 40,
        textAlign: 'center',
      },
      buttonPrimary: {
        backgroundColor: '#003c47',
        paddingVertical: 14,
        paddingHorizontal: 50,
        borderRadius: 8,
        marginBottom: 16,
        width: '100%',
      },
      buttonTextPrimary: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
      },
      buttonSecondary: {
        backgroundColor: '#fff',
        paddingVertical: 14,
        paddingHorizontal: 50,
        borderRadius: 8,
        width: '100%',
      },
      buttonTextSecondary: {
        color: '#003c47',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
      },
  });
  
export default styles;