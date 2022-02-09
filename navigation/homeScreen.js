import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, Image, Linking, TouchableOpacity, Text, ScrollView, ActivityIndicator} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import Swiper from 'react-native-web-swiper';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/core";
import { colors } from '../variables/colors';

const {height: SCREEN_HEIGHT}=Dimensions.get("window");

const homeScreen = () => {

  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const [leftImages, setLeftImages] = useState([]);
  const [rightImages, setRightImages] = useState([]);

  let contents = [];
  let leftContents = [];
  let rightContents = [];

  const getContents = async() => {
    const results = await(
        await fetch("http://203.253.207.111:8080/jsmith/restful/content?type=0&page=1&hcd=A0301")
        ).json();

    const preData = results.filter((data) => {
        const code = data.hcnt_sub_img;
        return code !== "";
    });

    for (let i=0; i<preData.length; i++){
        contents[i]=preData[i];
    }

    for (let i=0; i<preData.length; i++){
        contents[i].hcnt_sub_img = contents[i].hcnt_sub_img.split(",");
    }
    
    for (let i=0; i<Math.ceil(preData.length/2); i++){
        leftContents[i]=preData[i];
    }

    for (let i = Math.ceil(preData.length / 2); i <preData.length; i++){
        rightContents[i-Math.ceil(preData.length/2)]=preData[i];
    }

    setLeftImages(leftContents);
    setRightImages(rightContents);
    setLoading(false);
  }

  useEffect(()=> {
      getContents();
  }, []);

  return loading? (
    <View
      style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
      }}>
      <ActivityIndicator />
    </View>
    ):(
    <View style={styles.container}>
      <View style={styles.youtube}>
        <Swiper
          controlsProps={{
            prevTitle: "◀",
            nextTitle: "▶",
            prevTitleStyle: {
              color: "grey",
            },
            nextTitleStyle: {
              color: "grey",
            },
            dotActiveStyle: {
              backgroundColor: colors.orangeRed,
            }
          }}>
          <View>
            <YoutubePlayer
              height={300}
              play={false}
              videoId={'H-4jYnU5RAY'}
              />
          </View>
          <View>
            <YoutubePlayer
              height={300}
              play={false}
              videoId={'H-4jYnU5RAY'}
              />
          </View>
          <View>
            <YoutubePlayer
              height={300}
              play={false}
              videoId={'H-4jYnU5RAY'}
              />
          </View>
        </Swiper>
      </View>
      <View style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        }}>
        <Text style={styles.font}>테마관광지</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Category")}>
              <Text style={styles.font}>+more</Text>
          </TouchableOpacity>
      </View>
      <ScrollView style={styles.app}>
        <View  
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "space-between",
          }}>
          <View style={{marginLeft: 22}}>
            {leftImages.map((image, index)=>{
              return(
                <Image
                    source={{
                        uri: `http://203.253.207.111:8080/jsmith_image${image.hcnt_sub_img[0]}`,
                    }}
                    style={{
                      width: 160,
                      height: 160,
                      marginRight: 5,
                      marginBottom: 20,
                    }}
                    key={index}
                    resizeMode="stretch"></Image>
                  );
                })}
          </View>
          <View style = {{marginLeft: 15, marginRight: 20}}>
                        {rightImages.map((image, index) => {
            return(
              <Image
                  source={{
                      uri: `http://203.253.207.111:8080/jsmith_image${image.hcnt_sub_img[0]}`,
                  }}
                  style={{
                    width: 160,
                    height: 160,
                    marginLeft: 5,
                    marginBottom: 20,
                  }}
                  key={index}
                  resizeMode="stretch"></Image>
                )
              })}
          </View>
        </View>
    </ScrollView>
      <View style={{
           width: "100%",
           flexDirection: "row",
           paddingTop: 15,
           paddingLeft: 10,
      }}>
        <AntDesign name="instagram" size={20} color="black"/>
        <Text style={{
          fontSize: 17,
          marginBottom: 15,
          marginLeft: 5,
        }}>Instagram</Text>
      </View>
        <View style={styles.instagram}>
          <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/p/CHuD8bmj_vR/?utm_source=ig_web_copy_link")}>
            <Image
              source={{uri: 'https://www.instagram.com/p/CHuD8bmj_vR/media/?size=l'}}
              style={styles.image}
              resizeMode="cover"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/p/CHKtDUFj5WP/?utm_medium=copy_link")}>
            <Image
              source={{uri: 'https://www.instagram.com/p/CHKtDUFj5WP/media/?size=l'}}
              style={styles.image}
              resizeMode="cover"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/p/CJVfHWQjrav/?utm_source=ig_web_copy_link")}>
            <Image
              source={{uri: 'https://www.instagram.com/p/CJVfHWQjrav/media/?size=l'}}
              style={styles.image}
              resizeMode="cover"/>
          </TouchableOpacity>
        </View>
  </View>   
  );
};


const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      justifyContent: 'center',
  },
  youtube:{
      width: "100%",
      height: SCREEN_HEIGHT / 3
  },
  font:{
    fontSize: 17,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15
  },
  app:{
    height: SCREEN_HEIGHT/3,
  },
  instagram: {
      flexDirection: "row",
      width: "100%",
      height: SCREEN_HEIGHT /4,
      justifyContent: 'space-around',
  },
  image: {
    height: 125,
    width: 125
  },
});

export default homeScreen;
