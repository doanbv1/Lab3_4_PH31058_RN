
import { SafeAreaView, ScrollView, StyleSheet, Text, View,RefreshControl } from 'react-native'
import React, { useState } from 'react'
import { StatusBarStyle } from 'react-native'
const Lab4_2 = () => {

    // state để lưu trạng thái đang reload hay không
    const [refreshing, setRefreshing] = React.useState(false);
    // xử lý quá trình reload
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        console.log("Bắt đầu load lại dữ liệu");

        setTimeout(() => {
            setRefreshing(false);
            console.log("Đã load xong");

        }, 2000);
    }, []);


    return (
        <View style={st.khungCuon}>
            <Text>Demo scrollview</Text>


            <SafeAreaView >
                <ScrollView
                    horizontal={false}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                >
                    <Text style={st.txt}>Nội dung các thành phần trong thẻ viết ở đây </Text>
                    <Text style={st.txt}>Nội dung các thành phần trong thẻ viết ở đây </Text>


                    <Text style={st.txt}>Nội dung các thành phần trong thẻ viết ở đây </Text>
                    <Text>Nội dung các thành phần trong thẻ viết ở đây </Text>
                    <Text>Nội dung các thành phần trong thẻ viết ở đây </Text>


                    <Text>Nội dung các thành phần trong thẻ viết ở đây </Text>


                </ScrollView>
            </SafeAreaView>


        </View>



    );
}
export default Lab4_2

const st = StyleSheet.create({
    khungCuon: {
      height: 300,
      backgroundColor: 'yellow'
    },
    txt:{
      fontSize: 40
    }




})
