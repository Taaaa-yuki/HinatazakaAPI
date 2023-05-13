# HinatazakaAPI

<img src="https://img.shields.io/badge/JavaScript-%3E%3D%20ES6-yellow?logo=javascript"><img src="https://img.shields.io/badge/Express-v4.18.2-green?logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/Node.js-v16.13.0-green?logo=node.js&logoColor=white"> <img src="https://img.shields.io/github/commit-activity/m/Taaaa-yuki/HinatazakaAPI?logo=github"> <img src="https://img.shields.io/github/repo-size/Taaaa-yuki/HinatazakaAPI?logo=github">

This is a Node.js API server that provides information about Hinatazaka46 members.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Taaaa-yuki/HinatazakaAPI
```

2. Change into the project directory:

```bash
cd HinatazakaAPI
```

## Usage

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

3. Access the API at <http://localhost:3000/members>:

```bash
curl -s "http://localhost:3000/members?id=2" | jq .
```

4. Response example:

```json
{
    "id": "2",
    "name": "潮 紗理菜",
    "birthdate": "1997年12月26日",
    "bloodType": "O",
    "height": "157",
    "birthplace": "神奈川県",
    "photoUrl": "https://cdn.hinatazaka46.com/images/14/2c5/84228699afa9e410588e33d76d4e2/1000_1000_102400.jpg"
}
```

## Endpoints

The available query parameters for the /members endpoint are:

- id: filter members by ID
- name: filter members by name
- birthdate: filter members by birthdate
- bloodType: filter members by blood type
- height: filter members by height
- birthplace: filter members by birthplace
- photoUrl: filter members by photo URL

## Dependencies

[node.js](https://nodejs.org/en/)  
[Express](https://expressjs.com/)
