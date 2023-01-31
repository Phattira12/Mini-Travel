import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Icon } from "../shared/Icon";
import { sizes, spacing } from '../../constants/theme';



export const MainHeader = ({title}) => {
   const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container,{marginTop: insets.top}]}>
      <Icon icon="Hamburger" onPress={()=>{}} />
      <Text style={styles.title}>{title}</Text>
      <Icon icon="Notification" onPress={()=>{}} />
    </View>
  )
}
const styles =StyleSheet.create({
   container:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingHorizontal: spacing.l,
   },
   title:{
      fontSize: sizes.h3,
      fontWeight:'bold'
   }
})