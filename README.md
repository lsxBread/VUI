# A UI library made of VueJS

[![Build Status](https://travis-ci.org/lsxBread/VUI.svg?branch=master)](https://travis-ci.org/lsxBread/VUI)

Author: Leo Liu

## Introduction

This is a UI library created during my study of Vue.js

## Ready to use

1. Installation

    please use border-box before using this library
    
    ```
    *, *::before, *::after{box-sizing: border-box;}
    ```
    Support IE8+

    You also neet to setup the blow variable for styling (will change to scss variable later)
    ```
    :root {
      --button-height: 32px;
      --font-size: 14px;
      --button-bg: white;
      --button-active-bg: #eee;
      --border-radius: 4px;
      --color: #333;
      --border-color: #999;
      --border-color-hover: #666;
    }
    ```
    Support IE15+
    
2. Install Package

    ```
    npm i --save bread-vui
    ```

3. Import Package
    ```
    import { Button } from 'bread-vui'
    import 'bread-vui/dist/index.css'

    export default {
      name: 'app',
      components: {
        'g-button': Button
      }
    }
    ```

## Documentation

## Q&A

## Log

## Contacts

## Contribution
