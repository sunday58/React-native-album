// import a library to help create a component
import React from 'react';
import { AppRegistry, View} from 'react-native';
import Header from './android/app/src/components/header';
import AlbumList from './android/app/src/components/AlbumList';


// create a component
const App = () => {
    return (
        <View style={{flex: 1}}>
        <Header headerText = {'Albums'}/>
        <AlbumList />
        </View>
    );
};

// render component on the device
AppRegistry.registerComponent('AwesomeProject', () => App);