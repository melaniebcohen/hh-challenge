# Helpful Human Applicant Interview Challenge Submission
<h3 align="center">o͡͡͡╮░ O ◡ O ░╭o͡͡͡</h3>

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
  - [x] Make it responsive - _Note: App is only partially responsive at this point_
- Functionality
  - Generate color list from a script

## Bonus Stretch Goals
- Design
  - Include interaction design
  - Add tints/shades in detail view 

- Functionality
  - Add search functionality
  - Color generation script guarantees same colors and order
  - [x] Group by color (Make sidebar menu functional)

- Data
  - Fetch data with GraphQL

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
