import { useEffect, useState } from "react";
import { Image, StyleSheet, View, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

export default function SplashScreen() {
    const router = useRouter();
    const [imageLoaded, setImageLoaded] = useState(false);
    
    useEffect(() => {
        // 2초 후 로그인 화면으로 이동
        const timer = setTimeout(() => {
            router.replace('/login');
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <Image 
                style={styles.imagebox} 
                source={require('@/assets/images/logo.png')}
                onLoad={() => setImageLoaded(true)}
            />
            {imageLoaded && (
                <ActivityIndicator 
                    size="large" 
                    color="#EF7810" 
                    style={styles.loader}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    imagebox: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    loader: {
        marginTop: 20,
    },
});