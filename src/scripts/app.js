$(document).ready(function () {


    $(document).on("click", ".kk-column-add-task", function () {

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
        $(".kk-column-add-task").css({ "display": "none" });

    });

    dragDrop();


    $(document).on("click", ".kk-column-add-task-tb-btn-add", function () {
        console.log(".kk-column-add-task-tb-btn-add is clicked");

        // console.log($(".kk-column-add-task-tb-ip"));
        var text = $(this).parent().prev().children('textarea').val();

        if (!text)
            alert("Please enter value or cancel")
        else {
            var html = `<div class="kk-column-task" draggable="true">` + text + `</div>`;

            // $(this).parent().prev().after(html);

            // console.log($(document).find(".kk-column-task:first"));
            $(document).find(".kk-column-task:first").before(html);

            $(".kk-column-add-task").css({ "display": "block" });
            $('.kk-column-add-task-tb, .kk-column-add-cancel-task-btns').css({
                "display": "none"
            })

            // $(this).parent().prev().remove(); // 
            // $(this).parent().remove();
        }

        dragDrop();


    });

    $(document).on("click", ".kk-column-add-task-tb-btn-cancel", function () {
        console.log("btn-cancel is clicked.")
        $(".kk-column-add-task").css({ "display": "block" });

        $('.kk-column-add-task-tb, .kk-column-add-cancel-task-btns').css({
            "display": "none"
        })

        dragDrop();
        
        // $(this).parent().prev().remove();
        // $(this).parent().remove();
    });
    // Drag and drop manipulation - pure JS
    


}); //Last line of code, document.ready

function dragDrop(){

    // var columnAndTasks = getFreshTaskList();

    var columnAndTasks = {
        'columns' : $('.kk-column'),
        'columnTasks' : $(".kk-column-task")
    }; 
    console.log(columnAndTasks);
    columnTasks = columnAndTasks.columnTasks;
    columns = columnAndTasks.columns;
    
    
    var dragTask = null;
    for (i = 0; i < columnTasks.length; i++) {
        const task = columnTasks[i];
        
        task.addEventListener('dragstart', function (e) {
            console.log("DragStart");
            dragTask = task;
            setTimeout(() => {
                task.style.display = "none";
            }, 0);
            // task.style.display = "none";
        });

        task.addEventListener('dragend', function () {
            console.log("DragEnd");
            task.style.display = "block";
            dragTask = null;
        });
    }

    for (j = 0; j < columns.length; j++) {
        const column = columns[j];

        column.addEventListener('dragover', function (e) {
            e.preventDefault();
        });

        column.addEventListener('dragenter', function (e) {
            e.preventDefault();
        });

        column.addEventListener('drop', function () {
            console.log('DropStart');
            column.append(dragTask);
        });
    }

}




var masterObj = {
    "NoOfColumns": 3,
    "columns": [
        {
            "id": "column1",
            "title": "columnBacklog",
            "columnTasks": [
                {
                    "id": "columnTask1",
                    "columnTaskText": "Task 1"
                },
                {
                    "id": "columnTask2",
                    "columnTaskText": "Task 2"
                }
            ]
        },
        {
            "id": "column2",
            "title": "columnToDo",
            "columnTasks": [
                {
                    "id": "columnTask12",
                    "columnTaskText": "Task 12"
                },
                {
                    "id": "columnTask23",
                    "columnTaskText": "Task 23"
                }
            ]
        },
        {
            "id": "column3",
            "title": "columnDoing",
            "columnTasks": [
                {
                    "id": "columnTask78",
                    "columnTaskText": "Task 78"
                },
                {
                    "id": "columnTask43",
                    "columnTaskText": "Task 43"
                }
            ]
        }

    ]
}