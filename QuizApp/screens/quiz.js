import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Quiz() {
  return (
    <View style={styles.container}>
      <Text>This is Quiz</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
