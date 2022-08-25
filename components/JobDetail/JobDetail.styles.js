import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contents: {
    flex: 1,
  },
  title: {
    color: '#345',
    fontWeight: '700',
    fontSize: 30,
  },
  header: {
    padding: 10,
  },
  subheader: {
    flexDirection: 'row',
  },
  subTitle: {
    fontWeight: '500',
    fontSize: 15,
    marginTop: 5,
    color: 'black',
  },
  myColor: {
    color: '#bc5555',
  },
  btn: {
    backgroundColor: '#bc5555',
    marginHorizontal: 10,
    height: 50,
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnContainer: {
    padding: 10,
    flexDirection: 'row',
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    marginLeft: 5,
  },
  disabled: {
    backgroundColor: '#bcbcbc',
  },
});
