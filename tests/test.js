const baseURL = "http://127.0.0.1:8000";

const tasks = {
    "/signup": [
        {
            "username": "",
            "password": ""
        },
        {
            "username": "admin",
            "password": ""
        },
        {
            "username": "",
            "password": "admin"
        },
        {
            "username": "admin",
            "password": "admin"
        },
    ],
    "/login": [
        {
            "username": "",
            "password": ""
        },
        {
            "username": "admin",
            "password": ""
        },
        {
            "username": "",
            "password": "admin"
        },
        {
            "username": "admin",
            "password": "admin"
        },
    ]
};

let html = '';

for (let path in tasks) {
    const url = `${baseURL}${path}`;

    
    console.log('\x1b[35m%s\x1b[0m', `>>>>>>>>>>>>>>>>>>>>>>>> ${path} <<<<<<<<<<<<<<<<<<<<<<<<\n\n`);

    for (let body of tasks[path]) {
        const headers = { 'Content-Type': 'application/json' };
        const method = "POST";

        console.log('\x1b[36m%s\x1b[0m', ">>>>>>>>>>>> Request <<<<<<<<<<<<");
        console.log(`URL: ${url}`);
        console.log(`Method: ${method}`);
        console.log(`Headers:\n`, headers);
        console.log("Body:\n", body);

        let response = await fetch(
            new URL(url), {
            method: method,
            headers: headers,
            body: JSON.stringify(body)
        });
        let resultBody = await response.json();

        console.log('\x1b[36m%s\x1b[0m', ">>>>>>>>>>>> Response <<<<<<<<<<<<");
        console.log(`Status: ${response.status}`);
        console.log("Body:\n", resultBody);

        console.log("\n\n");
    }
}

