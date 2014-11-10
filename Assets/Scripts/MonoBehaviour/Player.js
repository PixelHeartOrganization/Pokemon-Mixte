var speed:float;
var speedRun:float;
var speedRotate:float;
var gravity:float;
var Character:GameObject;

static var Vector:Vector3;
static var bool:boolean;

private var controller:CharacterController;
static var moveDirection:Vector3;
private var deltaTime:float;
private var characterContent;
private var walk:boolean;
private var run:boolean;

function Start () {
	controller = GetComponent("CharacterController");
	characterContent = transform.Find("Joueur");
}

function Update () {
	
	if (bool)
	{
		controller.transform.position = Vector;
	}
	
	else {
		deltaTime = Time.deltaTime;
		run = false;
	
		if(Input.GetKey(KeyCode.LeftShift))
		{
			moveDirection = Vector3(0, 0, Input.GetAxis("Vertical") * speedRun);
			run = true;
		}
		else
		{
			moveDirection = Vector3(0, 0, Input.GetAxis("Vertical") * speed);
			run = false;
		}
		
		moveDirection = Character.transform.TransformDirection(moveDirection);
		
		moveDirection.y -= gravity;
		
		controller.Move(moveDirection * deltaTime);
	
		Character.transform.Rotate(Vector3(0, Input.GetAxis("Horizontal") * speedRotate * deltaTime));
	}
}