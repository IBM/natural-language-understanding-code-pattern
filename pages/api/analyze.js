export default function handle(req, res) {
  console.log(req.body) // The request body
  console.log(req.query) // The url querystring
  res.json({ message: 'Hello World'})
}