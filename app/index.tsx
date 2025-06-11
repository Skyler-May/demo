// import useLunar from "@/components/useLunar";
// import useZodiacAge from "@/components/useZodiacAge";

import useLunar from "@/hooks/date/useLunar";
import useZodiacAge from "@/hooks/date/useZodiacAge";
import React from "react";
import { Text, View } from "react-native";

const HomeScreen = () => {
  const { gregorian, lunar, zodiac } = useLunar();
  const zodiacAges = useZodiacAge();
  const agesOfTiger = zodiacAges["虎"];
  console.log("虎", agesOfTiger);

  return (
    <View style={{ gap: 10 }}>
      <Text>当前日期：{gregorian}</Text>
      <Text>当前农历日期：{lunar}</Text>
      <Text>当前农历生肖：{zodiac}</Text>

      <Text style={{ color: "red" }}>
        查询指定生肖年龄【虎】：{agesOfTiger?.join(",")}
      </Text>

      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          生肖年龄列表：
        </Text>
        {Object.entries(zodiacAges).map(([zodiac, ages]) => (
          <Text key={zodiac}>
            {zodiac}：{ages.join(", ")}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;
