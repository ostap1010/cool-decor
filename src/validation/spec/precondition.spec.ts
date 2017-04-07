import { Precondition, PreconditionResult } from '../';

describe('Precondition decorator:', () => {
    let test;

    beforeEach(() => {
        test = new TestMath();
    });

    it('should execute decorated function if precondition is satified (1 precondition)', () => {
        const result = test.divide(10, 2);
        expect(result).toBe(5);
    });

    it('should not execute decorated function if precondition is not satified (1 precondition)', () => {
        const result = test.divide(10, 0);
        expect(result).toBeUndefined();
    });

    it('should execute decorated function if preconditions are satified (2 preconditions)', () => {
        const result = test.divide2(10, 5);
        expect(result).toBe(2);
    });

    it('should not execute decorated function if preconditions are not satified (2 preconditions)', () => {
        const result = test.divide2(10, 12);
        expect(result).toBe('A should be more than B');
    });

    it('should work for static functions', () => {
        const result1 = test.sum10(10, 1);
        const result2 = test.sum10(1, 11);
        const result3 = test.sum10(1, 7);
        
        expect(result1).toBeUndefined();
        expect(result2).toBeUndefined();
        expect(result3).toBe(8);
    });
});

class TestMath {
    
    @Precondition((a: number, b: number) => new PreconditionResult(b != 0)) // prohibit function execution if denominator is 0
    divide(a: number, b: number): number {
        return a / b;
    }

    @Precondition(
        (a: number, b: number) => new PreconditionResult(b != 0),
        (a: number, b: number) => new PreconditionResult(a > b, 'A should be more than B')
    )
    divide2(a: number, b: number): number {
        return a / b;
    }

    @Precondition(TestMath.validateParams)
    sum10(a: number, b: number) {
        return a + b;
    }

    public static validateParams(a: number, b: number): PreconditionResult {
        return new PreconditionResult(a < 10 && b < 10 && a >= 0 && b >= 0);
    }
}