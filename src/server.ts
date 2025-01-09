import app from './app';

const port = process.env.PORT ?? 1234;

// https://chatgpt.com/c/677e0455-1314-8005-b960-6c70c795ad00

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
