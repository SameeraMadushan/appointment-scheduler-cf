
## Getting Started with CareerFoundry Scheduler

## Setting up the project

- Installing dependancy : `npm install`
- Create `.env` file in the root directory and copy content from `.env.example` file
and set API endpoint as `NEXT_PUBLIC_API_URL=http://localhost:3000/api` for development environment

- Starting the dev server: `npm run dev`
- Open: `http:/localhost:3000`


## Workflow of the application
- Home page contains a simle form. The student can enter their name and proceed to scheduling page.
- Entering the name is mandatory
- Schedule page will display all the information related to mentor's agenda.
- There will be a calendar with all the available dates.
- Disable dates are the dates that the mentor is not available.
- When the student clicks on a date, all the available time slots will be display in the bottom of the calendar.
- If the time slot is available, it will display with a green dot and selection button will be enabled.
- If the time slot is not available, it will display with a red dot and selection button will be disabled with the label "Booked"
- Once the student select a time slot, Submission form will be appear on the left side section of the page.
- Meeting date, time will be displayed along with a text area to enter the reason for the meeting.
- Without entering any reason, the student cannot proceed next.
- After entering a reason and press next, preview will be displayed in a modal.
- If the student cancel that modal, nothing will happen.
- If the student confirm the meeting, It will be saved in the database and that time slot will not be no longer available.


## Technologies used

1. **NextJS** - The project is built with NextJS framework. NextJS provides serverside rendering, API routes, and many more features.

2. **Context** - React provides powerfull context API to keep our state globally.

3. **React-form-hook** - Is a performant, flexible and extensible forms with easy-to-use validation comparing to other libraries.(eg: formik) Specially react-hook-form has zero dependencies. It is built with power of react.

4. **Typescript** - TypeScript offers many advantages over JavaScript: Optional static typing. JavaScript is a dynamically typed language, which means that types are checked, and data type errors are only detected at runtime. This can be very dangerous and can create errors during production.

5. **Axios** - Axios is a promised-based HTTP client for JavaScript. It has the ability to make HTTP requests from the browser and handle the transformation of request and response data.

6. **Tailwind css** -  It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.


## Technical overview

- NextJS API route is used to get agenda data from the tird party API
- Another API route is used to save appointments(meetings) in the database
- Temporary `json` files used as a database. It's located on `public/db` directory
- Each appointment will be saved as a separate `json` file
- Context is used to keep state globally(user info and previous appointments)
- Serverside rendering is used for getting previous appointment data and then passed through the context

### Dependancies
- `react-hook-form` library is used to handle forms
- `date-fns` library is used to format dates
- `@heroicons/react` icon library is used as a icon pack
- `react-calendar` library is used to display calendar
- `react-pure-modal` library is used to create Modals


## Project structure

```javascript
/public/db        // temporary database
/pages            // all the route pages
/src              // source 
/src/components   // all the re usable components
/src/hooks        // custom hooks
/src/services     // API client, endpoints, and related service calls
/src/types        // re-usable types for Typescript
/src/utils        // utility functions and constants
/src/vluews       // page views and it's related components
/.env.example     // sample env confgs
```

## API Requirement for backend Devs

### Scheduleing an appointment
```javascript
method: POST
endpoint = "/api/appointment"
body = {
  studentName: string;
  mentorName: string;
  timeslot: Date;
  reason: string;
}
```

## Unit testing and e2e testing
### Running e2e test with Cypress
Clear `.json` files inside `pbublic/db` folder. If appointments exist scheduling an appointment will be failed.

Running tests
```
npm run cypress
```

This will open cypress window. Select e2e testing from the first window.
Then select `spec.cy.ts` to run the test cases.

### Running unit tests
Jest is being used to implement the unit tests.

Running tests:
```
npm run test
```
This command will run the jest unit tests in verbose mode.