document.querySelector('#push').onclick = function (){
    
    if(document.querySelector('#newtask input').value.length == 0){
        
        alert("Plaese Enter a Task")
    }

    else{
        document.querySelector('#tasks').innerHTML
        += `
        
            <div class = "task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                
                </button>
            </div>
                
            `;

            var curreent_tasks = document.querySelectorAll(".delete");

            for(var i=0; i< curreent_tasks.length; i++){
                curreent_tasks[i].onclick = function(){
                    this.parentNode.remove();
                }
            }
        
            var tasks = document.querySelectorAll(".task");

            for(var i=0; i< tasks.length; i++){
                tasks[i].onclick = function(){
                    this.classList.toggle('completed');    
                }
            }

            document.querySelector("#newtask input").value = "";

    }



}