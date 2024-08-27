import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, Image } from 'react-native';

const App = () => {
    const [number, setNumber] = useState(7320.92);
    const [valor, setValor] = useState('');
    const [confirming, setConfirming] = useState(false);

    const sacar = () => {
        setConfirming(true);
    };

    const confirmarSaque = () => {
        const valorComMulta = Number(valor) * 1.025; 
        const novoSaldo = Number(number) - valorComMulta;
        setNumber(novoSaldo);
        setValor('');
        setConfirming(false);
    };

    const cancelarSaque = () => {
        setConfirming(false);
        setValor(''); 
    };

    const depositar = () => {
        const valorComBonus = Number(valor) * 1.01; 
        const novoSaldo = Number(number) + valorComBonus;
        setNumber(novoSaldo);
        setValor(''); 
    };

    return (
        <View style={styles.container}>
            <Image 
                style={styles.logo}
                source={require('./img/downloadO.png')}
            />
            <Text style={styles.saldo}>Saldo: R${number.toFixed(2)}</Text>

            {confirming ? (
                <View style={styles.confirmContainer}>
                    <Text style={styles.confirmText}>
                        Você deseja realmente sacar R${valor}?
                    </Text>
                    <Text style={styles.confirmSaldo}>
                        Saldo atual: R${number.toFixed(2)}
                    </Text>
                    <Pressable onPress={confirmarSaque}>
                        <Text style={styles.botao}>Confirmar</Text>
                    </Pressable>
                    <Pressable onPress={cancelarSaque}>
                        <Text style={styles.botao}>Cancelar</Text>
                    </Pressable>
                </View>
            ) : (
                <>
                    <View style={styles.alinha}>
                        <Image 
                            style={styles.money}
                            source={require('./img/as2.png')}
                        />
                        <TextInput
                            id='value' 
                            value={valor}
                            keyboardType='numeric'
                            style={styles.input}
                            placeholder='Digite o Valor'
                            onChangeText={setValor}
                        />
                    </View>
                    <View style={styles.options}>
                        <Pressable onPress={sacar}>
                            <Text style={styles.botao}>Sacar</Text>
                        </Pressable>
                        <Pressable onPress={depositar}>
                            <Text style={styles.botao}>Depositar</Text>
                        </Pressable>
                    </View>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },

    logo: {
        width: 200,
        height: 200,
        marginBottom: 20
    },
    saldo: {
        margin: 30,
        fontSize: 24,
        fontWeight: 'bold'
    },

    alinha: {
        flexDirection: 'row', 
        alignItems: 'center',
        marginBottom: 20 
    },

    input: {
        width: 200,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        borderRadius: 5
    },

    options: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    money: {
        width: 20,
        height: 20
    },

    botao: {
        backgroundColor: '#e71919',
        borderRadius: 15,
        textAlign: 'center',
        padding: 10,
        color: '#FFF', 
        width: 150,
        margin: 10
    },

    confirmContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
    },

    confirmText: {
        fontSize: 18,
        marginBottom: 10,
    },

    confirmSaldo: {
        fontSize: 16,
        marginBottom: 20,
    },
});

export default App;
