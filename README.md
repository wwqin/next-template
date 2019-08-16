## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br>
Open [http://localhost:8086](http://localhost:8086) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn start`

Runs the app.<br>
Open [http://localhost:8086](http://localhost:8086) to view it in the browser.

### `yarn build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

## refactor example
```
// use state in stored in redux 
// code in the past：name: state.getIn(["competition", "name"])
// now:
const mapStateToProps = (state) =>{
	return {
		name: state.competition.competitionName
	}
}
```
```
// reducer.js
// change redux state when its immutable
//state.set("competitionName", action.name)
// remove fromJS
const defaultState = {
  competitionName:''
};

export default (state = defaultState, action) => {
  switch(action.type){
    case constants.COMPETITION_CHANGE_NAME:
      return {...state,'competitionName':action.name}
    default:
      return state;
  }
}
```
Here's come the important part, we use redux-persist (redux state can't persist when navigate using next/router) 
you need to put those data needed to persist into whitelist, so that it can persist
```
// configuration in root reducer.js
const competitionpersistConfig = {
    key: 'competition',
    storage,
    whitelist: ['competitionName'] // place to select which state you want to persist
} 
const reducer = combineReducers({
    competition: persistReducer(competitionpersistConfig, competitionReducer),
});
```
