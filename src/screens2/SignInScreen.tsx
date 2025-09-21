/* screens/Auth/Login.js */

import React, { Component, useState } from "react";
import {
  Button,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  Pressable,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from '../firebase/firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../global/colors';
import logo from '../assets/logoAzul.png';
import SubmitButton from '../components/SubmitButton';
import InputForm from '../components/InputForm';
  // Import an icon library like 'react-native-vector-icons'
import Icon from 'react-native-vector-icons/FontAwesome';



const Login = ({ navigation }) => {

    const Spacing = 10; // Define the value of Spacing
    
      /*Setting up the useState for Email and Password*/
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
       // to show the password when click on the icon
      const [showPassword, setShowPassword] = useState(false);
    
      //function for login User
    
      const loginUser = async (email:any, password:any) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredentials) => {
            const user = userCredentials.user;
           // SaveIS_USER_LOGGED_IN in storage to verify user login
            AsyncStorage.setItem('IS_USER_LOGGED_IN', 'yes');
            alert("Logged in with"+ user.email);
      })
      .catch(error => alert(error.message));
      };

//function to implement forget password
  const forgetPassword = () => {

    const auth:any="";
    
      auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Password reset email sent");
      })
      .catch((error:any) => {
        alert(error);
      });
  };

  return (
<SafeAreaView>
<View style={styles.main}>
            <Image source={logo} style={styles.logo} />
  <View style={styles.container}>
    <Text style={styles.title}>Iniciar Sesión</Text>
  
          <TextInput
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />
          <View style={styles.containerPassword}>            
               <TextInput
                 placeholder="Password"
                 onChangeText={(password) => setPassword(password)}
                 autoCorrect={false}
                 secureTextEntry={!showPassword}
                 style={styles.input}/>
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} /*style={styles.eyeIcon}*/>
                  <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="white" />
                </TouchableOpacity>
          </View>
        

        <SubmitButton onPress={() => { forgetPassword() }} 
                        title="Forgot Password ?" />
        <SubmitButton onPress={() => loginUser(email, password)} title="Sign In" />  
        <Pressable onPress={() => navigation.navigate("Signup")} >
                    <Text style={styles.subLink}>Sign Up</Text>
        </Pressable>
       </View>  
</View>
</SafeAreaView>  );
}

export default Login;

const styles = StyleSheet.create({
  containerPassword: {
         display:'flex' , 
         flexDirection:'row', 
         justifyContent:'space-between',  
         width:'100%'
  },
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.azul,
        marginBottom:20,
        minHeight: '100%'
    },
    container: {
        width: "90%",
        backgroundColor: colors.azulClaro,
        borderRadius: 10,
        paddingVertical: 30,
        paddingHorizontal: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        marginBottom: 100
    },
    title: {
        fontSize: 35,
        fontFamily: "Lobster",
        color: colors.amarillo,
        marginBottom: 50,
    },
    sub: {
        fontSize: 18,
        color: "white",
        marginTop: 45,
    },
    subLink: {
        fontSize: 22,
        color: colors.amarillo,
        marginTop: 10,
    },
    logo: {
        width: 90,
        height: 90,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        marginTop: 40,
        marginBottom: 20
    },
    inputContainer: {
        width: "100%"
    },
    input: {
        width: "90%",
        borderWidth: 0,
        borderBottomWidth: 3,
        borderBottomColor: "white",
        padding: 5,
        fontFamily: "Josefin",
        fontSize: 20,
        marginHorizontal: "5%",
        marginVertical: 15,
        color: "white",
        marginBottom: 40
    },
    titleInput: {
        width: "90%",
        marginHorizontal: "5%",
        fontSize: 20,
        fontFamily: "Josefin",
        color: "white",
    },
    error: {
        fontSize: 18,
        color: "red",
        fontFamily: "Josefin",
        fontStyle: "italic",
        marginLeft: 20
    },
     
})