import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import chaiHttp from 'chai-http'

chai.should()
chai.use(chaiHttp)
chai.use(chaiAsPromised)

const { request } = chai

describe('authentication', () => {
  let username, password

  describe('as a valid user', () => {
    username = 'rkapur+devfirst@remedypartners.com'
    password = 'abcABC1!'

    it('is success', () => {
      return request('http://localhost:8000')
        .post('/token')
        .send({ username, password })
        .then(res => {
          res.should.have.status(200)
        })
    })
  })
})
