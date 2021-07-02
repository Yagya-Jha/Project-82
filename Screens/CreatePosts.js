import * as React from 'react';
import { Text, View} from 'react-native';

export default class CreatePosts extends React.Component{
    render(){
        return(
            <View style = {{flex: 1, backgroundColor: "pink", justifyContent:"center"}}>
                <Text style = {{color: 'black', fontSize: 24, alignSelf:"center"}}>You can create and publish your posts here</Text>
            </View>
        );
    }
}