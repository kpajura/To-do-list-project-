
$( document ).ready(function() {

	var KanbanMain = new jKanban({
		element: "#mainKanban",
		gutter: "15px",
		widthBoard: "400px",
		responsivePercentage: false,
		dragItems: true,
		itemHandleOptions:{
			enabled: true,
		},
		boards: [
			{
				id: "_todo",
				title: "To Do",
				class: "info,good",
				dragTo: ["_working"],
				item: [
					{
						id: "_test_delete",
						title: "Do Shopping",
						drag: function(el, source) {
							console.log("START DRAG: " + el.dataset.eid);
						},
						dragend: function(el) {
							console.log("END DRAG: " + el.dataset.eid);
						},
						drop: function(el) {
							console.log("DROPPED: " + el.dataset.eid);
						}
					},
					{
						title: "Wash Rug",
						click: function(el) {
							alert("click");
						},
						class: ["peppe", "bello"]
					}
				]
			},

		],
		addItemButton: true,
		buttonContent: '+ Add Task',
		buttonClick: function(el, boardId) {
			console.log(el);
			console.log(boardId);
			var formItem = document.createElement("form");
			formItem.setAttribute("class", "itemform");
			formItem.innerHTML =
				'<div class="form-group"><input class="form-control" type="text" autofocus></div><div class="form-group"><button type="submit" class="btn btn-primary btn-xs pull-right">Add Task</button><button type="button" id="CancelBtn" class="btn btn-default btn-xs pull-right">Cancel</button></div>';

			KanbanMain.addForm(boardId, formItem);
			formItem.addEventListener("submit", function(e) {
				e.preventDefault();
				var text = e.target[0].value;
				KanbanMain.addElement(boardId, {
					title: text
				});
				formItem.parentNode.removeChild(formItem);
			});
			document.getElementById("CancelBtn").onclick = function() {
				formItem.parentNode.removeChild(formItem);
			};
		}
	});



	$("#addBoardStart").on('click', event => {

		$("#boardForm").toggle();
		$("#getBoardName").focus();

	});

	$("#cancelAddBoard").on('click', event => {

		$("#boardForm").hide();

	});



	var addNewBoard = document.getElementById("addBoard");
	addNewBoard.addEventListener("click", function() {


		var boardName = document.getElementById('getBoardName').value;

		var trimmedBoardName = boardName.replace(/ /g,'');

		if (boardName != "")
		{
			KanbanMain.addBoards([
				{
					id: trimmedBoardName + "_",
					title: boardName,
					class: trimmedBoardName + "_c,taskList" 
				}
			]);
		};

		var boardClass = "." + trimmedBoardName + "_c";
		var boardColor = document.getElementById("pickColor").value;		

		$(boardClass).css("background-color", boardColor);

		$("#boardForm").hide();

	});


	//try and change the colour of the _todo board

});



