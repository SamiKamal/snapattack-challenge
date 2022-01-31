# SnapAttack Coding Challenge
__*Estimated completion time: 1 to 2 hours*__

# Instructions
This app could be better. Some features are lacking and our QA found some bugs. Address the tasks listed. Leverage components, types, and packages that may already be already available in the project to assist you. Try to follow the conventions already in place. Address any console errors or warnings. If existing markup needs changing, update where necessary to use our new design system. For brownie points, feel free to complete one or more optional tasks.

## Tasks
1. Create a new page called person
1. Person Page should do the following
    - Set the title to `Snap - Person`
    - Contains a [basic card component](https://mui.com/components/cards/) having the following data `full name, street, city, state, zip, email, phone, thumbnail`
    - Pull data from `https://randomuser.me/api/`. The schema is located at `/src/util/type/Person`
    - How you style the card is up to you
1. Update the link in `AppBar.tsx` to point to the new Person page and change the verbiage from 'Learn React' to 'View Person'. This application use [react router dom](https://v5.reactrouter.com/web/guides/quick-start) for navigation.
1. Meta.tsx has a bug. There is a performance issue that needs fixing.

## Optional Task
1. The index page has a `metasyntactic: c` section. Update Meta.tsx useMemo to correctly map a list of metasyntactic variable names. e.g. `foo bar` etc... The raw data is stored as an array of charcodes inter-nested. @see `src/service/meta.tsx`. There is an existing unit test in Meta.test.tsx
1. Create a new route at `/github`. The github page should successfully fetch `https://github.com` and render its status as simple verbiage: `200 | ok` in a div. Link to the new page from the AppBar. Check the [Create React App docs](https://create-react-app.dev/docs/getting-started) backend-end integration for help setting this up.

# Get started
1) Fork the repo
1) Set your forked repo to private
1) run `yarn install`
1) run `yarn start`

# Submission
Provide access to your repo for the following people: `jkaldenbach@snapattack.com` and `jjohnson@snapattack.com`
