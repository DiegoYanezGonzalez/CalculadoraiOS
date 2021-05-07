import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo:{
        flex:1,
        backgroundColor:'black',
        
        
    },
    calculadoraContainer:{
        flex:1,
        paddingHorizontal:20,
        justifyContent:'flex-end'
    },
    resultado:{
        color:'white',
        fontSize:60,
        textAlign:'right',
        marginBottom:15

    },
    resultadoPequeno:{
        
        color:'rgba(255,255,255,0.5) ',
        fontSize:30,
        textAlign:'right',
    },
    boton:{
        height:80,
        width:80,
        backgroundColor:'#333333',
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:5
        
    },
    botonTexto:{
        textAlign:'center',
        color:'white',
        padding:10,
        fontSize:25,
        fontWeight:'bold'
    },
    fila:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:18,
        paddingHorizontal:10
    }
    
});