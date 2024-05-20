import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Results = ({score, restart}:{score:number, restart: ()=> void}) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper} >
                <Text style={{fontWeight:"600", fontSize:16, color:"#004643"}}>Quiz Complete</Text>
                <Text style={{marginVertical: 20, fontWeight: "500"}}>Your Scored:</Text>
                <Text style={{fontWeight: "700", fontSize: 16, color: "#0004643"}}>{score}/10</Text>
            
                <TouchableOpacity onPress={restart} activeOpacity={.8} style={styles.btn}>
                    <Text>Restart</Text>
                </TouchableOpacity>
            
            </View>
        </View>
    )

}

export default Results;

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e4e4e4",
        padding: 20,
    },
    wrapper: {
        width: "100%",
        height: 200,
        backgroundColor: "#fff",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
    },
    btn: {
        width: 100,
        height: 40,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ABD1C6",
        marginTop: 20

    }



})