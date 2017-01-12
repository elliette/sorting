describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

before(function () {
  spyOn(tootsiepop, 'swap').and.callThrough(); // replace existing `tootsiepop['eat']` method
});
it('getting to the center of tootsiepop involves exactly three licks', function () {
  tootsiepop.bubblesort();
  expect(tootsiepop.swap.calls.count()).toEqual(3);
});