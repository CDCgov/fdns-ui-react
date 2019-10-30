The Stepper component is used to show the progress in a sequence of steps, events, statuses, etc. The status array can be an array of strings or an array of objects that include a `status` and `substatus` property. The substatus will only be displayed in Vertical Steppers.

#### Vertical Stepper
```js
  const statuses = [
    { status: 'First Step', substatus: 'Complete' },
    { status: 'Second Step', substatus: 'Complete' },
    { status: 'Third Step', substatus: 'Active' },
    { status: 'Fourth Step', substatus: 'Pending' },
  ];
  <div className="stepper">
    <Stepper
      layout={'vertical'}
      statuses={statuses}
      currentStatus={'Third Step'}
    />
  </div>
```

#### Horizontal Stepper
```js
  <div className="stepper">
    <Stepper layout={'horizontal'} statuses={['First Step','Second Step','Third Step','Fourth Step']} currentStatus={'Third Step'}/>
  </div>
```