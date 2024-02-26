import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const VideoCallScreen = () => {
    const navigation = useNavigation();
    const [isMicOn, setIsMicOn] = useState(true);
    const [isVideoOn, setIsVideoOn] = useState(true);

    // Toggle microphone state
    const toggleMic = () => {
        setIsMicOn(!isMicOn);
    };

    // Toggle video state
    const toggleVideo = () => {
        setIsVideoOn(!isVideoOn);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.videoContainer}>
                {/* Placeholder for remote video feed */}
                <View style={styles.remoteVideo}></View>

                {isVideoOn && (<Image
                    source={require("../../assets/me.jpg")}
                    style={styles.localVideo}
                    resizeMode="cover"
                />) || <View style={styles.localVideo}></View>}
                
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={toggleMic}>
                    <Icon name={isMicOn ? "microphone" : "microphone-off"} size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={toggleVideo}>
                    <Icon name={isVideoOn ? "video" : "video-off"} size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Icon name="phone-hangup" size={24} color="#ff3b30" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  remoteVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#666', // Placeholder color
  },
  localVideo: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    width: 100,
    height: 150,
    backgroundColor: '#888', // Placeholder color
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 25,
  },
});

export default VideoCallScreen;
