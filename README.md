<p align='center'>
<a href="https://www.npmjs.com/package/enot-api"><img src="https://img.shields.io/npm/v/enot-api.svg?style=flat-square" alt="NPM version"></a>
</p>

<img src="https://i.ytimg.com/vi/tMzowb98ihM/maxresdefault.jpg"></img>

> **[Node.js](https://nodejs.org/) 12.20.0 or newer is required**

<p align="center">API service of <a href="https://enot.io">enot.io</a></p>

- **Using `Yarn`** (recommended)
  ```shell
  yarn add enot-api
  ```
- **Using `npm`**
  ```shell
  npm i enot-api
  ```
- **Using `pnpm`**
  ```shell
  pnpm add enot-api
  ```


## Set of params
```javascript
const { Params } = require (`enot-api`)

const Formate = new Params ({
    api_key: `apikey`,
    email: `example@gmail.com`
})
```

## 📂 Method "GetBalance"

```javascript
const { Params, getBalamce } = require (`enot-api`)

const Formate = new Params ({
    api_key: `apikey`,
    email: `example@gmail.com`
})

async function get () {
    const response = await getBalance ()

    console.log (response)
}
```

<p align="center">if the result is positive:</p>

```javascript
{"status":"success","balance":"95811.10","balance_freeze":"3849.00"}
```

<p align="center">if one of the parameters is omitted:</p>

```javascript
{ status: 'error', message: 'ONE_PARAMETR_EMPTY' }
```

<p align="center">if the account is not found:</p>

```javascript
{ status: 'error', message: 'USER_NOT_FOUND' }
```

## 📒 Method "getWalletOperation"
```javascript
const { getWallet, Params } = require (`enot-api`)
const number = `number phone`
const amout = 150

const API = new Params ({
  api_key: `api_key`,
  email: `email`
})

(async () => {
const response = await getWallet (number, amout)

console.log (response)
})()
```

## Resposne answer
```javascript
//Результат успешного запроса. В balance указан ваш новый баланс. В ID, это id транзакции в нашей системе
{"status":"success", "balance":10.00, "id":1234}
 
 
// Пользователь не найден (API ключ или email указаны неверно)
{"status":"error","message":"USER_NOT_FOUND"}
 
// Один из параметров пустой
{"status":"error","message":"ONE_PARAMETR_EMPTY"}
 
// Сумма вывода не входит в разрешенный диапазон для вывода. Меньше
{"status":"error","message":"AMOUNT_SMALL"}
 
// Сумма вывода не входит в разрешенный диапазон для вывода. Больше
{"status":"error","message":"AMOUNT_BIG"}
 
// Сервис для вывода не найден
{"status":"error","message":"SERVICE_NOT_FOUND"}
 
// Не хватает средств для вывода. После двоеточия указывается ваш доступный баланс
{"status":"error","message":"BALANCE_SMALL:10.00"}
 
// Ошибка ввода суммы. Комиссия не рассчитана
{"status":"error","message":"SUM_ERROR"}
 
// Кошелек находится в черном списке
{"status":"error","message":"WALLET_ON_BLACKLIST"}
 
// Не уникальный номер выплаты в вашей системе
{"status":"error","message":"ORDER_ID_EXIST"}
 
// Вывод на карту данного банка невозможен
{"status":"error","message":"BANK_NOT_ALLOWED"}
 
// Реквизиты для выплаты указаны неверно
{"status":"error","message":"PAYMENT_ACCOUNT_WRONG"}
 
// Необходимо заполнить поле "Держатель карты"
{"status":"error","message":"CARD_HOLDER_EMPTY"}
```