import { TouchableOpacity, Text, View, Image } from "react-native";
import React from "react";
import { ThemeProvider, useTheme } from "@rneui/themed";
import styles from "./styles";
import { Button } from "@rneui/base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";

const ModalComponent = (props) => {
  const { isVisible, onClose, advice } = props;

  const { theme } = useTheme();
  const homeStyles = styles();
  const style = styles();

  return (
    <Modal
      animationType="fade"
      visible={isVisible}
      transparent={true}
      style={style.modalBG}
      onDismiss={props.hideModal}
      onBackdropPress={props.hideModal}
      onRequestClose={props.hideModal}
    >
      <View style={[style.modal, style.backgroundShadow]}>
        <TouchableOpacity
          style={[style.closeButton, style.backgroundShadow]}
          onPress={() => props.hideModal()}
          activeOpacity={1}
        >
          <Text>X</Text>
        </TouchableOpacity>

        <Text style={style.header}>{advice?.title}</Text>
        <View style={[style.tinyLogo, style.backgroundShadow]}>
          <MaterialCommunityIcons name={advice?.image} size={80} />
        </View>

        <Text style={style.subHeader}>{advice?.advicehort}</Text>
        <View style={style.modalView}>
          <Text style={style.modalDescription}>{advice?.adviceLong}</Text>
        </View>

        <Button buttonStyle={style.modalButton}>see more</Button>
      </View>
    </Modal>
  );
};

export default ModalComponent;
