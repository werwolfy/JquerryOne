$(".m").on("click", function(){
    console.log("f u")
    $(this).closest('.starArea').append('<i class="bi bi-star-fill"></i>');
})