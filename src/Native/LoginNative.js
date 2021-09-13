import React, { useState, useRef } from 'react';
import { View, Text, TextInput, ImageBackground, TouchableOpacity, TouchableHighlight, Dimensions, StyleSheet } from 'react-native';
import Styles from '../../../constants/Styles.js';
import { POST_DATA } from '../../Services/Request.Service';
import { setToken, setUserData, getToken, getUserData } from '../../Services/Storage.Service';
// import BottomTabs from '../BottomTab/BottomTabs.js';
import { useToast } from "react-native-toast-notifications";
import Snackbar from 'react-native-snackbar';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const LoginScreen = ({ navigation }) => {
    const toast = useToast();

    const [loginData, setLoginData] = useState({
        mobile_number: '',
        password: '',
    });


    const handleLoginValidation = () => {
        if (!loginData.mobile_number.trim()) {
            Snackbar.show({
                text: 'Please Enter Mobile Number',
            })
            return false;
        }
        if (loginData.mobile_number.length != 10) {
            Snackbar.show({
                text: 'Mobile Number is Too Short',
            })
            return false;
        }
        if (!loginData.password.trim()) {
            Snackbar.show({
                text: 'Please Enter Password',
            })
            return false;
        }
        if (loginData.password.length <= 5) {
            Snackbar.show({
                text: 'Please Enter minimum 6 digit password',
            })
            return false;
        }
        return true;
    }
    const handleLoginSubmit = async () => {
        const isValid = handleLoginValidation();
        if (isValid) {
            POST_DATA('login', loginData).then(
                async (resp) => {
                    if (resp.status === 1) {
                        Snackbar.show({
                            text: 'Login Successfully',
                        });
                        await setUserData(resp.data);
                        await setToken(resp.token);
                        navigation.navigate('BottomT')
                    } else {
                        toast.show(resp.message);
                    }
                }
            );
        }
    };

    const lastNameRef = useRef();

    return (
        <ImageBackground source={require('../../assets/icons1/loginbg.jpeg')}
            // resizeMode="center"
            style={Styles.bgImage}>
            <View style={Styles.container}>
                <Text style={styles.LoginHeading}>Login</Text>
                <Text style={styles.LoginSubHeading}>into your account</Text>
                <View style={{ marginTop: 60 }}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(mobile_number) => setLoginData(prevState => ({
                            ...prevState, mobile_number
                        }))}
                        value={loginData.mobile_number}
                        returnKeyType={"next"}
                        placeholder="Mobile"
                        autoFocus={true}
                        blurOnSubmit={false}
                        onSubmitEditing={() => {
                            lastNameRef.current.focus();
                        }}
                        placeholderTextColor='gray'
                        keyboardType="numeric"
                        maxLength={10}
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(password) => setLoginData(prevState => ({
                            ...prevState, password: password
                        }))}
                        returnKeyType={"send"}
                        secureTextEntry={true}
                        value={loginData.password}
                        ref={lastNameRef}
                        placeholder="Password"
                        placeholderTextColor='gray'
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        style={styles.loginButton}
                        // onPress={() => navigation.navigate('Bottom')}>
                        onPress={() => handleLoginSubmit()}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Forgot')}
                        style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        style={styles.registerButton}
                        onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.loginButtonText}>Register</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </ImageBackground >
    );
};

export default LoginScreen;

const styles = StyleSheet.create({

    LoginHeading: {
        fontSize: Styles.font60.fontSize,
        color: Styles.blue.color,
    },
    LoginSubHeading: {
        fontSize: Styles.font16.fontSize,
        color: Styles.blue.color,
    },
    textInput: {
        color: '#000000',
        height: 50,
        paddingHorizontal: 25,
        fontSize: 16,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: Styles.blue.color,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        paddingHorizontal: 25,
        marginVertical: 10,
        // borderWidth: 1,
        // borderColor: 'gray',
        borderRadius: 30,
    },
    registerButton: {
        backgroundColor: Styles.red.color,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        paddingHorizontal: 25,
        marginVertical: 10,
        // borderWidth: 1,
        // borderColor: 'gray',
        borderRadius: 30,
    },
    loginButtonText: {
        fontSize: 18,
        color: 'white',
    },
    forgotPasswordText: {
        paddingVertical: 16,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'gray',
    }
});

