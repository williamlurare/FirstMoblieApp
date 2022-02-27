import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {ScrollView ,Pressable, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, Linking} from 'react-native';
import COLORS from '../../conts/colors';
import Button from '../components/Button';
import Icon from 'react-native-ico-material-design'
import { Card, Text } from 'react-native-elements';
import House from './Houses.json'
import Styles from '../../conts/Styles';
import pic from '../../conts/images';
import pic1 from '../../conts/images/pic1.jpg'


const HomeScree = ({navigation}) => {
  const [userDetails, setUserDetails] = React.useState();
  React.useEffect(() => {
    getUserData();
  }, []);


  const testing = () => { console.log("This is a test ") }
  const getUserData = async () => {
    const userData = await AsyncStorage.getItem('userData');
    if (userData) {
      setUserDetails(JSON.parse(userData));
    }
  };

  const logout = () => {
    AsyncStorage.setItem(
      'userData',
      JSON.stringify({...userDetails, loggedIn: false}),
    );
    navigation.navigate('LoginScreen');
  };

 const word = House;

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.Eclipse}}>
        Welcome {userDetails?.fullname}
      </Text>
      <ScrollView>
        <View style={style.container}>
          <Card>
          {HOUSES.map((u, i) => {
              return (
                <>
            <Card.Title>{u.location}
            </Card.Title>
           
            <Card.Divider />
           
                <View style={style.user}>
                  <TouchableOpacity  onPress={() => Linking.openURL(u.url)}>
                  <Image
                    style={style.image}
                    resizeMode="contain"
                    source={u.image}
                  />
                  </TouchableOpacity>
                </View>
                <View style={{marginTop: 5,marginBottom: 10}}>
               <Text style={style.text}>{u.price_unit} {u.price}</Text>
               <Text><Icon name='bed-quilt' height="10" width="10" style={style.Icon} /> {u.bed}  <Icon name='web-server' height="10" width="10" style={style.Icon} /> {u.bath} <Icon name='clapperboard' height="10" width="10" style={style.Icon} /> {u.extra}</Text>
                <Text style={style.text}>Click the image above for more details!</Text>
                </View> 
                </>
              );
            })}
          </Card>
        </View>
      </ScrollView>
      <View style={style.NavContainer}>
      <View style={style.NavBar}>
      <Pressable onPress={logout} style={style.IconBehave}
      android_ripple={{borderless: true, radius: 50}}>
      <Icon name='back-arrow' height="26" width="26" style={style.Icon} />
      </Pressable>
      </View>
      </View>
    </View>
  );
};
// web-server
export default HomeScree;


const style = StyleSheet.create({
  NavContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 20,
  },
  NavBar: {
    flexDirection: 'row',
    backgroundColor: COLORS.RoseGold,
    width: '90%',
    justifyContent: 'space-evenly',
    borderRadius: 40
  },
  IconBehave: {
    padding:14
  },
  Icon: {
    position: 'relative',
    color: COLORS.black
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 200,
    height: 150,
    marginRight: 5,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  text: {
    fontSize: 12,
    marginTop: 5,
    marginBottom: 10,
  }
});

const HOUSES =
    [
      {
        "id": 1,
                "location": "Mira Oasis 3, Mira Oasis, Dubai",
                "bed": "3 Beds",
                "bath": "3 Baths",
                "extra": "None",
                "image": require('../../conts/images/pic1.jpg'),
                "price": "2,200,000",
                "price_unit": "AED",
                "url": "https://uae.dubizzle.com/property-for-sale/residential/villahouse/2021/11/21/corner-plot-close-to-pool-park-study-room-2-099/?tracking_info=%7B%22userPath%22%3A%22LPV_Pos_FA_5%22%7D&funnel_subsection=LPV_Pos_FA_5&page=1"
                        },
                        {
                "id": 2,
                "location": "District One Mansions, District One",
                "bed": "7 Beds",
                "bath": "9 Baths",
                "extra": "Private Pool",
                "image": require('../../conts/images/pic2.jpg'),
                "price": "48,000,000",
                "price_unit": "AED",
                "url": "https://uae.dubizzle.com/property-for-sale/residential/villahouse/2021/9/2/full-lagoon-amp-beach-access-landscaped-ma-2-669/?tracking_info=%7B%22userPath%22%3A%22LPV_Pos_FA_1%22%7D&funnel_subsection=LPV_Pos_FA_1&page=1"
                         },
                        {
                "id": 3,
                "location": "The Magnolias, Yas Acres, Dubai",
                "bed": "3 Beds",
                "bath": "4 Baths",
                "extra": "Big Playground",
                "image": require('../../conts/images/pic3.jpg'),
                "price": "3,496,165",
                "price_unit": "AED",
                "url": "https://uae.dubizzle.com/property-for-sale/residential/villahouse/2021/9/21/3-br-villa-yas-acres-amazing-deal-3-898/?tracking_info=%7B%22userPath%22%3A%22LPV_Pos_FA_2%22%7D&funnel_subsection=LPV_Pos_FA_2&page=1"
                        },
                        {
                "id": 4,
                "location": "Bella Casa, Serena, Dubai",
                "bed": "3 Beds",
                "bath": "4 Baths",
                "extra": "None",
                "image": require('../../conts/images/pic4.jpg'),
                "price": "1,625,000",
                "price_unit": "AED",
                "url": "https://uae.dubizzle.com/property-for-sale/residential/villahouse/2022/1/5/three-br-maid-villa-with-a-private-garden--2-608/?tracking_info=%7B%22userPath%22%3A%22LPV_Pos_FA_6%22%7D&funnel_subsection=LPV_Pos_FA_6&page=1"
                            },
                            {
                "id": 5,
                "name": "Alaya",
                "location": "Falcon City of Wonders, Dubailand, Dubai",
                "bed": "4 Beds",
                "bath": "5 Baths",
                "extra": "None",
                "image": require('../../conts/images/pic5.jpg'),
                "price": "2,850,000",
                "price_unit": "AED",
                "url": "https://uae.dubizzle.com/property-for-sale/residential/villahouse/2021/10/21/2-bedroom-townhouse-aegean-vacant-on-trans-2-159/?tracking_info=%7B%22userPath%22%3A%22LPV_Pos_FA_1%22%7D&funnel_subsection=LPV_Pos_FA_1&page=1"
                                },
                                {
                "id": 6,
                "location": "The Meadows 9, The Meadows, Dubai",
                "bed": "4 Beds",
                "bath": "4 Baths",
                "extra": "None",
                "image": require('../../conts/images/pic6.jpg'),
                "price": "4,990,000",
                "price_unit": "AED",
                "url": "https://uae.dubizzle.com/property-for-sale/residential/villahouse/2022/1/6/type-6-owner-occupied-private-pool-2-458/?tracking_info=%7B%22userPath%22%3A%22LPV_Pos_FA_0%22%7D&carouselIndex=1&funnel_subsection=LPV_Pos_FA_0&page=1"
                                    },
                                    {
                "id": 7,
                "location": "Hartland Gardenia, Sobha Hartland, Dubai",
                "bed": "5 Beds ",
                "bath": "7 Baths",
                "extra": "Private Pool",
                "image": require('../../conts/images/pic7.jpg'),
                "price": "18,025,000",
                "price_unit": "AED",
                "url": "https://uae.dubizzle.com/property-for-sale/residential/villahouse/2021/4/12/elegantly-decorated-home-with-iconic-views-2-830/?tracking_info=%7B%22userPath%22%3A%22LPV_Pos_FA_12%22%7D&funnel_subsection=LPV_Pos_FA_12&page=1"
                                    },
                                    {
                "id": 8,
                "location": "Claret, DAMAC Hills 2, Dubai",
                "bed": "4 Beds",
                "bath": "4 Baths",
                "extra": "None",
                "image": require('../../conts/images/pic8.jpg'),
                "price": "2,500,000",
                "price_unit": "AED",
                "url": "https://uae.dubizzle.com/property-for-sale/residential/villahouse/2022/1/28/investor-deal-urgent-for-sale-ready-to-mov-2-550/?tracking_info=%7B%22userPath%22%3A%22LPV_Pos_FA_13%22%7D&funnel_subsection=LPV_Pos_FA_13&page=1"
                                    },
                                    {
                "id": 9,
                "location": "Victory Heights, Dubai Sports City, Dubai",
                "bed": "5 Beds",
                "bath": "5 Baths",
                "extra": "Private Pool || Amazing Golf View",
                "image": require('../../conts/images/pic9.jpg'),
                "price": "8,500,000",
                "price_unit": "AED",
                "url": "https://uae.dubizzle.com/property-for-sale/residential/villahouse/2021/12/8/upgraded-5-Beds-b-type-amazing-golf-view-2-029/?tracking_info=%7B%22userPath%22%3A%22LPV_Pos_FA_0%22%7D&funnel_subsection=LPV_Pos_FA_0&page=1"
                                    },
                                    {
                "id": 10,
                "location": "Alaya, Tilal Al Ghaf, Dubai",
                "bed": "6 Beds",
                "bath": "9 Baths",
                "extra": "Private Pool",
                "image": require('../../conts/images/pic10.jpg'),
                "price": "14,075,000",
                "price_unit": "AED",
                "url": "https://uae.dubizzle.com/property-for-sale/residential/villahouse/2022/2/7/luxurious-villa-on-beach-6br-grand-villa-l-2-994/?tracking_info=%7B%22userPath%22%3A%22LPV_Pos_FA_4%22%7D&carouselIndex=1&funnel_subsection=LPV_Pos_FA_4&page=1"
                                    }
]