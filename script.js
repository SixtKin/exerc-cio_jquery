$(document).ready(function(){
    function adicionarTarefa() {
        var tarefa = $('#inputTarefa').val();
        if (tarefa !== '') {
            $('#listaTarefas').append('<li>' + '• ' + tarefa + '</li>');
            $('#inputTarefa').val('');
        }
    }

    $('#formTarefa').submit(function(event){
        event.preventDefault();
        adicionarTarefa();
    });

    $('#listaTarefas').on('click', 'li', function(){
        $(this).toggleClass('concluida');
    });
});
