import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Image style={styles.container} 
      source={{uri:'https://steamuserimages-a.akamaihd.net/ugc/2480808807594637252/11119ACEA65BD9BE6A94AC9DEA436C0805BC2566/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'}}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 760,
    width: 393,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
