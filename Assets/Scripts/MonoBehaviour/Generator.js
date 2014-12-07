var tile:GameObject;
var grass:GameObject;
var water:GameObject;
var sand:GameObject;
var wood:GameObject;

function CreateTerrain(pos:Vector3, sizeX:int, sizeZ:int)
{
	var sizeXF:float = sizeX;
	var sizeZF:float = sizeZ;
	
	for (var i:float = -sizeXF/2; i < sizeXF/2; i++)
	{
		for (var j:float = -sizeZF/2; j < sizeZF/2; j++)
		{
			tile.transform.name = "Tile [" + (i + sizeXF/2) + "," + (j + sizeZF/2) + "]";
			Instantiate(tile, pos + Vector3(i, 0, j), Quaternion.identity);
		}
	}
}

function CreateDecor(rotation:Vector3, posX:int, posZ:int, object:GameObject, bool:boolean)
{
	if (bool)
	Instantiate(object, Vector3(posX, object.transform.localScale.y/2, posZ), Quaternion.Euler(rotation.x, rotation.y, rotation.z));
	
	else
	Instantiate(object, Vector3(posX, 0, posZ), Quaternion.Euler(rotation.x, rotation.y, rotation.z));
}

function Start()
{
CreateDecor(Vector3(0, 0, 0), -11, -1, grass, true);
CreateDecor(Vector3(0, 0, 0), -10, -1, grass, true);
CreateDecor(Vector3(0, 0, 0), -9, -1, grass, true);
CreateDecor(Vector3(0, 0, 0), -9, -2, grass, true);
CreateDecor(Vector3(0, 0, 0), -9, -3, grass, true);
CreateDecor(Vector3(0, 0, 0), -10, -3, grass, true);
CreateDecor(Vector3(0, 0, 0), -10, -2, grass, true);
CreateDecor(Vector3(0, 0, 0), -11, -2, grass, true);
CreateDecor(Vector3(0, 0, 0), -11, -3, grass, true);
CreateDecor(Vector3(0, 0, 0), -10, -2, wood, false);


}