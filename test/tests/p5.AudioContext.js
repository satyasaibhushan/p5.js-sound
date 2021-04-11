var expect = chai.expect;
var assert = chai.assert;

describe('p5.AudioContext', function () {
  describe('getAudioContext', function () {
    it('can get initialized', function () {
      var audioContext = p5.prototype.getAudioContext();
      expect(audioContext).to.have.property('baseLatency').to.be.an('number');
      expect(audioContext).to.have.property('destination');
      expect(audioContext).to.have.property('state').to.be.an('string');
    });
  });

  describe('userStartAudio', function () {
    it('can get initialized and returns a promise', function (done) {
      var startAudio = p5.prototype.userStartAudio();
      startAudio.then(() => {
        assert.equal(true, true);
        done();
      });
    });
  });
});
