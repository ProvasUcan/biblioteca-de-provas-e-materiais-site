const app = new Vue({
    el: "#menu",
    data: {
        engInformatica: {
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
                            link: "https://github.com/Creuma-Kuzola/Biblioteca-de-provas-e-materiais/tree/main/1%C2%BA%20Ano/1%C2%BA%20Semestre/Analise%20Matem%C3%A1tica%201/Exerc%C3%ADcios", 
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
            },
            '2º Ano': {
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
})

//app.initialize();
// 
// 
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const menu = document.querySelector('.main-menu');
openMenu.style.zIndex = 1;

openMenu.onclick = (element) => {
    openMenu.style.zIndex = 0;
    menu.style.opacity = 1;
    closeMenu.style.opacity = 1;
}

closeMenu.onclick = (element) => {
    openMenu.style.zIndex = 1;
    menu.style.opacity = 0;
    closeMenu.style.opacity = 0;

}