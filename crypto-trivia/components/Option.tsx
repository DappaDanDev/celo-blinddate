import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

interface OptionProps {
  option: string;
  isSelected: boolean
  checkIfSelected:()=> void
  setSelectedOption: any


}
const Option = ({option, isSelected, checkIfSelected, setSelectedOption}:OptionProps) => {
  const handleSelect = () => {
    setSelectedOption(option);
    checkIfSelected();
  }

  return (
    <TouchableOpacity onPress={handleSelect} activeOpacity={0.8} style={[styles.option,{backgroundColor: isSelected ? "#ABD1C6" : "#FFF"} ]}>
    <View>
      <Text style={{ fontWeight: "500"}}>{option}</Text>
    </View>
  </TouchableOpacity>
  );
};

export default Option;

const styles = StyleSheet.create({
  option:{
    width: "100%",
    height: 45,
    borderRadius: 16,
    paddingHorizontal: 12,
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
  }


});
