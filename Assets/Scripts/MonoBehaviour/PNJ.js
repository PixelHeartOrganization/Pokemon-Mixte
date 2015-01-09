private var bool:boolean;

function OnTriggerEnter (other:Collider)
{
	bool = true;
}

function OnTriggerExit (other:Collider)
{
	bool = false;
}

function Update ()
{
	if(bool)
	{
		if (Input.GetKey(KeyCode.A))
		{
			Utility.Dialog("", Color.red, "Vous trouvez une Pokeball !");
			Dest();
		}
	}
}

function Dest()
{
	yield WaitForSeconds(10);
	Destroy(this.gameObject);
}