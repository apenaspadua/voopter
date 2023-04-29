import { View, Text, Modal, Alert, Image, ImageBackground, TouchableOpacity, Animated, Easing, Pressable } from 'react-native';
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import Autocomplete from 'react-native-autocomplete-input';
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons'; 
import { Location } from '../../infra/types/location';
import Button from '../../components/Button';
import styles from './styles';
import moment from 'moment';
import React from 'react';

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

const SearchTickets: React.FC = () => {
  const [selectTextGoingDate, setSelectTextGoingDate] = React.useState('Ida (selecione até 4 datas)')
  const [selectTextBackDate, setSelectTextBackDate] = React.useState('Volta (selecione até 4 datas)')
  const [visibleModalCalendar, setVisibleModalCalendar] = React.useState(false);
  const [visibleModalInput, setVisibleModalInput] = React.useState(false);
  const [markedDatesGoing, setMarkedDatesGoing] = React.useState<any>({});
  const [markedDatesBack, setMarkedDatesBack] = React.useState<any>({});
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const [inputRoundTrip, setInputRoundTrip] = React.useState(true);
  const [inputOneAway, setInputOneAway] = React.useState(false);
  const [inputOrigem, setInputOrigem]= React.useState<string>();
  const [titleCalendar, setTitleCalendar] = React.useState('');
  const [whoCalendar, setWhoCalendar] = React.useState('');
  const [data, setData] = React.useState<Location[]>([]);
  const [calendar, setCalendar] = React.useState();

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

  const handleDayPress = (day: any) => {
    if(whoCalendar === 'going') {
      let selectedDate: any = day.dateString;
      let newDates: any = markedDatesGoing;
      if (markedDatesGoing[selectedDate]) {
        delete newDates[selectedDate]
      } else {
        if(Object.keys(markedDatesGoing).length < 4) {
          newDates[selectedDate] = {
            selectedDate: selectedDate, 
            disabled: true, 
            startingDay: true, 
            color: '#a2a2db', 
            endingDay: true
          };
        }
        else{
          console.log('Apenas 4 datas');
        }
      }
      setMarkedDatesGoing({...newDates})
      setCalendar(markedDatesGoing)
    }
    if(whoCalendar === 'back'){
      let selectedDate: any = day.dateString;
      let newDates: any = markedDatesBack;
      if (markedDatesBack[selectedDate]) {
        delete newDates[selectedDate]
      } else {
        if(Object.keys(markedDatesBack).length < 4) {
          newDates[selectedDate] = {
            selectedDate: selectedDate, 
            disabled: true, 
            startingDay: true, 
            color: '#a2a2db', 
            endingDay: true
          };
        }
        else{
          console.log('Apenas 4 datas');
        }
      }
      setMarkedDatesBack({...newDates})
      setCalendar(markedDatesBack)
    }
  }

  const formmatDates = () => {
    let list = [];

    if(whoCalendar === 'going'){
      for (var item in markedDatesGoing){
        console.log(item);
        list.push(moment(item).format(' DD/MMM'));
      }
      setSelectTextGoingDate(list.toString());
      if(list.length === 0) {
        setSelectTextGoingDate('Ida (selecione até 4 datas)')
      }      
    }
    if(whoCalendar === 'back') {
      for (var item in markedDatesBack){
        list.push(moment(item).format(' DD/MMM'));
      }
      setSelectTextBackDate(list.toString());
      if(list.length === 0) {
        setSelectTextBackDate('Volta (selecione até 4 datas)')
      }     
    }
  }

  const onChangeText = async (text: string) => {
    setInputOrigem(text);
    if (text.length > 2) {
      const endpoint = `http://192.168.30.21:4000/api/search?location=${text}&limit=${5}`;
      let res = await fetch(endpoint);
      if (res) {
        let data: Location[] = await res.json();
        if (data.length > 0) setData(data);
      }
    }
  };

  const getItemText = (item: Location) => {
    let mainText = item.address.name;
    if (item.type === 'city' && item.address.state)
      mainText += ', ' + item.address.state;

    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15 }}>
        <MaterialIcons
          name={item.type === 'city' ? 'location-city' : 'location-on'}
          color={'black'}
          size={30}
        />
        <View style={{ marginLeft: 10, flexShrink: 1 }}>
          <Text style={{ fontWeight: '700' }}>{mainText}</Text>
          <Text style={{ fontSize: 12 }}>{item.address.country}</Text>
        </View>
      </View>
    );
  };

  return (
    <ImageBackground
        source={require('../../images/back2.png')}
        style={styles.container}>
       
        <View style={styles.header}>
          <Icon name='menu' size={30} color='#a2a2db' style={{ width: 20 }} />
          <Icon name='account-circle' size={33} color='#a2a2db' style={{ marginLeft: 230 }}/>
        </View>
       
        <View style={styles.content}>
          <View style={styles.circleIcon}>
            <Image
              source={require('../../images/p.png')}
              style={styles.image}
            />
          </View>
        </View>

        <View style={styles.containerTicketInfo}>
          <View>
            <Text style={styles.textLocate}>
              Origem
            </Text>
            <Text style={styles.textInfo}>
              Ex: New York
            </Text>
          </View>
          
          <Text style={styles.dashed}>
            - - - - - - - - - - - 
          </Text>
          <View>
            <Text style={styles.textLocate}>
              Destino
            </Text>
            <Text style={styles.textInfo}>
              Ex: Brazil
            </Text>
          </View>
        </View>
 
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.containerScroll}>
            <View style={styles.contentScroll}>

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

              <TouchableOpacity style={[styles.containerTextSelect, { backgroundColor: 'white'}]} onPress={() => {
                setVisibleModalInput(true)
              }}>
                <Feather name='arrow-up-right' size={24} color='#a2a2db' />
                <Text style={styles.text}>
                  Origem
                </Text>
              </TouchableOpacity>  
                        
              <TouchableOpacity style={[styles.containerTextSelect, { backgroundColor: 'white'}]}>
                <Feather name='arrow-down-left' size={24} color='#a2a2db' />
                <Text style={styles.text}>
                  Destino
                </Text>
              </TouchableOpacity> 
              
              <TouchableOpacity style={[styles.containerTextSelect, { backgroundColor: 'white'}]} onPress={() => {
                  setWhoCalendar('going')
                  setCalendar(markedDatesGoing)
                  setVisibleModalCalendar(true)
                  setTitleCalendar('Datas de Ida')
                }}>
                <AntDesign name='calendar' size={24} color='#a2a2db' />
                <Text style={styles.text}>
                  {selectTextGoingDate}
                </Text>
              </TouchableOpacity> 
              {
                inputRoundTrip ? 
                  <TouchableOpacity style={[styles.containerTextSelect, { backgroundColor: '#FCFCFF'}]} onPress={() => {
                    setWhoCalendar('back')
                    setCalendar(markedDatesBack)
                    setVisibleModalCalendar(true)
                    setTitleCalendar('Datas de Volta')
                  }}>
                    <AntDesign name='calendar' size={24} color='#a2a2db' />
                    <Text style={styles.text}>
                      {selectTextBackDate}
                    </Text>
                  </TouchableOpacity> 
                :
                null
              }
              <ModalPoup visible={visibleModalInput}>
                <View style={{alignItems: 'center', marginBottom: 15}}>
                  <Text style={styles.titleModal}>Escolha o local de Partida</Text>    
                </View>
                <TextInput
                  onChangeText={onChangeText}
                  value={inputOrigem}
                  style={styles.autocompleteContainer}
                  placeholder='Ex: Rio de Janeiro'
                />
                {inputOrigem && data.length > 0 ? (
                  <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                      <Pressable
                        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
                        onPress={() =>
                          alert('navigate to page passing in ' + JSON.stringify(item))
                        }
                      >
                        {getItemText(item)}
                      </Pressable>
                    )}
                    keyExtractor={(item, index) => item.place_id + index}
                  />
                ) : null}

                <View style={styles.margin}>
                  <Button label='Confirmar' width='50%' onPress={() => {
                    setVisibleModalInput(false)
                  }} />
                </View>
              </ModalPoup>

              <ModalPoup visible={visibleModalCalendar}>
                <View style={styles.margin}>
                  <Text style={styles.titleModal}>{titleCalendar}</Text>
                </View>
                <Calendar 
                  enableSwipeMonths={true}
                  markedDates={calendar}
                  markingType={'period'}
                  onDayPress={handleDayPress}                  
                  theme={{
                    todayTextColor: '#575AC3',
                    arrowColor: '#575AC3',
                    monthTextColor: '#575AC3',
                  }}
                />
                <View style={styles.margin}>
                  <Button label='Confirmar' width='50%' onPress={() => {
                    formmatDates()
                    setVisibleModalCalendar(false)
                  }} />
                </View>
              </ModalPoup> 
              <Button label='Consultar' width='90%'/>
            </View>   
        </ScrollView>
      </ImageBackground>
  );
}

export default SearchTickets;