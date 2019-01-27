# Button

### :smile: Usage

```js
import { FlatButton } from 'elements';
```

<!-- STORY -->

### Properties

* `onClick` - click callback
* `label` - button text
* `disabled` - boolean properties

| propName | propType | defaultValue | isRequired |
| -------- | -------- | ------------ | ---------- |
| onClick  | func     | -            |            |
| label    | string   | -            | true       |
| disabled | boolean  | false        | false      | 

### Roadmap

```js
import { FlatButton } from 'elements';

render() {
  return (
    <FlatButton disabled={false} onClick={this.handleClick}>FlatButton</FlatButton>
  );
}
```