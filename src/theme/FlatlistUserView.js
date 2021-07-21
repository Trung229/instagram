import React from 'react';
import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: "100%",
        padding: 10,
    },
    containerItem: {
        marginBottom: 20,
        height: 150,
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        overflow: 'visible',
        
    },
    img:{
        width: 70,
        height: 70,
        borderRadius:100,
        marginRight:10,
    },
    containerInfo:{
        flexDirection: 'row',
        alignItems: 'center',
        height:"100%",
        marginHorizontal:20,
        position: 'relative',
    },
    containerLeft:{
        height:"70%",
    },
    containerInfoText:{
        minWidth:200,
        height:"100%",
        justifyContent: 'center',
        marginRight:30,
    },
    textColor:{
        color:"#fbfcfe",
        fontWeight:"600",
    },
    containerActive:{
        flexDirection:"row",
        justifyContent: 'center',
    },
    containerPopular:{
        alignItems: 'center',
        marginHorizontal:10,
        justifyContent:"flex-end",
    },
    containerLike:{
        alignItems: 'center',
        marginHorizontal:10,
        justifyContent:"flex-end",
    },
    containerFollow:{
        alignItems: 'center',
        marginHorizontal:10,
    },
    textColoList:{
        color:"#ecf4fd",
    },
    iconView:{
        color:"#ecf4fd",
        fontSize:20,
        position:"absolute",
        right:5,
        top:10,
    },
    modalView:{
        borderRadius: 20,
        width:"100%",
        height:"50%",
        position:"absolute",
        bottom:0,
        padding:30,
        backgroundColor:"white",
        zIndex:5,
    },
    modal:{
        height:"60%",
        backgroundColor:"black",
        opacity:0.3,
    },
    modalList:{
        borderRadius:20,
    }


})
export default styles;