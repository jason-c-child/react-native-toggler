#react-native-toggler
Another method of implementing a multi-step toggle element

---

##install
`npm install react-native-toggler --save`

---

##usage
The `Toggle` component expects a single prop called `toggleStates`, an array of JSON in the following format:

```
{
  onToggle: () => console.log(''),
  label: 'Sign up for free offers?',
  component: <MaterialIcons name='check-box-outline-blank' size={35} color='green'/>
}
```

```javascript
// from the example...
import Toggle from 'react-native-toggler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

// in render()...

<Toggle
  ref='myToggler'
  toggleStates={[{
   onToggle: () => console.log(''),
   label: 'Sign up for free offers?',
   component: <MaterialIcons name='check-box-outline-blank' size={35} color='green'/>
 },
 {
   onToggle: () => console.log(''),
   label: 'Yes, I want me some more spam!!!!',
   component: <MaterialIcons name='check-circle' size={35} color='green'/>
  }]
} />
```

`onToggle` function will be called when the toggle state is clicked
`label` will be rendered as the contents of a `Text` component to the right of the `component`
`component` the `react-native` component to be rendered adjacent to the label

The toggle state can be changed directly with `doToggle()` and allows you to supress the callback (for the instance where you want to load a settings form from a redux state, for example)

```javascript
// somewhere with a ref to the component...
componentDidMount () {
   this.refs['myToggler'].doToggle(1, true)
}
```

See the [example](https://github.com/jason-c-child/react-native-toggler/edit/master/example/index.ios.js) project (only iOS but it would be trivial to test it on android) for a toggle 'switch' style use

![example](https://github.com/jason-c-child/react-native-toggler/blob/master/toggler-example.gif)
