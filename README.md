# Github Repo Explorer Project

## Running the application

1. In this directory run `yarn start`
2. Navigate to `localhost:3000` and enjoy


## Observations

1. I used `create-react-app` in order to optimize the local dev experience quickly. It added way more packages then I actually used, long term enhancements would include cleaning the `package.json` to only include necessary packages. **Almost all of the code I wrote for this project is in the `components/` directory**

2. I purposely chose not to use a third party component library in order to get some more component writing practice in. There's likely some UX shortcomings because of it (cross browser experience, edge cases with different screen widths, general look + feel)

3. I used regular React/Javascript out of comfort, but acknowledge Typescript would've been super helpful with all the different types of Objects being passed around the component.

4. third party libraries I added

    - `axios`: convenience for having API calls returned as promises

    - `styled-components`: Help me keep relevant CSS close to the components they're relevant to.

1. Some of my functionality was limited by what's available in the github API (i.e. not adding sort parameters in the url). I chose to go with just sorting the intially returned objects in order to focus on other parts of the project.

5. Things I'd do with more time
    - Better error/state handling
    - Tooltips/help text for relevant symbols (i.e. emojis next to the repo stats)
    - Consistend documentation between components
    - Expose more relevant commit and repo information
    - More accessibility tags
    - Tests
