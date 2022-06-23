$(document).ready(function(){
    $("#signup").validate({
      rules:{
       fname:'required',
       sname:'required',
       email:{
        required:true,
        email:true

       },
       pass:{
        required:true,
        minlength:6

       },
       passconfirm:{
        required:true,
        minlength:6,
        equalTo:pass
       }
    },
messages:{
    fname:"please enter your first name",
    sname:"please enter your  surname",
    email:{
        requirerd:"please enter your mail id",
        email:"enter a valid mail id"},
    pass:{
        required:"enter new password",
        minlength:"password must be atleast 6characters long"

}
}

    })
})