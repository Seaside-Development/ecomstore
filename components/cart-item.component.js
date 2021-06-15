import React from 'react';
import { View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

const CartItem = ({deletable, onRemove, item: {price, name, quantity}}) => {
    return (
        <View style={styles.cartItem}>
            <View style={styles.itemData}>
                <Text style={styles.quantity}>{quantity} </Text>
                <Text style={styles.mainText}>{name}</Text>
            </View>
            <View style={styles.itemData}>
                <Text style={styles.mainText}>total: ${quantity * price}</Text>
                {deletable && (
                    <TouchableOpacity
                        onPress={onRemove}
                        style={styles.deleteButton}
                    >
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                            size={23}
                            color="red"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cartItem: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        overflow: 'hidden'
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    quantity: {
        fontFamily: 'OpenSansRegular',
        color: '#888',
        fontSize: 16
    },
    mainText: {
        fontFamily: 'OpenSansBold',
        overflow: 'hidden',
        fontSize: 12
    },
    deleteButton: {
        marginLeft: 20
    }
});

export default React.memo(CartItem);
