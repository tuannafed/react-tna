<div align="center">
<h1>tna-frontend</h1>

<div>React hook, libs, utils, react ui framwork, library, ready to use, written in Typescript.</div>

<br />

<br />
  <pre>npm i <a href="https://www.npmjs.com/package/tna-frontend">tna-frontend</a></pre>
  <br />

<div align="center">
  <sub>Created by <a href="https://github.com/tuannafed">TonyTeo</a> and maintained.</sub>
</div>

</div>

<br />

## 💫 Introduction

This is a React hooks library, written in Typescript and easy to use. It provides a set of hooks that enables you to build your React applications faster. The hooks are built upon the principles of DRY (Don't Repeat Yourself). There are hooks for most common use cases you might need.

The library is designed to be as minimal as possible. It is fully tree-shakable (using the ESM version), meaning that you only import the hooks you need, and the rest will be removed from your bundle making the cost of using this library negligible. Most hooks are extensively tested and are being used in production environments.

### Usage example

```tsx
import { useLocalStorage } from 'usehooks-ts'

function Component() {
  const [value, setValue] = useLocalStorage('my-localStorage-key', 0)

  // ...
}
```
