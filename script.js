var accordion = document.getElementsByClassName("question");

for (i=0; i < accordion.length; i++)
{
	accordion[i].addEventListener("click", function()
	{
		if(this.classList.contains("question_active"))
		{
			this.classList.toggle("question_active");
			this.classList.add("question_closed");
		}
		else
		{
			for(i=0; i< accordion.length; i++)
			{
				if(accordion[i].classList.contains("question_active"))
				{
					accordion[i].classList.remove("question_active");	
					accordion[i].classList.add("question_closed");		
				}
			}
			this.classList.toggle("question_active");
			this.classList.remove("question_closed");
		}
	});
}