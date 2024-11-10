import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import Icon from "react-native-vector-icons/Ionicons";
// import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const PlaceholderImage = require("@/assets/images/brimo.png");

export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <View style={styles.logobrimo}>
            <Image source={PlaceholderImage} style={styles.image} />
          </View>
          <View>
            <Text style={styles.hai}>Hai,</Text>
            <Text style={styles.username}>Muhammad Yusfi</Text>
          </View>
        </View>
        <View>
          <View style={styles.iconheader}>
            <TouchableOpacity style={styles.notificationIcon}>
              <MaterialIcons name="notifications-none" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.Iconheadset}>
              <MaterialIcons name="headset-mic" size={30} color="#fff" />
              <View>
                <Text style={styles.hai}>Pusat</Text>
                <Text style={styles.username}>Bantuan</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.accountCard}>
        <View style={styles.accountInfo}>
          <Text style={styles.accountLabel}>Saldo Rekening Utama</Text>
          {/* <Text>0822 2867 3648</Text> */}
          <View style={styles.iconnominal}>
            <Text style={styles.nominal}>Rp 1.999.000,00</Text>
            <MaterialIcons name="visibility-off" size={20} color="#fff" />
          </View>
          <Text style={styles.horizontalline}>-</Text>
        </View>
        <TouchableOpacity style={styles.accountInfo2}>
          <Text style={styles.accountLabel}>Semua Rekeningmu</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="#fff" />
        </TouchableOpacity>

        <View style={styles.ButtonSection}>
          <TouchableOpacity style={styles.TransferButton}>
            <Icon name="swap-horizontal-outline" size={40} color="white" />
            <Text style={styles.Beranda}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BrivaButton}>
            <Icon name="card-outline" size={45} color="white" />
            <Text style={styles.Beranda}>BRIVA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.WalletButton}>
            <Icon name="wallet-outline" size={45} color="white" />
            <Text style={styles.Beranda}>E Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.PulsaButton}>
            <MaterialIcons name="phone-android" size={45} color="white" />
            <Text style={styles.Beranda}>Pulsa & Data</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.carifitur}>
        <Icon name="search" size={20} color="#006cc7" />
        <Text style={styles.tekscari}>Cari Fitur</Text>
      </TouchableOpacity>

      <View style={styles.accountCard2}>
        <View style={styles.ButtonSection2}>
          <TouchableOpacity style={styles.TopupButton}>
            <MaterialCommunityIcons name="wallet-plus" size={40} color="green" />
            <Text style={styles.Beranda2}>Top Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TagihanButton}>
            <MaterialIcons name="request-quote" size={40} color="red" />
            <Text style={styles.Beranda2}>Tagihan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SetorButton}>
            <MaterialCommunityIcons name="cash-plus" size={40} color="blue" />
            <Text style={styles.Beranda2}>Setor & Tarik Tunai</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.LifeButton}>
            <MaterialIcons name="shopping-bag" size={40} color="pink" />
            <Text style={styles.Beranda2}>Lifestyle</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.horizontalline}>-</Text>
        <TouchableOpacity style={styles.lainnya}>
          <Text style={styles.tekslainnya}>Lainnya</Text>
          <MaterialIcons name="keyboard-arrow-down" size={20} color="#006cc7" />
        </TouchableOpacity>
      </View>

      <View style={styles.catatan}>
        <Text style={styles.tekscatatan}>Catatan KeuanganMO</Text>
        <View style={styles.catatan2}>
          <Text style={styles.tekstampilkan}>Tampilkan</Text>
          <MaterialIcons name="visibility-off" size={20} color="#006cc7" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: 50,
    height: 50,
  },
  header: {
    backgroundColor: "#006cc7",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconheader: {
    flexDirection: "row",
  },
  logobrimo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    color: "#fff",
  },
  hai: {
    color: "#fff",
  },
  notificationIcon: {
    // padding: 5,
    // backgroundColor: "#fff",
    // borderRadius: 20,
  },
  Iconheadset: {
    backgroundColor: "#00549c",
    borderRadius: 25,
    flexDirection: "row",
  },
  accountCard: {
    backgroundColor: "#00549c",
    margin: 16,
    padding: 16,
    borderRadius: 16,
  },
  accountInfo: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    // marginBottom: 8,
  },
  accountInfo2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  accountLabel: {
    color: "#fff",
  },
  iconnominal: {
    flexDirection: "row",
  },
  nominal: {
    color: "#fff",
    fontWeight: "bold",
    marginRight: 10,
  },
  horizontalline: {
    width: "100%",
    height: 1,
    backgroundColor: "#fff",
    marginVertical: 10,
  },
  Beranda: {
    fontSize: 9,
    fontWeight: "bold",
    color: "white",
  },
  Beranda2: {
    fontSize: 9,
    fontWeight: "bold",
    color: "black",
  },
  ButtonSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  TransferButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    backgroundColor: "#006cc7",
    borderRadius: 15,
  },
  BrivaButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    backgroundColor: "#006cc7",
    borderRadius: 15,
  },
  WalletButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    backgroundColor: "#006cc7",
    borderRadius: 15,
  },
  PulsaButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    backgroundColor: "#006cc7",
    borderRadius: 15,
  },
  carifitur: {
    backgroundColor: "#f8faf9",
    borderWidth: 1,
    borderColor: "#006cc7",
    margin: 16,
    padding: 16,
    borderRadius: 26,
    flexDirection: "row",
    // alignItems: "center",
    marginTop: 8,
    marginBottom: 1,
  },
  tekscari: {
    color: "#006cc7",
  },
  lainnya: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  tekslainnya: {
    color: "#006cc7",
  },
  catatan: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  catatan2: {
    flexDirection: "row",
  },
  tekscatatan: {
    fontWeight: "bold",
  },
  tekstampilkan: {
    fontWeight: "bold",
    color: "#006cc7",
  },
  quickActions: {
    paddingHorizontal: 16,
  },
  actionButton: {
    backgroundColor: "#fff",
    padding: 16,
    marginHorizontal: 8,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 80,
  },
  packageOffer: {
    paddingHorizontal: 16,
  },
  offerTitle: {
    fontWeight: "bold",
    marginBottom: 16,
  },
  packageCard: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  packageData: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  buyButton: {
    backgroundColor: "#ff4500",
    padding: 10,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },
  buyButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  accountCard2: {
    // backgroundColor: "#00549c",
    marginTop: 1,
    margin: 16,
    padding: 16,
  },
  ButtonSection2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  TopupButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    backgroundColor: "#e2f2ff",
    borderRadius: 15,
  },
  TagihanButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    backgroundColor: "#e2f2ff",
    borderRadius: 15,
  },
  SetorButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    backgroundColor: "#e2f2ff",
    borderRadius: 15,
  },
  LifeButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    backgroundColor: "#e2f2ff",
    borderRadius: 15,
  },
});
