import app from './app';

const port = 4001;

app.listen(port, () => {
  console.log();
  console.log(`Porta: ${port}`);
  console.log(`http://localhost:${port}`);
});
