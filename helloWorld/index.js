exports.handler = async (event) => {
    const response = {
        "statusCode": 200,
        "headers": {
            "my_header": "my_value"
        },
        "body": "Hello from JS Lambda!",
    };
    console.log("JS", response)
    return response;
};
