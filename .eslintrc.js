module.exports =  {
    parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
    plugins: [
        "@typescript-eslint",
        "react",
    ],

    extends:  [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parserOptions:  {
        ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
        sourceType:  'module',  // Allows for the use of imports
        "ecmaFeatures": {
            "jsx": true
        }
    },
    rules:  {
        "react/jsx-uses-react": "error",
        "no-unused-vars" : "off",
        // undefined  된 변 수 사용 을 허용함
        "no-undef" : "off",
        // correct : key: "value", incorrect : key :"value"
        "key-spacing" : [2,{
            "beforeColon": false,
            "afterColon": true
        }],
        // correct : function() {  , incorrect : function () {
        "space-before-function-paren": ["off", "always"],
        "no-multiple-empty-lines": [2, { "max": 1, "maxEOF": 1}],
        "no-dupe-class-members": "off",
        "indent": ["error", 4],
        "@typescript-eslint/no-empty-interface" : "off",
        "@typescript-eslint/no-unused-vars" : "error",

        // 퍼블 릭 access-modifier 명시하지 않아도 됨
        "@typescript-eslint/explicit-member-accessibility" : 1
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    },

};