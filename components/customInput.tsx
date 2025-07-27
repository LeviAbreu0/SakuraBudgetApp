import { TextInput, StyleSheet } from "react-native";

type CustomInputProps = {
  placeHolder: string;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (text: string) => void;
};

export default function CustomInput({
  placeHolder,
  secureTextEntry = false,
  value,
  onChangeText,
}: CustomInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeHolder}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
    fontSize: 16,
    padding: 14,
    color: '#8E8E8E',
    fontWeight: '400',
    borderColor: '#000000',
    borderWidth: 1,
    marginTop: 10,
  },
});