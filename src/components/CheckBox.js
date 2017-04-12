import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight
} from 'react-native';

import checkedImage from './../../img/ic_check_box.png';
import noCheckedImage from './../../img/ic_check_box_outline_blank.png';

const CheckBox = (props) => {
    return (
        <TouchableHighlight
            style={props.style}
            onPress={props.onPress}
            underlayColor='transparent'>
            <View style={styles.container}>
                <Image source={props.isChecked ? checkedImage : noCheckedImage}/>
                <Text style={[styles.rightText, props.rightTextStyle]}>{props.rightText || ''}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightText: {
        flex: 1,
        marginLeft: 10
    }
});

export default CheckBox;
