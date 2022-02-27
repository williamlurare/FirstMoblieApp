import { StyleSheet } from 'react-native';
import COLORS from './colors';

export default StyleSheet.create({
  Card: {
    borderRadius: 6,
    backgroundColor: '#fff',
    elevation: 3,
    shadowOffset: { width:1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  CardContent: {
    marginHorizontal: 14,
    marginVertical: 16,
    color: COLORS.black,
  },
});