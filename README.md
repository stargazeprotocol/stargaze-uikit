# Stargazer UIkit

[![Version](https://img.shields.io/npm/v/@stargazeprotocol/uikit)](https://www.npmjs.com/package/@stargazeprotocol/uikit) [![Size](https://img.shields.io/bundlephobia/min/@stargazeprotocol/uikit)](https://www.npmjs.com/package/@stargazeprotocol/uikit)

Stargazer UIkit is a set of React components and hooks used to build pages for Stargazer Orion. It also contains a theme file for dark and light mode.
It is based heavily on the work of [Pancake UIkit](https://www.npmjs.com/package/@pancakeswap-libs/uikit)

## Install

`yarn add @stargazeprotocol/uikit`

## Setup

### Theme

Before using this UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@stargazeprotocol/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@stargazeprotocol/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://pancakeswap.github.io/pancake-uikit/)
