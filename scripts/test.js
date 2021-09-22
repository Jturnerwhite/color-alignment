console.log("This code runs immediately when the file is loaded.");

Hooks.on("init", function() {
  console.log("This code runs once the Foundry VTT software begins its initialization workflow.");
});

Hooks.on("ready", function() {
  console.log("This code runs once core initialization is ready and game data is available.");
});

// let chartTemplate = {
//     type: 'pie',
//     data: {
//       labels: ["White", "Blue", "Black", "Red", "Green"],
//       datasets: [{
//         backgroundColor: ["#fbe792", "#017db2", "#681e73", "#e33b29", "#007c43"]
//       }]
//     },
//     options: {
// 		events: [],
// 		plugins: {   
// 			legend: {
// 				display: false
// 			},
// 			tooltip: {
// 				enabled: false
// 			},
//     		hover: {
// 				mode: null
// 			}
// 		}
// 	}
// };

// let instance = Object.assign({}, chartTemplate);
// instance.data.datasets[0].data = [1, 3, 4, 1, 1]; 

// new Chart(document.getElementById("pie-chart-1"), instance);