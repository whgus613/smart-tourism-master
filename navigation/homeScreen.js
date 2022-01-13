import React from 'react';
import {View, StyleSheet, Dimensions, Image, Linking, TouchableOpacity, Text} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import Swiper from 'react-native-web-swiper';

const {height: SCREEN_HEIGHT}=Dimensions.get("window");

const homeScreen = () => {

  return(
      <View style={styles.container}>
      <View style={styles.youtube}>
          <Swiper
            controlsProps={{
              prevTitle: "<",
              nextTitle: ">",
            }}>
          <View>
            <YoutubePlayer
              height={300}
              play={false}
              videoId={'FZjq6YAuSug'}/>
          </View>
          <View>
          {
            <YoutubePlayer
              height={300}
              play={false}
              videoId={'FZjq6YAuSug'}/>}
          </View>
          <View>
          {/*
            <YoutubePlayer
              height={300}
              play={false}
              videoId={'FZjq6YAuSug'}/> */}
          </View>
          </Swiper>
      </View>
      <View>
      <Text
        style={{
          fontSize: 15,
          marginLeft: 20,
          marginBottom: 15
        }}>
          Instagram</Text>
        <View style={styles.instagram}>
          <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/p/CYVXGEUP-RV/?utm_medium=copy_link")}>
            <Image
              source={{uri: 'https://www.instagram.com/p/CYVXGEUP-RV/media/?size=l'}}
              style={styles.image}
              resizeMode="cover"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/p/CYVXGEUP-RV/?utm_medium=copy_link")}>
            <Image
              source={{uri: 'https://www.instagram.com/p/CYVXGEUP-RV/media/?size=l'}}
              style={styles.image}
              resizeMode="cover"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/p/CYVXGEUP-RV/?utm_medium=copy_link")}>
            <Image
              source={{uri: 'https://www.instagram.com/p/CYVXGEUP-RV/media/?size=l'}}
              style={styles.image}
              resizeMode="cover"/>
          </TouchableOpacity>
        </View>
      </View>
  </View>   
)};


const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  youtube:{
      width: "100%",
      height: SCREEN_HEIGHT / 3
  },
  app:{
    
  },
  instagram: {
      flexDirection: "row",
      width: "100%",
      height: SCREEN_HEIGHT /4,
      justifyContent: 'space-around',
  },
  image: {
    height: 100,
    width: 100
  },
});

export default homeScreen;
