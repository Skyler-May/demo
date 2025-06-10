import useLunar from "@/components/useCountLunar";
import React from "react";
import { Text, View } from "react-native";

const DateTimeDisplay = () => {
  const { gregorian, lunar, zodiac } = useLunar();

  return (
    <View>
      <Text>{gregorian}</Text>
      <Text>{lunar}</Text>
      <Text>{zodiac}</Text>
    </View>
  );
};

export default DateTimeDisplay;
