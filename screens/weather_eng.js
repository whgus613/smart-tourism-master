import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

var parseString = require("react-native-xml2js").parseString;

const ADDRESS_CODE = [
    {
        건입동: "5011059000",
        구좌읍: "5011025600",
        노형동: "5011066000",
        도두동: "5011069000",
        봉개동: "5011062000",
        회천동: "5011062000",
        삼도1동: "5011055000",
        삼도일동: "5011055000",
        삼도2동: "5011056000",
        삼도이동: "5011056000",
        삼양동: "5011061000",
        아라동: "5011063000",
        용강동: "5011063000",
        애월읍: "5011025300",
        연동: "5011065000",
        오라동: "5011064000",
        오등동: "5011064000",
        외도동: "5011067000",
        용담1동: "5011057000",
        용담2동: "5011058000",
        용담일동: "5011057000",
        용담이동: "5011058000",
        우도면: "5011033000",
        이도1동: "5011053000",
        이도2동: "5011054000",
        이호동: "5011068000",
        일도1동: "5011051000",
        일도2동: "5011052000",
        일도일동: "5011051000",
        일도이동: "5011052000",
        조천읍: "5011025900",
        추자면: "5011032000",
        한경면: "5011031000",
        한림읍: "5011025000",
        화북동: "5011060000",
        남원읍: "5013025300",
        대륜동: "5013059000",
        대정읍: "5013025000",
        대천동: "5013060000",
        동홍동: "5013057000",
        서홍동: "5013058000",
        강정동: "5013058000",
        월평동: "5013058000",
        성산읍: "5013025900",
        송산동: "5013051000",
        안덕면: "5013031000",
        하예동: "5013031000",
        영천동: "5013056000",
        예래동: "5013062000",
        정방동: "5013052000",
        중문동: "5013061000",
        색달동: "5013061000",
        중앙동: "5013053000",
        천지동: "5013054000",
        표선면: "5013032000",
        효돈동: "5013055000",
        보목동: "5013055000",
        서귀동: "5013055000",
        법환동: "5013055000",
        이어도: "5019099000",
        해안동: "5011025300",
        하원동: "5013061000",
        상효동: "5013057000",
        토평동: "5013057000",
        오라이동: "5011064000",
        하효동: "5013055000",
        대포동: "5013053000",
        이호일동: "5011068000",
        삼양일동: "5011061000",
        내도동: "5011067000",
        서호동: "5013058000",
    },
];
const weatherIcon = [
    "white-balance-sunny",
    "weather-partly-cloudy",
    "weather-cloudy",
    "weather-rainy",
    "weather-snowy-rainy",
    "weather-snowy",
    "weather-rainy",
];

let iconName;
let dayName;
let EngWeatherName;

const weather_eng = ({ route }) => {
    let dayCounter = 0;
    const [shortData, setShortData] = useState([]);
    const [midData, setMidData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [icon, setIcon] = useState([]);
    const {
        params: { contents },
    } = route;
    const getIconName = (code) => {
        if (code === "맑음") {
            return weatherIcon[0];
        } else if (code === "구름많음") {
            return weatherIcon[1];
        } else if (code === "흐림") {
            return weatherIcon[2];
        } else if (code === "비" || code === "흐리고 비") {
            return weatherIcon[3];
        } else if (code === "비/눈" || code === "흐리고 비/눈") {
            return weatherIcon[4];
        } else if (code === "눈" || code === "흐리고 눈") {
            return weatherIcon[5];
        } else {
            return weatherIcon[6];
        }
    }; //  아이콘 표시 함수

    const getDate = (date) => {
        var week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var dayOfWeek = week[new Date(date).getDay()];
        return dayOfWeek;
    }

    const getMonth = (month) => {
        var Month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December'];
        var mOfMonth = Month[today.getMonth()];
        return mOfMonth;
    }

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let date = today.getDate();
    let hour = today.getHours();

    const makeText = (code) => {
        const convertedCode = code.split(" ");
        if (convertedCode[1] === "00:00") {
            if (dayCounter === 0) {
                dayCounter += 1;
                return (convertedCode[0].substring(5) + "(" + getDate(convertedCode[0]) + ")" + " AM");
            } else if (dayCounter === 2) {
                dayCounter += 1;
                return (convertedCode[0].substring(5) + "(" + getDate(convertedCode[0]) + ")" + " AM");
            } else if (dayCounter === 4) {
                dayCounter += 1;
                return (convertedCode[0].substring(5) + "(" + getDate(convertedCode[0]) + ")" + " AM");
            } else if (dayCounter === 6) {
                dayCounter += 1;
                return (convertedCode[0].substring(5) + "(" + getDate(convertedCode[0]) + ")" + " AM");
            } else if (dayCounter === 8) {
                dayCounter += 1;
                return (convertedCode[0].substring(5) + "(" + getDate(convertedCode[0]) + ")" + " AM");
            }
        } else {
            if (dayCounter === 1) {
                dayCounter += 1;
                return (convertedCode[0].substring(5) + "(" + getDate(convertedCode[0]) + ")" + " PM");
            } else if (dayCounter === 3) {
                dayCounter += 1;
                return (convertedCode[0].substring(5) + "(" + getDate(convertedCode[0]) + ")" + " PM");
            } else if (dayCounter === 5) {
                dayCounter += 1;
                return (convertedCode[0].substring(5) + "(" + getDate(convertedCode[0]) + ")" + " PM");
            } else if (dayCounter === 7) {
                dayCounter += 1;
                return (convertedCode[0].substring(5) + "(" + getDate(convertedCode[0]) + ")" + " PM");
            } else if (dayCounter === 9) {
                dayCounter = 1;
                return (convertedCode[0].substring(5) + "(" + getDate(convertedCode[0]) + ")" + " PM");
            }
        }
    }; // 요일 및 시간 표시 함수

    const CODE = ADDRESS_CODE[0][contents.hcnt_addr[2]]; // 관광지 주소 (읍/면/동)
    const getWeather = async () => {
        const shortForecast = await axios.get(
            `https://www.kma.go.kr/wid/queryDFSRSS.jsp?zone=${CODE}`
        );
        const data = parseString(shortForecast.data, (err, result) => {
            const text = JSON.stringify(result);
            const json = JSON.parse(text);
            const weatherCode = json.rss.channel[0].item[0].description[0].body[0].data[0].wfKor[0];
            setIcon(getIconName(weatherCode));
            setShortData(json);
        });
        const midForecast = await axios.get(
            `https://www.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=184`
        );
        const weeklyData = parseString(midForecast.data, (err, result) => {
            const text = JSON.stringify(result);
            const json = JSON.parse(text);
            json.rss.channel[0].item[0].description[0].body[0].location[0].data.length = 10;
            setMidData(json);
            setLoading(false);
        });
    }; // 단기 예보 및  중기 예보 API 사용 함수

    let ADD = contents.hcnt_addr[2];

    const getEng = (ADD) => {
        if (ADD === "건입동"){
            return ("Geonip-dong(" + ADD + ")")
        }
        else if (ADD==="구좌읍"){
            return ("Gujwa-eup(" + ADD + ")")
        }
        else if (ADD==="노형동"){
            return ("Nohyeong-dong(" + ADD + ")")
        }
        else if (ADD==="도두동"){
            return ("Dodu-dong(" + ADD + ")")
        }
        else if (ADD==="봉개동"){
            return ("Bonggae-dong(" + ADD + ")")
        }
        else if (ADD==="회천동"){
            return ("Hoecheon-dong(" + ADD + ")")
        }
        else if (ADD==="삼도1동" || ADD==="삼도일동"){
            return ("Samdo 1-dong(" + ADD + ")")
        }
        else if (ADD==="삼도2동" || ADD==="삼도이동"){
            return ("Samdo 2-dong(" + ADD + ")")
        }
        else if (ADD==="삼양동"){
            return ("Samyang-dong(" + ADD + ")")
        }
        else if (ADD==="아라동"){
            return ("Ara-dong(" + ADD + ")")
        }
        else if (ADD==="용강동"){
            return ("Yonggang-dong(" + ADD + ")")
        }
        else if (ADD==="애월읍"){
            return ("Aewol-eup(" + ADD + ")")
        }
        else if (ADD==="연동"){
            return ("Yeong-dong(" + ADD + ")")
        }
        else if (ADD==="오라동"){
            return ("Ora-dong(" + ADD + ")")
        }
        else if (ADD==="오등동"){
            return ("Odeung-dong(" + ADD + ")")
        }
        else if (ADD==="외도동"){
            return ("Oedo-dong(" + ADD + ")")
        }
        else if (ADD==="오등동"){
            return ("Odeung-dong(" + ADD + ")")
        }
        else if (ADD==="용담1동" || ADD==="용담일동"){
            return ("Yongdam 1-dong(" + ADD + ")")
        }
        else if (ADD==="용담2동" || ADD==="용담이동"){
            return ("Yongdam 2-dong(" + ADD + ")")
        }
        else if (ADD==="우도면"){
            return ("Udo-myeon(" + ADD + ")")
        }
        else if (ADD==="이도1동" || ADD==="이도일동"){
            return ("Ido 1-dong(" + ADD + ")")
        }
        else if (ADD==="이도2동" || ADD==="이도이동"){
            return ("Ido 2-dong(" + ADD + ")")
        }
        else if (ADD==="이호동"){
            return ("Iho-dong(" + ADD + ")")
        }
        else if (ADD==="일도1동" || ADD==="일도일동"){
            return ("Ildo 1-dong(" + ADD + ")")
        }
        else if (ADD==="일도2동" || ADD==="일도이동"){
            return ("Ildo 2-dong(" + ADD + ")")
        }
        else if (ADD==="조천읍"){
            return ("Jocheon-eup(" + ADD + ")")
        }
        else if (ADD==="추자면"){
            return ("Chuja-myeon(" + ADD + ")")
        }
        else if (ADD==="한경면"){
            return ("Hankyung-myeon(" + ADD + ")")
        }
        else if (ADD==="한립읍"){
            return ("Hallim-eup(" + ADD + ")")
        }
        else if (ADD==="화북동"){
            return ("Hwabuk-dong(" + ADD + ")")
        }
        else if (ADD==="남원읍"){
            return ("Namwon-eup(" + ADD + ")")
        }
        else if (ADD==="대륜동"){
            return ("Daeryun-dong(" + ADD + ")")
        }
        else if (ADD==="대정읍"){
            return ("Daejeong-eup(" + ADD + ")")
        }
        else if (ADD==="대천동"){
            return ("Daecheon-dong(" + ADD + ")")
        }
        else if (ADD==="동홍동"){
            return ("Donghong-dong(" + ADD + ")")
        }
        else if (ADD==="서홍동"){
            return ("Seohong-dong(" + ADD + ")")
        }
        else if (ADD==="강정동"){
            return ("Gangjeong-dong(" + ADD + ")")
        }
        else if (ADD==="월평동"){
            return ("Wolpyeong-dong(" + ADD + ")")
        }
        else if (ADD==="성산읍"){
            return ("Seongsan-eup(" + ADD + ")")
        }
        else if (ADD==="송산동"){
            return ("Songsan-dong(" + ADD + ")")
        }
        else if (ADD==="안덕면"){
            return ("Andeok-myeon(" + ADD + ")")
        }
        else if (ADD==="하예동"){
            return ("Haye-dong(" + ADD + ")")
        }
        else if (ADD==="영천동"){
            return ("Yeongcheon-dong(" + ADD + ")")
        }
        else if (ADD==="예래동"){
            return ("Yerae-dong(" + ADD + ")")
        }
        else if (ADD==="정방동"){
            return ("Jeongbang-dong(" + ADD + ")")
        }
        else if (ADD==="중문동"){
            return ("Jungmun-dong(" + ADD + ")")
        }
        else if (ADD==="색달동"){
            return ("Saekdal-dong(" + ADD + ")")
        }
        else if (ADD==="중앙동"){
            return ("Jungang-dong(" + ADD + ")")
        }
        else if (ADD==="천지동"){
            return ("Cheonji-dong(" + ADD + ")")
        }
        else if (ADD==="표선면"){
            return ("Pyoseon-myeon(" + ADD + ")")
        }
        else if (ADD==="효돈동"){
            return ("Hyodon-dong(" + ADD + ")")
        }
        else if (ADD==="보목동"){
            return ("Bomok-dong(" + ADD + ")")
        }
        else if (ADD==="서귀동"){
            return ("Seogwi-dong(" + ADD + ")")
        }
        else if (ADD==="법환동"){
            return ("Beophwan-dong(" + ADD + ")")
        }
        else if (ADD==="이어도"){
            return ("Ieodo(" + ADD + ")")
        }
        else if (ADD==="해안동"){
            return ("Haean-dong(" + ADD + ")")
        }
        else if (ADD==="하원동"){
            return ("Hawon-dong(" + ADD + ")")
        }
        else if (ADD==="상효동"){
            return ("Sanghyo-dong(" + ADD + ")")
        }
        else if (ADD==="토평동"){
            return ("Topyeong-dong(" + ADD + ")")
        }
        else if (ADD==="오라이동" || ADD === "오라2동"){
            return ("Ora 2-dong(" + ADD + ")")
        }
        else if (ADD==="하효동"){
            return ("Hahyo-dong(" + ADD + ")")
        }
        else if (ADD==="대포동"){
            return ("Daepo-dong(" + ADD + ")")
        }
        else if (ADD==="이호1동" || ADD==="이호일동"){
            return ("Iho 1-dong(" + ADD + ")")
        }
        else if (ADD==="삼양1동" || ADD==="삼양일동"){
            return ("Samyang 1-dong(" + ADD + ")")
        }
        else if (ADD==="내도동"){
            return ("Naedo-dong(" + ADD + ")")
        }
        else if (ADD==="서호동"){
            return ("Seoho-dong(" + ADD + ")")
        }
    }

    const getEngWeather = (code) => {
        if (code === "맑음"){
            return ("Clear")
        }
        else if (code === "구름많음"){
            return ("Cloudy")
        }
        else if (code === "흐림"){
            return ("Most Cloudy")
        }
        else if (code === "비"){
            return ("Rainy")
        }
        else if (code === "흐리고 비"){
            return ("Cloudy and Rainy")
        }
        else if (code === "비/눈"){
            return ("Rainy/Snowy")
        }
        else if (code === "흐리고 비/눈"){
            return ("Cloudy and Rainy/Snowy")
        }
        else if (code === "눈"){
            return ("Snowy")
        }
        else if (code === "흐리고 눈"){
            return ("Cloudy and Snowy")
        }
    }

    useEffect(() => {
        getWeather();
    }, []);
    
    return loading ? (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator></ActivityIndicator>
        </View>
    ) : (
        <ScrollView>
            <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 18, fontWeight: "500", marginTop: 20, opacity: 0.7 }}>
                    {getEng(ADD)}
                </Text>
                <Text style={{ fontSize: 13, fontWeight: "400" }}>
                    {getDate(today)}, {date} {getMonth(month)} {year} {hour}H
                </Text>
                <Text style={{ fontSize: 40, fontWeight: "700", marginTop: 10, opacity: 0.7 }}>
                    {shortData.rss.channel[0].item[0].description[0].body[0].data[0].temp}°
                </Text>
                <View style={{ marginTop: 10, opacity: 0.7 }}>
                    <Icon name={icon} size={80} color="black" />
                </View>
                <Text style={{ marginTop: 10, opacity: 0.7 }}>
                    Wind Speed{" "}
                    {parseFloat(
                        shortData.rss.channel[0].item[0].description[0].body[0].data[0].ws[0]
                    ).toFixed(1)}
                    m/s
                </Text>
                <Text style={{ opacity: 0.7 }}>
                    Humidity{" "}
                    {parseFloat(
                        shortData.rss.channel[0].item[0].description[0].body[0].data[0].reh[0]
                    )}
                    %
                </Text>
            </View>
            <View style={{ marginTop: 20, alignItems: "center" }}>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>Hourly Weather Forecast</Text>
            </View>
            <ScrollView horizontal={true} style={{ marginTop: 20, height: "50%", flex: 1 }}>
                {shortData.rss.channel[0].item[0].description[0].body[0].data.map((item) => {
                    const code = item.wfKor[0];
                    iconName = getIconName(code);
                    return (
                        <View
                            key={item.$.seq}
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                width: 70,
                                height: 150,
                            }}>
                            <Text>{item.hour[0]}H</Text>
                            <Icon name={iconName} size={33} color="black" />
                            <Text>{item.temp}°</Text>
                            <Text>{item.pop}%</Text>
                            <Text>{parseFloat(item.ws).toFixed(1)}m/s</Text>
                        </View>
                    );
                })}
            </ScrollView>
            <View style={{ alignItems: "center", marginTop: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>Weekly Weather Forecast</Text>
            </View>
            <View
                style={{
                    marginTop: 20,
                    marginLeft: 0,
                    width: "100%",
                }}>
                <View>
                    {midData.rss.channel[0].item[0].description[0].body[0].location[0].data.map(
                        (item) => {
                            const dateCode = item.tmEf[0];
                            dayName = makeText(dateCode);
                            const code = item.wf[0];
                            iconName = getIconName(code);
                            EngWeatherName = getEngWeather(code);
                            return (
                                <View
                                    key={item.tmEf[0]}
                                    style={{
                                        flexDirection: "row",
                                        marginBottom: 10,
                                        marginLeft: 40,
                                        alignItems: "center",
                                    }}>
                                    <Text style={{ fontSize: 16, marginRight: 10 }}>{dayName}</Text>
                                    <Icon
                                        name={iconName}
                                        size={33}
                                        color="black"
                                        style={{ marginRight: 10 }}
                                    />
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            marginRight: 10,
                                        }}>
                                        {item.tmx}°
                                    </Text>
                                    <Text style={{ fontSize: 16, marginRight: 10 }}>
                                        {item.tmn}°
                                    </Text>
                                    <Text style={{ fontSize: 16, marginRight: 10 }}>{EngWeatherName}</Text>
                                </View>
                            );
                        }
                    )}
                </View>
            </View>
        </ScrollView>
    );
};
export default weather_eng;