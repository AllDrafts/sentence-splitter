export function debugLog(...args: any[]) {
    // @ts-ignore
    if (typeof process !== "undefined" && process.env.DEBUG !== "sentence-splitter") {
        return;
    }
    console.log("sentence-splitter: ", ...args);
}
