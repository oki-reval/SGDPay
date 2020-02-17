import React from 'react';
import { View, ImageBackground, Dimensions, Image, StyleSheet, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { saveUser } from '_states/actions/user';
import { connect } from 'react-redux';
import { Button, Input } from '_atoms'
import { color } from '_styles';


