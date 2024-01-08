import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemImage: {
    width: 60,
    height: 60,
  },
  itemContainer: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imageAndTextsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  cardButtonStyle: {
    paddingVertical: 8,
    marginHorizontal: 20,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  cardButtonTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  crossIconStyle: {
    width: 40,
  },
  textsContainer: {
    flex: 0.9,
    gap: 5,
  },
  totalSectionContainer: {
    borderWidth: 1,
    marginHorizontal: 20,
    marginBottom: 30,
    padding: 8,
  },
  discountTextsContainer: {
    marginVertical: 30,
  },
  totalTextStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;
