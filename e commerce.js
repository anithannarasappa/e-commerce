

const customerId = "C101";
const orderAmount = 4000;
const customerCategory = "Premium";
const deliveryLocation = "Local";

const PREMIUM_DISCOUNT = 0.15;
const REGULAR_DISCOUNT = 0.05;
const EXTRA_DISCOUNT = 500;
const MINIMUM_EXTRA_ORDER = 5000;
const MAXIMUM_DISCOUNT = 0.20;
const FREE_DELIVERY_AMOUNT = 3000;

const supportedLocations = ["Local", "City", "Remote"];

if (
    orderAmount <= 0 ||
    !["Premium", "Regular"].includes(customerCategory) ||
    !supportedLocations.includes(deliveryLocation)
) {
    console.log("Invalid order details.");

} else {
    let discount = 0;
    let deliveryCharge = 0
    if (customerCategory === "Premium") {
        discount = orderAmount * PREMIUM_DISCOUNT;
    } else {
        discount = orderAmount * REGULAR_DISCOUNT;
    }

    
    if (orderAmount > MINIMUM_EXTRA_ORDER) {
        discount = discount + EXTRA_DISCOUNT;
    }

    
    if (discount > orderAmount * MAXIMUM_DISCOUNT) {
        discount = orderAmount * MAXIMUM_DISCOUNT;
    }

    
    if (orderAmount >= FREE_DELIVERY_AMOUNT) {
        deliveryCharge = 0;
    } else if (deliveryLocation === "Local") {
        deliveryCharge = 50;
    } else if (deliveryLocation === "City") {
        deliveryCharge = 100;
    } else if (deliveryLocation === "Remote") {
        deliveryCharge = 150;
    }

    
    const finalPayableAmount = orderAmount - discount + deliveryCharge;


    console.log("===== E-COMMERCE ORDER SUMMARY =====");
    console.log("Customer ID:", customerId);
    console.log("Customer Category:", customerCategory);
    console.log("Original Order Amount: Rs.", orderAmount);
    console.log("Discount Amount: Rs.", discount);
    console.log("Delivery Location:", deliveryLocation);
    console.log("Delivery Charge: Rs.", deliveryCharge);
    console.log("Final Payable Amount: Rs.", finalPayableAmount);
    console.log("Order Summary: Order calculated successfully.");
}