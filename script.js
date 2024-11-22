// var name, price, features, support;
// function HostingPlan(name, price, features, support){
//     this.name = name;
//     this.price = price;
//     this.features = features;
//     this.support = support;
// }

// var HostingPlanBasic = new HostingPlan("Basic", 4.99, ["10GB Storage", "100GB Bandwidth", "1 Domain"], "Email");
// var HostingPlanPro = new HostingPlan("Pro", 14.99, ["50GB Storage", "500GB Bandwidth", "5 Domains"], "Email + phone");
// var HostingPlanBusiness = new HostingPlan("Business", 24.99, ["Unlimited Storage", "Unlimited Bandwidth", "Unlimited Domains"], "24/7 support");

// console.log(HostingPlanPro.features);

// Hosting Plan Constructor
function HostingPlan(name, price, features, support) {
    this.name = name;
    this.price = price;
    this.features = features;
    this.support = support;
}

// Hosting Plans
var HostingPlanBasic = new HostingPlan(
    "Basic Hosting", 
    "4.99$", 
    ["10GB Storage", "100GB Bandwidth", "1 Domain"], 
    "Email"
);

var HostingPlanPro = new HostingPlan(
    "Pro Hosting", 
    "14.99$", 
    ["50GB Storage", "500GB Bandwidth", "5 Domains"], 
    "Email + Phone"
);

var HostingPlanBusiness = new HostingPlan(
    "Business Hosting", 
    "24.99$", 
    ["Unlimited Storage", "Unlimited Bandwidth", "Unlimited Domains"], 
    "24/7 Support"
);

// Array of Hosting Plans
var plans = [HostingPlanBasic, HostingPlanPro, HostingPlanBusiness];

// Dynamically Populate the Plans
var planElements = document.querySelectorAll('.plan');
for (var i = 0; i < planElements.length; i++) {
    var planElement = planElements[i];
    var planData = plans[i]; // Get corresponding hosting plan data

    // Update Title
    planElement.querySelector('h2').innerHTML = planData.name;

    // Update Price
    planElement.querySelector('.price').innerHTML = planData.price;

    // Update Features
    var ul = planElement.querySelector('ul');
    ul.innerHTML = ""; // Clear any existing list items
    planData.features.forEach(function(feature) {
        var li = document.createElement('li');
        li.textContent = feature; // Add feature to the list
        ul.appendChild(li);
    });

    // Add Click Event for "Buy Now" Button
    var button = planElement.querySelector('button');
    (function(plan) {
        button.addEventListener('click', function() {
            alert("You have selected the " + plan.name + " for " + plan.price + ".");
        });
    })(planData);
}
