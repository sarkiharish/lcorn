import React,{useState} from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

const App = () => {

  const [randomColor, setRandomColor] = useState("rgb(32, 0, 126)");

  const changeBG = () => {
    let color = "rgb("+
        Math.floor(Math.random()*256)+
      ","+
        Math.floor(Math.random()*256)+
      ","+
        Math.floor(Math.random()*256)+
      ")";

    setRandomColor(color);
  }

  const resetBG = () => {
    setRandomColor("#000000");
  }

  return(
    <>
      <View style={[styles.container,{backgroundColor:randomColor}]}>
        <TouchableOpacity onPress={changeBG}>
          <Text style={styles.text}>Tap Me</Text>
          <Text onPress={resetBG} style={styles.resettext}>Reset</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};


export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  text:{
    fontSize:30,
    backgroundColor:"#BB2CD9",
    paddingVertical:10,
    paddingHorizontal:40,
    color:"#FFFFFF",
    borderRadius:15,
    textTransform:"uppercase",
  },
  resettext:{
   fontSize:30,
   backgroundColor:"rgb(32,100,126)",
   marginTop:10,
   paddingVertical:10,
   paddingHorizontal:40,
   color:"#FFFFFF",
   borderRadius:15, 
  },

});