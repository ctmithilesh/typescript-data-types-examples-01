class LanguageTranslator{
        readonly supportedLang: ReadonlyArray<string> = ['english','hindi','tamil','telegu','marathi']
        translate(text: string, targetLanguage: string): string{

                if(!this.supportedLang.includes(targetLanguage)){
                    throw new Error('Language not supported')
                }
                else{
                    console.log('Language is supported')
                }

                return text           
        }
}
const l1 = new LanguageTranslator()
l1.translate('I live in Delhi','english')
l1.translate('Hadi akşam yemeği yiyelim','turkish')