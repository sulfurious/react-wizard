module.exports = {
    "rules": {
        "indent": [
            "error",
            2
        ],
        "quotes": [
            2,
            "single"
        ],
        "linebreak-style": [
            2,
            "unix"
        ],
        "semi": [
            2,
            "never"
        ]
    },
    "env": {
        "es6": true,
        "browser": true
    },
    "globals": {
      "it": true
    },    
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true,        
    },
    "plugins": [
        "react"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        
    }
};