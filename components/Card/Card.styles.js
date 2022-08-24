import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    marginVertical: 5,
    borderRadius: 10,
    padding: 10,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    backgroundColor: 'white',
  },
  cardHeader: {
    fontWeight: '700',
    fontSize: 20,
    color: 'black',
  },
  container: {
    marginHorizontal: 15,
  },
  cardSubHeader: {
    fontSize: 15,
  },
  cardLocation: {
    fontWeight: '700',
    fontSize: 15,
    backgroundColor: '#bc5555',
    padding: 5,
    color: 'white',
    borderRadius: 15,
  },
  cardTextContainer: {
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  cardLevel: {
    color: '#bc5555',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'right',
  },
  button: {
    backgroundColor: '#bc5555',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
  },
});
