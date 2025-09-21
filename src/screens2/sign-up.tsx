import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Pressable,
  StyleSheet,
  Image
} from "react-native";
import { useState } from "react";
// Import the MaterialIcons
import { SIZES } from "../constants/index";
import { auth } from '../firebase/firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ScrollView } from "react-native-gesture-handler";
import { registerSchema } from '../validations/registerSchema';
import SubmitButton from '../components/SubmitButton';
import { colors } from '../global/colors';
  // Import an icon library like 'react-native-vector-icons'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import logo from '../../assets/SIGNUP02blue.png';


const RegisterScreen = ({ navigation }) => {

  const Spacing = 10; // Define the value of Spacing

  //useState for all the fields
  const [email, setEmail]:any = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
 // to show the password when click on the icon
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordcp, setShowPasswordcp] = useState(false);

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");


  const checkAndRegister = async() => {
    if (
      !email || !password || !confirmPassword
      
    ) {
      alert("Please fill in all fields.");
      return;
    }

    /**** my block ************************************/

     alert("Im at checkAndRegiste - line 69 - ready to registerSchema.validateSync ");
    try {
            registerSchema.validateSync({ email, password, confirmPassword })
            
        } catch (error) {
            switch (error.path) {
                case "email":
                    setErrorEmail(error.message)
                    setErrorPassword("")
                    setErrorConfirmPassword("")
                    break
                case "password":
                    setErrorEmail("")
                    setErrorPassword(error.message)
                    setErrorConfirmPassword("")
                    break
                case "confirmPassword":
                    setErrorEmail("")
                    setErrorPassword("")
                    setErrorConfirmPassword(error.message)
                    break

            }
        }

    /** End of my block *******************************/

    // All fields are filled, proceed with registration

    alert("Im at checkAndRegiste - I leave registerSchema.validateSync - line 98 - ready to registerUser ");


    registerUser(email, password);
  };

  //function for registration of user

  const registerUser = async (email:any, password:any) => {
     const auth = getAuth();
    
      try {
       
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth,email, password);

      alert('Signup - line 64 - User Created OK'+ email);
      
    } catch (e) { console.error('Error adding document: ', e);}}

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", backgroundColor: "#fff2", marginTop:40, marginBottom:40 }}>
      <ScrollView>
        <View style={styles.main}>
           
          <View style={styles.container}>
             <Image source={logo} style={styles.logo} />
            <Text style={styles.title}>Register here</Text>
            <Text
              style={{
                fontFamily: "semibold",
                fontSize: SIZES.large,
                maxWidth: "80%",
                textAlign: "center",
                paddingTop: -20,
              }}
            >
              Don't have an account? Don't Worry!
            </Text>
           {/*** inputs form begining  */}   
    <view  style={styles.inputContainer}>           
     <TextInput
        placeholder="Email"
        onChangeText={(email) => setEmail(email)}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}/>
    </view>    

    <View style={styles.containerPassword}>            
     <TextInput
       placeholder="Password"
       onChangeText={(password) => setPassword(password)}
       autoCorrect={false}
       secureTextEntry={!showPassword}
       style={styles.input}/>
      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
        <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="white" />
      </TouchableOpacity>
         </View> 
      
      <View style={styles.containerPassword}>                     
            <TextInput
              placeholder="Confirm Password"
              onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
              autoCorrect={false}
              secureTextEntry={!showPasswordcp}
              style={styles.input}/>
        <TouchableOpacity onPress={() => setShowPasswordcp(!showPasswordcp)} >
        <Icon name={showPasswordcp ? 'eye' : 'eye-slash'} size={20} color="white" />
        </TouchableOpacity>
       </View>    
           <SubmitButton  onPress={checkAndRegister} title="Sign Up" />
           <Text style={styles.sub}>Have an Account?</Text>
           <Pressable style={styles.linkContainer} onPress={() => navigation.navigate("SignIn")} >
             <Text style={styles.subLink}>Sign In</Text>
           </Pressable>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        width: "90%",
        backgroundColor: colors.azulClaro,
        gap: 15,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20
    },
    title: {
        fontSize: 35,
        fontFamily: "Lobster",
        color: colors.amarillo,
    },
    sub: {
        fontSize: 20,
        fontFamily: "Josefin",
        color: "white",
        marginTop:20,
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
    linkContainer: {
        borderWidth: 1,         
        borderColor: colors.amarillo, 
        borderRadius: 5,        
        padding: 5,             
        margin: 12
    },
    subLink: {
        fontSize: 22,
        fontFamily: "Josefin",
        color: colors.amarillo,
        padding: 8,
    },
    inputContainer: {
        width: "84%"
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
    containerPassword: {
         display:'flex' , 
         flexDirection:'row', 
         justifyContent:'space-between',  
         width:'100%'
  },
})
