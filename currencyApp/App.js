import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';

import Snackbar from 'react-native-snackbar';

const currecyPerRupee = {
  NEPALI:1.6,
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND:0.011,
  AUSDOLLAR: 0.2,
  CANDDOLLAR:0.019,
  YEN:1.54,
  DINAR:0.0043,
  BITCOIN:0.00000028
}


const App = () =>  {
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);

  const buttonPressed=(currency)=>{
    if(!inputValue){
      return Snackbar.show({
        text: 'Please enter a value',
        backgroundColor:"#EA7773",
        textColor:"#000000",
      });
    }

    let result = parseFloat(inputValue)*currecyPerRupee[currency]
    setResultValue(result.toFixed(2))
  }







  return (
    <>
    <ScrollView backgroundColor="#1b262c"
      keyboardShouldPersistTaps="handled"
      contentInsetAdjustmentBehavior="automatic"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultValue}>{resultValue}</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter Value"
            placeholderTextColor="#c1c1c1"
            value={inputValue.toString()}
            onChangeText={(inputValue)=>setInputValue(inputValue)}
          >

          </TextInput>
        </View>

        <View style={styles.converButtonContainer}>
          {Object.keys(currecyPerRupee).map((currency)=>(
            <TouchableOpacity
              onPress={()=>buttonPressed(currency)}
              key={currency}
              style={styles.converterButton}
            >
              <Text style={styles.converterButtonText}>{currency}</Text>
            </TouchableOpacity>
          ))}


        </View>


      </SafeAreaView>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1b262c",
  },
  resultContainer:{
    height:70,
    marginTop:80,
    justifyContent:"center",
    borderColor:"#bbe1fa",
    borderWidth:2,
    alignItems:"center",
  },
  resultValue:{
    fontSize:30,
    color:"#FFF",
    fontWeight:"bold",
  },
  inputContainer:{
    height:70,
    marginTop:10,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:2,
    borderColor:"#bbe1fa",
  },
  input:{
    fontSize:30,
    textAlign:"center",
    color:"#FFFFFF",
  },

  converButtonContainer:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:10
  },
  converterButton: {
    alignItems:"center",
    justifyContent:"center",
    height:100,
    width:"33.3%",
    borderWidth:2,
    borderColor:"#bbe1fa",
    marginTop:10,
    backgroundColor:"#0f4c75",
  },
  converterButtonText:{
    color:"#FFF",
    fontSize:15
  }

});

export default App;
