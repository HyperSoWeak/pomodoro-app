import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, Text, Switch, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const SettingsPage = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const toggleNotifications = () => {
    setNotificationsEnabled(previousState => !previousState);
  };

  const toggleDarkMode = () => {
    setDarkModeEnabled(previousState => !previousState);
  };

  const handleDeleteData = () => {
    Alert.alert(
      'Delete Data',
      'Are you sure you want to delete all data?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Delete', onPress: () => {
          // delete data logic
          Alert.alert('Data Deleted Successfully');
        }},
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={toggleDarkMode}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={darkModeEnabled ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Language</Text>
        <Picker
          style={styles.picker}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="English" value="en" />
          <Picker.Item label="繁體中文" value="zh-tw" />
        </Picker>
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteData}>
        <Text style={styles.deleteButtonText}>Delete Data</Text>
      </TouchableOpacity>
      <View style={styles.versionInfo}>
        <Text>App Version: 1.0.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '80%',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  settingText: {
    fontSize: 18,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#ff6961',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 16,
  },
  picker: {
    height: 30,
    width: 100,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  versionInfo: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
});

export default SettingsPage;
