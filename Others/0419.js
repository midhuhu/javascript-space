
/**
 * 实现以下代码，让其正常运行，并简要说明这是什么模式及这种模式的优点 
 * */

class Order1 {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }

    processPayment(amount) {
        this.paymentService.processPayment(amount);
    }
}

class ProcessPayment1 {
    constructor() {
    }
    processPayment() {
        throw "请实现支付方法"
    }
}


class AlipayService1 extends ProcessPayment1 {
    processPayment(amount) {
        console.log(`支付宝支付${amount}元`);
    }
}

class WechatPayService1 extends ProcessPayment1 {
    processPayment(amount) {
        console.log(`微信支付${amount}元`);
    }
}

const order1 = new Order1(new AlipayService1());

order1.processPayment(100);//支付宝支付100元

const anotherOrder1 = new Order1(new WechatPayService1());

anotherOrder1.processPayment(50);//微信支付50元


/**
 * 依赖倒置模式
 * 
 * 
 */


