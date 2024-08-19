import React from "react";

import {View,Text,StyleSheet,useColorScheme} from 'react-native'

function AppPro() : JSX.Element{
const isDarkMode = useColorScheme() === 'dark'
    return(
        <View>
           <Text>Hello</Text>
        </View>
    )
};

export default AppPro;