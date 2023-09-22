import test, { TEST_VARIABLE, createForm, test1 } from "./utilites.js";

document.body.classList=  'p-4'

async function init(){

    console.info('test');

    test('hello from index.js!')
    test1();
    test(JSON.stringify(TEST_VARIABLE))

    const form = createForm();
    document.body.append(form)

}

window.onload = init;