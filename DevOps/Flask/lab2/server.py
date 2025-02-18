from flask import Flask, make_response, request

app = Flask(__name__)

data = [
    {
        "id": "3b58aade-8415-49dd-88db-8d7bce14932a",
        "first_name": "Tanya",
        "last_name": "Slad",
        "graduation_year": 1996,
        "address": "043 Heath Hill",
        "city": "Dayton",
        "zip": "45426",
        "country": "United States",
        "avatar": "http://dummyimage.com/139x100.png/cc0000/ffffff",
    },
    {
        "id": "d64efd92-ca8e-40da-b234-47e6403eb167",
        "first_name": "Ferdy",
        "last_name": "Garrow",
        "graduation_year": 1970,
        "address": "10 Wayridge Terrace",
        "city": "North Little Rock",
        "zip": "72199",
        "country": "United States",
        "avatar": "http://dummyimage.com/148x100.png/dddddd/000000",
    },
    {
        "id": "66c09925-589a-43b6-9a5d-d1601cf53287",
        "first_name": "Lilla",
        "last_name": "Aupol",
        "graduation_year": 1985,
        "address": "637 Carey Pass",
        "city": "Gainesville",
        "zip": "32627",
        "country": "United States",
        "avatar": "http://dummyimage.com/174x100.png/ff4444/ffffff",
    },
    {
        "id": "0dd63e57-0b5f-44bc-94ae-5c1b4947cb49",
        "first_name": "Abdel",
        "last_name": "Duke",
        "graduation_year": 1995,
        "address": "2 Lake View Point",
        "city": "Shreveport",
        "zip": "71105",
        "country": "United States",
        "avatar": "http://dummyimage.com/145x100.png/dddddd/000000",
    },
    {
        "id": "a3d8adba-4c20-495f-b4c4-f7de8b9cfb15",
        "first_name": "Corby",
        "last_name": "Tettley",
        "graduation_year": 1984,
        "address": "90329 Amoth Drive",
        "city": "Boulder",
        "zip": "80305",
        "country": "United States",
        "avatar": "http://dummyimage.com/198x100.png/cc0000/ffffff",
    },
]


@app.route("/")
def index():
    return "hello world!"


@app.route("/no_content")
def no_content():
    return {"message": "no content found"}, 204


@app.route("/exp")
def exp():
    resp = make_response({"message": "hello world"})
    resp.status_code = 200
    return resp


@app.route("/name_search/")
@app.route("/name_search/<string:q>")
def get_person(q=None):
    if not (q):
        return {"message": "Invalid Input"}, 422

    for person in data:
        if person["first_name"] == q:
            return person, 200

    return {"message": "Person not found"}, 404


@app.route("/count")
def count():
    return {"count": len(data)}


@app.route("/person/", methods=["GET", "DELETE"])
@app.route("/person/<string:id>", methods=["GET", "DELETE"])
def person_id(id=None):
    if not id:
        return {"message": "invalid input"}, 422

    for person in data:
        if person["id"] == id:
            if request.method == "GET":
                return person
            else:
                data.remove(person)
                return {}, 200

    return {"message": "person not found"}, 404


@app.route("/person", methods=["POST"])
def add_by_uuid():
    if not request.json:
        return {"message": "invalid input"}, 422

    data.append(request.json)
    return {"message": f"{request.json['first_name']} added successfully"}


@app.errorhandler(404)
def api_not_found(e):
    return {"message": "404 not found"}, 404
