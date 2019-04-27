//  Async await
//  ===========


function awaitDelayed(): Promise<void> {
    return new Promise<void>(
        (resolve: () => void,
            reject: () => void) => {
            function afterWait() {
                console.log(`calling resolve`);
                resolve();
            }
            setTimeout(afterWait, 1000);
        }
    );
}

async function callAwaitDelayed() {
    console.log(`call awaitDelayed`);
    await awaitDelayed();
    console.log(`after awaitDelayed`);
}

callAwaitDelayed();