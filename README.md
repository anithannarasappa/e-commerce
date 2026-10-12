E-Commerce Order Discount & Delivery System

1. Project Description

This project calculates the discount, delivery charges, and final payable amount for an e-commerce customer order using JavaScript.

2. Technologies Used

- JavaScript
- Node.js
- Visual Studio Code

3. Features

- Calculates discounts based on customer category.
- Provides an additional ₹500 discount for orders above ₹5,000.
- Limits the total discount to 20% of the original order amount.
- Calculates delivery charges based on delivery location.
- Provides free delivery for orders of ₹3,000 or more.
- Displays the final order summary.

4. Input Details

- Customer ID
- Order Amount
- Customer Category (Premium or Regular)
- Delivery Location (Local, City, or Remote)

5. Business Rules

- Premium customers receive a 15% discount.
- Regular customers receive a 5% discount.
- Orders above ₹5,000 qualify for an additional ₹500 discount.
- The total discount cannot exceed 20% of the original order amount.
- Orders of ₹3,000 or more qualify for free delivery.
- For orders below ₹3,000, delivery charges depend on the delivery location.

6. How to Run the Project

1. Install Node.js.

2. Open the project folder in Visual Studio Code.

3. Save the JavaScript code as "E-Commerce Order Discount.js".

4. Open the terminal.

5. Run the following command:
   
   "node "E-Commerce Order Discount.js""

6. View the output in the terminal.

7. Expected Output

- Customer ID
- Customer Category
- Original Order Amount
- Discount Amount
- Delivery Charge
- Final Payable Amount
- Order Summary

8. Conclusion

This project demonstrates the use of JavaScript variables, conditional statements, and arithmetic operations to calculate e-commerce discounts and delivery charges. It helps determine the final amount a customer needs to pay.

Note: Delivery charges used in this project are assumed values: Local ₹50, City ₹100, and Remote ₹150 for orders below ₹3,000.
