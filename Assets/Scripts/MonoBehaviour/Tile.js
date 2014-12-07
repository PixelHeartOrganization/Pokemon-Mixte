var tile:GameObject;
var block:GameObject;
var block2:GameObject;
var block3:GameObject;
var block4:GameObject;

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

function CreateDecor(rotation:Vector3, posX:int, posZ:int, object:GameObject)
{
	Instantiate(object, Vector3(posX, object.transform.localScale.y/2, posZ), Quaternion.Euler(rotation.x, rotation.y, rotation.z));
}

function Start()
{
	CreateTerrain(Vector3(0, 0, 0), 8, 16);
	CreateTerrain(Vector3(10, 0, 0), 8, 16);
	CreateDecor(Vector3(0, 90, 0), 0, 0, block);
	CreateDecor(Vector3(0, 0, 0), 1, 1, block);
	CreateDecor(Vector3(0, 0, 0), -1, 1, block);
	CreateDecor(Vector3(0, 90, 0), 0, 2, block);
	CreateDecor(Vector3(0, 0, 0), 1, 0, block);
	CreateDecor(Vector3(0, 0, 0), 1, 2, block);
	CreateDecor(Vector3(0, 0, 0), -1, 2, block);
	CreateDecor(Vector3(0, 0, 0), -1, 0, block);
	CreateDecor(Vector3(0, 90, 0), 3, 0, block);
	CreateDecor(Vector3(0, 90, 0), 2, 0, block);
	
	//Eau
	CreateDecor(Vector3(0, 0, 0), 3, -9, block4);
	CreateDecor(Vector3(0, 0, 0), 2, -9, block4);
	CreateDecor(Vector3(0, 0, 0), 1, -9, block4);
	CreateDecor(Vector3(0, 0, 0), 0, -9, block4);
	CreateDecor(Vector3(0, 0, 0), -1, -9, block4);
	CreateDecor(Vector3(0, 0, 0), -2, -9, block4);
	CreateDecor(Vector3(0, 0, 0), -3, -9, block4);
	CreateDecor(Vector3(0, 0, 0), -4, -9, block4);
	
	CreateDecor(Vector3(0, 0, 0), 13, -9, block4);
	CreateDecor(Vector3(0, 0, 0), 12, -9, block4);
	CreateDecor(Vector3(0, 0, 0), 11, -9, block4);
	CreateDecor(Vector3(0, 0, 0), 10, -9, block4);
	CreateDecor(Vector3(0, 0, 0), 9, -9, block4);
	CreateDecor(Vector3(0, 0, 0), 8, -9, block4);
	CreateDecor(Vector3(0, 0, 0), 7, -9, block4);
	CreateDecor(Vector3(0, 0, 0), 6, -9, block4);
	
	CreateDecor(Vector3(0, 0, 0), 13, 8, block4);
	CreateDecor(Vector3(0, 0, 0), 12, 8, block4);
	CreateDecor(Vector3(0, 0, 0), 11, 8, block4);
	CreateDecor(Vector3(0, 0, 0), 10, 8, block4);
	CreateDecor(Vector3(0, 0, 0), 9, 8, block4);
	CreateDecor(Vector3(0, 0, 0), 8, 8, block4);
	CreateDecor(Vector3(0, 0, 0), 7, 8, block4);
	CreateDecor(Vector3(0, 0, 0), 6, 8, block4);
	
	CreateDecor(Vector3(0, 0, 0), 3, 8, block4);
	CreateDecor(Vector3(0, 0, 0), 2, 8, block4);
	CreateDecor(Vector3(0, 0, 0), 1, 8, block4);
	CreateDecor(Vector3(0, 0, 0), 0, 8, block4);
	CreateDecor(Vector3(0, 0, 0), -1, 8, block4);
	CreateDecor(Vector3(0, 0, 0), -2, 8, block4);
	CreateDecor(Vector3(0, 0, 0), -3, 8, block4);
	CreateDecor(Vector3(0, 0, 0), -4, 8, block4);
	
	CreateDecor(Vector3(0, 0, 0), 14, -9, block4);
	CreateDecor(Vector3(0, 0, 0), 14, -8, block4);
	CreateDecor(Vector3(0, 0, 0), 14, -7, block4);
	CreateDecor(Vector3(0, 0, 0), 14, -6, block4);
	CreateDecor(Vector3(0, 0, 0), 14, -5, block4);
	CreateDecor(Vector3(0, 0, 0), 14, -4, block4);
	CreateDecor(Vector3(0, 0, 0), 14, -3, block4);
	CreateDecor(Vector3(0, 0, 0), 14, -2, block4);
	CreateDecor(Vector3(0, 0, 0), 14, -1, block4);
	CreateDecor(Vector3(0, 0, 0), 14, 0, block4);
	CreateDecor(Vector3(0, 0, 0), 14, 1, block4);
	CreateDecor(Vector3(0, 0, 0), 14, 2, block4);
	CreateDecor(Vector3(0, 0, 0), 14, 3, block4);
	CreateDecor(Vector3(0, 0, 0), 14, 4, block4);
	CreateDecor(Vector3(0, 0, 0), 14, 5, block4);
	CreateDecor(Vector3(0, 0, 0), 14, 6, block4);
	CreateDecor(Vector3(0, 0, 0), 14, 7, block4);
	CreateDecor(Vector3(0, 0, 0), 14, 8, block4);
	
	CreateDecor(Vector3(0, 0, 0), -5, -9, block4);
	CreateDecor(Vector3(0, 0, 0), -5, -8, block4);
	CreateDecor(Vector3(0, 0, 0), -5, -7, block4);
	CreateDecor(Vector3(0, 0, 0), -5, -6, block4);
	CreateDecor(Vector3(0, 0, 0), -5, -5, block4);
	CreateDecor(Vector3(0, 0, 0), -5, -4, block4);
	CreateDecor(Vector3(0, 0, 0), -5, -3, block4);
	CreateDecor(Vector3(0, 0, 0), -5, -2, block4);
	CreateDecor(Vector3(0, 0, 0), -5, -1, block4);
	CreateDecor(Vector3(0, 0, 0), -5, 0, block4);
	CreateDecor(Vector3(0, 0, 0), -5, 1, block4);
	CreateDecor(Vector3(0, 0, 0), -5, 2, block4);
	CreateDecor(Vector3(0, 0, 0), -5, 3, block4);
	CreateDecor(Vector3(0, 0, 0), -5, 4, block4);
	CreateDecor(Vector3(0, 0, 0), -5, 5, block4);
	CreateDecor(Vector3(0, 0, 0), -5, 6, block4);
	CreateDecor(Vector3(0, 0, 0), -5, 7, block4);
	CreateDecor(Vector3(0, 0, 0), -5, 8, block4);
	
	CreateDecor(Vector3(0, 0, 0), 4, -9, block4);
	CreateDecor(Vector3(0, 0, 0), 4, -8, block4);
	CreateDecor(Vector3(0, 0, 0), 4, -7, block4);
	CreateDecor(Vector3(0, 0, 0), 4, -6, block4);
	CreateDecor(Vector3(0, 0, 0), 4, -5, block4);
	CreateDecor(Vector3(0, 0, 0), 4, -4, block4);
	CreateDecor(Vector3(0, 0, 0), 4, -3, block4);
	CreateDecor(Vector3(0, 0, 0), 4, -2, block4);
	//CreateDecor(Vector3(0, 0, 0), 4, -1, block4);
	//CreateDecor(Vector3(0, 0, 0), 4, 0, block4);
	CreateDecor(Vector3(0, 0, 0), 4, 0, block2);
	CreateDecor(Vector3(0, 0, 0), 4, -1, block2);
	CreateDecor(Vector3(0, 0, 0), 4, 1, block4);
	CreateDecor(Vector3(0, 0, 0), 4, 2, block4);
	CreateDecor(Vector3(0, 0, 0), 4, 3, block4);
	CreateDecor(Vector3(0, 0, 0), 4, 4, block4);
	CreateDecor(Vector3(0, 0, 0), 4, 5, block4);
	CreateDecor(Vector3(0, 0, 0), 4, 6, block4);
	CreateDecor(Vector3(0, 0, 0), 4, 7, block4);
	CreateDecor(Vector3(0, 0, 0), 4, 8, block4);
	
	CreateDecor(Vector3(0, 0, 0), 5, -9, block4);
	CreateDecor(Vector3(0, 0, 0), 5, -8, block4);
	CreateDecor(Vector3(0, 0, 0), 5, -7, block4);
	CreateDecor(Vector3(0, 0, 0), 5, -6, block4);
	CreateDecor(Vector3(0, 0, 0), 5, -5, block4);
	CreateDecor(Vector3(0, 0, 0), 5, -4, block4);
	CreateDecor(Vector3(0, 0, 0), 5, -3, block4);
	CreateDecor(Vector3(0, 0, 0), 5, -2, block4);
	//CreateDecor(Vector3(0, 0, 0), 5, -1, block4);
	//CreateDecor(Vector3(0, 0, 0), 5, 0, block4);
	CreateDecor(Vector3(0, 0, 0), 5, 0, block2);
	CreateDecor(Vector3(0, 0, 0), 5, -1, block2);
	CreateDecor(Vector3(0, 0, 0), 5, 1, block4);
	CreateDecor(Vector3(0, 0, 0), 5, 2, block4);
	CreateDecor(Vector3(0, 0, 0), 5, 3, block4);
	CreateDecor(Vector3(0, 0, 0), 5, 4, block4);
	CreateDecor(Vector3(0, 0, 0), 5, 5, block4);
	CreateDecor(Vector3(0, 0, 0), 5, 6, block4);
	CreateDecor(Vector3(0, 0, 0), 5, 7, block4);
	CreateDecor(Vector3(0, 0, 0), 5, 8, block4);
}