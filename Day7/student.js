const student={
    name:'john'
}

Object.defineProperty(student,"setName",{
    set:function(name){
        console.log("setting name");
        this.name=name;
    }});

    Object.defineProperty(student,"getName",{
        get:function(){
            console.log("getting name");
            return this.name;
        }
    })

    student.setName="Eshan"
    console.log(student.getName);