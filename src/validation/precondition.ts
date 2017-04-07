/**
 * This decorator allows execution of the method it is applied to if provided conditions are satisfied
 */
export function Precondition(...validationFuncs: ((...args) => PreconditionResult)[]) : MethodDecorator {
    return function decorate(target: any, key: string, descriptor: PropertyDescriptor) {
        const originalFunction = descriptor.value;
        
        descriptor.value = (...args) => {
            for(let validator of validationFuncs) {
                const validationResult = validator(...args);
                if (!validationResult.passed) {
                    return validationResult.result;
                }
            }

            return originalFunction(...args);
        };

        return descriptor;
    }
}

export class PreconditionResult {
    constructor(passed: boolean, result?: any) {
        this.passed = passed;
        this.result = result;
    }

    passed: boolean;
    result: any;
}
