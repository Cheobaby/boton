import React, { useState } from 'react';
import { View, Text, TouchableOpacity,TextInput } from 'react-native';

const App = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [text,setText]=useState("");
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={toggleDetails}>
        <Text style={{ fontSize: 20 }}>Detalles</Text>
      </TouchableOpacity>

      {showDetails && (
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 16 }}>Nombre</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={{ fontSize: 16 }}>Edad</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{console.log(text)}}>
            <Text style={{ fontSize: 16 }}>Sexo</Text>
          </TouchableOpacity>

          <TextInput placeholder='Escribe algo'
            style={{borderWidth:1,borderColor:'black'}}
            onChangeText={(text)=>{setText(text)}}
            value={text}
          />
        </View>
      )}
    </View>
  );
};

export default App;
