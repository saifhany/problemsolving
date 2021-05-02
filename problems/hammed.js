class Order
{
    constructor(orderData){}
    Discount;
}
let Orders = [new Order("Order 1"), new Order("Order 2"), new Order("Order 3")];
let OrdersWithDiscounts = Orders.map((order) => GetOrderWithDiscount(order, GetDiscountRules()));
console.log(OrdersWithDiscounts);

function GetOrderWithDiscount(order, rules) {
    let discount = rules.filter((rule)=> rule.QualifyingCondition(order))//Filter[Where] => Check If rule is qualified for the next step
    .map(rule => rule.GetDiscount(order))//map[Select] => returns an array of rules discount
    .sort((a, b)=> a-b);//sort[OrderBy] 
    discount = discount.slice(0, 3);//slice[Take] 
    discount =  getAverage(discount)//Average
    let newOrder = new Order(order);
    newOrder.Discount = discount;
    return newOrder;
}

function getAverage(discountList) {
    return getSumOf(discountList) / discountList.length;
}

function getSumOf(discountList) {
    return discountList.reduce((a, b) => a+b);
}

function GetDiscountRules() {
    let discountRules = [
        {QualifyingCondition:isExpired, GetDiscount: Expired},
        {QualifyingCondition:isAQualified, GetDiscount: A},
        {QualifyingCondition:isBQualified, GetDiscount: B},
        {QualifyingCondition:isCQualified, GetDiscount: C},
        {QualifyingCondition:isDQualified, GetDiscount: D},
    ];
    return discountRules;
}


//First Rule
function isExpired(Order)//Qualifier
{
    return true;
}
function Expired(Order)//Calculate
{
    return 10;
}
//Second Rule
function isAQualified(Order)
{
    return false;
}
function A(Order)
{
    return 5;
}
//Third Rule
function isBQualified(Order)
{
    return true;
}
function B(Order)
{
    return 2;
}
//Forth Rule
function isCQualified(Order)
{
    return true;
}
function C(Order)
{
    return 4;
}
//Fifth Rule
function isDQualified(Order)
{
    return true;
}
function D(Order)
{
    return 1;
}
