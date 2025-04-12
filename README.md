# @eslinter/eslint-config-standard

[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/eslinter/eslint-config-standard/ci.yml?branch=master)](https://github.com/eslinter/eslint-config-standard/actions/workflows/ci.yml?query=branch%3Amaster)
[![Codecov](https://img.shields.io/codecov/c/github/eslinter/eslint-config-standard.svg)](https://codecov.io/gh/eslinter/eslint-config-standard)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Feslinters%2Feslint-config-standard%2Fmaster%2Fpackage.json)](https://github.com/plantain-00/type-coverage)
[![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/eslinter/eslint-config-standard)](https://coderabbit.ai)
[![npm](https://img.shields.io/npm/v/@eslinter/eslint-config-standard.svg)](https://www.npmjs.com/package/@eslinter/eslint-config-standard)
[![GitHub Release](https://img.shields.io/github/release/eslinter/eslint-config-standard)](https://github.com/eslinter/eslint-config-standard/releases)

[![Conventional Commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![changesets](https://img.shields.io/badge/maintained%20with-changesets-176de3.svg)](https://github.com/changesets/changesets)

## The ESLint config of [JavaScript Standard Style][standardjs]

[![JavaScript Style Guide - Standard Style](https://cdn.rawgit.com/standard/standard/master/badge.svg)][standardjs]

This module is for advanced users. You probably want to use [`standard`][standardjs] instead :)

## Usage

This package exports [a flat ESLint configuration](https://eslint.org/docs/latest/use/configure/configuration-files-new).

```bash
# npm
npm install -D eslint @eslinter/eslint-config-standard

# yarn
yarn add -D eslint @eslinter/eslint-config-standard

# pnpm
pnpm add -D eslint @eslinter/eslint-config-standard

# bun
bun add -D eslint @eslinter/eslint-config-standard
```

Example `eslint.config.js`:

```js
import standard from '@eslinter/eslint-config-standard'

export default [
  standard,
  {
    // your overrides here
  },
]
```

## Learn more

For the full listing of rules, editor plugins, FAQs, and more, visit the main
[JavaScript Standard Style repo][standardjs].

[![Sponsors](https://raw.githubusercontent.com/1stG/static/master/sponsors.svg)](https://github.com/sponsors/JounQin)

## Sponsors

| 1stG                                                                                                                   | RxTS                                                                                                                   | UnTS                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [![1stG Open Collective sponsors](https://opencollective.com/1stG/organizations.svg)](https://opencollective.com/1stG) | [![RxTS Open Collective sponsors](https://opencollective.com/rxts/organizations.svg)](https://opencollective.com/rxts) | [![UnTS Open Collective sponsors](https://opencollective.com/unts/organizations.svg)](https://opencollective.com/unts) |

## Backers

| 1stG                                                                                                                | RxTS                                                                                                                | UnTS                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [![1stG Open Collective backers](https://opencollective.com/1stG/individuals.svg)](https://opencollective.com/1stG) | [![RxTS Open Collective backers](https://opencollective.com/rxts/individuals.svg)](https://opencollective.com/rxts) | [![UnTS Open Collective backers](https://opencollective.com/unts/individuals.svg)](https://opencollective.com/unts) |

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## License

[MIT][] © [JounQin][]@[1stG.me][]

[1stG.me]: https://www.1stG.me
[JounQin]: https://GitHub.com/JounQin
[MIT]: http://opensource.org/licenses/MIT
[standardjs]: http://standardjs.com
