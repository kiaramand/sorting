describe('Bubble Sort', function(){
  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough()
  })

  it('handles an empty array', function (){
    expect(bubbleSort([])).toEqual([]);
  })
  it('outputs an array of the same length as the input array', function (){
    expect(bubbleSort([1, 3, 2]).length).toEqual(3)
  })
  // // it('does not use the built-in sort method', function (){
  // //   //use spy and toHaveBeenCalled
  // //   spyOn(bubbleSort, 'sort')
  // //   expect()
  // // })
  it('has a swap function', function (){
    expect(typeof swap).toBe('function')
  })
  it('calls the swap function no more times than necessary', function () {
    bubbleSort([2, 1, 3])
    expect(swap.calls.count()).toEqual(1)
  })
  it('sorts an array', function () {
    expect(bubbleSort([1, 3, 2])).toEqual([1, 2, 3])
    expect(bubbleSort([4, 1])).toEqual([1, 4])
    expect(bubbleSort([4, 8, 2, 0, 3, 1, 9])).toEqual([0, 1, 2, 3, 4, 8, 9])
  })
})
