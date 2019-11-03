The SuperButton component is a wide button to be used for forms. It will fill the width of the container.

```js
      <div className="super-button">
        <h4>Base Palette Super Buttons</h4>
        <SuperButton role="button" aria-label="super button" btnStyle="default" onClick={()=>{}} />
        <SuperButton role="button" aria-label="super button" btnStyle="primary" onClick={()=>{}} />
        <SuperButton role="button" aria-label="super button" btnStyle="secondary" onClick={()=>{}} />
      </div>
      <div className="super-button">
        <h4>Outlined Super Buttons</h4>
        <SuperButton role="button" aria-label="super button" btnStyle="default-outlined" onClick={()=>{}} />
        <SuperButton role="button" aria-label="super button" btnStyle="primary-outlined" onClick={()=>{}} />
        <SuperButton role="button" aria-label="super button" btnStyle="secondary-outlined" onClick={()=>{}} />
        <SuperButton role="button" aria-label="super button" btnStyle="warning-outlined" onClick={()=>{}} />
      </div>
      <div className="super-button">
        <h4>Tone-on-Tone Super Buttons</h4>
        <SuperButton role="button" aria-label="super button" btnStyle="blue-on-blue" onClick={()=>{}} />
        <SuperButton role="button" aria-label="super button" btnStyle="blue-on-blue-inverse" onClick={()=>{}} />
        <SuperButton role="button" aria-label="super button" btnStyle="teal-on-teal" onClick={()=>{}} />
        <SuperButton role="button" aria-label="super button" btnStyle="teal-on-teal-inverse" onClick={()=>{}} />
      </div>
```