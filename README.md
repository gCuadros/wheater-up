# Turborepo starter

This is an official npm starter turborepo.

## What's inside?

This turborepo uses [npm](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) weather app
- `ui`: a stub React component library shared by applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `utils`: a stub React utils library shared by applications
- `types`: a stub React types library shared by applications
- `web-tests`: a stub React component library shared by applications

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Install

The first step, necessary to install all libraries

```
cd wheater-up
npm run install
```

### Build

To build all apps and packages, run the following command:

```
cd wheater-up
npm run build
```

### Web Develop

To only develop web app, run the following command:

```
cd wheater-up
npm run dev:web
```

### Develop

To develop all apps and packages, run the following command:

```
cd wheater-up
npm run dev
```

### end2end Tests

To execute tests, run the following command:

```
cd wheater-up
npm run test:dev
```

### Deployment

Currently, the develop branch is deployed through Vercel at the following [URL](https://wheater-up-web-git-develop-devgonzalo.vercel.app)

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
