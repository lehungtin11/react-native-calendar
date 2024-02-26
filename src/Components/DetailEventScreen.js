import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DetailEventScreen = ({ route }) => {
  const navigation = useNavigation();
  const { title, start, end, type, description, eventUrl, ClientProfile } =
    route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={24} color="#007bff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Event Details</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Event Information</Text>
          <Text style={styles.detailText}>Title: {title}</Text>
          <Text style={styles.detailText}>
            Time: {start} - {end}
          </Text>
          <Text style={styles.detailText}>Type: {type}</Text>
          {(type == "appointment" && (
            <Text style={styles.detailText}>Description: {description}</Text>
          )) || <Text style={styles.detailText}>Event URL: {eventUrl}</Text>}
        </View>

        {type == "appointment" && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Client Profile</Text>
            <View style={styles.profileInfo}>
              <Image
                source={require("../../assets/me.jpg")}
                style={styles.profileImage}
              />
              <View style={styles.profileDetails}>
                <Text style={styles.profileText}>
                  Name: {ClientProfile.clientName}
                </Text>
                <Text style={styles.profileText}>
                  Email: {ClientProfile.clientEmail}
                </Text>
                <Text style={styles.profileText}>
                  Phone: {ClientProfile.clientPhoneNumber}
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f7",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  backButton: {
    position: "absolute",
    left: 10,
    padding: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  content: {
    padding: 20,
    backgroundColor: "#FFF",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    color: "#4a4a4a",
    marginBottom: 8,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  profileDetails: {
    flex: 1,
  },
  profileText: {
    fontSize: 16,
    color: "#4a4a4a",
    marginBottom: 4,
  },
});

export default DetailEventScreen;
