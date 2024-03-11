# Lightblocks Website

The lightblocks website is a NextJS v14 project setup for static site generation.

Amplify needs to know whether Next is in SSG or SSR mode. Having `&& next export` in build script and a seperate "real" build script means Amplify should initialize a new app in the correct mode. If the mode needs to be changed manually you can follow the below instructions

## Amplify Config

To switch framework from Next SSR to SSG (taken from [here](https://github.com/aws-amplify/amplify-hosting/blob/main/FAQ.md#convert-an-ssr-app-to-ssg)) run both of these commands replacing region and app id as appropriate.

```sh
aws amplify update-app --app-id <APP_ID> --platform WEB --region <REGION>


aws amplify update-branch --app-id <APP_ID> --branch-name <BRANCH_NAME> --framework 'Next.js - SSG' --region <REGION>
```

### NextJS v14 Support

Next 14 needs node version 18.17 or above. `Amazon Linux:2023` is the image to use and this should be set as the default when a new Amplify app is created.

## Open Roles Data
