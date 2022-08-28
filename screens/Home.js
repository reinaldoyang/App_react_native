import { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, NFTData } from "../constants";


const Home = () => {
  const [locdata, setLocdata] = useState(NFTData);

  const handleSearch = (value) => {
    if (!value.length) return setLocdata(NFTData);

    const filteredData = NFTData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) {
      setLocdata(filteredData);
    } else {
      setLocdata(NFTData);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.black} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={locdata}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View
            style={{ height: 20, backgroundColor: "#A90011" }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;