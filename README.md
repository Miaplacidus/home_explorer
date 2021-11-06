Lots / Homes Explorer

# Prompt

For this project, we'll be building an application with two pages. You are welcome to use either React or Vue to complete this project, and you'll need to use a global store (Redux/Vuex) as well as a router library (React Router/Vue Router).


The project setup is completely up to you, though we'd be glad to see best practice project structuring. Anything not specified in the prompt is optional, though minor changes/additions are welcome! Don't worry about styling for this exercise.


UI Designs: https://www.figma.com/file/4PMh7ibevovxeqh2oca7wp/Take-home-Project-Lots-Homes-Explorer?node-id=0%3A1

Mock API script: https://www.notion.so/buildatmos/Homes-Lots-Explorer-Mock-API-90ae9bb04b88408aa5024520e481b7da


We want to provide users with a way to browse home plans and lots. In the Figma board, you'll notice there are two pages attached to the routes `/homes` and `/lots` respectively. We'll be implementing these two pages.


Beyond homes and lots, there are also "combinations" - these are tuples of lot and home plan IDs that indicate those entities are "compatible", ie. that home can be built on that lot.


## Mock API and Data

We've provided a mock API that will provide sample data via `API.getLots()`, `API.getHomePlans()`, and `API.getCombinations()`.


We'd like to see the lots, home plans, and combinations stored in your global store (Redux/Vuex).

## Basic Layout

Both pages will contain a very simple sidebar with the active page highlighted.


The individual pages are similar, with a grid of cards that display a home's/lot's associated image and information as well as a save button (more on this below). When a card is clicked (outside of the heart), a modal should display over the current page with a list of the associated compatible lots/home plans cards.


## Saving

When the heart is clicked on a home plan or lot, we'd like to mark that home plan/lot as "saved". Clicking the heart again should unsave the home plan or lot. Don't worry about persisting saves; it's ok if they disappear on refresh.


Additionally, there's a button "Saved Homes"/"Saved Lots" on each page that should filter the grid to only display saved items.


## Bonus: Query Parameters

If you have time, we want to allow users to link the home plan or lot they're currently viewing to their friends, so when a modal is active the selected entity's ID is placed as a query parameter on the route. This parameter should appear/disappear reactively with the modal. When a page is loaded with a query parameter specified, it should display the modal of the specified home plan/lot.

# Goals

Here are some things we're looking for:

    Clean and easy-to-follow project structure
    Reuse of components where possible
    Best practice utilization of global store and router libraries
    Good state management within and across pages/components
    Understandable and clean logic within pages/components


# How to submit

Upload your completed project to your GitHub, and then paste a link to the repository below in the form along with any comments you have about your solution.


