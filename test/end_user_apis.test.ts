import chai from 'chai';
import chaiHttp from 'chai-http';

import apis from '../src/apis';

chai.use(chaiHttp);

// - A test for user api: /api/v1/user
describe('welcome api', () => {
    // - Test case: should be a json
    it('should be json', () => {
        return chai.request(apis).get('/api/v1/user').then(res => {
            chai.expect(res.type).to.eql('application/json');
        });
    });
    // - Test case: should have a message
    it('should have a message', () => {
        return chai.request(apis).get('/api/v1/user').then(res => {
            chai.expect(res.body.message).to.eql('End User\'s APIs');
        }); 
    });
});
