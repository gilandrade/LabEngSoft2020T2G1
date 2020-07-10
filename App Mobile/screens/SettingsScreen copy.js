import React, {Component} from "react"
import { Text, View, } from 'react-native';


class APIDataa extends Component {
    constructor() {
        super()
        this.state = {
            atualizando: false,
            passos: {}

        }
    }

    componentDidMount() {
        this.setState({atualizando: true})
        fetch("https://raw.githubusercontent.com/Daquisu/Calculo_Numerico/master/Passos2020-06-23.json")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    atualizando: false,
                    passos: data["activities-steps"][29]
                })
            })
    }

    render() {
        const text = this.state.atualizando ? "atualizando..." : this.state.passos.value
        return (
            <View>
                <Text>{text}</Text>
            </View>
        )
    }
}


export default APIDataa