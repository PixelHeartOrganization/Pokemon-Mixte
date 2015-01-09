var speed:float;
private var bool:boolean;
private var bool2:boolean;
private var bool3:boolean;
private var nameOfPerso:String = "";
private var test:String;

function Start ()
{
	Utility.OpenDialog();
		Utility.Dialog("Prof. Onorimi", Color.blue, "Bonjour, et bienvenue dans le monde des Pokemon.");yield WaitForSeconds(speed);
		Utility.Dialog("Prof. Onorimi", Color.blue, "Mon nom est Onorimi, mais tu peux m'appeler le prof. Pokemon.");yield WaitForSeconds(speed);
		Utility.Dialog("Prof. Onorimi", Color.blue, "Jeune homme, j'aimerais connaitre ton nom.");yield WaitForSeconds(speed);
		Utility.Dialog("Prof. Onorimi", Color.blue, "Comment t'appeles-tu ?");yield WaitForSeconds(speed);
	bool = true;
}

function Update ()
{
	if (bool2) Continue();
	if (bool3) Continue2();
}

function Continue ()
{
	Utility.Dialog("Prof. Onorimi", Color.blue, nameOfPerso + ", es-tu un garcon ou une fille ?");yield WaitForSeconds(speed);
}

function OnGUI ()
{
	if (bool)
	{
		if (!bool2)
		{
			nameOfPerso = GUI.TextField(Rect(20, 20, 100, 20), nameOfPerso);
			if (GUI.Button(Rect(125, 20, 100, 20), "Envoyer"))
			{
				if (nameOfPerso.Length < 10)
				{
					bool2 = true;
					bool3 = false;
					Continue2();
				}
				
				else
				print("Le nom est trop long");
			}
		}
		
		if (!bool3 && bool2)
		{
			if (GUI.Button(Rect(25, 20, 100, 20), "Garçon"))
			{
				bool3 = true;
			}
			
			if (GUI.Button(Rect(25, 42, 100, 20), "Fille"))
			{
				bool3 = true;
			}
		}
		
	}
}

function Continue2()
{
	Utility.Dialog("Prof. Onorimi", Color.blue, nameOfPerso + ", tu t'apprete a commencer une grande aventure !");
}