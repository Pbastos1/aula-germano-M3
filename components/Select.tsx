import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

function Selec(){
    return(
        <View>
            <Text>
                Qual seu main do Valorant?
            </Text>
        </View>
    )

}

const mains=[
    { id: 1, nome: 'Astra' },
    { id: 2, nome: 'Breach' },
    { id: 3, nome: 'Brimstone' },
    { id: 4, nome: 'Chamber' },
    { id: 5, nome: 'Clove' },
    { id: 6, nome: 'Cypher' },
    { id: 7, nome: 'Deadlock' },
    { id: 8, nome: 'Fade' },
    { id: 9, nome: 'Gekko' },
    { id: 10, nome: 'Harbor' },
    { id: 11, nome: 'Iso' },
    { id: 12, nome: 'Jett' },
    { id: 13, nome: 'Killjoy' },
    { id: 14, nome: 'KAY/O' },
    { id: 15, nome: 'Neon' },
    { id: 16, nome: 'Omen' },
    { id: 17, nome: 'Phoenix' },
    { id: 18, nome: 'Raze' },
    { id: 19, nome: 'Reyna' },
    { id: 20, nome: 'Sage' },
    { id: 21, nome: 'Skye' },
    { id: 22, nome: 'Sova' },
    { id: 23, nome: 'Tejo' },
    { id: 24, nome: 'Viper' },
    { id: 25, nome: 'Vyse' },
    { id: 26, nome: 'Yoru' },
]

interface Main {
    id: number,
    nome: string,
}
export default function Select(){
    const [selectedValue, setSelectedValue] = useState<string>()
    const [main, setValueMain] = useState<Main>();
}
