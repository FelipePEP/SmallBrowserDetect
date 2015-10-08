var CrossBrowser = {

    // navegador nulo
    browser: null,

    // versão do navegador nula
    versao: null,

    // vetor de navegadores mais comum, exceto Opera que possui regra específica nos métodos abaixo
    dadosBrowser: [
        {   // Chrome
            cabecalho: navigator.userAgent,
            app: "Chrome",
            id: "Chrome",
        },
        {   // Firefox
            cabecalho: navigator.userAgent,
            app: "Firefox",
            id: "Firefox",
        },
         {   // IE
             cabecalho: navigator.userAgent,
             app: "MSIE",
             id: "Explorer",
             versao: "MSIE"
         },
        {   // IE 11
            cabecalho: navigator.userAgent,
            app: ".NET",
            id: "Explorer",
            versao: "rv"
        },
        {   // Safari
            cabecalho: navigator.userAgent,
            app: "Apple",
            id: "Safari",
            versao: "Version"
        }
    ],

    // inicializador
    inicializar: function () {

        // armazena o id do navegador se for identificável
        this.browser = this.retornarNavegador(this.dadosBrowser) || "Navegador desconhecido";

        // armazena a versão do navegador se for identificável
        this.versao = this.retornarVersao(navigator.userAgent) || this.versao(navigator.appVersion) || "versão desconhecida";

        // adiciona ao body a classe que referencia ao BROWSER
        $("body").addClass(this.browser);
    },

    //Retorna o id do navegador
    retornarNavegador: function (param) {

        // itera no vetor de navegadores indentificáveis
        for (var i = 0; i < param.length; i++) {

            // armazena o nome se não for opera
            var cabecalho = param[i].cabecalho;

            // determina e armazena a versão do navegador
            this.appNome = param[i].versao || param[i].id;

            // retorna o id do navegador
            if (navigator.vendor == "Opera Software ASA" || navigator.appVersion.indexOf("OPR") != -1) {
                return "Opera";
            } else if (cabecalho) {
                if (cabecalho.indexOf(param[i].app) != -1)
                    return param[i].id;
            }
        }
    },

    // Retrona versão do navegador
    retornarVersao: function (param) {

        // captura index da versão
        var index = param.indexOf(this.appNome);

        // retorna versão se existir
        if (index == -1) return;

        return parseFloat(param.substring(index + this.appNome.length + 1));
    }
};