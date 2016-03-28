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

`onToggle` function will be called when the toggle state is clicked
`label` will be rendered as the contents of a `Text` component to the right of the `component`
`component` the `react-native` component to be rendered adjacent to the label

See the [example](https://github.com/jason-c-child/react-native-toggler/edit/master/example/index.ios.js)

![example](https://github.com/jason-c-child/react-native-toggler/blob/master/toggler-example.gif)
