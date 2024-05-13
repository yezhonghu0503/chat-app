import {Dimensions, StyleSheet} from 'react-native';
export const chatBoxstyles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#359765',
  },
  chatbox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1b2559',
    margin: 6,
    borderRadius: 35,
  },
  chatTouch: {
    flex: 1,
    //   marginLeft: 10,
    //   paddingLeft: 10,
    //   paddingRight: 10,
  },
  chatHearder: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    //   backgroundColor: 'white',
  },
  chatHearderText: {
    fontSize: 18,
    marginLeft: 15,
    fontWeight: '800',
    color: 'white',
  },
  chatHearderImage: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  initalPage: {
    flex: 1,
    justifyContent: 'space-between',
  },
  initalHelp: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  initalHelpLogo: {
    width: 80,
    height: 80,
  },
  helpTips: {
    color: 'white',
    marginTop: 10,
  },

  chatTouchReturn: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
  chatTouchReturnPic: {
    width: 50,
    height: 30,
  },
  chatUser: {
    width:
      Dimensions.get('window').width - Dimensions.get('window').width * 0.1,
    marginLeft: 10,
    borderRadius: 10,
    padding: 5,
    paddingLeft: 10,
    paddingBottom: 10,
    marginTop: 15,
  },
  chatUserTit: {
    flex: 1,
    height: 35,
    alignItems: 'center',
    flexDirection: 'row',
  },
  chatUserAva: {
    width: 30,
    height: 30,
    borderRadius: 10,
    marginRight: 5,
  },
  codeContainer: {
    padding: 16,
    minWidth: '100%',
  },
  text: {
    fontSize: 16,
  },
  //   flatList: {
  //     width:
  //       Dimensions.get('window').width - Dimensions.get('window').width * 0.1,
  //   },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  marquee: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  itemAction: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  itemDelete: {
    width: 15,
    height: 15,
    marginLeft: 10,
  },
});
