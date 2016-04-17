import {Pipe} from 'angular2/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
    name: 'ParseName'
})
export class ParseName {

    transform(value, args?) {
        return value.replace(/{{employee.name}}/g,args);
    }

}