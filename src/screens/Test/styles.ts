 
import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';
 
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    width: '100%',
    height: '15%',
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 22,
    color: 'white'
  },
  sliderContainer: {
    width: '90%',
    height: Dimensions.get('window').width / 8,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.grey
  },
  slider: {
    position: 'absolute',
    width: '48%',
    height: '80%',
    borderRadius: 5,
    backgroundColor: theme.colors.secondary
  },
  clickableArea: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderText: {
    fontSize: 14,
    fontFamily: theme.fonts.title500,
    color: theme.colors.overlay
  },
  locateContainer: {
    width: '100%',
    height: '85%',
    padding: '5%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  locate: {
    width: '47%',
    height: '30%',
    padding: 5,
    borderRadius: 5,
    backgroundColor: theme.colors.grey
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  titleLocate: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.overlay,
    fontSize: 18,
  },
  namelocate: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.primary,
    fontSize: 22,
  },
  datesContainer: {
    width: '47%',
    height: '20%',
    padding: 5,
    borderRadius: 5,
    backgroundColor: theme.colors.grey,
    marginTop: '5%'
  },
  titleDates: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.primary,
    fontSize: 16,
  },
  descriptionSelectDates: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.overlay,
    fontSize: 16,
    marginTop: 5
  },
  oneDateContainer: {
    width: '100%',
    height: '20%',
    padding: 5,
    borderRadius: 5,
    backgroundColor: theme.colors.grey,
    marginTop: '5%'
  },
  iconTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
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
    color: theme.colors.primary,
    fontSize: 20
  },
});