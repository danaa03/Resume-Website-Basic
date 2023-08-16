        function Validateemail(email) {
        //regEx used here to check the validation of input
        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return pattern.test(email);
        }
  
        function Validatephone(phonenum) {
          const validones = /^\d{11}$/;
          return validones.test(phonenum);
        }

        function disablebutton(buttonid)
        {
            console.log("function called");    
            console.log("current buttons id: "+buttonid);
            let b=document.getElementById(buttonid);
            b.disabled=true;
        }

        function myFunc(elemid,spanid) //this function is triggered when we click on ac/pr/ex field 0/1/... and then click away!
        {
            let x=document.getElementById(elemid);
            let s=document.getElementById(spanid);
            //when this function is called check if the corresponding field is empty or not
            if( x.value==="")
            {
                s.innerHTML= "&nbsp &nbsp Please fill the above field!";
                s.style.color="red";
                s.style.fontSize="12px";
            }
            else
            { 
                s.innerHTML="";
            }
        }

        function rmvbtn(elemid,spanid)
        {
            console.log("rmvbtn called for dynamic project field");
            let x=document.getElementById(elemid);
            let s=document.getElementById(spanid);
            //when this function is called make a remove button and display it below the current dynamic input field
            let removebtn = document.createElement("button");
            removebtn.textContent="";
            removebtn.type="button";
            removebtn.className="rmv";
            removebtn.textContent="remove";
            s.appendChild(removebtn);
        }
        
        document.addEventListener('DOMContentLoaded',function(){
           //academics
           let index = 1;
           var addac = document.getElementById("addac");
            
           addac.addEventListener('click', function() {
               //for every click to the add academics button we add a new input field
               if(index===1)
                {
                    document.getElementById("fielda0").focus();
                }

               let newinput = document.createElement('input');
               newinput.type = 'text';
               newinput.name = 'field' + index;
               newinput.placeholder = 'field ' + index;
               newinput.required = true;
               newinput.id='fielda' + index;
               
               let stop = false;
               for (let i = 0; i < index; i++) {
                 let xid = "fielda" + i;
                let inputElement = document.getElementById(xid);
            
                if (inputElement && inputElement.value === "") {
                    stop = true;
                    console.log("stop = true");
                    break; // Exit the loop
                }
            }
               
               if (!stop) 
               {
                   console.log("stop = false");
               }
               
               if(stop===true)
               {
                   console.log("previous field in ac left empty. Disabling add more button.");
                   addac.disable=true;
               }
               else
               {
                   console.log("previous field in ac filled. Enabling add more button.");
                   addac.disable=false;
                   let aspannew = document.createElement("span");
                   aspannew.id = 'acspan' + index;
                   
                   let aspanbtn=document.createElement("span");
                   aspanbtn.id = 'acspanbtn' + index;

                   document.getElementById("inputF").appendChild(newinput);
                   newinput.focus();
                   document.getElementById("inputF").appendChild(aspannew);
                   
                   newinput.addEventListener('blur',function(){
                       myFunc(newinput.id,aspannew.id);
                   });

                   document.getElementById("inputF").appendChild(aspanbtn);
                   rmvbtn(newinput.id,aspanbtn.id);

                   aspanbtn.addEventListener('click',function(){
                       //clear the no input alert if there!
                       if(document.getElementById("inputF").hasChildNodes("aspannew"))
                       {
                           inputF.removeChild(aspannew);
                       }
                       // Access the parent node of newinpute
                       let parentContainer = newinput.parentNode;
                       
                       // Remove newinpute from its parent container
                       parentContainer.removeChild(newinput);
                       parentContainer = aspanbtn.parentNode;
                       parentContainer.removeChild(aspanbtn);
                   });
                   index++;
               }
            });
            
        //projects
        let indexpr = 1;
        var addpr = document.getElementById("addpr");

        addpr.addEventListener('click', function() {
            if(indexpr===1)
            {
                document.getElementById("fieldp0").focus();
            }
            //for every click to the add projects button we add a new input field
            let newinputp = document.createElement('input');
            newinputp.type = 'text';
            newinputp.name = 'field' + indexpr;
            newinputp.placeholder = 'field ' + indexpr;
            newinputp.required = true;
            newinputp.id='fieldp' + indexpr;
            
            let stopp = false;
               for (let i = 0; i < indexpr; i++) {
                 let xid = "fieldp" + i;
                let inputElement = document.getElementById(xid);
            
                if (inputElement && inputElement.value === "") {
                    stopp = true;
                    console.log("stopp = true");
                    break; // Exit the loop
                }
            }
               
               if (!stopp) 
               {
                   console.log("stopp = false");
               }
               
               if(stopp===true)
               {
                   console.log("previous field in pr left empty. Disabling add more button.");
                   addpr.disable=true;
               }
               else
               {
                console.log("previous field in pr filled. Enabling add more button.");
                addpr.disable=false;
                let pspannew = document.createElement("span");
                pspannew.id = 'prspan' + indexpr;
                
                let pspanbtn=document.createElement("span");
                pspanbtn.id = 'prspanbtn' + indexpr;

                document.getElementById("inputG").appendChild(newinputp);
                document.getElementById("inputG").appendChild(pspannew);
                newinputp.focus();
                
                newinputp.addEventListener('blur',function(){
                    myFunc(newinputp.id,pspannew.id);
                });

                document.getElementById("inputG").appendChild(pspanbtn);
                rmvbtn(newinputp.id,pspanbtn.id);

                pspanbtn.addEventListener('click',function(){
                    //clear the no input alert if there!
                    if(document.getElementById("inputG").hasChildNodes("pspannew"))
                    {
                        inputG.removeChild(pspannew);
                    }
                    // Access the parent node of newinpute
                    let parentContainer = newinputp.parentNode;
                    
                    // Remove newinpute from its parent container
                    parentContainer.removeChild(newinputp);
                    parentContainer = pspanbtn.parentNode;
                    parentContainer.removeChild(pspanbtn);
                });
                indexpr++;
            }
        });
            //extracurriculars
            let indexex = 1;
            var addex = document.getElementById("addex");

            addex.addEventListener('click', function() {
                //for every click to the add extracurriculars button we add a new input field
                if(indexex===1)
                {
                    document.getElementById("fielde0").focus();
                }
                let newinpute = document.createElement('input');
                newinpute.type = 'text';
                newinpute.name = 'field' + indexex;
                newinpute.placeholder = 'field ' + indexex;
                newinpute.required = true;
                newinpute.id='fielde' + indexex;
                
                let stope = false;
               for (let i = 0; i < indexex; i++) {
                 let xid = "fielde" + i;
                let inputElement = document.getElementById(xid);
            
                if (inputElement && inputElement.value === "") {
                    stope = true;
                    console.log("stope = true");
                    break; // Exit the loop
                }
            }
               
               if (!stope) 
               {
                   console.log("stope = false");
               }
               
               if(stope===true)
               {
                   console.log("previous field in ex left empty. Disabling add more button.");
                   addex.disable=true;
               }
               else
               {
                    console.log("previous field in ex filled. Enabling add more button.");
                    addex.disable=false;
                    let espannew = document.createElement("span");
                    espannew.id = 'exspan' + indexex;
                    
                    let espanbtn=document.createElement("span");
                    espanbtn.id = 'exspanbtn' + indexex;

                    document.getElementById("inputH").appendChild(newinpute);
                    document.getElementById("inputH").appendChild(espannew);
                    newinpute.focus();
                    
                    newinpute.addEventListener('blur',function(){
                        myFunc(newinpute.id,espannew.id);
                    });

                    document.getElementById("inputH").appendChild(espanbtn);
                    rmvbtn(newinpute.id,espanbtn.id);

                    espanbtn.addEventListener('click',function(){
                        //clear the no input alert if there!
                        if(document.getElementById("inputH").hasChildNodes("espannew"))
                        {
                            inputH.removeChild(espannew);
                        }
                        // Access the parent node of newinpute
                        let parentContainer = newinpute.parentNode;
                        
                        // Remove newinpute from its parent container
                        parentContainer.removeChild(newinpute);
                        parentContainer = espanbtn.parentNode;
                        parentContainer.removeChild(espanbtn);
                    });
                    indexex++;
                }
            });

        document.getElementById("wholeForm").addEventListener('submit', function (event) {              
            event.preventDefault();

            const name = document.getElementById("name").value;
            const phone = document.getElementById("phone").value;
            const address = document.getElementById("address").value;
            const email = document.getElementById("email").value;
    
            if (Validatephone(phone)) {
                document.getElementById("phone").style.borderColor = '';
                document.getElementById("phone").placeholder = 'Enter valid phone number';
            } 
            else {
                alert("Enter a valid, 11 digit phone number.");
                document.getElementById("phone").placeholder = 'Invalid number';
                document.getElementById("phone").style.borderColor = 'red';
            }
         
            if(Validateemail(email)){
                document.getElementById("email").style.borderColor = '';
                document.getElementById("email").placeholder = 'Enter valid email';
            }
            else {
                alert("Enter a valid email address.");
                document.getElementById("email").placeholder = 'Invalid email';
                document.getElementById("email").style.borderColor = 'red';
            }
            if(Validatephone(phone)&&Validateemail(email))
            {
                 // Store data in sessionStorage
                 //userData is an object with properties name, email... that have the given values
                const userData = {
                    name: name,
                    email: email,
                    address: address,
                    phone: phone,
                };
                
                //     //we convert the object to a JSON string
                //     //then under the key userData we send it to index.html through sessionStorage which is different from localStorage as data is cleared when the session ends.
                //     //the JS object and it's values and properties are converted to a string and sent through session storage
                //     // Redirect to the receiving page
                sessionStorage.setItem("userData", JSON.stringify(userData));
                //storing ACADEMICS dynamic data (in an array)

                const dynamicinputac = document.querySelectorAll('.dynamicinputac input'); // Select all input fields within the dynamicinputac div
                const inputData = []; // Array to store the dynamic inputs

                dynamicinputac.forEach(input => {
                    inputData.push(input.value); // Push the input value into the array
                });

                sessionStorage.setItem("acData",JSON.stringify(inputData));

                //storing PROJECTS dynamic data (in an array)
                const dynamicinputpr = document.querySelectorAll('.dynamicinputpr input'); // Select all input fields within the dynamicinputac div
                const inputDatapr = []; // Array to store the dynamic inputs

                dynamicinputpr.forEach(input => {
                    inputDatapr.push(input.value); // Push the input value into the array
                });

                sessionStorage.setItem("prData", JSON.stringify(inputDatapr));

                //storing EXTRACURRICULARS dynamic data (in an array)
                const dynamicinputex = document.querySelectorAll('.dynamicinputex input'); // Select all input fields within the dynamicinputac div
                const inputDataex = []; // Array to store the dynamic inputs

                dynamicinputex.forEach(input => {
                    inputDataex.push(input.value); // Push the input value into the array
                });

                sessionStorage.setItem("exData", JSON.stringify(inputDataex));

            alert("form submitted successfully.");
            document.getElementById("wholeForm").reset();
            window.location.href = "index.html?";
        }
        });
    });
