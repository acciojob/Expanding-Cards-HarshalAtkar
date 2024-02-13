let data=[
			{ Link : "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
			  Text : "Explore the world"
			},
			{ Link :"https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
			  Text : "Wild Forest"
			},
			{ Link :"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
			  Text : "City on Winter"
			},
			{ Link :"https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
			  Text : "Mountain Cloud"
			},
			{ Link :"https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
			  Text : "Sunny Beach"
			}
		];
		let container=document.querySelector(".container");
		let panel1=document.querySelector("#panel-1");
  
let num=1;		
data.forEach(item=>{
			
			let div=document.createElement("div");
			div.style.backgroundImage = `url(${item.Link})`;
			div.classList.add("panel");
			div.id=`panel-${num}`
			
	let text=document.createElement("p");
			text.classList.add("img-text")
			text.innerText=item.Text;
			
	div.appendChild(text);
			container.appendChild(div);
			num=num+1;
		});

 panel1.classList.add('active');
 // const panels = document.querySelectorAll('.panel');

 //        panels.forEach(panel => {
 //            panel.addEventListener('click', () => {
 //                // Remove 'active' class from all panels
 //                panels.forEach(p => p.classList.remove('active'));
 //                // Add 'active' class to the clicked panel
 //                panel.classList.add('active');
 //            });
 //        });
