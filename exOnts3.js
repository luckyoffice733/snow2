var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.setSid = function (sid) {
        this.sid = sid;
    };
    Student.prototype.getSid = function () {
        return this.sid;
    };
    Student.prototype.setStudentName = function (studentName) {
        this.studentName = studentName;
    };
    Student.prototype.getStundentName = function () {
        return this.studentName;
    };
    Student.prototype.setAge = function (age) {
        this.age = age;
    };
    Student.prototype.getAge = function () {
        return this.age;
    };
    return Student;
}());
var sobj = new Student();
//mutators
sobj.setSid(121);
sobj.setStudentName("John");
sobj.setAge(40);
//accessors
console.log(sobj.getSid());
console.log(sobj.getStundentName());
console.log(sobj.getAge());
