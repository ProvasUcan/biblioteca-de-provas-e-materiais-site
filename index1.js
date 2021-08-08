const app = new Vue({
    el: "#app",
    data: {
        'Engº Informática': {
            '1º Ano': {
                '1º Semestre': {
                    'Analise Matemática': {
                        'Frequências': {
                            link: "#", 
                            isReadyToDownload: false
                        },
                        'Exames': {
                            link: "#", 
                            isReadyToDownload: false
                        },
                        'Recursos': {
                            link: "#", 
                            isReadyToDownload: false
                        },
                        'Exercícios': {
                            link: "#", 
                            isReadyToDownload: false
                        },
                    },
                    'Fundamentos de Programação 1': {
                        'Frequências': {
                            link: "#", 
                            isReadyToDownload: false
                        },
                        'Exames': {
                            link: "#", 
                            isReadyToDownload: false
                        },
                        'Recursos': {
                            link: "#", 
                            isReadyToDownload: false
                        },
                        'Exercícios': {
                            link: "#", 
                            isReadyToDownload: false
                        },
                    },
                    'Fisica Moderna': {
                        'Frequências': {
                            link: "#", 
                            isReadyToDownload: false
                        },
                        'Exames': {
                            link: "#", 
                            isReadyToDownload: false
                        },
                        'Recursos': {
                            link: "#", 
                            isReadyToDownload: false
                        },
                        'Exercícios': {
                            link: "#", 
                            isReadyToDownload: false
                        },
                    },
                    'Algebra': {
                        'Frequências': {
                            link: "#", 
                            isReadyToDownload: false
                        },
                        'Exames': {
                            link: "#", 
                            isReadyToDownload: false
                        },
                        'Recursos': {
                            link: "#", 
                            isReadyToDownload: false
                        },
                        'Exercícios': {
                            link: "#", 
                            isReadyToDownload: false
                        },
                    }
                }
            }
        }
    },
    methods: {
        initialize: function(element, index) {
            if (element.link != undefined) {
                return this.createEndElement(element);
            }

            this.createElement(element);
            
            const courseName = 'Engº Informática';
            console.log(this[courseName]);

            this[courseName].keys().forEach(function(element) {

            })
        },

        createElement: function (element) {

        }
    }
})

app.initialize();
// 
// 