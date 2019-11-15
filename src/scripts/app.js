$(document).ready(function() {

    $(document).on("click", ".kk-column-add-task", function() {
    
        $this = $(this);
        var htmlAddCancelBtns = `
            <div class="kk-column-add-task-tb">
                
                <textarea name="kk-column-add-task-tb-ip" id="kk-column-add-task-tb-ip" class="kk-column-add-task-tb-ip" cols="30" rows="10"></textarea>
                
            </div>
                
            <div class="kk-column-add-cancel-task-btns">
                <button class="kk-column-add-task-tb-btn-add">Add</button>
                <button class="kk-column-add-task-tb-btn-cancel">Cancel</button>
            </div>

            <div class="kk-column-add-task">
                    <i class="material-icons">playlist_add</i>
            </div>
        `;

        // $this.insertAfter(htmlAddCancelBtns);
        $this.after(htmlAddCancelBtns);
        var $copyOfThis = $this;
        $this.remove();
    });


    $(document).on("click", ".kk-column-add-task-tb-btn-add", function(){
        console.log(".kk-column-add-task-tb-btn-add is clicked");

        // console.log($(".kk-column-add-task-tb-ip"));
        var text = $(this).parent().prev().children('textarea').val();

        if(!text)
            alert("Please enter value or cancel")
        else{
            var html = `<div class="kk-column-task">`+text+`</div>`;
        
        $(this).parent().prev().before(html);
        
        $(this).parent().prev().remove(); // 
        $(this).parent().remove();
        }   

    });

    $(document).on("click",".kk-column-add-task-tb-btn-cancel", function(){
        console.log("btn-cancel is clicked.")

        $(this).parent().prev().remove();
        $(this).parent().remove();
    });


    


    


    // Drag and drop manipulation - pure JS

    const columnTasks = document.querySelectorAll('.kk-column-task');
    const columns = document.querySelectorAll('.kk-column');    
    console.log(columnTasks);

    var dragTask = null;


    for(i = 0 ; i < columnTasks.length; i++){
        const task = columnTasks[i];
        
        task.addEventListener('dragstart', function(e){
            console.log("DragStart");
            dragTask = task;
            setTimeout(() => {
                task.style.display = "none";
            }, 0);
            // task.style.display = "none";
        });

        task.addEventListener('dragend', function(){
            console.log("DragEnd");
            task.style.display = "block";
            dragTask = null;
        });
    }

    for(j = 0 ; j < columns.length; j++){
        const column = columns[j];

        column.addEventListener('dragover', function(e){
            e.preventDefault();
        });

        column.addEventListener('dragenter', function(e){
            e.preventDefault();
        });

        column.addEventListener('drop', function(){
            console.log('DropStart')
            column.append(dragTask);
        });
    }


}); //Last line of code, document.ready


function drag(e){
    // e.dataTransfer.setData("Lolwa", e.target.id);
    console.log(e);
}