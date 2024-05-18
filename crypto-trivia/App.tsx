import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Option from "./components/Option";
import { useEffect, useState } from "react";
import {quizData} from "./questions";



export default function App() {
  const [questions, setQuestions] = useState<any>([]); 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");


  useEffect(() => {
    setQuestions(quizData);
    

    },[])

    let currentQuestion = questions[currentQuestionIndex];

    const handleNext = () => {
      if (currentQuestionIndex < questions?.length - 1) {
        setCurrentQuestionIndex((prevQuestion) => prevQuestion + 1);
    }
  };




  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <SafeAreaView>
        <View style={styles.countwrapper}>
          <Text style={{ fontWeight: "600" }}>1/4</Text>
        </View>

        <View style={styles.questionwrapper}>
          <View style={styles.progresswrapper}>
            <View style={styles.progressBar}></View>
            <View style={styles.progressCount}> 
              <Text style={styles.percentage}>60</Text>
            </View>
          
            </View>
          <Text style={{ fontWeight: "500", textAlign: "center " }}>
            {currentQuestion?.question}
          </Text>
        </View>

        <View style={styles.optionwrapper}>
            <Option option={currentQuestion?.options[0]}/>
            <Option option={currentQuestion?.options[1]}/>
            <Option option={currentQuestion?.options[2]}/>
            <Option option={currentQuestion?.options[3]}/>

        </View>

        <TouchableOpacity onPress={handleNext} activeOpacity={.8} style={styles.btn}>
          <Text style={{color:"white", fontWeight: "600"}}>Next</Text>



        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4e4e4",
    padding: 20,
  },

  countwrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },

  questionwrapper: {
    marginTop: 60,
    width: "100%",
    height: 180,
    borderRadius: 20,
    backgroundColor: "#fff",
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    alignItems: "center",
  },

  progresswrapper: {
    width: 70,
    height: 70,
    backgroundColor: "#ABD1C6",
    borderRadius: 50,
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    marginBottom: 30,
    marginTop: -50,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#004643",
    alignSelf: "flex-end",
    width: "40%",
  },

  progressCount: {
    height: 58,
    width: 58,
    borderRadius: 50,
    backgroundColor: "#fff",
    zIndex: 10,
    position: "absolute",
    top: 6,
    alignItems: "center",
    justifyContent: "center",

  },
  percentage: {
    fontWeight: "600",
    fontSize: 18,
    color: "#004643",
  },
  optionswrapper: {
    marginTop: 40,
    width: "100%",
  },
  btn: {
    width: "100%",
    height: 50,
    borderRadius: 16,
    backgroundColor: "#004643",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  }


});
