import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 30,
    height: 30,
  },
  headerLeftStyle: {
    flex: 1,
    alignItems: 'flex-start',
  },
  headerCenterStyle: {
    flex: 3,
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 20,
  },
  headerRightStyle: {
    flex: 1,
    alignItems: 'flex-end',
  },
  cartProductCountContainer: {
    borderRadius: 999,
    width: 15,
    height: 15,
    top: -5,
    right: -5,
    position: 'absolute',
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartProductCountTextStyle: {
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default styles;
