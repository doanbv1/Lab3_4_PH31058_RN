import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Lab4_3 = () => {

    const [passWord, setPassWord] = useState(true);

    return (
        <KeyboardAvoidingView>
            <ScrollView style={{ padding: 10 }}>
                <Text style={{ fontSize: 30, color: 'black' }}>
                    Hi Well Come Back !
                </Text>
                <Text style={{ fontSize: 20, color: 'black' }}>
                    Hello again you have messed!
                </Text>
                <Image style={{ width: '100%', height: 200, marginTop: 30, marginBottom: 50, borderRadius: 30 }} source={require('../img/logocf.png')} />
                <Text>Email address</Text>
                <TextInput
                    style={{ borderWidth: 1, borderRadius: 10, padding: 10 }}
                    placeholder='Enter your email address'
                />
                <Text style={{ marginTop: 20 }}>PassWord</Text>
                <View>
                    <TextInput
                        style={{ borderWidth: 1, borderRadius: 10, padding: 10 }}
                        placeholder='Enter your password'
                        secureTextEntry={!passWord}

                    />
                    <TouchableOpacity

                        onPress={() => setPassWord(!passWord)}

                        style={{ right: 10, height: 50, position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={passWord == true ? require('../img/ic_eye.png') : require('../img/ic_eye_invisibal.png')}
                            style={{ width: 30, height: 30, borderWidth: 2 }} />

                    </TouchableOpacity>
                </View>


                <Text style={{ marginTop: 60, width: '100%', marginHorizontal: 100 }}>----------------Or login with----------------</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 30 }}>
                    <TouchableOpacity style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 10, width: '46%', padding: 5 }}>
                        <Image source={require('../img/facebook.png')} style={{ width: 50, height: 50 }} />
                        <Text>facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 10, width: '46%' }}>
                        <Image source={require('../img/google.png')} style={{ width: 50, height: 50 }} />
                        <Text>Google</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 100, marginTop: 30 }}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity>
                        <Text style={{ color: 'red' }}> Register</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Lab4_3

const styles = StyleSheet.create({})