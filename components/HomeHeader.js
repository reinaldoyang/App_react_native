import { View, Text, Image,TextInput } from 'react-native'
import {COLORS,FONTS,SIZES, assets,NFTData} from '../constants';
import Icon from "react-native-vector-icons/Ionicons";
import {useState} from 'react';

const HomeHeader = ({onSearch}) => {
  const [locdata, setLocdata] = useState(NFTData);
  return (
    <View style={{
      backgroundColor:COLORS.primary,
      padding:14,
      height:210
    }}>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{width:90,height:25}}
        />

        <View style={{width:45,height:45}}>
            <Image
            source={assets.person01}
            resizeMode="contain"
            style={{width:'100%',height:'100%'}}
            />
            <Image
            source={assets.badge}
            resizeMode="contain"
            style={{position:'absolute',width:15,height:15,bottom:0,right:0}}
            />
        </View>
      </View>

      <View style={{marginVertical:SIZES.font}}>
        <Text style={{fontFamily:FONTS.regular,fontSize:SIZES.small,
        color:COLORS.white}}>
          Hello! User👋
        </Text>
        <Text style={{fontFamily:FONTS.bold,fontSize:SIZES.large,
        color:COLORS.white, marginTop:SIZES.base/2}}>
          Let's meet the locals!
        </Text>
      </View>
    
    <View style={{marginTop:8}}>
      <View style={{
        width:'100%',
        borderRadius:SIZES.font,
        backgroundColor:COLORS.gray,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:SIZES.font,
        paddingVertical:SIZES.small -2,
      }}>
          <Image
          source={assets.search}
          resizeMode="contain"
          style={{width:20,height:20,marginRight:SIZES.base}}
          />

          <TextInput
            placeholder="Search by name"
            style={{flex:1}}
            onChangeText={onSearch}
          />

          <Icon size={18} name="close" color="white"
           onPress={() => {
            onSearch("");
           }}/>
      </View>

    </View>

    </View>
  )
}

export default HomeHeader