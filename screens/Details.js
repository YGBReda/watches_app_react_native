import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Dimensions
} from "react-native";
import { Button, Header } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
const Details = ({ route, navigation }) => {
  const windowWidth = Dimensions.get("window").width;
  const { id, name, img, img2, price, desc, offer } = route.params;
  const Itemimages = [
    {
      id: id,
      img: img
    },
    {
      id: id + 1,

      img: img2
    }
  ];
  const [Qty, setQty] = React.useState(1);

  function renderItemimages(item, index) {
    return (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          width: windowWidth,
          height: "100%",
          paddingVertical: 10
        }}
        onPress={() => {
          console.log(item.img);
        }}
      >
        <Image
          source={item.img}
          resizeMode="contain"
          style={{
            width: "100%",
            height: "100%"
          }}
        />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Header
        containerStyle={{
          height: 90,
          backgroundColor: "#fff",
          borderBottomColor: "#fff",
          borderBottomWidth: 1,
          elevation: 0
        }}
        placement="center"
        leftComponent={
          <TouchableOpacity
            style={{
              paddingHorizontal: 8,
              paddingVertical: 5,
              backgroundColor: "#f1f1f1",
              borderRadius: 5,
              marginRight: 10
            }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={22} color="#333" />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity
            style={{
              paddingHorizontal: 8,
              paddingVertical: 5,
              backgroundColor: "#f1f1f1",
              borderRadius: 5,
              marginRight: 10
            }}
            onPress={() => console.log("like function here")}
          >
            <Ionicons name="heart-outline" size={22} color="#333" />
          </TouchableOpacity>
        }
      />
      <View
        style={{
          flex: 1
        }}
      >
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Itemimages}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item, index }) => renderItemimages(item, index)}
        />
      </View>
      <View
        style={{
          flex: 1,
          padding: 20,
          backgroundColor: "#f3ede6",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40
        }}
      >
        <View
          style={{
            flexDirection: "row"
          }}
        >
          <View>
            <Text
              style={{
                color: "#626262",
                fontSize: 19,
                fontWeight: "bold",
                marginBottom: 10
              }}
            >
              {name}
            </Text>
            <View
              style={{
                flexDirection: "row"
              }}
            >
              <Text
                style={{
                  color: "#C36839",
                  fontSize: 17,
                  fontWeight: "bold",
                  marginRight: 10
                }}
              >
                {offer}
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  color: "#7d7d7d",
                  marginRight: 7,

                  textDecorationLine: "line-through"
                }}
              >
                {price}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "column",
              flex: 1,
              alignItems: "flex-end"
            }}
          >
            <TouchableOpacity
              activeOpacity={1}
              style={{
                backgroundColor: "#C36839",
                padding: 8,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
              }}
              onPress={() => {
                setQty(Qty + 1);
              }}
            >
              <Ionicons name="add" size={20} color="#fff" />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                backgroundColor: "#C36839",
                paddingHorizontal: 14,
                color: "#fff"
              }}
            >
              {Qty}
            </Text>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                backgroundColor: "#C36839",
                padding: 8,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20
              }}
              onPress={() => {
                if (Qty > 1) {
                  setQty(Qty - 1);
                }
              }}
            >
              <Ionicons name="remove" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            marginVertical: 20
          }}
        >
          <Text
            style={{
              color: "#626262"
            }}
          >
            {desc}
          </Text>
          <Button
            titleStyle={{
              color: "white",
              fontSize: 17,
              marginLeft: 10
            }}
            buttonStyle={{
              backgroundColor: "#C36839",
              borderRadius: 15,
              marginTop: 40,
              alignSelf: "center",
              width: "50%",
              height: 50
            }}
            icon={<Ionicons name="cart" size={18} color="#fff" />}
            title={"Add to Cart"}
            onPress={() => {}}
          />
        </View>
      </View>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        translucent={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
export default Details;
