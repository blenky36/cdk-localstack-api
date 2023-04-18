import { App, Stack } from 'aws-cdk-lib'
import { LambdaRestApi } from 'aws-cdk-lib/aws-apigateway'
import { Code, Runtime } from 'aws-cdk-lib/aws-lambda'
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'
import { Function } from 'aws-cdk-lib/aws-lambda'

const serverlessApiStack = (app: App) => {
    const stack = new Stack(app, 'LambdaApiHelloWorld', { stackName: "LambdaApiHelloWorld" })

    const tsFunction = new NodejsFunction(stack, 'HelloWorldTSFunction', {
        entry: 'helloWorld.ts',
        runtime: Runtime.NODEJS_16_X,
    })

    const jsFunction = new Function(stack, 'HelloWorldJSFunction', {
        runtime: Runtime.NODEJS_16_X,
        handler: "index.handler",
        code: Code.fromAsset("./helloWorld")
    })

    new LambdaRestApi(stack, 'LambdaHelloWorldTSAPI', { handler: tsFunction })
    new LambdaRestApi(stack, 'LambdaHelloWorlJSAPI', { handler: jsFunction })
}

const app = new App()
serverlessApiStack(app)