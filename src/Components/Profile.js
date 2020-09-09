import React from 'react'
import axios from 'axios'

export default class Profile extends React.Component {
    constructor() {
        super()

        this.state = {
            characterDetails: {}
        }
    }

    componentDidMount() {
        const { first, last } = this.props.match.params
        axios.get(`/api/${first}/${last}`)
            .then(res => {
                this.setState({
                    characterDetails: res.data
                })
            })
            .catch(err => console.log(err))
    }


    render() {
        console.log(this.state)
        const { firstName, lastName, middleName, bestQuote, image } = this.state.characterDetails
        return (
            <div className="profile">
                <img src={image} alt={`${firstName} ${lastName}`} />
                <h2>{`${firstName} ${middleName} ${lastName}`}</h2>
                <h3>{bestQuote}</h3>
            </div>
        )
    }
}