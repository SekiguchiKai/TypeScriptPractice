class ProgramLang {
    constructor(
        private name: string,
        private type: string) {

    }

    public getName(): string {
        return this.name;
    }

    public getType(): string {
        return this.type;
    }

}

// 初期化
let javaScript = new ProgramLang('JavaScript', 'dynamic');
let typeScript = new ProgramLang('typeScript', 'static')

console.log(javaScript.getName() + 'は' + javaScript.getType() + 'な言語です');
console.log(typeScript.getName() + 'は' + typeScript.getType() + 'な言語です');