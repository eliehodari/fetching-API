async function fetchAndDisplayUsers() {
    const userList = document.getElementById("userDetails");

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        data.forEach(element => {
            const listData = document.createElement('li');
            listData.textContent = `${element.name} - ${element.email} - ${element.address.city} - ${element.company.name} - ${element.phone}`;
            userList.appendChild(listData);
        });
    }  

    catch (error) {
        userList.textContent = `the error we are facing is ${error}`
    }
}

fetchAndDisplayUsers();
