
$(".btn-add-card").on("click", function () {
    var inp = $("#input").val();
    $(".card-array").append('<div class="col-4"><div class="card"><img src="img/person-washing-carrots-kitchen.jpg" class="card-img-top" alt="..." /><div class="card-body"><h5 class="card-title">'+ inp +'</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p><div><div class="starArea d-flex flex-row"><div class="buttonList flex-start me-auto"><button class="btn btn-primary like"><i class="bi bi-hand-thumbs-up-fill"></i></button><button class="btn btn-primary dislike"><i class="bi bi-hand-thumbs-down-fill"></i></button></div></div></div></div></div></div>');
    $("#input").val("");
    $(".like").on("click", function () {
        console.log("Like");
        $(this).closest('.starArea').append('<i class="bi bi-star-fill"></i>');
    })
    $(".dislike").on("click", function () {
        console.log("Dislike");
        $(this).closest('.buttonList').next('i').remove();
    })
})
