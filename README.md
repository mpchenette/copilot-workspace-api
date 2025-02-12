# copilot-workspace-api

## Description
This API allows users to retrieve a set of words based on given criteria such as word length, starting letter, etc. It is designed to be simple and easy to use, providing a flexible way to filter words according to user preferences.

## How to Use the API
1. Clone the repository:
   ```
   git clone https://github.com/mpchenette/copilot-workspace-api.git
   ```
2. Navigate to the project directory:
   ```
   cd copilot-workspace-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the server:
   ```
   npm start
   ```
5. Make API requests to the server using the following endpoint:
   ```
   GET /api/words
   ```
   You can provide query parameters to filter the words based on your criteria.

## Examples

### Example 1: Get words with a length of 5
Request:
```
GET /api/words?length=5
```
Response:
```json
{
  "words": ["apple", "grape", "peach"]
}
```

### Example 2: Get words starting with the letter 'b'
Request:
```
GET /api/words?startsWith=b
```
Response:
```json
{
  "words": ["banana", "berry", "blueberry"]
}
```

### Example 3: Get words with a length of 4 and starting with the letter 'c'
Request:
```
GET /api/words?length=4&startsWith=c
```
Response:
```json
{
  "words": ["cake", "corn"]
}
```
