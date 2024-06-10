# Camper rental service

run ``npm run dev``
port: 8000

When making a GET request, **RTK Query** was used, while **Redux Toolkit** was utilized for storage management.


"**/**" - _Home page with a general description of the services provided by the company_

"**/favorites**" - _Page with advertisements that have been added by the user to favorites by hearth click_

If a user navigates to a route that does not exist, they should be redirected to the home page.

When the "Show more" button is clicked, a modal window should open with detailed information about the camper.

The modal window should close when the user clicks on the close button, clicks on the backdrop, or presses the Esc key.

The modal window should contain information about the camper's features and reviews.

The modal window should also include a form for booking the camper. The fields "name," "email," and "booking date" are mandatory. (In case of invalid data, the form should not be submitted; in the case of valid data, the page should refresh.)
