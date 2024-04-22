
/**
 * 实现以下代码，让其正常运行，并简要说明这是什么模式及这种模式的优点 
 * */


interface ProcessPayment {
    processPayment(VALUE:number):void

}
class Order {
    constructor(public paymentService:ProcessPayment) {
        this.paymentService = paymentService;
    }

    processPayment(amount: number) {
        this.paymentService.processPayment(amount);
    }
}

class AlipayService implements ProcessPayment {
    processPayment(amount:number) {
        console.log(`支付宝支付${amount}元`);
    }
}

class WechatPayService implements ProcessPayment {
    processPayment(amount:number) {
        console.log(`微信支付${amount}元`);
    }
}

const order = new Order(new AlipayService());

order.processPayment(100);//支付宝支付100元

const anotherOrder = new Order(new WechatPayService());

anotherOrder.processPayment(50);//微信支付50元


/**
 * 依赖倒置模式
 * 
 * 1、强调面向接口编程，降低类与类之间的耦合性
 * 使用接口或抽象类去定义规范和契约，不涉及具体操作，调用类直接遵循这些规范或契约来使用，不必担心具体是如何操作的；而实现类只管根据这些规范和契约去实现不同的功能，最终通过里氏替换，达到最终目的，相互独立、解耦，除非变动规范和契约
 * 2、增强系统的稳定性
 * 具体细节变化多端，而抽象想多稳定，以抽象为基础、面向接口编程的系统比面向细节的稳定多了。
 * 3、提高代码的可读性和维护性
 * 依赖关系清晰明了，高层与底层相互解耦，各自维护也相互不影响
 * 4、降低修改代码带来的风险
 * 因为相互解耦，有一块功能代码出现bug，修改这一块代码不会影响其他块的正常使用。
 * 
 */


