# Dev Tinder Apis

## authRouter
- POST /signup
- POST /login
- POST /logout


## profileRouter
- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/changePassword


## connectionRequestRouter
- POST /request/send/:status/:toUserId(status - interested, ignored)
- POST /request/review/:status/:requestId(status - accepted, rejected)



## userRouter
- GET /user/connections
- GET /user/requests
- GET /user/feed - gets you the profiles of other users on platform

STATUS (ignored, interested, accepted, rejected)
