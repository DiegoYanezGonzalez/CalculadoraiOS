import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';

enum Operadores{
        sumar,
        restar,
        multiplicar,
        dividir
}

export const CalculadoraScreen = () => {

const [numeroAnterior, setNumeroAnterior] = useState('0');
const [numero, setNumero] = useState('0');

const ultimaOperacion = useRef<Operadores>();

const limpiar = () => {
     setNumero('0');
     setNumeroAnterior('0');
}

const armarNumero = (numeroTexto:string) => {
        //Do not accept double point
        if(numero.includes('.') && numeroTexto === '.' ) return;
        
        if(numero.startsWith('0') || numero.startsWith('-0' ) ) {
 
            //Decimal Point
            if (numeroTexto === '.') {
                    setNumero(numero+numeroAnterior);
           //Evaluate if it is another zero, and there is a point
            } else if ( numeroTexto === '0' && numero.includes('.') ){
                    setNumero(numero + numeroTexto);
            //Evaluate if it is diferrent of zero, and not have a point        
            }else if( numeroTexto !== '0' && !numero.includes('.') ){
                setNumero(numeroTexto);
            
              //Evitar 0.0000
            }else if( numeroTexto === '0' && !numero.includes('.') ){
                   setNumero(numero);
            }else{
                setNumero(numero+numeroTexto); 
        }

        }else{
                setNumero(numero+numeroTexto);
        }

   }

   const btnDelete = () =>{
           let negativo='';
           let numeroTemp = numero;
           if(numero.includes('-')){
                   negativo='-';
                   numeroTemp=numero.substr(1);
           }
           if (numero.length>1){
                   setNumero(negativo+numeroTemp.slice(0,-1));
           }else{
                   setNumero('0');
           }

   }

   const cambiarNumPorAnterior = () =>{
           if(numero.endsWith('.')){
                setNumeroAnterior(numero.slice(0,-1));
           }else{
                   setNumeroAnterior(numero);
           }
     
           setNumero('0');
   }

   const positivoNegativo = () => {
           if (numero.includes('-') ) {
                   setNumero(numero.replace('-' , ''));
           }else{
                setNumero('-' + numero);

           }
        }

        const btnDividir = () =>{
                cambiarNumPorAnterior();
                ultimaOperacion.current =Operadores.dividir;
        }
        const btnMultiplicar = () =>{
                cambiarNumPorAnterior();
                ultimaOperacion.current =Operadores.multiplicar;
        }
        const btnRestar = () =>{
                cambiarNumPorAnterior();
                ultimaOperacion.current =Operadores.restar;
        }
        const btnSumar = () =>{
                cambiarNumPorAnterior();
                ultimaOperacion.current =Operadores.sumar;
        }

    return (
        <View style={styles.calculadoraContainer}>
                {
                        (numeroAnterior === '0') && 
                        (<Text style={styles.resultadoPequeno}> {numeroAnterior} </Text>)
                }
           
            <Text 
            style={styles.resultado}
            numberOfLines={1}
            adjustsFontSizeToFit
            > 
            {numero} 
            </Text>
            
            <View style={styles.fila}>

                    <BotonCalc texto="C" color='#9B9B9B' accion={limpiar} />
                    <BotonCalc texto="+/-" color='#9B9B9B'accion={positivoNegativo}/>
                    <BotonCalc texto="del" color='#9B9B9B'accion={btnDelete}/>
                    <BotonCalc texto="/" color='#FF9427'accion={btnDividir}/>
                    

            </View>
            
            <View style={styles.fila}>

                    <BotonCalc texto="7" accion= {armarNumero} />
                    <BotonCalc texto="8" accion= {armarNumero}/>
                    <BotonCalc texto="9" accion= {armarNumero}/>
                    <BotonCalc texto="x" color='#FF9427'accion={btnMultiplicar}/>
                    

            </View>

            <View style={styles.fila}>

                    <BotonCalc texto="4" accion= {armarNumero}/>
                    <BotonCalc texto="5" accion= {armarNumero}/>
                    <BotonCalc texto="6" accion= {armarNumero}/>
                    <BotonCalc texto="-" color='#FF9427'accion={btnRestar}/>
                    

            </View>

            <View style={styles.fila}>

                    <BotonCalc texto="1" accion= {armarNumero}/>
                    <BotonCalc texto="2" accion= {armarNumero}/>
                    <BotonCalc texto="3" accion= {armarNumero}/>
                    <BotonCalc texto="+" color='#FF9427'accion={btnSumar}/>
                    

            </View>

            <View style={styles.fila}>

                    <BotonCalc texto="0" ancho accion= {armarNumero}/>
                    <BotonCalc texto="." accion= {armarNumero}/>
                    <BotonCalc texto="=" color='#FF9427'accion={limpiar}/>
                    

            </View>
        </View>
        
    )
}
