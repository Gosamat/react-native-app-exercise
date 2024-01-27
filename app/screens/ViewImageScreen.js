import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
    <View style={styles.closeIcon}></View>
    <View style={styles.deleteIcon}></View>

      <Image resizeMode='contain' style={styles.image} source={{uri: "https://hips.hearstapps.com/hmg-prod/images/small-living-room-ideas-2020-10-28-readmckendree-katierosenfeld-0161-v1-1673368435.jpg"}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width: "100%",
        height: "100%",
    },
    container:{
        backgroundColor: "black",
        flex:1

    },
    closeIcon:{
        backgroundColor: "#fc5c65",
        width:50,
        height:50,
        position: "absolute",
        left: 30,
        top: 50
    },
    
    deleteIcon:{
        backgroundColor: "#4ecdc4",
        width:50,
        height:50,
        position: "absolute",
        right: 30,
        top: 50
    }
    
})