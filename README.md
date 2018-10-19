# short

dead simple link shortener

## usage

### api: creating a link

send a post request to `/create` like this:

```json
{
	"target": "https://tassu.me",
	"secret": "(specified in backend/src/config.ts)",
	"slug": "abc"
}
```

### using a link

just send a get request to `/(slug)`

### sharex

soonTM
