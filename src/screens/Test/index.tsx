import React from 'react';
import {  
  View,
  Modal,
  Text,
  Animated,
  SafeAreaView,
  Pressable,
  Easing, 
} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons'; 
import { theme } from '../../global/styles/themes';

LocaleConfig.locales['br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dec.'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
  today: 'Hoje'
};

LocaleConfig.defaultLocale = 'br';

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.title}>Pesquisa de Passagens</Text>
  </View>
);

const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackground}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const Test: React.FC = () => { 
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const [inputRoundTrip, setInputRoundTrip] = React.useState(true);
  const [inputOneAway, setInputOneAway] = React.useState(false);
  const [visibleModal, setVisibleModal] = React.useState(false);
  const [titleCalendar, setTitleCalendar] = React.useState('');

  const left = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['2%', '50%'],
    extrapolate: 'clamp',
  });

  const startAnimationRoundTrip = (toValue: number) => {
    animate(toValue, true, setInputRoundTrip);
    setInputRoundTrip(true)
    setInputOneAway(false)
  };

  const startAnimationOneWay = (toValue: number) => {
    animate(toValue, false, setInputOneAway);
    setInputRoundTrip(false)
    setInputOneAway(true)
  };

  const animate = (value: number, state: boolean, func: Function) => {
    func(state);
    Animated.timing(animatedValue, {
      toValue: value,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };
  
  return (
    <SafeAreaView style={styles.container}>
      
      <Header />
     
      <View style={styles.sliderContainer}>
        <Animated.View style={[styles.slider, {left}]} />
        <Pressable
          style={styles.clickableArea}
          onPress={startAnimationRoundTrip.bind(null, 0)}>
          <Animated.Text
            style={styles.sliderText}>
            Ida e Volta
          </Animated.Text>
        </Pressable>
        <Pressable
          style={styles.clickableArea}
          onPress={startAnimationOneWay.bind(null, 1)}>
          <Animated.Text
            style={styles.sliderText}>
            Somente Ida
          </Animated.Text>
        </Pressable>
      </View>

      <View style={styles.locateContainer}>
        <View style={styles.locate}>
          <View style={styles.inner}>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Text style={styles.titleLocate}>Origem</Text>
              <Text style={styles.namelocate}>New York</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.locate}>
          <View style={styles.inner}>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Text style={styles.titleLocate}>Destino</Text>
              <Text style={styles.namelocate}>Brazil</Text>
            </TouchableOpacity>
          </View>
        </View>
        {
          inputRoundTrip ?
          <> 
            <View style={styles.datesContainer}>
              <View style={styles.inner}>
                <TouchableOpacity style={styles.iconTitleContainer} onPress={() => {
                  setVisibleModal(true)
                  setTitleCalendar('Datas de Ida')
                }}>
                  <AntDesign name='calendar' size={20} color={theme.colors.primary} style={{marginRight: 5}}/>
                  <Text style={styles.titleDates}>Datas de Ida</Text>
                </TouchableOpacity>
                <Text style={styles.descriptionSelectDates}>Selecione até 4 datas</Text>
              </View>
            </View>
            <View style={styles.datesContainer}>
              <View style={styles.inner}>
                <TouchableOpacity style={styles.iconTitleContainer} onPress={() => {
                  setVisibleModal(true)
                  setTitleCalendar('Datas de Volta')
                }}>
                  <AntDesign name='calendar' size={20} color={theme.colors.primary} style={{marginRight: 5}}/>
                  <Text style={styles.titleDates}>Datas de Volta</Text>
                </TouchableOpacity>
                <Text style={styles.descriptionSelectDates}>Selecione até 4 datas</Text>
              </View>
            </View> 
          </> 
          :
          <View style={styles.oneDateContainer}>
            <View style={styles.inner}>
              <TouchableOpacity style={styles.iconTitleContainer} onPress={() => {
                setVisibleModal(true)
                setTitleCalendar('Datas de Ida')
              }}>
                <AntDesign name='calendar' size={20} color={theme.colors.primary} style={{marginRight: 5}}/>
                <Text style={styles.titleDates}>Datas de Ida</Text>
              </TouchableOpacity>
              <Text style={styles.descriptionSelectDates}>Selecione até 4 datas</Text>
            </View>
          </View> 
        } 
      </View>

      <ModalPoup visible={visibleModal}>
        <View style={styles.margin}>
          <Text style={styles.titleModal}>{titleCalendar}</Text>
        </View>
        <Calendar />
        <View style={styles.margin}>
          <Button label='Confirmar' onPress={() => setVisibleModal(false)} />
        </View>
      </ModalPoup>
    </SafeAreaView>
  );
}
export default Test;
