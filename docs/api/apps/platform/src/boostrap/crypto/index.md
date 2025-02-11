[@aiofc/source](../../../../../index.md) / apps/platform/src/boostrap/crypto

# apps/platform/src/boostrap/crypto

## Functions

### generateRandomId()

```ts
function generateRandomId(): string
```

#### Returns

`string`

***

### generateRandomIdAsync()

```ts
function generateRandomIdAsync(): Promise<string>
```

#### Returns

`Promise`\<`string`\>

***

### generateRandomIdWithoutSpecialCharacters()

```ts
function generateRandomIdWithoutSpecialCharacters(length): string
```

#### Parameters

##### length

`number` = `11`

#### Returns

`string`

***

### generateRandomNumber()

```ts
function generateRandomNumber(length): number
```

#### Parameters

##### length

`number` = `6`

#### Returns

`number`

***

### hashPassword()

```ts
function hashPassword(password): Promise<string>
```

todo add salt

#### Parameters

##### password

`string`

#### Returns

`Promise`\<`string`\>

***

### verifyPassword()

```ts
function verifyPassword(password, hashedPassword): Promise<boolean>
```

#### Parameters

##### password

`string`

##### hashedPassword

`string`

#### Returns

`Promise`\<`boolean`\>
