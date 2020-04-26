Validation des codes NIR - NIRPP - Numéro de sécurité sociale
------

Validation des numéros de sécurité sociale, basé sur la [définition wikipedia](https://fr.wikipedia.org/wiki/Num%C3%A9ro_de_s%C3%A9curit%C3%A9_sociale_en_France#lien_F)
> Parse and validate the french NIR, based on the [wikipedia definition](https://fr.wikipedia.org/wiki/Num%C3%A9ro_de_s%C3%A9curit%C3%A9_sociale_en_France#lien_F).


## Install
```
$ npm install validcq
```

## Usage
```js
const { validCq } = require('validCq');

validCq('255081416802538');
// => true

validCq('255081416802539');
// => false

validCq('2 55 08 14 168 025 38');
// => true
```

### Options

*shouldClean* - set this to `false` to become white-space and case sensitive


```js
validCq('2 55 08 14 168 025 38', {shouldClean: false});
// => false
```

```js
validCq('2 55 08 14 168 025 38');
// => true
```