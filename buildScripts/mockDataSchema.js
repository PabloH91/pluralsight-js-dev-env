export const schema = {
    "type": "object",
    "properties": {
        "users": {
            "type": "array",
            "minItems": 3,
            "maxItems": 5,
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number",
                        "unique": true,
                        "minimum": 1
                    },
                    "firstName": {
                        "type": "string",
                        "x-faker": "name.firstName"
                    },
                    "lastName": {
                        "type": "string",
                        "x-faker": "name.lastName"
                    },
                    "email": {
                        "type": "string",
                        "x-faker": "internet.email"
                    }
                },
                "required": ["id", "firstName", "lastName", "email"]
            }
        }
    },
    "required": ["users"]
};
