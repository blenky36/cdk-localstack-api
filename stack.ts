import { App, Stack } from 'aws-cdk-lib'
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway'
import { Runtime } from 'aws-cdk-lib/aws-lambda'
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'

const serverlessApiStack = (app: App) => {
    const stack = new Stack(app, 'LambdaApiHelloWorldStack', { stackName: "LambdaApiHelloWorldStack" })

    const lambdaFunction = new NodejsFunction(stack, 'HelloWorldFunction', {
        entry: 'helloWorld.ts',
        runtime: Runtime.NODEJS_16_X,
    })

    const api = new RestApi(stack, "RestApi", {});

    const helloWorldIntegration = new LambdaIntegration(lambdaFunction, {
        requestTemplates: { "application/json": '{ "statusCode": "200" }' }
    });

    api.root.addMethod("GET", helloWorldIntegration);
}

const app = new App()
serverlessApiStack(app)