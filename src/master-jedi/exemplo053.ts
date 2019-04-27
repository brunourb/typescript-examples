//  Promise syntax
//  ==============

function fnDelayedPromise(resolve: () => void, reject: () => void) {
    function afterTimeout() {
        resolve();
    }

    setTimeout(afterTimeout, 2000);
}

function delayedResponsePromise(): Promise<void> {
    return new Promise<void>(
        fnDelayedPromise
    );
}

function delayedPromise(): Promise<void> {
    return new Promise<void>
        (
            (resolve: () => void,
                reject: () => void
            ) => {
                function afterTimeout() {
                    resolve();
                }

                setTimeout(afterTimeout, 1000);
            }
        );
}

function callDelayedPromise() {
    console.log(`calling delayedPromise`);
    delayedPromise().then(
        () => { console.log(`delayedPromise.then()`) }
    );
}

callDelayedPromise();

function errorPromise(): Promise<void> {
    return new Promise<void>
        (
            (resolve: () => void,
                reject: () => void
            ) => {
                reject();
            }
        );
}

function callErrorPromise() {
    console.log(`calling errorPromise`);
    errorPromise().then(
        () => { console.log(`no error.`) }
    ).catch(
        () => { console.log(`an error occurred`) }
    );
}

callErrorPromise();

function invokeAsync(success: Function, error: Function) {

}

function standardCallback() {
    function afterCallbackSuccess() {
        // execute this code
    }
    function afterCallbackError() {
        // execute on error
    }
    // invoke async function
    invokeAsync(afterCallbackSuccess, afterCallbackError);
}

function usingPromises() {
    // invoke async function
    delayedPromise().then(
        () => {
            // execute on success
        }
    ).catch(
        () => {
            // execute on error
        }
    );
}


function delayedPromiseWithParam(): Promise<string> {
    return new Promise<string>(
        (
            resolve: (str: string) => void,
            reject: (str: string) => void
        ) => {

            function afterWait() {
                resolve("resolved_within_promise");
            }
            setTimeout(afterWait, 2000);
        }
    );
}

function callPromiseWithParam() {
    console.log(`calling delayedPromiseWithParam`);
    delayedPromiseWithParam().then((message: string) => {
        console.log(`Promise.then() returned ${message} `);
    });
}

callPromiseWithParam();


interface IPromiseMessage {
    message: string;
    id: number;
}

function promiseWithInterface(): Promise<IPromiseMessage> {
    return new Promise<IPromiseMessage>(
        (
            resolve: (message: IPromiseMessage) => void,
            reject: (message: IPromiseMessage) => void
        ) => {
            resolve({ message: "test", id: 1 });
        }
    );
}
