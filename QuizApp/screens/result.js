import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Result() {
  return (
    <View style={styles.container}>
      <Text>This is Result</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
