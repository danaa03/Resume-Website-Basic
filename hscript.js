document.addEventListener("DOMContentLoaded", function() {
                //object sent through sessionstorage from other page assigned to variable in this page as a JSON string
                var userData = sessionStorage.getItem("userData");
                //if data receieved under the key userData
                if (userData) {
                    //JSON string is then converted back to a JS object by JSON.parse
                    userData = JSON.parse(userData);
                    console.log("personal details received at index.html!");
                    document.getElementById("detailsn").innerHTML = userData.name;
                    document.getElementById("detailse").innerHTML = userData.email;
                    document.getElementById("detailsa").innerHTML = userData.address;
                    document.getElementById("detailsp").innerHTML = userData.phone;

                    //now clearing sessionStorage:
                    // sessionStorage.removeItem('data to send');

                }
                else {
                    console.log("personal details not received at index.html!");
                    document.getElementById("detailsn").textContent = "not recieved.";
                    document.getElementById("detailse").textContent = "not recieved.";
                    document.getElementById("detailsa").textContent = "not recieved.";
                    document.getElementById("detailsp").textContent = "not recieved.";
                }
                var acData = sessionStorage.getItem("acData");
                //if data receieved under the key acData
                if (acData) {
                    console.log("academics data received at index.html!");
                    const dynamicac = JSON.parse(acData); // Parse the JSON string back into an array

                    //Display the data in a list
                    const formDataList = document.getElementById("formDataList");
                    dynamicac.forEach(value => {
                        const listItem = document.createElement("li"); //we made a js variable for the list item first and then assigned the value to the list item, then appended the item to the variable referencing our display list FormDataList
                        listItem.textContent = value;
                        formDataList.appendChild(listItem);
                    });
                }
                else {
                    console.log("academics data not received at index.html!");
                    var formDataList = document.getElementById("formDataList");
                    var listItem = document.createElement("li");
                        
                    listItem.innerHTML = "Not received.";
                    formDataList.appendChild(listItem);
                }
            
                let prData = sessionStorage.getItem("prData");
                //if data receieved under the key prData
                if (prData) {
                    console.log("projects data received at index.html!");
                    let dynamicpr = JSON.parse(prData); 
                    const FormDataLispr = document.getElementById("formDataListpr");
                    //make a reference to the list first
                    dynamicpr.forEach(value => { //traverse the dynamic array
                        //make a list item, assign it to a js variable
                        let listItem = document.createElement('li');
                        //assign value to the list item
                        listItem.textContent = value;
                        //add the list item to the list
                        FormDataLispr.appendChild(listItem);  
                    });
                }
                else {
                    console.log("projects data not received at index.html!");
                    var formDataList = document.getElementById("formDataListpr");
                    var listItem = document.createElement("li");
                        
                    listItem.innerHTML = "Not received.";
                    formDataList.appendChild(listItem);
                }

                let exData = sessionStorage.getItem("exData");
                //if data receieved under the key prData
                if (exData) {
                    //converting back the received JSON string to its original form
                    let dynamicex = JSON.parse(exData);
                    console.log("extracurriculars' data received at index.html!");
                    //now we need to create an item referecing the list
                    let FormDataListex = document.getElementById("formDataListex");
                    dynamicex.forEach(value => {
                        //create list item
                        let listItem  = document.createElement('li');
                        listItem.textContent=value;
                        //append list item to HTML list (js reference variable)
                        FormDataListex.appendChild(listItem);
                    });
                }
                else {
                    console.log("extracurriculars' data not received at index.html!");
                    var formDataList = document.getElementById("formDataListex");
                    var listItem = document.createElement("li");
                        
                    listItem.innerHTML = "Not received.";
                    formDataList.appendChild(listItem);
                }
        });//make one submit button, clear form only once, user should be able to enter only numbers in phone, put an alert message if upper field left unfilled
   
