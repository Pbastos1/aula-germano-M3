import { Text, View, Button, TextInput } from 'react-native';

export default function TelaUm(){
    return (
        <View>
            <Text>
                21 a 19 deu esperança
            </Text>
        </View>
    )

}
export function Cabecalho(){
    return ( 
<View style={{backgroundColor: 'grey', padding: 50}}>
    <Text style={{fontSize:26, fontWeight: 'bold', textAlign: 'center'}}>
        Cabeçalho
    </Text>
    

    </View>
)
   
}
export function Corpo(){
    return (
        <View style={{backgroundColor: 'lightyellow', padding: 50, marginLeft: 30, marginRight: 30}}>

    <Text style={{fontSize:26,fontWeight: 'bold', textAlign:'justify'}}>
        E-mail:
    </Text>
    <TextInput style={{
        height: 40,
        backgroundColor: 'lightgrey',
        padding: 5
    }}/>

    <Text style={{fontSize:25,fontWeight: 'bold'}}>
       Senha:
    </Text>
    <TextInput style={{
        height: 40,
        backgroundColor: 'lightgrey',   
        marginBottom: 20,
        padding: 5
    }}/>

    <Button title='Entrar' style={{}}></Button>

    </View>
)

}
export function Rodape(){
    return(
        <View style={{}}>

    
    
    </View>
    )
}
