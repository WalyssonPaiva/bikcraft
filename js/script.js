if (window.SimpleSlide) {
    new SimpleSlide({
        slide: 'quote',
        time: 5000
    });
    new SimpleSlide({
        slide: 'portfolio',
        time: 5000,
        nav: true
    });
}
if (SimpleAnime) {
    new SimpleAnime();
}
if (window.SimpleForm) {
    new SimpleForm({
        form: '.formphp',
        button: '#enviar',
        erro: `<div id='form-erro'><p>Um erro ocorreu, tente novamente</p></div>`,
        sucesso: `<div id='form-sucesso'><p>Formulário enviado com sucesso</p></div>`,
    })
}