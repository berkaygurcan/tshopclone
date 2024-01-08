import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
  },
  inputNameTextStyle: {
    width: 300,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  textPriceStyle: {fontSize: 20, fontWeight: 'bold'},
  imageStyle: {width: 300, height: 300},
  cardButtonStyle: {
    marginTop: 16,
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: 'orange',
    width: 120,
    borderRadius: 10,
  },
  cardButtonTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  pageLoader: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(24, 17, 64, 0.6)',
    zIndex: 999999999,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
