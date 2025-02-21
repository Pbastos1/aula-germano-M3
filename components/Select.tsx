import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import React, {useState, useEffect, createContext} from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign  from '@expo/vector-icons/AntDesign';
import Style from '@/assets/css/style';


const mains=[
    { id: 1, agente: 'Astra' },
    { id: 2, agente: 'Breach' },
    { id: 3, agente: 'Brimstone' },
    { id: 4, agente: 'Chamber' },
    { id: 5, agente: 'Clove' },
    { id: 6, agente: 'Cypher' },
    { id: 7, agente: 'Deadlock' },
    { id: 8, agente: 'Fade' },
    { id: 9, agente: 'Gekko' },
    { id: 10, agente: 'Harbor' },
    { id: 11, agente: 'Iso' },
    { id: 12, agente: 'Jett' },
    { id: 13, agente: 'Killjoy' },
    { id: 14, agente: 'KAY/O' },
    { id: 15, agente: 'Neon' },
    { id: 16, agente: 'Omen' },
    { id: 17, agente: 'Phoenix' },
    { id: 18, agente: 'Raze' },
    { id: 19, agente: 'Reyna' },
    { id: 20, agente: 'Sage' },
    { id: 21, agente: 'Skye' },
    { id: 22, agente: 'Sova' },
    { id: 23, agente: 'Tejo' },
    { id: 24, agente: 'Viper' },
    { id: 25, agente: 'Vyse' },
    { id: 26, agente: 'Yoru' },
]

interface Main {
    id: number,
    agente: string,
}
export default function Select(){
    const [selectedValue, setSelectedValue] = useState<string>()
    const [main, setValueMain] = useState<Main>();

    return(
        <View style={{flex:1}}>
            <Text style={[Style.textBlack, Style.textSizeG, Style.bgTransparent5, Style.centralizar]}>Qual seu main do Valorant?</Text>
            <Dropdown
            selectedValue={selectedValue} setSelectedValue={setSelectedValue}
            style={[Styles.dropdown, Styles.selectContainer]}
            placeholderStyle={Styles.placeholderStyle}
            selectedTexteStyle={Styles.selectedTextStyle}
            inputSearchStyle={Styles.inputSearchStyle}
            iconStyle={Styles.iconStyle}
            data={mains || []}
            search
            maxHeight={300}
            valueField="id"
            labelField="agente"
            placeholder='Selecione um agente'
            searchPlaceholder='Search...'
            value={main}
            onChange={ function(item) {
              setValueMain(item.id); // Use item.id as per the valueField
    
            }}
            renderLeftIcon={() => (
              <AntDesign style={Styles.icon} color="white" name="Safety" size={20} />
            )}
            
          />
        </View>
    )
}

const Styles = StyleSheet.create({

    icon: {
      marginRight: 5,
      // color: 'white',
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    home: {
      marginTop: 0,
      padding: 10,
    },
    label: {
      fontSize: 18,
      marginBottom: 0,
      marginLeft:16,
      color: 'white',
    },
  
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    
  
  
    selectContainer: {
      // width: 200,
      borderRadius: 10,
      backgroundColor: '#fff',
      elevation: 12, // For Android shadow
      shadowColor: '#000', // For iOS shadow
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.55,
      shadowRadius: 5.84,
  },
  
  picker: {
      height: 60,
      width: '100%',
  },
  
  dropdown: {
      margin: 16,
      height: 50,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
  },
  
  
  });