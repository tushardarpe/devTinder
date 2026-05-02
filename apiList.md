# Dev Tinder Apis

## authRouter
- POST /signup
- POST /login
- POST /logout
- POST /forgotPassword


## profileRouter
- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/changePassword


## connectionRequestRouter
- POST /request/send/interested/:userId
- POST /request/send/ignore/:userId
- POST /request/review/accepted/:requestId
- POST /request/review/rejected/:requestId



## userRouter
- GET /user/connections
- GET /user/requests
- GET /user/feed - gets you the profiles of other users on platform

STATUS (ignore, interested, accepted, rejected)
