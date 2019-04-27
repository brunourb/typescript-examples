//  Async errors
//  ============

function awaitError(): Promise<string> {
    return new Promise<string>(
        (resolve: (message: string) => void,
            reject: (error: string) => void) => {
            function afterWait() {
                console.log(`calling reject`);
                reject("an error occurred");
            }
            setTimeout(afterWait, 1000);
        }
    );
}

async function callAwaitError() {
    console.log(`call awaitError`);
    try {
        await awaitError();
    } catch (error) {
        console.log(`error returned : ${error}`);
    }
    console.log(`after awaitDelayed`);
}

callAwaitError();


function simplePromises() {
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
    // code here does NOT wait for async call
}

async function usingAsyncSyntax() {
    try {
        await delayedPromise();
        // execute on success
    } catch (error) {
        // execute on error
    }
    // code here waits for async call
}

function asyncWithMessage(): Promise<string> {
    return new Promise<string>(
        (resolve: (message: string) => void,
            reject: (message: string) => void
        ) => {
            function afterWait() {
                resolve("resolve_message");
            }
            setTimeout(afterWait, 1000);
        }
    );
}

async function awaitMessage() {
    console.log(`calling asyncWithMessage`);
    let message: string = await asyncWithMessage();

    console.log(`message returned: ${message}`);
}

awaitMessage();