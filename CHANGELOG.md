# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.0.0] - 2020-06-24

### Added

- Feature of middle-ware to handle the sanitation process before mongoDb data operation by avoid the injection payload from certain property of request like body, query, params.
- Feature to check that any Object or Array is sanitised or not for mongoDb data operation.
- Feature of to sanitize the Object or Array before performing the mongoDb data operation. It's a method will return the sanitized data in response.

## [2.0.0] - 2021-06-13

### Fixed

- Update the dependency and make secure from dependency security risk

## [2.1.0] - 2021-06-18

### Added
- Circle Ci Build, Linting, Prettier, Code-Coverage
- Added the required guidelines for library development and maintenance
- Couple of dev-dependency for linting and code coverage purpose

### Fixed
- Minor bugfix to handle the undefined scenario of nested json object
- Update the dependency and make secure from dependency security risk

### Updated
- Testcase to cover 100% test coverage
- Readme document with branding badges

## [2.2.0] - 2021-06-19

### Added
- Added the typescript support
- Added the sanitize option replaceBy to replace the selector

### Updated
- Readme document and package.json with above new changes