$(".like").on("click", function(){
    $(this).closest('.starArea').append('<i class="bi bi-star-fill"></i>');
})
$(".dislike").on("click", function(){
    $(this).closest('.buttonList').next('i').remove();
})