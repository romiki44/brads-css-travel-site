//const $=require('jquery');
//const Person=require('./modules/Person');
import $ from 'jquery';
import Person from './modules/Person';

console.log('Webpack automation test???????????');

class Adult extends Person {
    payTaxes() {
        console.log(this.name + ' pay taxes!');
    }
}

var john=new Person("John Doe", "blue");
john.greet();

var mary=new Adult("Mary Smith", "yellow");
mary.greet();
mary.payTaxes();
