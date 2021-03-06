### 环境搭建

初始化项目生成`package.json`

```bash
npm init -y
```

安装jest

```bash
yarn add --dev jest
```

所有代码采用最新ES6语法编写，所以需要使用babel

```bash
yarn add --dev @babel/core @babel/preset-env babel-core babel-preset-env babel-jest regenerator-runtime
```

编辑package.json

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

编辑.babelrc

```js
{
  "presets": ["env"]
}
```

创建js文件

```js
// sum.js
function sum(a, b) {
  return a + b;
}
export default sum;
// sum.test.js
import sum from '../code/sum';

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});
```

启动测试

```bash
yarn test
```

