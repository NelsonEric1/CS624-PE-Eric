import { Text, SafeAreaView, StyleSheet } from 'react-native';

import { Card } from 'react-native-paper';

import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Eric S. Nelson
      </Text>
      <Text style={styles.paragraph}>
      MSCS CS624
      </Text>
      <Text style={styles.paragraph}>
      City University of Seattle
      </Text>
      <Text style={styles.paragraph}>
      STC
      </Text>
             
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffff00',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
