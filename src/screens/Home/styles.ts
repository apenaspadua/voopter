 
import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';
 
export default StyleSheet.create({
  container: {
    width: '100%', 
    height: '100%'
  },
  header: {
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  content: {
    paddingHorizontal: 30, 
    marginTop: 25 
  },
  title: {
    fontSize: 40,
    color: theme.colors.primary,
    fontFamily: theme.fonts.title500,
  },
  subtitle: {
    fontSize: 18,
    paddingVertical: 10,
    paddingRight: 80,
    lineHeight: 22,
    fontFamily: theme.fonts.title500,
    color: theme.colors.overlay
  },
  containerScroll: {
    marginRight: -30, 
    marginTop: 30
  },
  circleSelect: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 66,
    width: 66,
    borderRadius: 50,
  },
  text: {
    color: '#FFF',
    fontFamily: theme.fonts.title700,
    marginTop: 50,
    fontSize: 18,
  },
  containerCard: {
    backgroundColor: '#FEFEFE',
    height: 200,
    width: 190,
    borderRadius: 15,
    padding: 5,
  },
  imageCard: {
    width: 180, 
    borderRadius: 10, 
    height: 130 
  },
  containerTextCard: {
    flexDirection: 'row',
    width: 150,
    alignItems: 'center',
  },
  contentTextCard: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  textCard: {
    fontFamily: theme.fonts.title500,
    fontSize: 14,
    color: theme.colors.overlay
  },
  containerTextSelect: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    borderRadius: 40,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 30,
    fontFamily: theme.fonts.title500,
    borderWidth: 1,
    borderColor: '#f6f6f6'
  },
});