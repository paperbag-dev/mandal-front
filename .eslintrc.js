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
        // correct : key: "value" | incorrect : key :"value"
        "key-spacing" : [2,{
            "beforeColon": false,
            "afterColon": true
        }],
        "max-len": ["error", {"code": 120}],
        // correct : 'abcd' | incorrect : "abcd"
        "quotes": ["error", "single"],
        // correct : function (a : number, b : number) | incorrect : function (a : number ,b : number)
        "comma-spacing": ["error",{ "before": false, "after": true}],
        /*
            correct                 incorrect
              foo: {                  foo: {
                a : 1,                  a : 1,
                b : 2                   b : 2,
            }                     }

         */
        "comma-dangle": ["error", "never"],
        // correct : function (foo : number) | incorrect : function ( foo : Foo )
        "space-in-parens": ["error","never"],
        // correct : function() {  | incorrect : function () {
        "space-before-function-paren": 0,
        // correct : [1,2] , {'foo':'bar'} | incorrect : [ 1,2], [1, 2 ], { 'foo' : 'bar' }
        "object-curly-spacing": ["error", "never"],
        "array-bracket-spacing": ["error", "never"],
        "no-multiple-empty-lines": [2, { "max": 1, "maxEOF": 1}],
        "no-dupe-class-members": "off",
        "indent": ["error", 2],
        // force to end a sentence with semicolon.
        "semi": ["error", "always"],
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface" : "off",
        "@typescript-eslint/no-unused-vars" : "error",
        // 퍼블 릭 access-modifier 명시하지 않아도 됨
        "@typescript-eslint/explicit-member-accessibility" : 0
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    },

};