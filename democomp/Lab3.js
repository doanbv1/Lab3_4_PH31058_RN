import { View, Text, TextInput, TouchableOpacity, Alert, Modal } from 'react-native'
import React,{useState} from 'react'

const Lab3 = () => {
  const [ketQua, setketQua] = useState(0)
  const [number1, setnumber1] = useState('')
  const [number2, setnumber2] = useState('')

  const [showMoDal, setshowMoDal] = useState(false)

  const sum = () => {
    const num1 = parseFloat(number1) || 0;
    const num2 = parseFloat(number2) || 0;
    const kq = num1 + num2;
    setketQua(kq)
  }
  const phepTru = () => {
    const num1 = parseFloat(number1) || 0;
    const num2 = parseFloat(number2) || 0;
    const kq = num1 - num2;
    setketQua(kq);
    
   Alert.alert(kq+"")
  }
  const phepNhan = () => {
    const num1 = parseFloat(number1) || 0;
    const num2 = parseFloat(number2) || 0;
    const kq = num1 * num2;
    
    setketQua(kq)
    console.log(kq)
  }
  const phepChia = () => {
    const num1 = parseFloat(number1) || 0;
    const num2 = parseFloat(number2) || 0;
    const kq = num1 / num2;

    setketQua(kq)
  }


  return (
    <View style={{ flex: 1, borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
    <View style={{ alignItems: 'center', borderWidth: 1, width: 300, height: 400, padding:8 }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>May Tinh Dien Tu</Text>

      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
        {'Ket qua: ' + ketQua }
      </Text>

      <TextInput
        
        keyboardType='numeric'
        placeholder='Number 1'
        style={{ width: '100%', borderRadius: 10, borderWidth: 1, marginTop: 20, paddingLeft:8 }}
        value={number1}
        onChangeText={(text) => setnumber1(text)}
      />
      <TextInput
        keyboardType='numeric'
        placeholder='Number 2'
        style={{ width: '100%', borderRadius: 10, borderWidth: 1, marginTop: 20, paddingLeft:8 }}
        value={number2}
        onChangeText={(text) => setnumber2(text)}
      />
      <View style={{ width: '100%', height: '20%', borderRadius: 10, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 10, borderWidth: 1, marginTop: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}
          onPress={sum}
        >
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>+</Text>

        </TouchableOpacity>

        <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 10, borderWidth: 1, marginTop: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}
          onPress={phepTru}
        >
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 10, borderWidth: 1, marginTop: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}
          onPress={phepNhan}
        >
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 10, borderWidth: 1, marginTop: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}
          onPress={() => setshowMoDal(!showMoDal)}
        >
          
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>/</Text>
        </TouchableOpacity>

      </View>
    </View>
    <Modal     
              animationType='fade'
              visible={showMoDal}
              transparent={true}
            > 
            <View style={{flex:1, justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.2)'}}>
            <View style={{width:'60%', height:150, backgroundColor:'yellow', justifyContent:'center', alignItems: 'center',borderWidth:2, borderRadius:30}}>
                <Text>
                {number1 / number2}
               </Text>
               
                      <TouchableOpacity
                      onPress={() => setshowMoDal(!showMoDal)}
                      style={{borderWidth:2, borderRadius:30, backgroundColor:'pink'}}
                      >
                        <Text>
                          Close modal 
                        </Text>
                      </TouchableOpacity>
               
              </View>

            </View>
              
            </Modal>
  </View>
  )
}

export default Lab3