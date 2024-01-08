import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, alignContent: 'center', backgroundColor: '#e4e4e4'},
  inputStyle: {
    padding: 10,
    borderColor: 'black',
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 16,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  contentContainer: {
    backgroundColor: '#f5f5f5',
    marginTop: '20%',
    paddingVertical: 30,
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 20,
  },
  btnContainer: {
    marginTop: 10,
    marginHorizontal: 10,
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
