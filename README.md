<h1 align="center">Helpful Human Applicant Interview Challenge Submission</h1>
<h3 align="center">o͡͡͡╮░ O ◡ O ░╭o͡͡͡</h3>

## Updates based on Helpful Human feedback
- Transitioned to CSS Flexbox in order to more accurately adhere to the designs (note: the app is no longer responsive to make sure it's closer to the design specs)
- Current page number is now differentiated
- Elements not in the designs have been removed (specifically 'All Colors' option and color names)
- Search bar is functional for both hex codes and color families (error handling would be a future improvement)
- Consolidated actions and reducer
- Reinstalled dependencies and devDependencies based on when they are needed
- Getting started guide has been added to documentation

## Core Goals
- Replicate design
  - [x] [Font](./FONT.md)
  - [x] Styles
  - [x] Iconography
- Replicate functionality
  - [x] Create a database of colors (minimum 100) - _Colors are from the list of [X11 Color Names](https://en.wikipedia.org/wiki/X11_color_names)_
  - [x] Paginate your data to show a certain number of swatches at a time
  - [x] Display both the color swatch and the label of the color
  - [x] Ability to select random color and modify view accordingly
  - [x] Clicking swatch changes to color detail view

## Stretch Goals
- Design
  - Make it responsive
- Functionality
  - Generate color list from a script

## Bonus Stretch Goals
- Design
  - Include interaction design
  - Add tints/shades in detail view 

- Functionality
  - [x] Add search functionality
  - Color generation script guarantees same colors and order
  - [x] Group by color (Make sidebar menu functional)

- Data
  - Fetch data with GraphQL

## Getting Started
1. To install this application, downloaded the files from this repo by running `git clone` or by forking the repo and then cloning it
2. `cd` to the repository and run `npm i`
3. Create a `.env` file and make sure your file is pointing to a Mongo URI using `MONGODB_URI` as an environment variable. Example: ` MONGODB_URI='mongodb://localhost/hh-challenge`
4. Use the `npm run dev` script  to run the application

## Future Enhancements
- More robust testing
- Error handling
- Fully responsive design

## App Components
```
<App />
  <Provider />
    <BrowserRouter />
      <NavBar />
      <SideBar />
        <ListView />
          <ListItem />
        <DetailView />
          <DetailItem />
          <DetailListItem />
```