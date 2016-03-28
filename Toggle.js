import React, {View, Text, Component, TouchableOpacity}  from 'react-native'
export default class Toggle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ...props,
      currentToggleState: 0
    }
  }

  doToggle (index = -1, suppressCallback = false) {
    let {toggleStates} = this.state
    let _toggleIndex = 0
    if (index !== -1){
      if (index < toggleStates.length) {
        this.setState({currentToggleState: index})
        suppressCallback === false && toggleStates[this.state.currentToggleState].onToggle()
        return
      }
    } else {
      if (this.state.currentToggleState + 1 < toggleStates.length) {
        _toggleIndex = ++this.state.currentToggleState
      }
    }
    this.setState({currentToggleState: _toggleIndex})
    suppressCallback === false && toggleStates[this.state.currentToggleState].onToggle && toggleStates[this.state.currentToggleState].onToggle()
  }
  render () {
    let i = this.state.currentToggleState
    let {toggleStates} = this.state
    return (
      <View style={{flexDirection: 'row', flex: 1}}>
        <TouchableOpacity onPress={() => this.doToggle()}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {i < toggleStates.length && toggleStates[i].component ? toggleStates[i].component : null}
            {i < toggleStates.length && toggleStates[i].label ? <Text style={{flex: 1}}>{toggleStates[i].label}</Text> : null}
          </View>
        </TouchableOpacity>
      </View>)
  }
}