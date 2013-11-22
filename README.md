# cf-hasher

Secure hashing of passwords for use in catfish

## Installation

    npm install --save cf-hasher

## Usage

    var hasher = require('cf-hasher')
    var authHasher = hasher('salty-mc-salt-salt', { hmac: true, type: 'sha512' })
    var hash = authHasher.create('nom', 'salt')

    authHasher(user, function (err, user) {
      var hash = user.password
    })

### options

- `type` Defaults to `sha1` other options are: `sha256`, `sha512` On recent releases, `openssl list-message-digest-algorithms` will display the available digest algorithms.
- `hmac` Defaults to true, uses a HMAC instead of a salted hash to prevent length extension attacks etc.

### returns

`function`

    function(user, cb) {...}

`create`

    function create(password, passwordSalt) {...}

## Credits
Built by developers at [Clock](http://clock.co.uk).

## Licence
Licensed under the [New BSD License](http://opensource.org/licenses/bsd-license.php)
