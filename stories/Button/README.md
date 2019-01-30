# Button

### :smile: Usage

```js
import { FlatButton } from 'elements';
```

<!-- STORY -->

### Properties

| propName        | propType              | defaultValue | isRequired |
| --------        | --------              | ------------ | ---------- |
| onClick         | MouseEventHandler     | -            |            |
| children        | React.ReactNode       | -            | true       |
| disabled        | boolean               | false        | false      | 

### Roadmap

```js
import { FlatButton } from 'elements';

render() {
  return (
    <FlatButton disabled={false} onClick={this.handleClick}>FlatButton</FlatButton>
  );
}
```