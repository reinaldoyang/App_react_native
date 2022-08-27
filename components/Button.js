import { TouchableOpacity,Image,View, Text } from 'react-native'
import { COLORS,SIZES,FONTS,SHADOWS} from '../constants'


export const CircleButton = ({imgUrl,handlePress,...props}) => {
  return (
    <TouchableOpacity
        style={{
            width:40,
            height:40,
            backgroundColor:COLORS.white,
            position:'absolute',
            borderRadius:SIZES.extraLarge,
            alignItems:'center',
            justifyContent:'center',
            ...SHADOWS.light,
            ...props,
        }}
        onPress={handlePress}
    >
        <Image
          source={imgUrl}
          resizeMode="contain"
          style={{width:24,height:24}}
        />
    </TouchableOpacity>
  )
}

export const RectButton = ({minWidth,fontSize,handlePress,...props}) => {
    return (
      <TouchableOpacity
      style={{
        backgroundColor:COLORS.primary,
        borderRadius:SIZES.extraLarge,
        padding:SIZES.small,
        minWidth:minWidth,
        ...props,
      }}>
    <Text style={{
      fontFamily:FONTS.bold,
      fontSize:15,
      color:COLORS.white,
      textAlign:"center"
    }}>
      Visit!
    </Text>
    </TouchableOpacity>
    )
  }