import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import HeaderActions from "../components/HeaderActions";

type Props = {};

export default function Favorites({ }: Props) {
    const navigation = useNavigation();

    const FavHeader = () => (
        <View style={styles.headerContainer}>
            <HeaderActions hasBackBtn={true} />
            <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>ENVIES</Text>
                <Image source={require('../../assets/img/Clutch_signature.png')} />
            </View>
        </View>
    );

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
            <FavHeader />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0
    },
    headerTitleContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40
    },
    headerTitle: {
        fontSize: 25,
        fontFamily: 'Poppins-Bold'
    }
});