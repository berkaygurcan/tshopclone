import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  //header
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
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

  searchStyle: {
    padding: 10,
    borderColor: 'black',
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 16,
  },

  //RenderItem Styles

  itemImage: {
    width: 60,
    height: 100,
    borderRadius: 20,
    borderWidth: 0.2,
  },
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentContainerStyle: {
    gap: 10,
    marginHorizontal: 20,
  },
  renderItemHeaderText: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
  },

  //RenderItemForSCategory Styles
  itemImageProductForCategory: {
    height: 200,
    width: 150,
    borderRadius: 20,
    borderWidth: 0.2,
  },
  itemContentContainerStyle: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
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
