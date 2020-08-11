## Demo

[Live version](https://nasa-apod-stacey.netlify.app/)

![](/src/assets/demo.gif)

## Project Set Up

1. Clone the app

```

git clone git@github.com:StaceyAlexMiller90/Neurolytics_FE.git

```

2. cd into project

```

cd front-end-assignment

```

3. install dependencies

```

npm install

```

4. This project requires a key from the NASA API saved in a .env file

```

REACT_APP_API_KEY

```

5. Start development server

```

npm run start

```

### Features

- On page load, the last month of the APOD loads sorted by newest first
- The pictures are styled as per the screenshot provided
- The styling is responsive and styled mobile first
- There are two select components at the top of the app. One to filter the images by date range and one to change the sorting by date
- Site is accessible, keyboard focusable and has been tested using a screen reader

### Libraries Used

- moment.js for date formatting
