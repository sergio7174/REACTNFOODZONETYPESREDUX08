import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import Color from '../theme/Color';
import { COLORS } from "../constants";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase/firebaseConfig'; // Assuming you have your firebase config set up 

const HeaderTabNavigationCustom = () => {

const Logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.log(error);
  }
};
  
  const navigation = useNavigation();

  return (
    <>
    <View style={styles.header} >
     <View>
        <Text style={{ color:'#7C0902', fontSize: 20, marginLeft:20}}>Valencia Chicken Restaurants</Text>
     </View>                                            
     <view>
      <TouchableOpacity
        onPress={() => Logout()}
        style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
      </view>     
    </View>
    </>
  )
}
const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 20,
    width: "90%",

  },
  text: {
    color: Color.whiteHex,
    fontSize: hp(2.5),
    fontWeight: '600'
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    width: "90%",
  },
  buttonText: {
      color: COLORS.white,
      fontSize: 18,
      fontWeight: "bold",
    },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.black,
    borderRadius: 10,
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },  
})
export default HeaderTabNavigationCustom;