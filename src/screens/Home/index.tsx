import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  ImageBackground, 
  TextInput 
} from 'react-native';
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons'; 

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
        source={require('../../images/back.png')}
        style={styles.container}>
        
        <View style={styles.header}>
          <Icon name='menu' size={30} color='#a2a2db' style={{ width: 20 }} />
          <Icon name='account-circle' size={33} color='#a2a2db' style={{ marginLeft: 230 }} />
        </View>
 
        <View style={styles.content}>
          <Text style={styles.title}>
            Bem vindo!
          </Text>
          <Text style={styles.subtitle}>
            Aqui você pode pesquisar suas passagens.
          </Text>
          
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.containerScroll}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SearchTickets')}            
              style={[styles.circleSelect, { backgroundColor: '#ffa06c' }]}>
              <Image
                source={require('../../images/p.png')}
                style={{ height: 24, width: 24 }}
              />
            </TouchableOpacity>
            <View
              style={[styles.circleSelect, { backgroundColor: '#ff5c83', marginLeft: 22,}]}>
              <Icon name='office-building' color='white' size={32} />
            </View>
            <View
              style={[styles.circleSelect, { backgroundColor: '#5facdb', marginLeft: 22,}]}>
              <Icon name='bus' color='white' size={32} />
            </View>
            <View
              style={[styles.circleSelect, { backgroundColor: '#bb32fe', marginLeft: 22,}]}>
              <Icon name='dots-horizontal' color='white' size={32} />
            </View>
          </ScrollView>
          <TouchableOpacity style={[styles.containerTextSelect, { backgroundColor: 'white'}]}>
            <Feather name='search' size={24} color='#a2a2db' />
            <Text style={styles.text}>
              Destino
            </Text>
          </TouchableOpacity> 
          <Text style={styles.text}>
            Nossas recomendações
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.containerScroll}>
           
            <View style={styles.containerCard}>
              <Image
                source={require('../../images/1.jpg')}
                style={styles.imageCard}/>
              <View style={styles.containerTextCard}>
                <View style={styles.contentTextCard}>
                  <Text style={styles.textCard}>
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text>
                </View>
                <Icon name='map-marker' size={25} color='#ff5c83' />
              </View>
            </View>

            <View style={[styles.containerCard, {marginLeft: 10}]}>
              <Image
                source={require('../../images/2.jpg')}
                style={styles.imageCard}/>
              <View style={styles.containerTextCard}>
                <View style={styles.contentTextCard}>
                  <Text style={styles.textCard}>
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text>
                </View>
                <Icon name='map-marker' size={25} color='#5facdb' />
              </View>
            </View>

            <View style={[styles.containerCard, {marginLeft: 10}]}>
              <Image
                source={require('../../images/3.jpg')}
                style={styles.imageCard}/>
              <View style={styles.containerTextCard}>
                <View style={styles.contentTextCard}>
                  <Text style={styles.textCard}>
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text>
                </View>
                <Icon name='map-marker' size={25} color='#bb32fe' />
              </View>
            </View>           
          </ScrollView>
        </View>
      </ImageBackground>
  );
}
export default Home;