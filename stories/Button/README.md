# Button

### :smile: Usage

```js
import { Button } from "elements";
```

<!-- STORY -->

### Properties

| propName | propType                                  | defaultValue | isRequired |
| -------- | ----------------------------------------- | ------------ | ---------- |
| onClick  | MouseEventHandler                         | -            |            |
| children | React.ReactNode                           | -            | true       |
| disabled | boolean                                   | false        | false      |
| variant  | "text" "outlined" "contained" undefined   | "text"       | false      |
| color    | "default" "primary" "secondary" undefined | "default"    | false      |

### Roadmap

```js
import { Button } from 'elements';

render() {
  return (
    <Button>Default</Button>
    <Button variant="contained">Default Contained</Button>
    <Button variant="outlined"> Default Outlined</Button>

    <Button color="primary">Primary</Button>
    <Button variant="contained" color="primary">Primary Contained</Button>
    <Button variant="outlined" color="primary"> Primary Outlined</Button>

    <Button color="secondary">Secondary</Button>
    <Button variant="contained" color="secondary">Secondary Contained</Button>
    <Button variant="outlined" color="secondary"> Secondary Outlined</Button>
  );
}
```
