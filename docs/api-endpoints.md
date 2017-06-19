HTML API
******----------------------------------------------------------------

###Root
  * GET /

JSON API
----------------------------------------------------------------------

###Users
  * POST /api/users
  * PATCH /api/users

###Session
  * POST /api/session
  * DELETE /api/session

###Hostings
  * GET /api/hostings
  * POST /api/hostings
  * GET /api/hostings/:id
  * DELETE /api/hostings/:id
  * PATCH /api/hostings/:id

###Bookings
  * GET /api/bookings
  * POST /api/bookings
  * GET /api/bookings/:id
  * DELETE /api/bookings/:id

###Reviews
  * GET /api/hosts/:host_id/reviews
  * POST /api/hosts/:host_id/reviews
  * DELETE /api/hosts/:host_id/reviews/:review_id

###Profile
  * POST /api/profile
  * GET /api/profile/:id
  * PATCH /api/profile/:id
  * DELETE /api/profile/:id
