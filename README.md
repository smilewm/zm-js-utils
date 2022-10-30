# common-utils

## Project setup

```
npm install common-utils
```

或者

```
yarn add common-utils
```

使用
```
import {isArray} from 'common-utils'
isArray(data)

或
import utils from 'common-utils'
utils.isArray(data)
```
## API 

| 方法 | 描述 | 参数 | 回调值类型 | 
| -------- | --------| ---------| :---------:|
| isArray | 是否为数组 |  -- | boolean |
| isString | 是否为字符串 | -- | boolean |
| isUndefined | 是否为undefined | -- | boolean | 
| isRegexp | 是否为正则表达式 | -- | boolean |
| isPromise | 是否为promise | -- | boolean |
| isDate | 是否为date类型 | -- | boolean |
| isObject | 是否为object | -- | boolean |
| isEmpty | 是否为空 | -- | boolean |
| isElement | 是否为element元素 | -- | boolean |
| isNull | 是否为null | -- | boolean |
| desensitiz | 脱敏字符串 | desensitizParameters | string |

## desensitizParameters
```
desensitiz(str, prefix, suffix, symbol)
```
| 参数 | 描述 | 类型 | 必填 | 默认值 |
| :--- | -------- | ---- | :----: | :---: |
| str | 脱敏字符串 | string | 是 | -- |
| prefix | 前位保留位数 | number | 是 | -- |
| suffix | 后位保留位数 | number | 是 | -- |
| symbol | 替换符 | string | 否 | * |