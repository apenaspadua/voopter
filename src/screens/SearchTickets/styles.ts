import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';
 
export default StyleSheet.create({
  container: {
    height: '100%', 
    width: '100%' 
  },
  header: {
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  content: {
    width: '100%',
    marginTop: 50,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleIcon: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#ffa06c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 26, 
    width: 26
  },
  containerTicketInfo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  textLocate: {
    fontSize: 26,
    fontFamily: theme.fonts.title500,
    color: '#FFF',
  },
  dashed: {
    fontSize: 20,
    color: '#a2a2db',
    paddingHorizontal: 15,
  },
  containerInfo: {
    flexDirection: 'row',
    paddingHorizontal: 40,
  },
  textInfo: {
    fontSize: 16,
    color: '#a2a2db',
    fontFamily: theme.fonts.title500,
  },
  containerScroll: {
    marginVertical: "10%",
  },
  contentScroll: {
    alignItems: 'center'
  },
  sliderContainer: {
    width: '90%',
    height: 50,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  slider: {
    position: 'absolute',
    width: '48%',
    height: '80%',
    borderRadius: 40,
    backgroundColor: '#ffa06c',
  },
  clickableArea: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderText: {
    fontSize: 14,
    color: theme.colors.overlay
  },
  containerTextSelect: {
    width: '90%',
    height: 50,
    flexDirection: 'row',
    borderRadius: 40,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 30,
    fontFamily: theme.fonts.title500,
  },
  autocompleteContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    borderRadius: 40,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    fontFamily: theme.fonts.title500,
    backgroundColor: '#f1f1f1'
  },
  containerInputText: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#f1f1f1',
    borderRadius: 5,
    marginBottom: 15
  },
  searchIcon: {
    height: 18,
    width: 14 
  },
  textInput: {
    paddingHorizontal: 20, 
    fontSize: 15, 
    color: '#ccccef'
  },
  text: {
    paddingHorizontal: 20, 
    fontSize: 15, 
    color: theme.colors.overlay
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  margin: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleModal: {
    fontFamily: theme.fonts.title500,
    color: '#575AC3',
    fontSize: 20
  },
});