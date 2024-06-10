# camper_rent
Camper rental service

run ``npm run dev``


"/" - Home page with a general description of the services provided by the company
"/favorites" - Page with advertisements that have been added by the user to favorites by hearth click
If a user navigates to a route that does not exist, they should be redirected to the home page.

When the "Show more" button is clicked, a modal window should open with detailed information about the camper.

The modal window should close when the user clicks on the close button (represented by an "x"), clicks on the backdrop, or presses the Esc key.

The modal window should contain information about the camper's features and reviews.

The modal window should also include a form for booking the camper. The fields "name," "email," and "booking date" are mandatory. (In case of invalid data, the form should not be submitted; in the case of valid data, the page should refresh.)
