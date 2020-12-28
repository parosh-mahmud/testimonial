// (function () {
    
//     const customerImg = document.querySelector("#customer-img");
//     const customerName = document.querySelector("#customer-name");
//     const customerText = document.querySelector("#customer-text");
//     const buttons = document.querySelectorAll(".btn")
//     let index = 0;
//     let customers = [];

//     //create new customer using a customer constructor

//     function Customer(img, name, text) {
//         this.img = img
//         this.name = name
//         this.text = text
//     }
//     //create new customer using a customer constructor
//     function createCustomer(img, name, text) {
//         let fullImage = `./img/customer${img}.jpg`
//         let customer = new Customer(fullImage, name, text)
//         customers.push(customer)
        
//     }
    
//     createCustomer(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
//     createCustomer(1, 'Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')
//     createCustomer(2, 'Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.')
//     createCustomer(3, 'Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.')
//     createCustomer(4, 'Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
    
//     buttons.forEach(function (button) {
//         button.addEventListener('click', function (e) {
//             if (e.target.parentElement.classList.contains('prevBtn')) {
//                 if (index === 0) {
//                     index = customers.length
                    
//                 }
//                 index--

//                 customerImg.src = customers[index].img
//                 customerName.textContent = customers[index].name
//                 customerText.textContent = customers[index].text
                
//             }
//             if (e.target.parentElement.classList.contains("nextBtn")) {
//                 if (index === customers.length) {
//                     index=0
//                 }
//                 index++
//                 customerImg.src = customers[index].img
//                 customerName.textContent = customers[index].name
//                 customerText.textContent = customers[index].text
//             }
//         })
//     })

// })()


(function () {
    
    const customerImg = document.getElementById("customer-img");
    const customerName = document.getElementById("customer-name");
    const customerText = document.getElementById("customer-text");
    const buttons = document.querySelectorAll(".btn")
    
    let index = 0
    let customers = []

    function Customer(img, name, text) {
        this.img = img;
        this.name = name;
        this.text = text;
    }

    function createCustomer(img, name, text) {
        let fullImage = `./img/customer-${img}.jpg`
        let customer = new Customer(fullImage, name, text)
        customers.push(customer)
    }
    
    createCustomer(0, "Parosh Mahmud", "Hello Parosh mahmud")
    createCustomer(1, "Rodela mahmud Roza", "Hello Roza")
    createCustomer(2, "Rubana Mahmud", "Hello Rubana")
    createCustomer(3, "Suraiya islam", "Hello Suraiya")
    createCustomer(4, "Sumaiya islam", "Hello Sumaiya")
    
    buttons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            if (e.target.classList.contains("prevBtn")||e.target.parentElement.classList.contains("prevBtn")) {
                if (index === 0) {
                    index = customers.length-1
                    
                }
                index--
                customerImg.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent= customers[index].text
                
                
            }

            if (e.target.classList.contains("nextBtn") || e.target.parentElement.classList.contains("nextBtn")) {
                if (index === customers.length-1) {
                    index=0
                }
                index++
                customerImg.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })
    })



})()