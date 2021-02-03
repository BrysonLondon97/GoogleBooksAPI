import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Text, Image} from 'react-native-elements';

const DetailScreen = ({navigation}) => {
    const item = navigation.getParam('item');
    
    console.log(item);

    return <View style={styles.container} >
        {item.volumeInfo.subtitle == undefined
            ? <>
                <Text h3 style={{textAlign: 'center'}}>{item.volumeInfo.title}</Text>
            </>
            :  <>
                <Text h2 style={{textAlign: 'center'}}>{item.volumeInfo.title}</Text>
                <Text h4 style={{textAlign: 'center'}}>{item.volumeInfo.subtitle}</Text>
            </>
        }

        {item.volumeInfo.imageLinks !== undefined
            ?  <Image style={{height: 400, width: 250}} source={{uri: item.volumeInfo.imageLinks.thumbnail}}  />
            :  <Image style={{height: 400, width: 250}} source={require('../../assets/images/NoImage.jpg')} />
        }
        <ScrollView showsVerticalScrollIndicator={false} style={styles.description} >
            <Text>
                {item.volumeInfo.description}
            </Text>
        </ScrollView>
        

    </View>
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginBottom: 10
    },
    description: {
        marginLeft: 5,
        marginRight: 5
    }

})

export default DetailScreen;