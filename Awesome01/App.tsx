import { color } from "@mui/system";
import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet
} from 'react-native'

function App() {
  return(
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Hello Harish dai!!!</Text>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    padding:10,
    marginBottom:10,
    alignItems:'center',
    backgroundColor:'#30b458',
    color:'blue',
  },
})

export default App;