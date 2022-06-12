// AUTOGENERATED FILE, do not edit.
// To run the tests: node_modules/mocha/bin/mocha.js tests/all_tests.js

const { expect } = require('chai');

describe('./indirect_call/p1.rego', () => {
  const opa = require('././indirect_call/p1.rego.js').main;
  it('{"f":"add","a":5,"b":10}', () => {
    expect(opa({"f":"add","a":5,"b":10})).to.deep.equal({"result":15});
  });
  it('{"f":"mul","a":5,"b":10}', () => {
    expect(opa({"f":"mul","a":5,"b":10})).to.deep.equal({"result":50});
  });
  it('{"f":"range","a":5,"b":10}', () => {
    expect(opa({"f":"range","a":5,"b":10})).to.deep.equal({"result":[5,6,7,8,9,10]});
  });
});

describe('./indirect_call/p2.rego', () => {
  const opa = require('././indirect_call/p2.rego.js').main;
  it('{"f":"add","a":5,"b":10}', () => {
    expect(opa({"f":"add","a":5,"b":10})).to.deep.equal({"result":15});
  });
  it('{"f":"mul","a":5,"b":10}', () => {
    expect(opa({"f":"mul","a":5,"b":10})).to.deep.equal({"result":50});
  });
  it('{"f":"range","a":5,"b":10}', () => {
    expect(opa({"f":"range","a":5,"b":10})).to.deep.equal({"result":[5,6,7,8,9,10]});
  });
});

describe('./indirect_call/p3.rego', () => {
  const opa = require('././indirect_call/p3.rego.js').main;
  it('{"f":"add","a":5,"b":10}', () => {
    expect(opa({"f":"add","a":5,"b":10})).to.deep.equal({"result":15});
  });
  it('{"f":"mul","a":5,"b":10}', () => {
    expect(opa({"f":"mul","a":5,"b":10})).to.deep.equal({"result":50});
  });
  it('{"f":"range","a":5,"b":10}', () => {
    expect(opa({"f":"range","a":5,"b":10})).to.deep.equal({"result":[5,6,7,8,9,10]});
  });
});

describe('./smoke/constant_bool/policy.rego', () => {
  const opa = require('././smoke/constant_bool/policy.rego.js').main;
  it('["the",true,"input"]', () => {
    expect(opa(["the",true,"input"])).to.deep.equal({"result":true});
  });
  it('"does"', () => {
    expect(opa("does")).to.deep.equal({"result":true});
  });
  it('false', () => {
    expect(opa(false)).to.deep.equal({"result":true});
  });
  it('{"matter":"here"}', () => {
    expect(opa({"matter":"here"})).to.deep.equal({"result":true});
  });
});

describe('./smoke/constant_int/policy.rego', () => {
  const opa = require('././smoke/constant_int/policy.rego.js').main;
  it('["the",true,"input"]', () => {
    expect(opa(["the",true,"input"])).to.deep.equal({"result":42});
  });
  it('"does"', () => {
    expect(opa("does")).to.deep.equal({"result":42});
  });
  it('false', () => {
    expect(opa(false)).to.deep.equal({"result":42});
  });
  it('{"matter":"here"}', () => {
    expect(opa({"matter":"here"})).to.deep.equal({"result":42});
  });
});

describe('./smoke/constant_string/policy.rego', () => {
  const opa = require('././smoke/constant_string/policy.rego.js').main;
  it('["the",true,"input"]', () => {
    expect(opa(["the",true,"input"])).to.deep.equal({"result":"foo"});
  });
  it('"does"', () => {
    expect(opa("does")).to.deep.equal({"result":"foo"});
  });
  it('false', () => {
    expect(opa(false)).to.deep.equal({"result":"foo"});
  });
  it('{"matter":"here"}', () => {
    expect(opa({"matter":"here"})).to.deep.equal({"result":"foo"});
  });
});

describe('./smoke/id/policy.rego', () => {
  const opa = require('././smoke/id/policy.rego.js').main;
  it('{"x":true}', () => {
    expect(opa({"x":true})).to.deep.equal({"result":true});
  });
  it('{"x":42}', () => {
    expect(opa({"x":42})).to.deep.equal({"result":42});
  });
  it('{"x":"foo"}', () => {
    expect(opa({"x":"foo"})).to.deep.equal({"result":"foo"});
  });
});

describe('./smoke/sum/policy.rego', () => {
  const opa = require('././smoke/sum/policy.rego.js').main;
  it('{"a":1,"b":1}', () => {
    expect(opa({"a":1,"b":1})).to.deep.equal({"result":2});
  });
  it('{"a":1,"b":2}', () => {
    expect(opa({"a":1,"b":2})).to.deep.equal({"result":3});
  });
  it('{"a":5,"b":7}', () => {
    expect(opa({"a":5,"b":7})).to.deep.equal({"result":12});
  });
  it('{"a":-1,"b":1}', () => {
    expect(opa({"a":-1,"b":1})).to.deep.equal({"result":0});
  });
  it('{"a":999999,"b":1}', () => {
    expect(opa({"a":999999,"b":1})).to.deep.equal({"result":1000000});
  });
});