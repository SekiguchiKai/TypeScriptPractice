var ProgramLang = (function () {
    function ProgramLang(name, type) {
        this.name = name;
        this.type = type;
    }
    ProgramLang.prototype.getName = function () {
        return this.name;
    };
    ProgramLang.prototype.getType = function () {
        return this.type;
    };
    return ProgramLang;
}());
// 初期化
var javaScript = new ProgramLang('JavaScript', 'dynamic');
var typeScript = new ProgramLang('typeScript', 'static');
console.log(javaScript.getName() + 'は' + javaScript.getType() + 'な言語です');
console.log(typeScript.getName() + 'は' + typeScript.getType() + 'な言語です');
