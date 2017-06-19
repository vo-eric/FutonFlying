Component Hierarchy
-----------------------------------------------------------------------

### AuthFormContainer
  * Sign Up
  * Log In

### DashboardContainer/HomeContainer
  * Header
  * User Details
  * Trips Index
  * Guests Index
  * Searchbar

### Header (persistent throughout all pages if signed in & not in dashboard)
  * Logo
  * Current User Photo
  * Messages
  * Search (not available if in dashboard)

### Search
  * Hosts Index
    * Hosts Index Item (showing X random hosts)
  * Visitors Index
    * Visitors Index Item (showing X random visitors without a host)
  * Booking Container
  * Map Container
  * Information Container

### UsersContainer
  * Booking Container
    * Date Component (if they are accepting guests)
  * Message Container

### BookingContainer
  * Date Component
  * Traveler Container

### HostingContainer
  * Date Component
  * Host Container

Routes
-----------------------------------------------------------------------

        Path                   |             Component
-------------------------------|--------------------------------------
"/sign-up"                     |           "AuthFormContainer"
"/log-in"                      |          "AuthFormContainer"
"/futons/:futonId"             |           "HostsContainer"
"/futons/:futonId/booking"     |           "BookingContainer"
"/search"                      |           "Search"
"/home"                        |           "DashboardContainer"
