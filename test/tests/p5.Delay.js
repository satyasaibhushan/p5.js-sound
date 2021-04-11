var expect = chai.expect;

describe('p5.Delay', function () {
  it('can be created and disposed', function () {
    var delay = new p5.Delay();
    delay.dispose();
  });

  describe('testing methods', () => {
    describe('process', () => {
      var noise = new p5.Noise('white');
      it('can take all params', function () {
        var delay = new p5.Delay();
        delay.process(noise, 0.12, 0.7, 2300);
      });
      it(' does not take feedback greater than 1 ', function () {
        var delay = new p5.Delay();
        expect(() => delay.process(noise, 1.2)).to.throw();
      });
      it(' does not take delaytime greater than maxDelay ', function () {
        var delay = new p5.Delay();
        var dealyTime = delay._maxDelay + Math.random(0, 1);
        expect(() => delay.process(noise, dealyTime)).to.throw();
      });
    });
    describe('delayTime', () => {
      it(' can take numerical values ', function () {
        var delay = new p5.Delay();
        delay.delayTime(0.2);
      });
      it('can take audio nodes', function () {
        var delay = new p5.Delay();
        var amp = new p5.Amplitude();
        delay.delayTime(amp);
      });
    });
    describe('feedback', () => {
      it('has initial  value of 0.5', function () {
        var delay = new p5.Delay();
        expect(delay.feedback()).to.equal(0.5);
      });
      it('does not accept greater than 1.0 values', function () {
        var delay = new p5.Delay();
        expect(() => delay.feedback(1.7)).to.throw();
      });

      it('can be set', function () {
        var delay = new p5.Delay();
        delay.feedback(0.7);
        expect(delay.feedback()).to.be.closeTo(0.7, 0.001);
      });
      it('can take audio nodes', function () {
        var delay = new p5.Delay();
        var amp = new p5.Amplitude();
        delay.feedback(amp);
      });
    });
    describe('filter', () => {
      it('can take both freq, time', function () {
        var delay = new p5.Delay();
        delay.filter(200, 0.2);
      });
      it('can take only freq as param', function () {
        var delay = new p5.Delay();
        delay.filter(200);
      });
    });
    describe('setType', () => {
      it('can take 1 as param i.e, pingpong', function () {
        var delay = new p5.Delay();
        delay.setType(1);
      });
      it('can take strings as param ', function () {
        var delay = new p5.Delay();
        delay.setType('pingpong');
        delay.setType('default');
        delay.setType('Loren ipsom');
      });
      it('can take other than 1 as param, to fallback to default case', function () {
        var delay = new p5.Delay();
        delay.setType(2);
      });
    });

    it('drywet value can be changed', function () {
      var effect = new p5.Effect();
      expect(effect.drywet(0.5)).to.equal(0.5);
    });
  });
});
