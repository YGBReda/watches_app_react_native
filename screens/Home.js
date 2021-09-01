import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions
} from "react-native";
import { Input, Button, Header, Icon, SearchBar } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { images } from "../Constants";
const Home = props => {
  const navigation = props.navigation;
  const windowWidth = Dimensions.get("window").width;

  const [Products, setProducts] = React.useState([
    {
      id: 0,
      name: "Fossil Men's Neutra",
      img: images.img1,
      secondimg: images.img1,
      price: "$129",
      offer: "$90",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text."
    },
    {
      id: 1,
      name: "Fossil Men's Townsman",
      img: images.img2,
      secondimg: images.img2,
      price: "$159",
      offer: "$100",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text."
    },
    {
      id: 2,
      name: "Fossil Men's Copeland",
      img: images.img3,
      secondimg: images.img3,
      price: "$119",
      offer: "$95",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text."
    },
    {
      id: 3,
      name: "Skagen Signatur Three-Hand",
      img: images.img4,
      secondimg: images.img4,
      price: "$115",
      offer: "$89",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text."
    },
    {
      id: 4,
      name: "Lacoste Men's TR90 Japanese",
      img: images.img5,
      secondimg: images.img5,
      price: "$95",
      offer: "$90",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text."
    },
    {
      id: 5,
      name: "Diesel Men's MS9 Chronograph",
      img: images.img6,
      secondimg: images.img6,
      price: "$224",
      offer: "$220",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text."
    }
  ]);
  const [Categories, setCategories] = React.useState([
    {
      id: 0,
      name: "All"
    },
    {
      id: 1,
      name: "Smart"
    },
    {
      id: 2,
      name: "Mechanical"
    },
    {
      id: 3,
      name: "Analog"
    },
    {
      id: 4,
      name: "Digital"
    },
    {
      id: 5,
      name: "Dress"
    }
  ]);
  const [likes, setlikes] = React.useState([
    {
      id: 0
    },
    {
      id: 3
    },
    {
      id: 5
    }
  ]);

  const [Slideshow, setSlideshow] = React.useState([
    {
      id: 0,
      name: "Fossil Men's Neutra",
      img: images.offer,
      price: "$129",
      offer: "$90",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text."
    },
    {
      id: 1,
      name: "Fossil Men's Townsman",
      img: images.offer,
      price: "$159",
      offer: "$100",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text."
    }
  ]);

  const [selectedCategorie, setselectedCategorie] = React.useState(0);
  function renderProducts() {
    return Products.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={{
            justifyContent: "center",
            marginRight: 5,
            backgroundColor: "#fff",
            borderRadius: 5,
            padding: 5,
            height: 200,
            width: "48.5%",
            marginBottom: 5
          }}
          onPress={() => {
            navigation.navigate("Details", {
              id: item.id,
              img: item.img,
              img2: item.secondimg,
              name: item.name,
              price: item.price,
              offer: item.offer,
              desc: item.description
            });
          }}
        >
          <View
            style={{
              flex: 1,
              position: "relative",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 5,
                padding: 3,
                position: "absolute",
                zIndex: 99,
                top: 0,
                right: 5
              }}
              onPress={() => {}}
            >
              <Ionicons
                name="heart"
                size={20}
                color={likes.some(e => e.id === item.id) ? "#FF2442" : "#ddd"}
              />
            </TouchableOpacity>
            <Image
              source={item.img}
              resizeMode="contain"
              style={{
                width: "100%",
                height: "100%"
              }}
            />
          </View>
          <View
            style={{
              marginTop: 10
            }}
          >
            <Text
              numberOfLines={1}
              style={{ fontSize: 15, color: "#626262", fontWeight: "bold" }}
            >
              {item.name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 5
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-start"
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#C36839",
                  marginRight: 7,
                  fontWeight: "bold"
                }}
              >
                {item.offer}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#333",
                  textDecorationLine: "line-through"
                }}
              >
                {item.price}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
  }
  function renderCategories(item, index) {
    return (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          borderWidth: 1,
          borderColor: "#fff",
          backgroundColor: selectedCategorie == item.id ? "#C36839" : "#f1f1f1",
          borderRadius: 10,
          paddingHorizontal: 18,
          paddingVertical: 7,
          marginLeft: 5
        }}
        onPress={() => {
          setselectedCategorie(item.id);
          console.log("categorie function here");
        }}
      >
        <Text
          style={{
            fontSize: 15,
            color: selectedCategorie == item.id ? "#fff" : "#1c1c1c",
            marginRight: 3
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  }
  function renderSlideshow(item, index) {
    return (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          width: windowWidth - 20,
          marginRight: 5,
          marginBottom: 7,
          borderWidth: 1,
          borderColor: "#f3ede6",
          backgroundColor: "#f3ede6",
          borderRadius: 10,
          height: 150,
          padding: 10
        }}
        onPress={() => {}}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row"
          }}
        >
          <View
            style={{
              flex: 2
            }}
          >
            <Text
              style={{
                color: "#C36839",
                fontSize: 20,
                fontWeight: "bold",
                backgroundColor: "#fff",
                width: 100,
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 8
              }}
            >
              40% OFF
            </Text>
            <Text
              style={{
                color: "#626262",
                fontSize: 17,
                marginVertical: 10
              }}
            >
              {item.name}
            </Text>

            <Button
              titleStyle={{
                color: "white",
                fontSize: 12
              }}
              buttonStyle={{
                backgroundColor: "#C36839",
                borderRadius: 30,
                width: 100
              }}
              title={"Get Now"}
              onPress={() => {}}
            />
          </View>
          <View
            style={{
              flex: 1
            }}
          >
            <Image
              source={item.img}
              resizeMode="contain"
              style={{
                borderRadius: 10,
                width: "99%",
                height: "100%"
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      <View
        Style={{
          flex: 1
        }}
      >
        <Header
          containerStyle={{
            height: 90,
            backgroundColor: "#fff",
            borderBottomColor: "#fff",
            borderBottomWidth: 1,
            elevation: 0
          }}
          placement="left"
          leftComponent={
            <TouchableOpacity
              style={{ padding: 8 }}
              onPress={() => console.log("menu function here")}
            >
              <Ionicons name="filter" size={25} color="#333" />
            </TouchableOpacity>
          }
          centerComponent={{
            text: "Watches",
            style: {
              color: "#626262",
              fontSize: 22,
              fontWeight: "bold",
              marginTop: 6
            }
          }}
          rightComponent={
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                height: "100%",
                paddingVertical: 5
              }}
            >
              <TouchableOpacity
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 5,
                  backgroundColor: "#f1f1f1",
                  borderRadius: 5,
                  marginRight: 10
                }}
                onPress={() => console.log("search function here")}
              >
                <Ionicons name="search-outline" size={22} color="#333" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 5,
                  backgroundColor: "#f1f1f1",
                  borderRadius: 5,
                  marginRight: 10
                }}
                onPress={() => console.log("cart function here")}
              >
                <Ionicons name="cart-outline" size={22} color="#333" />
              </TouchableOpacity>
            </View>
          }
        />
      </View>
      <ScrollView
        style={{ flex: 1, backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 10
          }}
        >
          <Text
            style={{
              color: "#626262",
              fontSize: 25,
              fontWeight: "bold",
              marginBottom: 20
            }}
          >
            Discover our exclusive watches
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={Slideshow}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item, index }) => renderSlideshow(item, index)}
          />
        </View>

        <View
          style={{
            paddingHorizontal: 5,
            paddingVertical: 10
          }}
        >
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={Categories}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item, index }) => renderCategories(item, index)}
          />
        </View>
        <View
          style={{
            paddingLeft: 8,
            paddingRight: 4,
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%"
          }}
        >
          {renderProducts()}
        </View>
      </ScrollView>
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
export default Home;
