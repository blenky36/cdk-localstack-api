export const handler = async () => {
    const response = {
        "statusCode": 200,
        "body": "Hello from TS Lambda!",
    }
    console.log("TS", response)
    return response
}