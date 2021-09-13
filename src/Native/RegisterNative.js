import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, ImageBackground, TouchableOpacity, TouchableHighlight, Dimensions, Image, StyleSheet } from 'react-native';
import Styles from '../../../constants/Styles.js';
import { RadioButton } from 'react-native-paper';
import { useToast } from "react-native-toast-notifications";
import { POST_DATA } from '../../Services/Request.Service';
import Snackbar from 'react-native-snackbar';
import { useValidation } from 'react-native-form-validator';
import ValidationMessage from '../../Constants/ValidationMessage';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const RegisterScreen = ({ navigation }) => {
    const [checked, setChecked] = React.useState('student');
    const [registerData, setRegisterData] = useState({
        mobile_number: '',
        password: '',
        role: checked,
        device_token: 'token test',
        device_id: '123456',
        device_type: 'ANDROID'
    });
    const toast = useToast();

    const { validate, isFormValid, getErrorMessages } = useValidation({
        state: registerData,
        messages: ValidationMessage,
        labels: ValidationMessage.labels,
    });

    useEffect(() => {
        validate({
            mobile_number: { required: true, numbers: true },
            password: { required: true, minlength: 6 }
        });
    }, [registerData]);

    const handleRegisterSubmit = () => {
        if (!isFormValid()) {
            Snackbar.show({
                text: getErrorMessages('|').split('|')[0],
            });
            return;
        }
        POST_DATA('sign_up', registerData).then(
            async (resp) => {
                if (resp.status === 1) {
                    Snackbar.show({
                        text: 'Register Successfully',
                    });
                    // await setUserData(resp.data);
                    // await setToken(resp.token);
                    navigation.navigate('Otp', {
                        mobile_number: registerData.mobile_number
                    });
                } else {
                    toast.show(resp.message);
                }
            }
        );
    }

    const lastNameRef = useRef();

    useEffect(() => {
        setRegisterData(prevState => ({
            ...prevState, role: checked
        }))
    }, [checked]);

    return (
        <ImageBackground source={require('../../assets/icons1/loginbg.jpeg')}
            // resizeMode="center"
            style={Styles.bgImage}>
            <View style={Styles.container}>
                <Text style={styles.LoginHeading}>Register</Text>
                <Text style={styles.LoginSubHeading}>into your account</Text>
                <View style={{ marginTop: 60 }}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(mobile_number) => setRegisterData(prevState => ({
                            ...prevState, mobile_number
                        }))}
                        value={registerData.mobile_number}
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
                        onChangeText={(password) => setRegisterData(prevState => ({
                            ...prevState, password: password
                        }))}
                        value={registerData.password}
                        secureTextEntry={true}
                        ref={lastNameRef}
                        placeholder="Password"
                        placeholderTextColor='gray'
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <View style={styles.radioView}>
                        <Text style={styles.radioText}>As a Student</Text>
                        <RadioButton
                            label="As a Student"
                            value="student"
                            status={checked === 'student' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('student')} />
                    </View>
                    <View style={styles.radioView}>
                        <Text style={styles.radioText}>As a Teacher</Text>
                        <RadioButton
                            label="As a Teacher"
                            value="teacher"
                            status={checked === 'teacher' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('teacher')} />
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        style={styles.loginButton}
                        onPress={() => handleRegisterSubmit()}>
                        <Text style={styles.loginButtonText}>Register</Text>
                    </TouchableHighlight>
                    {/* <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text></TouchableOpacity> */}
                    <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        style={styles.registerButton}
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.loginButtonText}>Back To Login</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </ImageBackground >
    );
};

export default RegisterScreen;

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
    },
    radioView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderColor: 'gray',
        borderRadius: 30,
        borderWidth: 1
    },
    radioText: {
        fontSize: 16
    }
});
