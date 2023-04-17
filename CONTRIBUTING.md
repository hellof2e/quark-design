# Developer Contribution Guide

We are very welcome to the community developers to make contributions to Quark Design. Before submitting a contribution, please take some time to read the following content to ensure that the contribution is in line with the specifications and can help the community.

<p>
  <span>English |</span>
  <a href="https://github.com/hellof2e/quark-design/blob/main/CONTRIBUTING.zh-CN.md">简体中文</a>
</p>

## Development configuration

- Environment requirements: `node >= 16.0.0`, `yarn >= 1.22`

## Start

```
# For the first development, you need to install dependencies and perform link operations
yarn run init (contains yarn && yarn run link && cd example && yarn)

# Run the docs site
yarn run dev
```

## Frequently asked questions

How to clear the cache of the sub-project?

```
yarn run clean
```

Garbled characters when running yarn run link on a Windows computer?

```
Execute the yarn run link command in git bash
```

---------

## The following content, core developers read

#### Command description (For maintainer release)

STEP 1:
```bash
// Publish the last digit version number of all sub-packages, such as 0.0.1 -> 0.0.2,
yarn run release:patch

// Publish the middle digit version number of all sub-packages, such as 0.0.1 -> 0.1.0,
yarn run release:minor

// Publish the first digit version number of all sub-packages, such as 0.0.1 -> 1.0.0,
yarn run release:major
```

STEP 2:

Create tag
```
git tag // First see if the latest tag is generated
git push origin --tags
```

Then github update [release](https://github.com/hellof2e/quark-design/releases/new)

