function Student (name, korean, math, english, science) {
  this.Name = name;
  this.Korean = korean;
  this.Math = math;
  this.English = english;
  this.Science = science;
  
  this.getSum = function() {
    return this.Korean + this.Math + this.English + this.Science;
  };
  
  this.getAverage = function() {
    return this.getSum() / 4;
  };
  
  this.toString = function() {
    return this.Name + '\t' + this.getSum() + '\t' + this.getAverage();
  };
}

var students = [];
students.push(new Student('Yoon Harin', 96, 98, 92, 98));
students.push(new Student('YoonMyungWol', 92, 94, 88, 98));

students.sort(function(left, right) {
  return right.getSum() - left.getSum();
});

student = students.slice(0, 3);

var output = 'Name\tTotal\tAverage\n';
for (var i in students) {
  output += students[i].toString() + '\n';
}
alert(output);
