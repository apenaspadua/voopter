import { RectButtonProperties } from 'react-native-gesture-handler'
import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'

interface ButtonProps extends RectButtonProperties {
  label: string,
  width: string,
}
const Button: React.FC<ButtonProps> = ({ label, width, onPress = () => {}}) => {
  return (
    <TouchableOpacity style={[styles.container, {width: width }]} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button

