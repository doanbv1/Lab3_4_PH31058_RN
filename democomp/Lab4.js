import { View, Text, FlatList, RefreshControl, StatusBar,StatusBarStyle } from 'react-native'
import React,{useState} from 'react'
import ItemArr from './ItemArr'
const Lab4 = () => {

    // const [barStyle, setbarStyle] = useState<StatusBarStyle>('light-content')
    // const [refreshing, setrefreshing] = useState(false)
    const arrUser = [
        {
            name: 'Nguyen Van A',
            email: 'nguyenVanA@gmai.com',
            position: 1,
            photo: 'https://media.saigontourist.edu.vn/Media/1_STHCHOME/FolderFunc/202303/Images/capuchino-la-gi-20230320105423-e.jpg'

        },
        {
            name: 'Nguyen Van B',
            email: 'nguyenVanB@gmai.com',
            position: 2,
            photo: 'https://media.saigontourist.edu.vn/Media/1_STHCHOME/FolderFunc/202303/Images/capuchino-la-gi-20230320105423-e.jpg'

        },
        {
            name: 'Nguyen Van C',
            email: 'nguyenVanC@gmai.com',
            position: 3,
            photo: 'https://media.saigontourist.edu.vn/Media/1_STHCHOME/FolderFunc/202303/Images/capuchino-la-gi-20230320105423-e.jpg'

        },
        {
            name: 'Nguyen Van C',
            email: 'nguyenVanC@gmai.com',
            position: 4,
            photo: 'https://media.saigontourist.edu.vn/Media/1_STHCHOME/FolderFunc/202303/Images/capuchino-la-gi-20230320105423-e.jpg'

        },
        {
            name: 'Nguyen Van C',
            email: 'nguyenVanC@gmai.com',
            position: 5,
            photo: 'https://media.saigontourist.edu.vn/Media/1_STHCHOME/FolderFunc/202303/Images/capuchino-la-gi-20230320105423-e.jpg'

        },
        {
            name: 'Nguyen Van C',
            email: 'nguyenVanC@gmai.com',
            position: 6,
            photo: 'https://media.saigontourist.edu.vn/Media/1_STHCHOME/FolderFunc/202303/Images/capuchino-la-gi-20230320105423-e.jpg'

        },
        {
            name: 'Nguyen Van C',
            email: 'nguyenVanC@gmai.com',
            position: 7,
            photo: 'https://media.saigontourist.edu.vn/Media/1_STHCHOME/FolderFunc/202303/Images/capuchino-la-gi-20230320105423-e.jpg'

        },
        {
            name: 'Nguyen Van C',
            email: 'nguyenVanC@gmai.com',
            position: 8,
            photo: 'https://media.saigontourist.edu.vn/Media/1_STHCHOME/FolderFunc/202303/Images/capuchino-la-gi-20230320105423-e.jpg'

        },

        {
            name: 'Nguyen Van C',
            email: 'nguyenVanC@gmai.com',
            position: 9,
            photo: 'https://media.saigontourist.edu.vn/Media/1_STHCHOME/FolderFunc/202303/Images/capuchino-la-gi-20230320105423-e.jpg'

        },
    ]
    return (


        <View style={{flex:1, padding:10}}>
            
            <FlatList
                style = {{flex:1}}
                data={arrUser}
                renderItem={({item}) =>  <ItemArr item={item} /> }
            
                keyExtractor={item => item.position}
                // refreshControl={ 
                //         <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>

                // }
            />

        </View>
    )
}

export default Lab4