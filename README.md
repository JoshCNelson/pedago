## Starting the App
- `yarn install`
- `yarn start`

## Assumptions and Thought Process
- I opted to not over-generalize the event modal. If this were a part of a larger app I think there would be value in abstracting out the modal, header, and footer to be generic and not as tied to the details of the events themselves. However, currently those are our only business use-cases and I have seen unecessary pain caused from "optimizing" components before there is an actual need or advantage to generalizing.

- I tried to stay as true to the design as possible. There are some small sections where it is my best approximation (the gradient on the header being the most obvious example).

- I assumed the request for data was not to happen until the modal was opened. I could have pre-loaded the data before entering the modal but I deemed that to be an over-optimization for the current use case and doing so could create unecessary pain points later in development.