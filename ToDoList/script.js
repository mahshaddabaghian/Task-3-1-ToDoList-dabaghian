let tasks = [];
function addTask(title){
    if (title === ""){
        console.log("حتما عنوان را وارد کنید");
        return
    }
    let newTask = {
        title: title,
        completed: false
    };
    
    tasks.push(newTask);
    console.log("کار جدید اضافه شد");
    }
    function showTasks() {
        if (tasks.length === 0){
            console.log("کاری وجود ندارد");
            return
        }
        for (let i = 0; i< tasks.length; i++){
            let status;
            if (tasks[i].completed === true){
                status = "انجام شده";
            }else{
                status = "انجام نشده";
            }
            console.log(i + 1, tasks[i].title, "-",status);
        }   
    }
    function toggleTaskByNumber(number){
        let  index = number - 1;
        if (index < 0 || index >= tasks.length){
            console.log("شماره کار اشتباه است");
            return;
        }
        tasks[index].completed = !tasks[index].completed;
        console.log("وضعیت کار تغیر کرد");
    }
    function deleteTask(index){
        if (index < 0 || index >= tasks.length){
            console.log("شماره کار اشتباه است");
            return;
        }
        tasks.splice(index, 1);
        console.log("کار حذف شد");
    }
    function editTask(index, newTitle){
        if (index < 0 || index >=tasks.length){
            console.log("شماره کار اشتباه است");
            return;
        }

        if (newTitle =="") {
            console.log("عنوان جدید را وارد کنید");
            return;
    }
    tasks[index].title =newTitle;
    console.log("ویرایش شد");
    }
    function showComplatedCount(){
        let count = 0;
        for (let i = 0; i < tasks.length; i++){
            if (tasks[i].completed === true){
                count++;
            }
        }
        console.log("تعداد کارهای انجام شده :", count);
    }
function showPendingCount() {
    let count = 0;
    for (let i = 0; i< tasks.length; i++){
        if (tasks[i].completed === false){
            count++;
        }
    }
    console.log("تعداد کارهای انجام نشده:", count);
}