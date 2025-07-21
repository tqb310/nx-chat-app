import { mongodb } from './mongodb.js';

describe('mongodb', () => {
    it('should work', () => {
        expect(mongodb()).toEqual('mongodb');
    });
});
